import React, {FC} from 'react';
import Styled from "styled-components";

const LabelCustom = Styled.span.attrs((props: IProps) => ({
    color: props.color,
    width: props.width,
}))`
  display: flex;
  width: ${props => props.width};
  align-items: center;
    color: ${props => props.color};
  word-break: break-word;
`

const Label: FC<IProps> = ({color, children, width= 'auto'}) => {
    return (
        <LabelCustom width={width} color={color}>
            {children}
        </LabelCustom>
    );
};

interface IProps {
    color: string
    width?: string
}

export default Label;