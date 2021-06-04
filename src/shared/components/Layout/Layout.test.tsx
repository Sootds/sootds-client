import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('<Layout />', (): void => {
  it('should render a <div>', (): void => {
    const component = render(<Layout />);
    expect(component.container.querySelector('div')).toBeInTheDocument();
  });

  it('should render a "hello"', (): void => {
    const component = render(
      <Layout>
        <p>hello</p>
      </Layout>
    );
    expect(component.container.firstChild.textContent).toBe('hello');
  });
});
