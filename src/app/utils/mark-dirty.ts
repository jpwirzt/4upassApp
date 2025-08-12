import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class MarkDirty{
    static markAllAsDirty(formGroup: FormGroup){
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
              control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
              this.markAllAsDirty(control); // Llama recursivamente para marcar los controles en un FormGroup anidado
            } else if (control instanceof FormArray) {
              control.controls.forEach((ctrl) => {
                if (ctrl instanceof FormControl) {
                  ctrl.markAsDirty({ onlySelf: true });
                } else if (ctrl instanceof FormGroup) {
                  // console.log('hola mundo');
                  this.markAllAsDirty(ctrl); // Llama recursivamente para FormGroup dentro de FormArray
                }
              });
            }
          });
    }
}