import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, Observable, of, catchError, timer, switchMap } from 'rxjs';
import { AccountService } from '@proxy/tickets/account';

export class Validadores {

    static numeroPositivo(input: FormControl) {
        return Number(input.value) >= 0 ? null : { numeroNegativo: true };
    }

    static soloLetras(input: FormControl) {
        return /^[\p{L}\s']*$/u.test(input.value) ? null : { onlyLetters: true };
    }

    static numeroEsEntero(input: FormControl) {
        return /^(-?[0-9]+)$/.test(input.value) ? null : { numeroNoEntero: true };
    }

    static porcentajeValido(input: FormControl) {
        return input.value >= 0 && input.value <= 100 ? null : { porcentajeInvalido: true };
    }

    static numeroValido(input: FormControl) {
        return /^(-?[0-9]+)(\.[0-9]+)?$/.test(input.value) ? null : { numeroInvalido: true };
    }

    static twoWordsValidator(input: FormControl): ValidationErrors {
        const value = input.value || '';
        const hasTwoWords = value.trim().split(/\s+/).length >= 2;
        return hasTwoWords ? null : { twoWords: 'Debe colocar nombre y apellido' };
    }

    static validEmailValidator(accountService: AccountService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            let email = control.value;
            if (!email) {
                return of(null);
            }
            email = email.toLowerCase().trim();
            return timer(600).pipe(switchMap(() => {
                return accountService.getEmailValidByEmail(email).pipe(
                    map(isValid => (isValid ? null : { invalidEmail: true })),
                    catchError(() => of(null))
                );
            }))
        };
    }
    static emailWithSecurityRoleValidator(accountService: AccountService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            let email = control.value;
            if (!email) {
                return of(null);
            }
            email = email.toLowerCase().trim();
            return timer(500).pipe(
                switchMap(() => 
                    accountService.getUserInRoles(email, ['seguridad']).pipe(
                        map((result) => {
                            // Si el resultado es exitoso y el valor es falso, marcamos el error.
                            return result.exitoso && !result.value 
                                ? { emailExistWithSecurityRole: true } 
                                : null;
                        }),
                        // En caso de error en el servicio, no marcamos el campo como inválido.
                        catchError(() => of(null))
                    )
                )
            );
        };
    }
    static onlyLetters(event: KeyboardEvent): void {
        const allowedCharacters = /^[\p{L}\s']$/u;
        if (!allowedCharacters.test(event.key)) {
            event.preventDefault();
        }
    }
    static onlyLettersOnInput(event: InputEvent): void {
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/[^\p{L}\s']/gu, '');
    }
    static aplicarSoloLetras(form: FormGroup, controlName: string): void {
        const control = form.get(controlName);
        const expr = /[^\p{L}\s']/gu;
        
        if (control) {
          control.valueChanges.subscribe(value => {
        // console.log(controlName);

            if (value) {
              const valorSinNumeros = value.replace(expr, '');
              if (valorSinNumeros !== value) {
                control.setValue(valorSinNumeros, { emitEvent: false });
              }
            }
          });
        }
    }
    static onlyNumbersOnInput(event: InputEvent, maxLength?: number): void {
        const input = event.target as HTMLInputElement;
        let filteredValue = input.value.replace(/[^0-9]/g, '');
        if (maxLength && filteredValue.length > maxLength) {
            filteredValue = filteredValue.slice(0, maxLength);
        }
        input.value = filteredValue;
    }

    static aplicarSoloNumeros(form: FormGroup, controlName: string): void {
        const control = form.get(controlName);
        const expr = /[^0-9]/g;
    
        if (control) {
            control.valueChanges.subscribe(value => {
                console.log(value);
                
                if (value) {
                    const valorNumerico = value.replace(expr, '');
                    if (valorNumerico !== value) {
                        control.setValue(valorNumerico, { emitEvent: false });
                    }
                }
            });
        }
    }
    
      

    /**
   * Validación en el caso de que el usuario pega datos del portapapeles en un input.
   *
   * @param event - El evento de pegado
   * @param type - El tipo de validación a realizar (si se desea que sea un número o texto)
   * @returns void
   *
   */
    static onPaste(event: ClipboardEvent, type: 'number' | 'text'): void {
        const pastedInput: string = event.clipboardData.getData('text/plain');
        if (type === "number" && pastedInput.match(/^[0-9]+$/)) {
            return;
        }
        if (type === "text" && /^[\p{L}\s]*$/u.test(pastedInput)) {
            return;
        }
        event.preventDefault();
    }

    static NoSoloEspacios(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let value: string | null | undefined = control.value;
            if (value == null || value == undefined) {
                return null;
            }
            const trimmed = value = value.trim();
            return trimmed.length > 0 ? null : { nullOrEmpty: value };
        };
    }

    static NoHtmlVacio(): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {
        let value: string | null | undefined = control.value;

        if (!value) return null; // si es null o vacío, que lo valide required

        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }

        // Limpia etiquetas HTML y entidades comunes
        const textoPlano = value
            .replace(/<[^>]*>/g, '')        
            .replace(/&nbsp;/gi, '')        
            .replace(/&amp;/gi, '&')
            .replace(/&quot;/gi, '"')
            .replace(/&lt;/gi, '<')
            .replace(/&gt;/gi, '>')
            .trim();

        return textoPlano.length > 0 ? null : { htmlVacio: true };
        };
    }

}
