import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params.pipe( switchMap( (param) => this.paisService.getPaisId( param['id'] )), tap( console.log ) ).subscribe( pais => this.pais = pais[0] );

    //this.activateRoute.params.subscribe( id => { console.log( id ), this.paisService.getPaisId(id['id']).subscribe( pais => { console.log(pais)})});

  }

}
