import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereMapComponent } from './here-map.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '@app/shared/services';

describe('HereMapComponent', () => {
  let component: HereMapComponent;
  let fixture: ComponentFixture<HereMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereMapComponent ],
      imports: [ BrowserAnimationsModule, RouterTestingModule, HttpClientModule ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
