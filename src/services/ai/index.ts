export interface AIProvider {
  name: string;
  generatePrompt(prompt: string): Promise<string>;
}

export class OpenAIProvider implements AIProvider {
  name = 'openai';
  async generatePrompt(prompt: string) {
    // interface only — do not call APIs
    return `# prompt for OpenAI\n${prompt}`;
  }
}

export class OllamaProvider implements AIProvider {
  name = 'ollama';
  async generatePrompt(prompt: string) {
    return `# prompt for Ollama\n${prompt}`;
  }
}
