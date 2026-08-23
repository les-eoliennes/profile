declare global {
  interface Window {
    /** 全局委托监听只绑一次的标记，避免 ClientRouter 导航后重复绑定 */
    __behaviorsBound?: boolean;
  }
}

export {};
