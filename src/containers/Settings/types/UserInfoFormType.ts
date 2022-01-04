export type UserInfoFormType = {
  username: string;
  email: string;
  name: string;
  birthdate: string;
  address: {
    name: string;
    city: string;
    state: string;
    code: string;
    countryId: number;
  };
};
