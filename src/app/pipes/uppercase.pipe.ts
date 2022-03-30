import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, age:number): string {
    return `${value.toUpperCase()} - ${age}`;
  }

}
