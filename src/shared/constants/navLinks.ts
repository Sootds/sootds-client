// SHARED IMPORTS
import { NavLinkType } from '../types';
import * as pageRoutes from '../constants/pageRoutes';

export const navLinks: Array<NavLinkType> = [
  {
    pageRoute: pageRoutes.HOME_PAGE,
    pageName: 'Home',
    showIfAuth: true,
    showIfNotAuth: true
  },
  {
    pageRoute: pageRoutes.VENDORS_PAGE,
    pageName: 'Vendors',
    showIfAuth: true,
    showIfNotAuth: true
  },
  {
    pageRoute: pageRoutes.SETTINGS_PAGE,
    pageName: 'Settings',
    showIfAuth: true,
    showIfNotAuth: false
  },
  {
    pageRoute: pageRoutes.SIGNIN_PAGE,
    pageName: 'Sign In',
    showIfAuth: false,
    showIfNotAuth: true
  },
  {
    pageRoute: pageRoutes.SIGNUP_PAGE,
    pageName: 'Sign Up',
    showIfAuth: false,
    showIfNotAuth: true
  },
  {
    pageRoute: pageRoutes.SIGNOUT_PAGE,
    pageName: 'Sign Out',
    showIfAuth: true,
    showIfNotAuth: false
  }
];
