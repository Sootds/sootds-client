import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';
import { ChakraThemeProviderTest } from '../../shared/components';

describe('<SignIn />', (): void => {
  it('should render a <div>', (): void => {
    const component = render(<SignIn />, {
      wrapper: ChakraThemeProviderTest
    });
    expect(component.getByText('Sign In Now')).toBeInTheDocument();
  });
});
