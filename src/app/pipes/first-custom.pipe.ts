import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
name: 'firstCustom'
})

export class FirstCustomPipe implements PipeTransform {
    transform(value: string) {
        if (value.length > 5) {
            return `${value.substring(0, 5)}...`
        }
        return value
    }
}