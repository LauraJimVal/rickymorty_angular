import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  implements OnInit{

  data: any[] = [] // inicializamos con un array de datos

  constructor(private apiService: ApiService){} // llamamos a nuestro servicio

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data.results // envolvemos la respuesta en una matriz
      console.log(this.data)
    })
  }

}
