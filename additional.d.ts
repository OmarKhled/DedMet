export as namespace JSX;

export interface IntrinsicElements {
  "lottie-player": any;
  "dotlottie-player": any;
}

declare global {
  declare const paylib: any;
  interface Window {
    CanvasRenderer: any;
  }
}
