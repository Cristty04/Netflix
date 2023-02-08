import { PeliculaInterface } from './../../models/home-interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public top5: PeliculaInterface[];
  public accionFilms: PeliculaInterface[];
  public fantasticFilms: PeliculaInterface[];
  

  constructor() {
    
    this.top5 = [
      { image:'./assets/top5/1.Infiesto.jpg'},
      { image: './assets/top5/2.Lobo Vikingo.jpg' },
      { image: './assets/top5/3.Cuestión de Justicia.jpg' },
      { image: './assets/top5/4. La gente como vosotros.jpg' },
      { image: './assets/top5/5.Joker.jpg' },
     
    ];

    this.accionFilms = [
      
      { image: './assets/CienciaFiccion/A Ciegas.jpg' },
      { image: './assets/CienciaFiccion/Guerra Mundial Z.jpg' },
      { image: './assets/CienciaFiccion/Insurgente.jpg' },
      { image: './assets/CienciaFiccion/Iron-Man.jpg' },
      { image: './assets/CienciaFiccion/Los Juegos del Hambre-Sin Sajo.jpg' },
      { image: './assets/CienciaFiccion/Spiderman Fuera de casa.jpg' },
     
    ];
      
    this.fantasticFilms = [
      { image: './assets/Epicas/300.jpg' },
      { image: './assets/Epicas/Dioses de Egipto.jpg' },
      { image: './assets/Epicas/Furia de Titanes.jpg' },
      { image: './assets/Epicas/Gladiator.jpg' },
      { image: './assets/Epicas/Pompeii.jpg' },
      { image: './assets/Epicas/Troya.jpg' },
     
    ];
  }
  ngOnInit(): void {}
}
