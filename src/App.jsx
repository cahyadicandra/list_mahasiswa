import KartuMahasiswa from './components/KartuMahasiswa.jsx'

export default function App() {
  return (
    <main>
      <h1>List Mahasiswa</h1>
      <KartuMahasiswa nama="Cahya Dicandra" nim="2483207015" angkatan={2024} aktif={true} />
      <KartuMahasiswa nama="Meilana Ardiyanto" nim="2483207049" angkatan={2024} aktif={true} />
      <KartuMahasiswa nama="Fatkhah Rahmatullah Sahid" nim="2483207020" angkatan={2024} aktif={false} />
    </main>
  )
}
