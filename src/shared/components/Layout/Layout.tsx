import React, { ReactNode, FunctionComponent, memo } from 'react';
import styled from 'styled-components';

// Types
type Props = {
  children?: ReactNode;
};

// Component
const Layout: FunctionComponent<Props> = (props: Props) => (
  <StyledLayout>
    {props.children}
  </StyledLayout>
);

// Styles
const StyledLayout = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;
`;

// Display Names
Layout.displayName = Layout.name;
StyledLayout.displayName = StyledLayout.name;

export default memo(Layout);
