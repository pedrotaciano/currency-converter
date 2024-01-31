import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardComponent } from './currency-card.component';
import { By } from '@angular/platform-browser';

describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.currency = {
      code: 'MCK',
      name: 'Mock Currency',
      valueInBRL: 5.5,
      variationPercentage: 0.5,
      lastUpdate: 0
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add class red when valueInBRL is less than or equal to 1', () => {
    component.currency.valueInBRL = 1;
    fixture.detectChanges();
    const cardContentValue = fixture.debugElement.query(
      By.css('.card__content__value')
    );
    expect(cardContentValue.classes['red']).toBeTruthy();
  });

  it('should add class green when valueInBRL is greater than 1 and less than or equal to 5', () => {
    component.currency.valueInBRL = 3;
    fixture.detectChanges();
    const cardContentValue = fixture.debugElement.query(
      By.css('.card__content__value')
    );
    expect(cardContentValue.classes['green']).toBeTruthy();
  });

  it('should add class blue when valueInBRL is greater than 5', () => {
    component.currency.valueInBRL = 6;
    fixture.detectChanges();
    const cardContentValue = fixture.debugElement.query(
      By.css('.card__content__value')
    );
    expect(cardContentValue.classes['blue']).toBeTruthy();
  });
});
