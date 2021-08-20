export type PersonalInfoType = {
  name?: string | null;
  dateOfBirth?: {
    day?: number | null;
    month?: number | null;
    year?: number | null;
  };
  address?: string | null;
  city?: string;
  country_id?: number | null;
  state?: string | null;
  code?: string | null;
};
