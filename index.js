/** 
<div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
*/

const vNode = {
  type: 'div',
  // text: '123456',
  child: [
    { type: 'p', text: '1' }
    { type: 'p', text: '2' },
    { type: 'p', text: '3' },
  ]
}

function render(vNode, container) {
  // TODO: 根据 vNode 创建 DOM
  // 1. 多叉树的遍历
  // 2. 怎么创建
}