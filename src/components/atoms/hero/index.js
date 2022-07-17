import styled from 'styled-components';

export const Hero = styled.h1`
  ${(props) => ({
    ...props.theme.hero,
    ...props.theme.hero[props.as],
  })};

`;