import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavLinkComponent } from './fav-link.component';

describe('FavLinkComponent', () => {
  let component: FavLinkComponent;
  let fixture: ComponentFixture<FavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
