import React, {FC, SetStateAction} from 'react';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import Styled from 'styled-components';

const FormControl = Styled(FormControlLabel)`
  .MuiCheckbox-root {
    color: green;
  }
`

const CheckboxCustom: FC<IProps> = ({label, handleChange, checked }) => (
    <FormControl control={<Checkbox checked={checked} onChange={handleChange} />} label={label} />
);


interface IProps {
    label: string
    checked: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    defaultChecked?: boolean
}

export default CheckboxCustom;