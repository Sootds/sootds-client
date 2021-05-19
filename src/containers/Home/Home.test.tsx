import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('<Home />', (): void => {
  it('should render a <div>', (): void => {
    const component = render(<Home />);
    expect(component.container.querySelector('div')).toBeInTheDocument();
  });

  it('should render "Hello!"', (): void => {
    const component = render(<Home />);
    expect(component.getByText('Hello!')).toBeInTheDocument();
  });
});
