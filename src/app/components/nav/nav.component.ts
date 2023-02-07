import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

public encabezado : {
  image: {
  src: string,
  alt: string,}
  
  
}

constructor () {

this.encabezado = {
  image : {
    src: "./assets/Logo-Warner.png",
    alt: "logo-Warner",
  }

}

}
ngOnInit(): void{

}
}

