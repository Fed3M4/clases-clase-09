import { Component } from '@angular/core';
import { Curso } from './models/curso';
import { CursoService } from './servicios/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase-09';

  constructor(
    private cursoService: CursoService
  ) {}

  agregarCurso(){
    let c: Curso = {
      nombre: 'Angular Avanzado',
      comision: '33982',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      inscripcionAbierta: true,
      profesor: {
        nombre:'Ulises',
        correo: 'ulises@mail.com',
        fechaRegistro: new Date()
      }
    }
    this.cursoService.agregarCurso(c);
  }
}
