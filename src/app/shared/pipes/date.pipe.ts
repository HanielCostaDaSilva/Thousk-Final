import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddMMAAAA',
})
export class DatePipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  }

}