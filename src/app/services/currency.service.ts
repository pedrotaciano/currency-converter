import { Injectable } from '@angular/core';
import { Currency, CurrencyDTO } from '../../models/Currency';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getAllCurrencies() {
    return this.http
      .get<CurrencyDTO>(`${environment.apiUrl}/CAD-BRL,ARS-BRL,GBP-BRL`)
      .pipe(
        map((currencies: CurrencyDTO) => this.transformCurrenciesObjToArray(currencies)),
        catchError((error: any) => {
          throw error;
        })
      );
  }

  private transformCurrenciesObjToArray(currencies: CurrencyDTO): Currency[] {
    return Object.keys(currencies).map((key) => {
      return {
        code: key,
        name: currencies[key].name,
        valueInBRL: currencies[key].bid,
        variationPercentage: currencies[key].pctChange,
        lastUpdate: new Date(currencies[key].timestamp),
      };
    });
  }
}
