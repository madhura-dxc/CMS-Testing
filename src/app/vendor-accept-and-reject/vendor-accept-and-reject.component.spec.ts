import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { VendorAcceptAndRejectComponent } from './vendor-accept-and-reject.component';
import { HttpClient } from '@angular/common/http';
import { VendorService } from '../vendor.service';
import { HttpClientModule } from '@angular/common/http';

describe('VendorAcceptAndRejectComponent', () => {
  let component: VendorAcceptAndRejectComponent;
  let fixture: ComponentFixture<VendorAcceptAndRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorAcceptAndRejectComponent ],
      imports:[HttpClientModule],
      providers: [VendorService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAcceptAndRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  localStorage.setItem("cancelOrderId","1000");
  localStorage.setItem("cancelVenId","1");
    expect(component).toBeTruthy();
  });
});
