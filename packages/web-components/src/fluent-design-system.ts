export const FluentDesignSystem = {
  prefix: 'fluent',
  shadowRootMode: 'open',
  registry: customElements,
};

Object.defineProperty(FluentDesignSystem, 'shadowRootMode', { configurable: false, writable: false, enumerable: true });
Object.defineProperty(FluentDesignSystem, 'registry', { configurable: false, writable: false, enumerable: true });
