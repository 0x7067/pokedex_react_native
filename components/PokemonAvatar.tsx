import styled, {css} from 'styled-components/native';

//@TODO: Create UI components
export const PokemonAvatar = styled.Image<{size: number}>`
  ${props => {
    const size = props.size * 0.8;
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }}
`;
