import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #4a90e2;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  min-width: 980px;
  img {
    margin-left: 42px;
  }

  div {
    padding-right: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 15px;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      margin-right: 8px;
    }
  }
`;
