import { Component, Input } from '@angular/core';
import { PeliculaInterface } from 'src/app/models/home-interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {


@Input() accionFilms:PeliculaInterface[] = []
@Input() fantasticFilms:PeliculaInterface[] = []
//ngOnInit(): void {console.log(this.top5)}

}
