import fs from 'fs';
import path from 'path';

type TreeNode = {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: TreeNode[];
};

export function getDirectoryTree(dirPath: string, basePath = dirPath): TreeNode[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  return entries.map((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.relative(basePath, fullPath);
    if (entry.isDirectory()) {
      return {
        name: entry.name,
        path: relPath,
        type: 'directory',
        children: getDirectoryTree(fullPath, basePath),
      };
    } else {
      return {
        name: entry.name,
        path: relPath,
        type: 'file',
      };
    }
  });
}
