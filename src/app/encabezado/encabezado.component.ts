import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {
  redes = [
    {
      titulo:"GitHub",
      link: "https://github.com/marcosjeda",
      clase: 'bi bi-github'
    },
    {
      titulo:"LinkedIn",
      link: "https://www.linkedin.com/in/marcos-ojeda-silva-b16950126/",
      clase: 'bi bi-linkedin'
    },
  ]
}
