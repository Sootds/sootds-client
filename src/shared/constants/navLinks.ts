// TO DO: add `isPrivate` to each nav links

export type NavLink = {
  pageRoute: string;
  pageName: string;
  showIfAuth: boolean;
};

export const navLinks: Array<NavLink> = [
  {
    pageRoute: '/',
    pageName: 'Home',
    showIfAuth: true,
  },
  {
    pageRoute: '/signin',
    pageName: 'Sign In',
    showIfAuth: false,
  },
  {
    pageRoute: '/signup',
    pageName: 'Sign Up',
    showIfAuth: false,
  }
];
