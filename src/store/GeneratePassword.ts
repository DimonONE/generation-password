import { makeAutoObservable } from "mobx";

class  GeneratePassword {
    passwords = ''
    lengthPassword = 0
    possiblePassLength = [4, 8, 16, 32]

    constructor() {
        makeAutoObservable(this)
    }

    save(password: string) {
        this.passwords = password
    }

    saveLength(lengthPassword: number) {
        this.lengthPassword = lengthPassword
    }
}

export default new GeneratePassword()