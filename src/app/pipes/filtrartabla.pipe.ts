import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrartabla'
})
export class FiltrartablaPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    const resultadoBusqueda = [];
    for (const nombre of value ) {
      if ( nombre.nompaciente.toLowerCase().indexOf(args) > -1 || nombre.nompaciente.toUpperCase().indexOf(args) > -1 || nombre.nompaciente.indexOf(args) > -1) {
        resultadoBusqueda.push(nombre);
      } 
    }
    return resultadoBusqueda;
  }
}
