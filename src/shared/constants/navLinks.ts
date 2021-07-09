// TO DO: add `isPrivate` to each nav links

export type NavLink = {
  pageRoute: string;
  pageName: string;
  showIfAuth: boolean;
  showIfNotAuth: boolean;
};

export const navLinks: Array<NavLink> = [
  {
    pageRoute: '/',
    pageName: 'Home',
    showIfAuth: true,
    showIfNotAuth: true
  },
  {
    pageRoute: '/signin',
    pageName: 'Sign In',
    showIfAuth: false,
    showIfNotAuth: true
  },
  {
    pageRoute: '/signup',
    pageName: 'Sign Up',
    showIfAuth: false,
    showIfNotAuth: true
  },
  {
    pageRoute: '/signout',
    pageName: 'Sign Out',
    showIfAuth: true,
    showIfNotAuth: false
  }
];
