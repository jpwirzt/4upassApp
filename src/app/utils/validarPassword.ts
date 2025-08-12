import { FormControl } from "@angular/forms";

export class ValidarPassword {
    static passwordValido(input: FormControl) {
        const caracteresMinimos = 8;
        const mayusculasMinimas = 1;
        const minusculasMinimas = 1;
        const caracteresEspecialesMinimos = 1;
        const numerosMinimos = 1;
        const regEx = new RegExp(`^(?=.*[a-z]{${minusculasMinimas},})(?=.*[A-Z]{${mayusculasMinimas},})(?=.*[0-9]{${numerosMinimos},})(?=.*[^a-zA-Z0-9]{${caracteresEspecialesMinimos},}).{${caracteresMinimos},}$`);
        return regEx.test(input.value) ? null : { passwordInvalido: true };
    }
}