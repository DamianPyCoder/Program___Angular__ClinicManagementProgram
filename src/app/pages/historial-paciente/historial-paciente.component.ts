import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pacientes } from 'src/app/interfaces/pacientes.inteface';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent implements OnInit {

  newhistoriales: Pacientes[];

  filtrarNombre: any = '';

  PaginaActual: number = 1;

  constructor(private pacienteService: PacientesService, private route: Router) { }

  ngOnInit(): void {
    this.obtenerHistoriales();
  }

  obtenerHistoriales() {
    this.pacienteService.getHistorial().subscribe( (resp: Pacientes[]) => {
      this.newhistoriales = resp;
      console.log(this.newhistoriales);
    });
  }

  VerExp( idpaciente: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Desea ver el expediente?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Aceptar!',
      cancelButtonText: '¡Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        
        this.route.navigate(['/expediente', idpaciente]);

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
