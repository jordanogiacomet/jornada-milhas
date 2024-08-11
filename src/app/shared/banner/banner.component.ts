import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  // Para passar o valor para o atributo, usamos o decorator input
  
  @Input() src: string = '';
  @Input() alt: string = '';
}
