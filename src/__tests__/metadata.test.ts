import fs from 'fs';
import path from 'path';

const publicPath = (...segments: string[]) => path.join(process.cwd(), 'public', ...segments);

describe('public metadata', () => {
  it('uses cloud, DevOps, agentic AI, Python, and automation positioning', () => {
    const indexHtml = fs.readFileSync(publicPath('index.html'), 'utf8');
    const manifest = JSON.parse(fs.readFileSync(publicPath('manifest.json'), 'utf8'));

    expect(indexHtml).toContain('Cloud DevOps | Agentic AI | Python Automation');
    expect(indexHtml).not.toContain('Information Security');
    expect(manifest.name).toBe('Enoch - Cloud DevOps | Agentic AI | Python Automation');
    expect(manifest.name).not.toContain('Information Security');
  });
});
