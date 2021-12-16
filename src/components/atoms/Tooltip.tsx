import React, { FC } from 'react';
import Styled from "styled-components";

interface ITooltip {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const Wrapper = Styled.div.attrs(props => props)`
  --subline-rem: 5;

  display: flex;
  width: max-content;
  align-items: center;
  height: max-content;
  position: relative;
  
  &:hover {
    .tip{
      opacity: 1;
    }
  }
  
  .tip {
    opacity: 0;
    transition: .3s all;
    position: absolute;
    left: 153%;
    transform: translateX(-50%);
    color: #bfbfbf;
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      transform: translateX(-50%);
    }
  }
`

const Tooltip: FC<ITooltip> = ({ label, children, className }) => (
  <Wrapper className={'wrapper'}>
    <div className='tip'>{label}</div>
    {children}
  </Wrapper>
);

Tooltip.defaultProps = {
  className: '',
};

export default Tooltip;
