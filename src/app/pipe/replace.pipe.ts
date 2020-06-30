import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {

    // recebe 3 parametros: 
    // 1° é o código q será recebido
    // 2° é o caracter que será removido
    // 3° é o valor que irá substituir o char
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace);
    }

}