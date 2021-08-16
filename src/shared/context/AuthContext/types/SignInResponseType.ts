export type SignInResponseType = {
  message: string;
  id_token: string;
  access_token: string;
  first_sign_in?: boolean;
};
