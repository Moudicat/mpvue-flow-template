declare var wx: {
  getStorageSync(key: string): any,
  setStorageSync(key: string, data: any): void,
  login(args: any): void,
  getUserInfo(args: any): void,
  navigateTo(args: any): void,
  request(args: Object): void,
  [x: string]: any
};

declare var global: {
  global: any,
  Object: any,
  clearTimeout: any,
  [x: string]: any
};

declare var process: any;
