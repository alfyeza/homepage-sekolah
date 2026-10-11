import Link from "next/link";

export default function BeritaPage() {
  const beritaList = [
    {
      id: "1",
      date: "10 Okt 2026",
      title: "Penerimaan Siswa Baru 2026/2027",
      excerpt: "Pendaftaran peserta didik baru gelombang pertama telah resmi dibuka secara online. Daftarkan putra-putri Anda sekarang...",
    },
    {
      id: "2",
      date: "04 Sep 2026",
      title: "80,12% Keterserapan Siswa Masuk PTN, PTLN, dan Kedinasan",
      excerpt: "Segenap civitas akademika mengucapkan selamat dan sukses atas pencapaian membanggakan dengan 80,12% keterserapan lulusan di PTN, PTLN, dan sekolah kedinasan.",
    },
    {
      id: "3",
      date: "14 Sep 2026",
      title: "SMA Avicenna Jagakarsa Raih Bronze Medal di China",
      excerpt: "Kabar membanggakan datang dari siswa yang berhasil meraih Bronze Medal pada Indonesia-China International Business Case Competition 2026 di Hangzhou.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Berita */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Berita & Kegiatan
          </h1>
          <p className="text-gray-600 text-base">
            Informasi terbaru seputar kegiatan akademik dan prestasi sekolah.
          </p>
        </div>

        {/* Grid Kartu Berita (3 Berita Utama) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beritaList.map((berita) => (
            <div
              key={berita.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-md inline-block">
                  {berita.date}
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {berita.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {berita.excerpt}
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href={`/berita/${berita.id}`}
                  className="text-amber-600 font-semibold text-sm hover:underline inline-flex items-center gap-1"
                >
                  <span>Baca Selengkapnya</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}