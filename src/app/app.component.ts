import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Nilai Siswa', url: '/nilai-siswa', icon: 'book' },
    { title: 'Dashboard', url: '/dashboard', icon: 'person' },
    
  ];
  public labels = [];
  constructor() {}
}
