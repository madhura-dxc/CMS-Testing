import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {Http, Response} from '@angular/http';
import { VendorService } from './vendor.service';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('VendorService', () => {
  let service: VendorService;
  const profileInfo = {
    venUsername: 'balan89',
    venId: 1,
    venName: 'Balan'
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule,HttpClientTestingModule], 
      providers: [Http], 
    });
    service = TestBed.inject(VendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get profile data of Balan', () => {
    alert("Hello");
    const vendorService = TestBed.get(VendorService);
    const http = TestBed.get(HttpTestingController);
    let profileResponse;
    vendorService.findVendorName('balan89').subscribe((response)=>{
      alert(response);
      profileResponse = response;
    });
    //alert(profileResponse);
    http.expectOne('http://localhost:8080/Canteen/webapi/vendor/searchVendor/balan89').flush(profileInfo);
    expect(profileResponse).toEqual(profileInfo);
  });
});
