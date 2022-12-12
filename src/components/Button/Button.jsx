import React from 'react';
import styled from 'styled-components';

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
`;

function Button({ type, variant, className, id, onClick, size, children }) {
  return (
    <ButtonComponent
      type={type ? type : 'button'}
      variant={variant}
      className={className ? `btn-component ${className}` : 'btn-component'}
      id={id}
      onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}

export default Button;
