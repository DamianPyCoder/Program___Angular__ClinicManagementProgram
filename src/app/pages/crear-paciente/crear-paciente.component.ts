import { Component } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {

  pacientes: any = {};

  constructor(private pacientesServices: PacientesService, private router: Router) { }

  AltaPaciente() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Desea registrar el paciente?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Aceptar!',
      cancelButtonText: '¡Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.pacientesServices.altaPaciente(this.pacientes).subscribe( resp => {
          if ( resp['resultado'] == 'OK') {
            swalWithBootstrapButtons.fire(
              '¡Registrado!',
              '¡Paciente Registrado!',
              'success'
            )
            this.router.navigate(['/nuevo-historial']);
          }
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'Ups!',
          'error'
        )
      }
    })
    
  }

}
