import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto02';

  textoBotao = "Esconder";
  esconder =  false;

  pessoas = [
    {nome: "José", idade: 18},
    {nome: "Maria", idade: 22}
  ];

  adicionar (nome: any, idade: any) {
    this.pessoas = [...this.pessoas, {nome: nome, idade: idade}];
  }

  alterarExibicao() {
    this.esconder = !this.esconder;
    this.textoBotao = this.esconder?"Exibir":"Esconder"; 
  }


}
