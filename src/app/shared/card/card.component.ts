import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

// Uma classe condicional, o componente que usar essa variante vai usar primary, mas podemos usar o secondary
export class CardComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
