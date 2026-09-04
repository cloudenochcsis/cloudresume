import fs from 'fs';
import path from 'path';
import { metadata } from '../app/layout';

const publicPath = (...segments: string[]) => path.join(process.cwd(), 'public', ...segments);

describe('public metadata', () => {
  it('uses cloud, DevOps, agentic AI, Python, and automation positioning', () => {
    const manifest = JSON.parse(fs.readFileSync(publicPath('manifest.json'), 'utf8'));

    expect(metadata.title).toContain('DevOps');
    expect(metadata.description).not.toContain('Information Security');
    expect(manifest.name).toBe('Enoch - Cloud DevOps | Agentic AI | Python Automation');
    expect(manifest.name).not.toContain('Information Security');
  });
});
