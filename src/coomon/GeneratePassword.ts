function arrayFromLowToHigh(low: number, high: number) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)

export const generatePassword = ({ includeNumbers, characterAmount}: GProps) => {

    let charCodes = LOWERCASE_CHAR_CODES
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

interface GProps {
    includeNumbers: boolean
    characterAmount: number
}