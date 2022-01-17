export type BillingInfoType = {
  cardholderName?: string | null;
  cardNumber?: string | null;
  securityCode?: string | null;
  expirationDate?: {
    month?: string | null;
    year?: number | null;
  };
};
