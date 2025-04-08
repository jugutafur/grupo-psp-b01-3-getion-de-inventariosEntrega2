import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent  {

  paginas = ["Inicio", "Usuario", "Administrador", "Contacto", "Objetivos"  ];

  constructor() { }


}
