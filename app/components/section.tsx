import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';

const Section = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ style, ...props }, ref: Ref<HTMLDivElement>) => (
    <StyledSection ref={ref} style={style} {...props} />
  )
);

const StyledSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: background-color 0.5s;
`;

export default Section;
