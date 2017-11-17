import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from './../item/item.service';
import { Message } from 'primeng/components/common/message';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = []; 
  item = undefined;

  msgs: Message[];  

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.itemService.listar()
      .subscribe(dados => this.itens = dados);
  }

  adicionar(frm: FormControl) {
    this.itemService.adicionar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }

  onRowSelect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Patrimonio Selecionado', detail: event.data.etiqueta + ' - ' + event.data.descricao });

    this.item = event.data;
  }

  onRowUnselect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Patrimonio Selecionado', detail: event.data.etiqueta + ' - ' + event.data.descricao });
  }

}
