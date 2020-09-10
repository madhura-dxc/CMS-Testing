import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPendingHistoryComponent } from './customer-pending-history.component';
import {HttpModule} from '@angular/http';
import { CustomerService } from '../customer.service';
describe('CustomerPendingHistoryComponent', () => {
  let component: CustomerPendingHistoryComponent;
  let fixture: ComponentFixture<CustomerPendingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPendingHistoryComponent ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule
        // other imports here
      ],
      providers: [CustomerService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPendingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
