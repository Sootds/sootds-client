import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';
import { ChakraThemeProviderTest } from '../../../shared/components';

describe('<Layout />', (): void => {
  it('should render a <div>', (): void => {
    const component = render(
      <Layout>
        <p data-testid='p'>hello</p>
      </Layout>,
      {
        wrapper: ChakraThemeProviderTest
      }
    );
    expect(component.getByTestId('p').textContent).toBe('hello');
  });
});
