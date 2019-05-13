import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myupper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindof: string, text1: string): string {
        if (kindof === 'upper') {
            value = value.toUpperCase();
            // value = value + text1;
        } else {
            value = value.toLowerCase();
            // value = value + text1;
        }
        return value;
    }
}
