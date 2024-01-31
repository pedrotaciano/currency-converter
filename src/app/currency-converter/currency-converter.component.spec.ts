import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyConverterComponent } from './currency-converter.component';
import { HttpClientModule } from '@angular/common/http';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyConverterComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a list of currencies', async () => {
    const currencies = await component.getAllCurrencies();
    expect(currencies.length).toBeGreaterThan(0);
  });

  it('should update currencies every 3 minutes', () => {
    const updateInterval = 180000;
    const callCount = 2;
    const totalTestTime = updateInterval * callCount;
    const spy = spyOn(component, 'getAllCurrencies');

    component.scheduleCurrenciesUpdate();

    expect(spy).not.toHaveBeenCalled();
    setInterval(() => {
      expect(spy).toHaveBeenCalledTimes(callCount);
    }, totalTestTime);
  });

  it('should create a card for each currency', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-currency-card');
    expect(cards.length).toEqual(component.currencies.length);
  });
});
