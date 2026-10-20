export default function KartuMahasiswa({ nama, nim, angkatan, aktif }) {
  return (
    <article className="kartu-mahasiswa">
      <h3>{nama}</h3>
      <p>NIM {nim} - angkatan {angkatan}</p>
      {aktif
        ? <span className="lencana">Aktif</span>
        : <span className="lencana off">Tidak aktif</span>}
    </article>
  )
}
