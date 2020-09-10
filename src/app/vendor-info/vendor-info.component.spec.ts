import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import {HttpModule} from '@angular/http';
import { VendorInfoComponent } from './vendor-info.component';
import { HttpClient } from '@angular/common/http';
import { VendorService } from '../vendor.service';
import { HttpClientModule } from '@angular/common/http';

describe('VendorInfoComponent', () => {
  let component: VendorInfoComponent;
  let fixture: ComponentFixture<VendorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorInfoComponent ],
      imports: [HttpModule, HttpClientModule], 
      providers:[VendorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
