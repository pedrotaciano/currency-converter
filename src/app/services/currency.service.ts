import { Injectable } from '@angular/core';
import { Currency, CurrencyDTO } from '../../models/Currency';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getAllCurrencies(): Observable<Currency[]> {
    return this.http
      .get<CurrencyDTO>(`${environment.apiUrl}/CAD-BRL,ARS-BRL,GBP-BR9`)
      .pipe(
        map((currencies: CurrencyDTO) =>
          this.transformCurrenciesObjToArray(currencies)
        ),
        catchError((error: any) => {
          return EMPTY;
        })
      );
  }

  private transformCurrenciesObjToArray(currencies: CurrencyDTO): Currency[] {
    return Object.keys(currencies).map((key) => {
      return {
        code: key,
        name: currencies[key].name.split('/')[0],
        valueInBRL: currencies[key].bid,
        variationPercentage: currencies[key].pctChange,
        lastUpdate: Number(currencies[key].timestamp),
      };
    });
  }
}
