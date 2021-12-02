import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CalculateService } from '../calculate.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  @Input() precio = 0; //recibir datos pe precio de checkbox de Home
  @Output() inputValues = new EventEmitter(); // emitir datos a Home
  inputValue: number = 1;

  calculateService = new CalculateService();
  panelForm: FormGroup;
  constructor(private fb: FormBuilder, private ModalUno: NgbModal) {
    this.panelForm = this.fb.group({
      paginas: new FormControl(1, [Validators.required]),
      idiomas: new FormControl(1, [Validators.required]),
    });
  }

  @ViewChild('pagInput', { static: true }) // igual a getElementBy ID
  pagInput!: ElementRef;
  @ViewChild('lgInput', { static: true })
  lgInput!: ElementRef;

  increment(element: any) {
    //incrementar valor de input y añadir este valor a precio final
    if (element.value >= 1) {
      element.inputValue = element.value++;
      //console.log(element.inputValue);
    }
  }

  decrement(element: any) {
    // disminuir valor de input y añadir este valor a precio final
    if (element.value > 1) {
      element.inputValue = element.value--;
    }
    else {
      element.inputValue = 1;
    }
  }

  ngOnInit(): void {

  }

  blockPrecios() {
    // calcula el precio de la web mediante la formula
    const pageValue = parseInt(this.pagInput.nativeElement.value);
    const lgValue = parseInt(this.lgInput.nativeElement.value);
    let blockPrecio = this.calculateService.precioWeb(pageValue, lgValue);

    if (blockPrecio > 0) {
      //console.log("emitted" + blockPrecio);
      this.inputValues.emit(blockPrecio);
    }
    if (blockPrecio === 30) {
      this.inputValues.emit(0);
    }
    return blockPrecio;
  }

  //mostrar el contenido de modal
  modalUno(contenido: any) {
    this.ModalUno.open(contenido, { size: 'xl', centered: true });
  }
}
