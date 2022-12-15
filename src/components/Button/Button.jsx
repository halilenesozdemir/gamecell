import React from 'react';
import styled from 'styled-components';
/* 
const ButtonComponent = styled.button`
  width: 185px;
  height: 40px;
  padding: 0 0.5px;
  font-family: GreycliffCF;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.57px;
  text-align: center;
  color: ;}
`; */

function Button({ type, className, id, onClick, children }) {
  return (
    <button
      /*       style={{
        backgroundColor: 'red',
      }} */
      type={type ? type : 'button'}
      className={`bg-success text-danger ${className} `}
      id={id}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
