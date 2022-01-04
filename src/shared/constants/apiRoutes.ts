export const POST_AUTH_SIGNIN = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/signin`;
export const POST_AUTH_REFRESH_TOKEN = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/refresh-token`;
export const POST_AUTH_SIGNOUT = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/signout`;
export const POST_AUTH_FORGOT_PASSWORD = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/forgot-password`;
export const POST_AUTH_NEW_PASSWORD = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/confirm-new-password`;

export const POST_USER_INFO = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/users`;
export const PUT_UPDATE_USER_INFO = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/users`;

export const GET_VENDORS_STORES_GET_STORE = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/vendors/stores/?url_name=`;
export const POST_VENDORS_STORES_CREATE_STORE = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/vendors/stores`;

export const GET_COUNTRIES = `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/utils/countries`;
