import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  padding: 5% 0;
  margin: 0 20px;
  z-index: 105;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  .form {
    position: relative;
    z-index: 1;
    background: #fff;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

    @media (min-width: 768px) {
      max-width: 360px;
      padding: 45px;
    }

    input {
      font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
    }

    button {
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      background: #0090ce;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #fff;
      font-size: 14px;
      transition: all 0.3 ease;
      cursor: pointer;
    }
    
    .message {
      margin: 15px 0 0;
      color: #b3b3b3;
      font-size: 12px;
    }
  }
`;