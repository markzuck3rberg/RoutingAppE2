import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidlePage } from './midle.page';

describe('MidlePage', () => {
  let component: MidlePage;
  let fixture: ComponentFixture<MidlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MidlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
