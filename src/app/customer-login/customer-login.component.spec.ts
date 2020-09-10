import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { CustomerLoginComponent } from './customer-login.component';
import {HttpModule} from '@angular/http';
import { CustomerService } from '../customer.service';
import { Routes, RouterModule } from '@angular/router';

describe('CustomerLoginComponent', () => {
  let component: CustomerLoginComponent;
  let fixture: ComponentFixture<CustomerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoginComponent ],
      imports: [HttpModule,RouterModule.forRoot([]),],
      providers: [CustomerService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
