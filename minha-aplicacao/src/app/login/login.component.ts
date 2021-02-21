import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(form: any){
    if (!form.valid){
      form.controls.email.markAsTouched();
      console.log(form);
      console.log('formulário inválido!');
    }

  }

  // tslint:disable-next-line: typedef
  exibeErro(nomeControle: string, form: any){
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
