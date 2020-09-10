import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { CMSMainComponent } from './cmsmain.component';
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CMSMainComponent', () => {
  let component: CMSMainComponent;
  let fixture: ComponentFixture<CMSMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMSMainComponent ],
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        HttpClientTestingModule

        // other imports here
      ],
      providers: [RouterModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMSMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
