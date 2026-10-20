# List Mahasiswa

Aplikasi daftar mahasiswa sederhana yang dibuat dengan **Vite + React**.

Setiap mahasiswa ditampilkan dalam kartu berisi nama, NIM, angkatan, dan lencana status (aktif / tidak aktif) — semua dihasilkan oleh satu komponen `KartuMahasiswa` yang menerima props.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Lalu buka alamat lokal yang ditampilkan di terminal (misalnya `http://localhost:5173`).

## Struktur

```
src/
  components/KartuMahasiswa.jsx  # komponen kartu mahasiswa
  App.jsx                        # pemakaian komponen dengan props
  index.css                      # penataan tampilan
```
