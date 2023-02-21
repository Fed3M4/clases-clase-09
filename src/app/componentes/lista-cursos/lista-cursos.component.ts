import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  constructor(
    private cursoService: CursoService
  ) {}
  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCurso();
  }

}
