import { useState } from 'react'
import KartuMahasiswa from './components/KartuMahasiswa.jsx'

const daftarMahasiswa = [
  { nama: 'Cahya Dicandra', nim: '2483207015', angkatan: 2024, aktif: true },
  { nama: 'Meilana Ardiyanto', nim: '2483207049', angkatan: 2024, aktif: true },
  { nama: 'Fatkhah Rahmatullah Sahid', nim: '2483207020', angkatan: 2024, aktif: false },
]

export default function App() {
  const [filter, setFilter] = useState('semua')

  const mahasiswaTampil = daftarMahasiswa.filter((mhs) => {
    if (filter === 'aktif') return mhs.aktif
    if (filter === 'tidak-aktif') return !mhs.aktif
    return true
  })

  return (
    <main>
      <h1>List Mahasiswa</h1>

      <div className="filter">
        {['semua', 'aktif', 'tidak-aktif'].map((pilihan) => (
          <button
            key={pilihan}
            type="button"
            className={filter === pilihan ? 'tombol-filter aktif' : 'tombol-filter'}
            onClick={() => setFilter(pilihan)}
          >
            {pilihan === 'semua'
              ? 'Semua'
              : pilihan === 'aktif'
                ? 'Aktif'
                : 'Tidak aktif'}
          </button>
        ))}
      </div>

      {mahasiswaTampil.map((mhs) => (
        <KartuMahasiswa
          key={mhs.nim}
          nama={mhs.nama}
          nim={mhs.nim}
          angkatan={mhs.angkatan}
          aktif={mhs.aktif}
        />
      ))}
    </main>
  )
}
