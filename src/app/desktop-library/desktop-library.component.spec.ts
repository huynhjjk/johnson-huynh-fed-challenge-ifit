import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLibraryComponent } from './desktop-library.component';

describe('DesktopLibraryComponent', () => {
  let component: DesktopLibraryComponent;
  let fixture: ComponentFixture<DesktopLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
