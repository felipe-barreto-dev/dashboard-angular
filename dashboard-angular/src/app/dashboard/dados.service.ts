import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 33],
    ['Março', 33],
    ['Abril', 33],
    ['Maio', 33],
    ['Junho', 33],
  ]

  constructor() { }

  /**
   * Retorna um observable contendo os dados
   * a serem exibidos no gráfico.
   *
   * @returns Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}
