import { styled } from 'common';

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 2.1vw, 16px);

  height: 100%;
  padding: ${({ theme }) => theme.spacing(5, 0, 8)};
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
