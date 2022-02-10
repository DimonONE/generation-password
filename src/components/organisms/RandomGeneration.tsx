import React, {FC} from 'react';
import SelectCustom from "../molecules/SelectCustom";
import Styled from "styled-components";
import Label from "../atoms/Label";
import CheckboxCustom from "../atoms/Checkbox";
import {Box, Button} from "@material-ui/core";
import {generatePassword} from "../../coomon/GeneratePassword";
import Tooltip from "../atoms/Tooltip";

import { observer } from "mobx-react-lite";
import GeneratePassword from "../../store/GeneratePassword";

const Container = Styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: max-content;
    
    margin: 100px auto;
    padding: 10px 20px;

    background: #181818;
    color: #fff;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 130px;
    
    .run {
        position: absolute;
        width: 35%;
        right: 0;
        top: 0;
        height: 100%;
        border-top-right-radius: 130px;
    }
    
    .m-top {
        margin-top: 10px;
    }
`

const RandomGeneration: FC = observer( (props) => {
    const [checked, setChecked] = React.useState(true);
    const [copy, setCopy] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const replicate = () => {
        navigator.clipboard.writeText(GeneratePassword.passwords)
        setCopy(true)
    };

    const generate = () => {
        const gen = generatePassword({characterAmount: GeneratePassword.lengthPassword, includeNumbers: checked})
        GeneratePassword.save(gen)
    }

    return (
        <Container>
            <Button onClick={generate} className='run' color='primary'>run</Button>
            <SelectCustom label='Длинна пароля:' lengthPasswords={GeneratePassword.possiblePassLength} onChange={ (lgt: number) =>  GeneratePassword.saveLength(lgt)} />
            <CheckboxCustom checked={checked} handleChange={handleChange} label='Использовать цифры' />

            <Box className='m-top'>
                <Label width='67%' color='inherit'>{GeneratePassword.passwords}</Label>
                {GeneratePassword.passwords && <Tooltip label={copy ? 'Скопировано' : 'Копировать'}>
                    <Button className='m-top' size='small' onClick={replicate}
                            onBlur={() => setCopy(false)}
                            color='primary'>Копировать
                    </Button>
                </Tooltip>}
            </Box>
        </Container>
    );
});

export default RandomGeneration;