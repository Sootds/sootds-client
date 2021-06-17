import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { ChakraThemeProviderTest } from '../../shared/components';

describe('<Home />', (): void => {
  it('should render a <div>', (): void => {
    const component = render(<Home />, {
      wrapper: ChakraThemeProviderTest
    });
    expect(component.container.querySelector('div')).toBeInTheDocument();
  });
});
