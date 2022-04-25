export as namespace JSX;

export interface IntrinsicElements {
  "lottie-player": any;
  "dotlottie-player": any;
}

declare global {
  interface paddle {
    Setup: any;
    Checkout: {
      open: ({
        method,
        product,
        allowQuantity,
        disableLogout,
        frameTarget,
        frameInitialHeight,
        frameStyle,
      }: {
        method?: string;
        product?: number;
        allowQuantity?: boolean;
        disableLogout?: boolean;
        frameTarget?: string;
        frameInitialHeight?: number;
        frameStyle?: string;
      }) => void;
    };
  }
  declare const Paddle: paddle;
  interface Window {
    CanvasRenderer: any;
  }
}
