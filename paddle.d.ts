export as namespace JSX;

declare global {
  interface SetupEventCallbackData {
    event: PaddleEvent;
    eventData: {
      payment_method?: string;
      available_payment_methods?: string;
      available_payment_methods_count?: number;
      checkout: {
        recurring_prices: {
          customer: Customer;
          interval: {
            type: string;
            length: number;
          };
        };
        prices: {
          customer: Customer;
        };
      };
      product: { id: number; name: string; quantity: number };
      user: { id: string; email: string; country: string };
    };
    checkoutData: {
      "paddlejs-version": "2.0.9";
      apple_pay_enabled: string;
      display_mode: string;
      guest_email: string;
      is_popup: string;
      method: string;
      paddle_js: string;
      parentURL: string;
      parent_url: string;
      passthrough: string;
      popup: string;
      product: string;
      referring_domain: string;
    };
  }
  interface paddle {
    Checkout: {
      open: (options: {
        product: string | number;
        title?: string;
        message?: string;
        coupon?: string;
        email?: string;
        marketingConsent?: "0" | "1";
        country?: string;
        postcode?: string;
        allowQuantity?: boolean;
        quantity?: number;
        disableLogout?: boolean;
        locale?: string;
        passthrough?: string;
        referring_domain?: string;
        success?: string;
        successCallback?: string;
        closeCallback?: string;
        loadCallback?: string;
        upsell?: string | number;
        upsellTitle?: string;
        upsellText?: string;
        upsellAction?: string;
        upsellCoupon?: string;
        upsellPassthrough?: string;
        override?: string;
        displayModeTheme?: string;
        // Inline checkout
        method?: string;
        frameTarget?: string;
        frameInitialHeight?: number;
        frameStyle?: string;
      }) => void;
    };
    Environment: {
      set: (env: string) => void;
    };
    Setup: (options: {
      vendor: number;
      eventCallback: (data: SetupEventCallbackData) => void;
    }) => void;
  }
}

export default paddle;
