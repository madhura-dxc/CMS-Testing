import { TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { WalletService } from './wallet.service';
import {HttpModule} from '@angular/http';

describe('WalletService', () => {
  let service: WalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
    });
    service = TestBed.inject(WalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
