import * as vscode from 'vscode';

const EVENTS_KEY = 'shelb.analytics.events';
const USAGE_KEY = 'shelb.snippet.usage';
const MAX_EVENTS = 500;

export interface AnalyticsEvent {
  name: string;
  payload?: Record<string, unknown>;
  time: string;
}

export class AnalyticsService {
  private ctx: vscode.ExtensionContext;

  constructor(ctx: vscode.ExtensionContext) {
    this.ctx = ctx;
  }

  trackEvent(name: string, payload?: Record<string, unknown>): void {
    const events = this.ctx.globalState.get<AnalyticsEvent[]>(EVENTS_KEY, []);
    events.push({ name, payload, time: new Date().toISOString() });
    // Keep only the most recent MAX_EVENTS to prevent unbounded growth
    const trimmed = events.length > MAX_EVENTS ? events.slice(-MAX_EVENTS) : events;
    this.ctx.globalState.update(EVENTS_KEY, trimmed);
  }

  trackSnippetUsage(snippetName: string): void {
    const map = this.ctx.globalState.get<Record<string, number>>(USAGE_KEY, {});
    map[snippetName] = (map[snippetName] ?? 0) + 1;
    this.ctx.globalState.update(USAGE_KEY, map);
  }

  getUsage(): Record<string, number> {
    return this.ctx.globalState.get<Record<string, number>>(USAGE_KEY, {});
  }

  getEvents(): AnalyticsEvent[] {
    return this.ctx.globalState.get<AnalyticsEvent[]>(EVENTS_KEY, []);
  }

  clearEvents(): void {
    this.ctx.globalState.update(EVENTS_KEY, []);
  }
}
