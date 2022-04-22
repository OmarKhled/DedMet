export as namespace JSX;

export interface IntrinsicElements {
  "lottie-player": any;
  "dotlottie-player": any;
}

declare global {
  interface Window {
    CanvasRenderer: any;
  }
}
