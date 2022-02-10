import React, {FC, SetStateAction, useEffect, useState} from 'react';
import {FormControl, MenuItem, Select} from "@material-ui/core";
import Styled from 'styled-components';
import Label from "../atoms/Label";



const FormControlCustom = Styled(FormControl)`
    .select {
        justify-content: center;
        width: 40px;
        margin-left: 10px;
        color: inherit;
        
        .MuiSelect-select.MuiSelect-select{
           padding-right: 0;
           text-align: center;
        }
      
        .MuiSelect-icon {
            display: none;
        }

      &.MuiInputBase-input{
        padding: 0;
      }
    }
    
    &.MuiFormControl-root {
        flex-direction: initial;
    }
`

const SelectCustom: FC<IProps> = ({className, label, lengthPasswords, onChange}) => {
    const [num, setNumber] = React.useState(lengthPasswords[0]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => onChange(num),[num])

    const handleChange =(event: any): void => {
        setNumber(event.target.value);
    };

    return (
        <FormControlCustom className={className} fullWidth>
            <Label color='inherit'>{label}</Label>
            <Select
                className='select'
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                value={num}
                onChange={handleChange}
            >
                {lengthPasswords.map((num) => (<MenuItem key={num} value={num}>{num}</MenuItem>))}
            </Select>
        </FormControlCustom>
    );
};

interface IProps {
    className?: string
    label: string
    lengthPasswords: Array<number>
    onChange: (lengthPassword: number) => void
}


export default SelectCustom;