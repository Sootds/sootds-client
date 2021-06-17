import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { ChakraThemeProviderTest } from '../../../shared/components';
import { navLinks } from '../../../shared/constants';

describe('<Navbar />', (): void => {
  it('should render a <nav>', (): void => {
    const component = render(<Navbar />, {
      wrapper: ChakraThemeProviderTest
    });
    expect(component.container.querySelector('nav')).toBeInTheDocument();
  });

  it('should render nav items from `navLinks`', (): void => {
    const component = render(<Navbar />, {
      wrapper: ChakraThemeProviderTest
    });
    
    for (let i = 0; i < navLinks.length; i++) {
      expect(component.getByText(navLinks[i].pageName)).toBeInTheDocument();
    }
  });
});
