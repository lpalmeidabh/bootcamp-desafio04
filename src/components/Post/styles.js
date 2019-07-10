import styled from 'styled-components';

export const StyledPost = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    color: #9a9a9a;
    line-height: 14px;

    span:first-child {
      font-size: 14px;
      color: #4a4a4a;
      font-weight: bold;
      margin-bottom: 3px;
    }
  }
`;

export const StyledPostContent = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #3e3e3e;
`;

export const StyledPostComments = styled.div`
  margin-top: 20px;

  hr {
    height: 1px;
    background-color: #eee;
    width: 100%;
  }

  div {
    margin-top: 20px;
    display: flex;
    flex: 1;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    p {
      background-color: #eee;
      border-radius: 14px;
      margin-left: 10px;
      padding: 10px;
      font-size: 14px;
      color: #4a4a4a;
      margin-bottom: 3px;
    }
  }
`;
