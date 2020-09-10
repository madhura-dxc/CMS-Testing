import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VendorOrderHistoryComponent } from './vendor-order-history.component';
import {Http, Response} from '@angular/http';
import {HttpModule} from '@angular/http';
import { VendorService } from '../vendor.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

describe('VendorOrderHistoryComponent', () => {
  let component: VendorOrderHistoryComponent;
  let fixture: ComponentFixture<VendorOrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorOrderHistoryComponent ],
      imports: [HttpModule,HttpClientModule, RouterModule.forRoot([])], 
      providers:[VendorService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
