import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;

  destino: number | undefined;


  transferir(): void {
    console.log('Solcitado nova transferencia');
    this.aoTransferir.emit({valor:this.valor, destino:this.destino});
    this.limparCampos();
  }

  limparCampos(){
    this.destino = 0;
    this.valor = 0;
  }
}
