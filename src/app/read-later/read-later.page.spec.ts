import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadLaterPage } from './read-later.page';

describe('ReadLaterPage', () => {
  let component: ReadLaterPage;
  let fixture: ComponentFixture<ReadLaterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
