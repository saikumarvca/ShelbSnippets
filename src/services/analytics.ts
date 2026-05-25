import * as vscode from 'vscode';

export class AnalyticsService {
  private ctx: vscode.ExtensionContext;
  constructor(ctx: vscode.ExtensionContext) {
    this.ctx = ctx;
  }

  trackEvent(name: string, payload?: any) {
    const key = 'shelb.analytics.events';
    const events = this.ctx.globalState.get<any[]>(key, []);
    events.push({ name, payload, time: new Date().toISOString() });
    this.ctx.globalState.update(key, events);
  }

  trackSnippetUsage(snippetName: string) {
    const key = 'shelb.snippet.usage';
    const map = this.ctx.globalState.get<Record<string, number>>(key, {});
    map[snippetName] = (map[snippetName] || 0) + 1;
    this.ctx.globalState.update(key, map);
  }

  getUsage() {
    return this.ctx.globalState.get('shelb.snippet.usage', {});
  }
}
