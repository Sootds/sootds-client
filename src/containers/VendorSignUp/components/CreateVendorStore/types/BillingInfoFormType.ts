export type BillingInfoFormType = {
  cardholderName: string;
  cardNumber: string;
  securityCode: string;
  expirationDate: {
    month: string;
    year: number;
  };
};
