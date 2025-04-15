// Form Registrasi Mahasiswa
const namaInput = document.getElementById('nama');
const suggestionBox = document.getElementById('nama-suggestions');
const errorMessage = document.getElementById('error-message');
const registrationForm = document.getElementById('registration-form');
const postcodeSearchForm = document.getElementById('postcode-search');

const namaList = [
  'Rafif Fawwaz Kartika', 'Rafi', 'John', 'Dian Permata', 'Eko Prasetyo',
  'Fajar Nugroho', 'Gita Ayu', 'Hendra Saputra', 'Indah Wulandari', 'Joko Widodo'
];

namaInput.addEventListener('input', function () {
  const input = this.value.toLowerCase();
  suggestionBox.innerHTML = '';

  if (input.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  const filtered = namaList.filter(nama => nama.toLowerCase().startsWith(input));
  if (filtered.length > 0) {
    suggestionBox.style.display = 'block';
    filtered.forEach(nama => {
      const div = document.createElement('div');
      div.textContent = nama;
      div.style.cursor = 'pointer';
      div.onclick = () => {
        namaInput.value = nama;
        suggestionBox.style.display = 'none';
      };
      suggestionBox.appendChild(div);
    });
  } else {
    suggestionBox.style.display = 'none';
  }
});

function submitForm() {
  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const matkul = document.getElementById('matkul').value;
  const dosen = document.getElementById('dosen').value;
  const jurusan = document.getElementById('jurusan').value;

  // Cek apakah ada field yang kosong
  if (nama === '' || nim === '' || matkul === '' || dosen === '' || jurusan === '') {
    errorMessage.style.display = 'block';
    return;
  } else {
    errorMessage.style.display = 'none'; // Menyembunyikan pesan error jika semua terisi

    // Membuat data untuk file Excel
    const data = [
      ["Nama Mahasiswa", "NRP", "Jurusan", "Mata Kuliah", "Dosen"],
      [nama, nim, jurusan, matkul, dosen]
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "FormData");

    // Ekspor ke file Excel
    XLSX.writeFile(workbook, "form_mahasiswa.xlsx");

    // Menyembunyikan form registrasi dan menampilkan form pencarian kode pos
    registrationForm.style.display = 'none';
    postcodeSearchForm.style.display = 'block';
  }
}

// Data Kecamata
const kecamatanData = {
  "Jakarta": ["Cilandak", "Mampang Prapatan", "Tebet", "Pancoran"],
  "Surabaya": ["Gubeng", "Tegalsari", "Wonokromo", "Rungkut"],
  "Bandung": ["Andir", "Coblong", "Sukajadi", "Lengkong"],
  "Medan": ["Merdeka", "Kampung Baru", "Sunggal", "Pandan"]
};

// Update dropdown kecamatan saat kabupaten/kota dipilih
document.getElementById('kabupaten').addEventListener('change', function () {
  const kabupaten = this.value;
  const kecamatanSelect = document.getElementById('kecamatan');
  
  // Clear current options
  kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';

  if (kecamatanData[kabupaten]) {
    kecamatanData[kabupaten].forEach(function (kecamatan) {
      const option = document.createElement('option');
      option.value = kecamatan;
      option.textContent = kecamatan;
      kecamatanSelect.appendChild(option);
    });
  }
});

function searchPostalCode() {
  const provinsi = document.getElementById('provinsi').value;
  const kabupaten = document.getElementById('kabupaten').value;
  const kecamatan = document.getElementById('kecamatan').value;

  // Validasi input pencarian kode pos
  if (provinsi === '' || kabupaten === '' || kecamatan === '') {
    alert('Semua field pencarian kode pos harus diisi!');
    return;
  }

  // Cek apakah kecamatan ada di dalam data
  if (kecamatanData[kabupaten] && kecamatanData[kabupaten].includes(kecamatan)) {
    // Simulasi pencarian kode pos (contoh statis)
    const kodePos = '12345';  // Gantilah dengan logika atau API pencarian kode pos yang sesuai
    const informasiDaerah = `${provinsi}, ${kabupaten}, ${kecamatan}`;  // Format info daerah

    // Menampilkan hasil pencarian kode pos
    document.getElementById('kode-pos').textContent = kodePos;
    document.getElementById('informasi-daerah').textContent = informasiDaerah;
    document.getElementById('result').style.display = 'block';
  } else {
    alert('Kecamatan tidak ditemukan di daerah ini!');
  }
}
