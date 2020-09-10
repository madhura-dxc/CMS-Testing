import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { CustomerInfoComponent } from './customer-info.component';
import {HttpModule} from '@angular/http';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';
import { Customer } from '../customer';


describe('CustomerInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoComponent ],
      imports:[HttpModule],
      providers:[CustomerService],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   let customer : Observable<Customer>;
    let  cust:Customer;
    cust = {"cusId":3,"cusName":"Renu Srivastav","cusPhno":"8755144556","cusUserName":null,"cusPassword":null,"cusEmail":"renusan@gmmail.com"};

    expect(component).toBeTruthy();
  });
});
