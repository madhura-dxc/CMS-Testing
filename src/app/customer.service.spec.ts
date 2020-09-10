import { TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { CustomerService } from './customer.service';
import {HttpModule} from '@angular/http';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule], 
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
