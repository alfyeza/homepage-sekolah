import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const videoList = [
    {
      id: 1,
      title: "Implementasi 7 Habits di SMA Avicenna",
      duration: "3:38",
      youtubeUrl: "https://youtu.be/PnM5cwsLvGw?si=_6p4f9aHmPnDAWCO",
    },
    {
      id: 2,
      title: "Liputan TVRI: TEDx Avicenna Cinere School",
      duration: "1:43",
      youtubeUrl: "https://youtu.be/n6HY-c198xE?si=0bZfC9dMOQTf1Jvt", 
    },
    {
      id: 3,
      title: "Testimoni Orang Tua Wisudawan SMA Avicenna Jagakarsa",
      duration: "4:12",
      youtubeUrl: "https://youtu.be/PnM5cwsLvGw?si=UfLLH-7AnAVyu1mb", 
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Bagian Banner Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ✨ AVICENNA LEADERSHIP SCHOOL
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Membentuk pemimpin muda berkarakter untuk masa depan.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Menjadi sekolah terdepan dalam membentuk pemimpin muda yang berkarakter luhur, berprestasi dan adaptif di era global.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/berita"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors"
              >
                Lihat Berita
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-200 transition-colors"
              >
                Kenali Sekolah Kami &darr;
              </Link>
            </div>
          </div>

          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/sekolah.jpg"
              alt="Banner SMA Avicenna Jagakarsa"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bagian Teks Penjelasan & 3 Fondasi Utama */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            SMA Avicenna Jagakarsa - Leadership School
          </h2>
          
          <p className="text-base md:text-lg">
            SMA Avicenna Leadership School Indonesia memiliki komitmen yang sangat kuat dari semua pihak baik Tenaga Pendidik, Kepala Sekolah, Yayasan dan Orang Tua untuk memberikan upaya maksimal dalam proses belajar siswa.
          </p>

          <p className="text-base md:text-lg">
            Proses belajar guna mencapai tujuan pendidikan yaitu untuk mencerdaskan dan mengembangkan potensi di dalam diri para siswa dirangkum dalam 3 (tiga) fondasi utama yaitu Akademik, Kepemimpinan dan Budaya.
          </p>

          <div className="space-y-4 pt-2">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 text-base mb-1">Fondasi Akademik</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dimana Sekolah menjamin lingkungan belajar berlangsung kondusif bagi prestasi siswa dalam mewujudkan potensi tertinggi mereka.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 text-base mb-1">Fondasi Kepemimpinan</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dimana Sekolah memastikan bahwa keterampilan kepemimpinan yang penting termasuk 7 Habits diajarkan secara efektif kepada siswa dan keluarga.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 text-base mb-1">Fondasi Budaya</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dimana Sekolah bertanggungjawab atas pendidikan mereka melalui penerapan prinsip KEPEMIMPINAN seperti penetapan tujuan/target dalam setiap aktivitas Siswa, Tenaga Pendidik dan Tenaga Kependidikan.
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Banner PPDB Online (Baru - Sebelum Video YouTube) */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Kolom Kiri: Ilustrasi / Aksen Kuning */}
          <div className="md:col-span-4 bg-amber-100/70 p-8 md:p-12 flex flex-col items-center justify-center text-center h-full">
            <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center shadow-md mb-4 text-3xl">
              📝
            </div>
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              PPDB ONLINE
            </span>
          </div>

          {/* Kolom Kanan: Teks & Tombol */}
          <div className="md:col-span-8 p-8 md:p-12 space-y-4">
            <span className="text-xs font-semibold text-amber-700 tracking-wider uppercase">
              TAHUN AJARAN 2027–2028
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Penerimaan Peserta Didik Baru
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Daftarkan putra-putri Anda sekarang dan jadikan bagian dari komunitas Avicenna Leadership School. Proses pendaftaran mudah, cepat, dan dilakukan sepenuhnya secara online.
            </p>
            <div className="pt-2">
              <a
                href="https://ppdb.sekolah-avicenna.sch.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-sm transition-all hover:scale-105"
              >
                <span>👤</span>
                <span>Menuju PPDB Online</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Galeri Video Terbaru */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              GALERI KEGIATAN
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
              Video Terbaru Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoList.map((video) => (
              <a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/sekolah.jpg"
                    alt={video.title}
                    fill
                    className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-700 transition-colors">
                    <svg
                      className="w-6 h-6 text-white translate-x-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
                    {video.duration}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {video.title} &rarr;
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bagian Sebaran Lulusan Alumni */}
        <div className="bg-[#292317] text-white p-10 md:p-16 rounded-3xl text-center shadow-lg relative overflow-hidden flex flex-col items-center justify-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Sebaran Lulusan Alumni
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Lihat peta interaktif persebaran alumni SMA Avicenna yang telah melanjutkan ke berbagai perguruan tinggi terbaik di dalam dan luar negeri.
            </p>
          </div>

          <a
            href="https://sekolah-avicenna.sch.id/test_alumni.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#facc15] hover:bg-[#eab308] text-gray-900 font-bold px-6 py-3 rounded-full shadow-md transition-all hover:scale-105"
          >
            <span>🗺️</span>
            <span>Lihat Peta Sebaran Alumni</span>
          </a>
        </div>

      </div>
    </div>
  );
}