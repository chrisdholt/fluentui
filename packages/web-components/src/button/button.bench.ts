import './button.definition.js';

const itemRenderer = () => {
  const btn = document.createElement('fluent-button');
  btn.appendChild(document.createTextNode('Fluent button'));
  return btn;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
