import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerOrderHistoryComponent } from './customer-order-history.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';


describe('CustomerOrderHistoryComponent', () => {
  let component: CustomerOrderHistoryComponent;
  let fixture: ComponentFixture<CustomerOrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderHistoryComponent ],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule, HttpModule], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
