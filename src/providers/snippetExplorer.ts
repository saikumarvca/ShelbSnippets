import * as vscode from 'vscode';
import { AnalyticsService } from '../services/analytics';

export class SnippetItem extends vscode.TreeItem {
  constructor(public readonly label: string, public readonly snippet: vscode.SnippetString | null, public readonly collapsibleState: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.None) {
    super(label, collapsibleState);
    this.contextValue = 'snippetItem';
  }
}

export class SnippetExplorer implements vscode.TreeDataProvider<SnippetItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<SnippetItem | undefined | void> = new vscode.EventEmitter<SnippetItem | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<SnippetItem | undefined | void> = this._onDidChangeTreeData.event;

  private analytics: AnalyticsService;

  constructor(_context: vscode.ExtensionContext, analytics: AnalyticsService) {
    this.analytics = analytics;
  }

  getTreeItem(element: SnippetItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    if (element.snippet) {
      element.command = { command: 'shelb.openSnippet', title: 'Insert Snippet', arguments: [element] };
    }
    return element;
  }

  async getChildren(): Promise<SnippetItem[]> {
    // Provide a short curated list of snippet entries and categories
    const items: SnippetItem[] = [];
    items.push(new SnippetItem('React: component (sre)', new vscode.SnippetString("export default function \\${1:Component}() {\n  return <div>\\${0}</div>\n}\n")));
    items.push(new SnippetItem('Next.js: app route (snx)', new vscode.SnippetString("export default function Page() { return <div>Next App Router</div> }\n")));
    items.push(new SnippetItem('Tauri: invoke handler (sta)', new vscode.SnippetString("#[tauri::command]\nfn greet(name: &str) -> String { format!(\"Hello {}\", name) }\n")));
    items.push(new SnippetItem('Prisma: model (spr)', new vscode.SnippetString("model ${1:Model} {\n  id String @id @default(cuid())\n  createdAt DateTime @default(now())\n}\n")));
    return items;
  }

  async openSnippet(item: SnippetItem) {
    if (!item.snippet) return;
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('Open a file to insert a snippet.');
      return;
    }
    editor.insertSnippet(item.snippet, editor.selection.start);
    this.analytics.trackSnippetUsage(item.label);
  }
}
