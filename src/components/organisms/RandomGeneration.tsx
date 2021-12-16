import React, {FC} from 'react';
import SelectCustom from "../molecules/SelectCustom";
import Styled from "styled-components";
import Label from "../atoms/Label";
import CheckboxCustom from "../atoms/Checkbox";
import {Box, Button} from "@material-ui/core";
import {generatePassword} from "../../coomon/GeneratePassword";
import Tooltip from "../atoms/Tooltip";

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

const RandomGeneration: FC = (props) => {
    const lengthPasswords = [4, 8, 16, 32]
    const [checked, setChecked] = React.useState(true);
    const [lengthPass, setLength] = React.useState(0);
    const [password, setPassword] = React.useState('');
    const [copy, setsetCopy] = React.useState(false);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const replicate = () => {
        navigator.clipboard.writeText(password)
        setsetCopy(true)
    };

    const generate = () => {
        const gen = generatePassword({characterAmount: lengthPass, includeNumbers: checked})
        console.log('ssss', lengthPass )

        setPassword(gen)
    }

    return (
        <Container>
            <Button onClick={generate} className='run' color='primary'>run</Button>
            <SelectCustom label='Длинна пароля:' lengthPasswords={lengthPasswords} onChange={setLength} />
            <CheckboxCustom checked={checked} handleChange={handleChange} label='Использовать цифры' />
            <Box className='m-top'>
                <Label width='67%' color='inherit'>{password}</Label>
                {password && <Tooltip label={copy ? 'Скопировано' : 'Копировать'}>
                    <Button className='m-top' size='small' onClick={replicate}
                            onBlur={() => setsetCopy(false)}
                            color='primary'>Копировать
                    </Button>
                </Tooltip>}
            </Box>
        </Container>
    );
};

export default RandomGeneration;