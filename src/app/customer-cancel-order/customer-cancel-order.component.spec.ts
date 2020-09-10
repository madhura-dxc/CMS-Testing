import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { CustomerCancelOrderComponent } from './customer-cancel-order.component';
import {HttpModule} from '@angular/http';
import { CustomerService } from '../customer.service';
import {FormsModule} from '@angular/forms';

describe('CustomerCancelOrderComponent', () => {
  let component: CustomerCancelOrderComponent;
  let fixture: ComponentFixture<CustomerCancelOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCancelOrderComponent ],
      imports: [HttpModule, FormsModule], 
      providers: [CustomerService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCancelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
