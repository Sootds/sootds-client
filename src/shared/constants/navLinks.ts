// TO DO: add `isPrivate` to each nav links

export type NavLink = {
  pageRoute: string;
  pageName: string;
};

export const navLinks: Array<NavLink> = [
  {
    pageRoute: '/',
    pageName: 'Home'
  },
  {
    pageRoute: '/signin',
    pageName: 'Sign In'
  },
  {
    pageRoute: '/signup',
    pageName: 'Sign Up'
  }
];
