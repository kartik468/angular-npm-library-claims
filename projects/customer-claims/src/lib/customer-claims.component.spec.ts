import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClaimsComponent } from './customer-claims.component';

describe('CustomerClaimsComponent', () => {
  let component: CustomerClaimsComponent;
  let fixture: ComponentFixture<CustomerClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
