import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './SignUp';
import { ChakraThemeProviderTest } from '../../shared/components';

describe('<SignUp />', (): void => {
  it('should render a <div>', (): void => {
    const component = render(<SignUp />, {
      wrapper: ChakraThemeProviderTest
    });
    expect(component.getByText('Sign Up Now')).toBeInTheDocument();
  });
});
