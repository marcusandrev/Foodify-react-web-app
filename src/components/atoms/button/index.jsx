import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  background-color: ${(props) => (props.color ? `color:${props.color};` : '')};
  border: none;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: none;
  padding: 0.8vw 1vw;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = ({ ...args }) => {
  return <ButtonStyle {...args}></ButtonStyle>;
};
