import { visit } from 'unist-util-visit';

export default function rehypeWrapTables() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'table' && parent && Array.isArray(parent.children)) {
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-wrapper'] },
          children: [node],
        };

        parent.children[index] = wrapper;
      }
    });
  };
}
