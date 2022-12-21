import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  URL = 'http://localhost/api/';
  constructor( private http: HttpClient ) { }

  //Crear Paciente
  altaPaciente(pacientes) {
    return this.http.post(`${this.URL}AltaPaciente.php`, JSON.stringify(pacientes));
  }

  //Obtener Paciente
  getPaciente() {
    return this.http.get(`${this.URL}ObtenerPacientes.php`);
  }

  //Seleccionar paciente del boton editar
  seleccionarPaciente( idpaciente: number ) {
    return this.http.get(`${this.URL}SeleccionarPaciente.php?idpaciente=${idpaciente}`);
  }

  //Editar pacientes
  editarPaciente(pacientes) {
    return this.http.post(`${this.URL}EditarPaciente.php`, JSON.stringify(pacientes));
  }
  
  //Eliminar paciente
  eliminarPaciente(idpaciente) {
    return this.http.get(`${this.URL}EliminarPaciente.php?idpaciente=${idpaciente}`);
  }

  //Nuevo Historial
  altaHistorial(newhistorial) {
    return this.http.post(`${this.URL}NuevoHistorial.php`, JSON.stringify(newhistorial));
  }

  //Obtener Historiales
  getHistorial() {
    return this.http.get(`${this.URL}ObtenerHistoriales.php`);
  }
 
  //Obtener Expedientes
  getExpedientes(idpaciente) {
    return this.http.get(`${this.URL}ObtenerExpedientes.php?idpaciente=${idpaciente}`);
  }

  //Seleccionar Expediente
  seleccionarExpediente( idhistorial: number ) {
    return this.http.get(`${this.URL}SeleccionarExpediente.php?idhistorial=${idhistorial}`);
  }

  //Editar Expediente
  editarExpediente(expediente) {
    return this.http.post(`${this.URL}EditarExpediente.php`, JSON.stringify(expediente));
  }

  //Imprimir Receta
  seleccionarRecetaPDF(idhistorial: number) {
    window.open(`${this.URL}extensiones/tcpdf/pdf/rec.php?idhistorial=${idhistorial}`,'_blank');
  }
  
}
