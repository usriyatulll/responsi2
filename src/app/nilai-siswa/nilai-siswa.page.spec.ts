import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NilaiSiswaPage } from './nilai-siswa.page';

describe('NilaiSiswaPage', () => {
  let component: NilaiSiswaPage;
  let fixture: ComponentFixture<NilaiSiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NilaiSiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
