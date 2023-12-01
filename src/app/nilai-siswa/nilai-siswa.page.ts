import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nilai-siswa',
  templateUrl: './nilai-siswa.page.html',
  styleUrls: ['./nilai-siswa.page.scss'],
})
export class NilaiSiswaPage implements OnInit {
  dataNilaiSiswa: any = [];
  id: number | null = null;
  mata_pelajaran: string = '';
  nilai: string = '';
  id_siswa: string = '';
  modal_tambah: boolean = false;
  modal_edit: boolean = false;

  constructor(
    private _apiService: ApiService,
    private modal: ModalController
  ) {}

  ngOnInit() {
    this.getNilaiSiswa();
  }

  getNilaiSiswa() {
    this._apiService.tampil('tampil_data.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.dataNilaiSiswa = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  reset_model() {
    this.id = null;
    this.mata_pelajaran = '';
    this.nilai = '';
    this.id_siswa = '';
  }

  cancel() {
    this.modal.dismiss();
    this.modal_tambah = false;
    this.reset_model();
  }

  open_modal_tambah(isOpen: boolean) {
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
  }

  open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilNilaiSiswa(this.id);
    this.modal_tambah = false;
    this.modal_edit = true;
  }

  tambahNilaiSiswa() {
    if (this.mata_pelajaran != '' && this.nilai != '' && this.id_siswa != '') {
      let data = {
        mata_pelajaran: this.mata_pelajaran,
        nilai: this.nilai,
        id_siswa: this.id_siswa,
      };
      this._apiService.tambah(data, 'tambah_data.php').subscribe({
        next: (hasil: any) => {
          this.reset_model();
          console.log('berhasil tambah data nilai');
          this.getNilaiSiswa();
          this.modal_tambah = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.log('gagal tambah data nilai');
        },
      });
    } else {
      console.log('gagal tambah data nilai karena masih ada data yang kosong');
    }
  }

  hapusNilaiSiswa(id: any) {
    this._apiService.hapus(id, 'hapus_data.php?id=').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.getNilaiSiswa();
        console.log('berhasil hapus data');
      },
      error: (error: any) => {
        console.log('gagal');
      },
    });
  }

  ambilNilaiSiswa(id: any) {
    this._apiService.lihat(id, 'lihat_data.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let nilai_siswa = hasil;
        this.id = nilai_siswa.id;
        this.mata_pelajaran = nilai_siswa.mata_pelajaran;
        this.nilai = nilai_siswa.nilai;
        this.id_siswa = nilai_siswa.id_siswa;
      },
      error: (error: any) => {
        console.log('gagal ambil data');
      },
    });
  }

  editNilaiSiswa() {
    let data = {
      id: this.id,
      mata_pelajaran: this.mata_pelajaran,
      nilai: this.nilai,
      id_siswa: this.id_siswa,
    };
    this._apiService.edit(data, 'edit_data.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.reset_model();
        this.getNilaiSiswa();
        console.log('berhasil edit Nilai Siswa');
        this.modal_edit = false;
        this.modal.dismiss();
      },
      error: (err: any) => {
        console.log('gagal edit Nilai Siswa');
      },
    });
  }
}
