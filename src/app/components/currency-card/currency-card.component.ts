import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../../models/Currency';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent {
  @Input() currency!: Currency
  @Input() isError = false;
  @Output() reload = new EventEmitter<void>();

  reloadCurrencies(): void {
    this.reload.emit();
  }
}
