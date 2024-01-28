import { Component } from '@angular/core';
import { CurrencyCardComponent } from '../components/currency-card/currency-card.component';
import { Currency } from '../../models/Currency';
import { CurrencyService } from '../services/currency.service';
import {
  Subject,
  firstValueFrom,
} from 'rxjs';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CurrencyCardComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent {
  currencies: Currency[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private currencyService: CurrencyService) {}

  async ngOnInit() {
    this.currencies = await this.getAllCurrencies();
    this.scheduleCurrenciesUpdate();
  }

  async getAllCurrencies(): Promise<Currency[]>{
    return await firstValueFrom(this.currencyService.getAllCurrencies());
  }

  scheduleCurrenciesUpdate(): void {
    const updateInterval = 180000;

    setInterval(async () => {
      this.currencies = await this.getAllCurrencies();
    }, updateInterval);
  }
}
