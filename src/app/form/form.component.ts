import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  public user: any;

  constructor() { 
    this.user = {
      nombre: '',
      apellido:'',
      bio:'',
      genero:''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('formulario enviado')
    console.log(this.user)
  }
}
