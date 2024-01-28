import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { firstValueFrom } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CurrencyService],
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of currencies', async () => {
    const currencies = await firstValueFrom(service.getAllCurrencies());
    expect(currencies.length).toBeGreaterThan(0);
  });
});
