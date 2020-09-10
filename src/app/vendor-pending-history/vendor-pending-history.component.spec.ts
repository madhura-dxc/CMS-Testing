import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { VendorPendingHistoryComponent } from './vendor-pending-history.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('VendorPendingHistoryComponent', () => {
  let component: VendorPendingHistoryComponent;
  let fixture: ComponentFixture<VendorPendingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPendingHistoryComponent ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule
        // other imports here
      ],
      providers: [RouterModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPendingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
