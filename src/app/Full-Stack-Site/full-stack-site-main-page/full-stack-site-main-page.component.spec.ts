import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackSiteMainPageComponent } from './full-stack-site-main-page.component';

describe('FullStackSiteMainPageComponent', () => {
  let component: FullStackSiteMainPageComponent;
  let fixture: ComponentFixture<FullStackSiteMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullStackSiteMainPageComponent]
    });
    fixture = TestBed.createComponent(FullStackSiteMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
