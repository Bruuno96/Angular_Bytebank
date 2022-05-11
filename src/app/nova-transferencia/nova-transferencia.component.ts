import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;

  destino: number | undefined;

  constructor(private service: TransferenciaService, private router: Router) {

  }


  transferir(){
    console.log('Solcitado nova transferencia');
    const valorEmitir : Transferencia = { valor:this.valor, destino:this.destino };
    this.service.adicionar(valorEmitir).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('extrato')
    }, err => {
      console.log(err);
    });
  }

  limparCampos(){
    this.destino = 0;
    this.valor = 0;
  }
}
