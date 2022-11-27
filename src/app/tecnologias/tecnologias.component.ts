import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {
  titulo = "Áreas de conocimiento:";
  conocimientos = [
    {
      titulo: "PHP",
      descripcion: ` Más de 5 años desarrollando páginas y aplicaciones web en este lenguaje. Experiencia con frameworks como Laravel y Codeigniter. 
      Además de desarrollo orientado a objetos.`,
      icono: `../assets/php_icon.svg`
    },
    {
      titulo: "Javascript",
      descripcion: ` Desarrollo frontend con javascript tanto nativo como con JQuery. Conocimientos básicos de frameworks Vuejs y angular; así como NodeJs.`,
      icono: `../assets/javascript_icon.svg`
    },
    {
      titulo: "Bases de Datos",
      descripcion: ` Diseño de estructuras de datos relacionales, formalización. Conocimientos en MySql y PostgreSql.`,
      icono: `../assets/database_icon.svg`
    },
  ];
}
