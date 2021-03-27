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

  alterarExibicao() {
    this.esconder = !this.esconder;
    this.textoBotao = this.esconder?"Exibir":"Esconder"; 
  }


}
