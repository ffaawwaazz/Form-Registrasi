LINK : https://ffaawwaazz.github.io/Form-Registrasi/

# Form-Registrasi

## 📘 Deskripsi Proyek

Aplikasi web sederhana berbasis **HTML, CSS, dan JavaScript** yang terdiri dari dua fitur utama:

1. **Form Registrasi Mahasiswa**  
   Pengguna dapat mengisi data seperti:
   - Nama Mahasiswa (dengan fitur auto-suggestion),
   - NRP,
   - Jurusan,
   - Mata Kuliah,
   - Dosen Pengampu.  
   Setelah semua data diisi, data diekspor otomatis ke file Excel (`form_mahasiswa.xlsx`).

2. **Pencarian Kode Pos Berdasarkan Wilayah**  
   Setelah registrasi, pengguna akan diarahkan ke fitur pencarian kode pos berdasarkan:
   - Provinsi,
   - Kabupaten/Kota,
   - Kecamatan.  
   Semua input disediakan dalam bentuk **dropdown** dinamis. Hasil berupa **kode pos dan informasi daerah** akan ditampilkan setelah pencarian.

---

## 💡 Penjelasan Inti Kode

### 🔹 Form Registrasi Mahasiswa
- Menggunakan **input field** untuk nama, NRP, jurusan, mata kuliah, dan dosen.
- Nama memiliki fitur **auto-suggestion** berdasarkan daftar nama yang telah ditentukan.
- Validasi dilakukan agar **semua input wajib diisi** sebelum lanjut ke fitur berikutnya.
- Data yang dimasukkan akan diekspor ke file **Excel** menggunakan library **SheetJS**.

### 🔹 Pencarian Kode Pos
- Dropdown untuk Provinsi, Kabupaten/Kota, dan Kecamatan diisi secara dinamis.
- Setelah pengguna memilih semua level wilayah, aplikasi akan menampilkan **kode pos dan detail wilayah**.
- Data kode pos disimpan di file JavaScript agar tidak bergantung pada API eksternal.

---

## 🚀 Teknologi yang Digunakan
- HTML5
- CSS3
- JavaScript
- [SheetJS (XLSX)](https://sheetjs.com/) untuk ekspor data ke file Excel

---

## 📝 Cara Menggunakan
1. Buka halaman `index.html` di browser.
2. Isi seluruh form registrasi mahasiswa.
3. Klik **Submit** → File Excel akan otomatis terunduh.
4. Lanjut ke halaman pencarian kode pos.
5. Pilih Provinsi → Kabupaten/Kota → Kecamatan.
6. Klik **Cari Kode Pos** untuk melihat hasilnya.

---

## 📂 Struktur File
- `index.html` — Gabungan dari halaman registrasi dan pencarian kode pos.
- `style.css` — Untuk tampilan dan desain antarmuka pengguna.
- `script.js` — Logika JavaScript untuk registrasi, validasi, ekspor, dan pencarian kode pos.

