# List Mahasiswa

Aplikasi daftar mahasiswa sederhana yang dibuat dengan **Vite + React**. Setiap mahasiswa ditampilkan dalam kartu berisi nama, NIM, angkatan, dan lencana status (aktif / tidak aktif). Daftar juga bisa difilter berdasarkan status melalui tombol filter di atasnya.

![Tangkapan layar aplikasi List Mahasiswa](docs/screenshot.png)

## Komponen

| Komponen | Props | Keterangan |
| --- | --- | --- |
| `KartuMahasiswa` | `nama` (teks), `nim` (teks), `angkatan` (angka), `aktif` (boolean) | Menampilkan kartu satu mahasiswa beserta lencana status |
| `App` | — | Menyimpan data daftar mahasiswa, state filter, dan me-render `KartuMahasiswa` untuk setiap mahasiswa yang lolos filter |

## Cara menjalankan

```bash
git clone https://github.com/cahyadicandra/list_mahasiswa.git
cd list_mahasiswa
npm install
npm run dev
```

Lalu buka alamat lokal yang ditampilkan di terminal (misalnya `http://localhost:5173`).

## Penggunaan AI

- Meggunakan AI untuk Styling
- Menggunakan AI untuk Menjelaskan langkah yang belum paham