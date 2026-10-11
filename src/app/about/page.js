"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [openSection, setOpenSection] = useState("program");

  const fasilitasCategories = [
    {
      id: "kelas",
      title: "Ruang Kelas",
      images: ["/rkelas_1.jpg", "/rkelas_2.jpg", "/rkelas_3.jpg"],
    },
    {
      id: "uks",
      title: "Ruang UKS",
      images: ["/ruks_1.jpg", "/ruks_2.jpg", "/ruks_3.jpg"],
    },
    {
      id: "kantin",
      title: "Kantin Sekolah",
      images: ["/kantin_1.jpg", "/kantin_2.jpg", "/kantin_3.jpg"],
    },
    {
      id: "lab",
      title: "Laboratorium Komputer",
      images: ["/labkom_1.jpg", "/labkom_2.jpg", "/labkom_3.jpg"],
    },
    {
      id: "perpus",
      title: "Perpustakaan",
      images: ["/perpus_1.jpg", "/perpus_2.jpg", "/perpus_3.jpg"],
    },
  ];

  const programList = [
    "Kurikulum Merdeka",
    "Proyek Penguatan Profil Pelajar Pancasila (P5)",
    "Proyek STEAM",
    "Leader in Me",
    "Avicenna English Conversation (AEC)",
    "Pembelajaran Literasi, Numerasi, dan Public Speaking",
    "Pembelajaran dan Pembiasaan Soal UTBK",
    "Karya Tulis (Kelas 10-11)",
    "Entrepreneurship (Market day)",
    "Avicenna Student Research (ASR) (Kelas 10)",
    "Leadership Camp – LiM Camp (Kelas 11)",
    "English Day",
    "Student Gathering – Edu Tour (Kelas 12)",
    "Konsultasi BK & Psikolog (Akademik dan Non Akademik)",
    "Pembelajaran Skolastik",
    "Try Out UTBK – Pembahasan Try Out (Kelas 10, 11, dan 12)",
    "Bimbingan Belajar bersama Nurul Fikri",
    "Fasilitasi Studi ke Luar Negeri"
  ];

  const kegiatanList = [
    "Pendampingan Persiapan Masuk PTN & PLTN",
    "Pembiasaan 7 Habits",
    "Leader in Me (LIM) Camp",
    "Masa Pengenalan Lingkungan Sekolah (MPLS)",
    "Pembiasaan Ibadah sesuai Agama masing-masing",
    "Avicenna Student Research (ASR)",
    "Avicenna Peduli Lingkungan (APEL)",
    "English, Math, and Science Olimpiad",
    "Ektrakurikuler dan Club",
    "Parenting dan Psikoedukasi",
    "Motivation Training"
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Bagian Pengantar & 3 Fondasi Utama */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            SMA Avicenna Jagakarsa - Leadership School
          </h1>
          
          <p className="text-base md:text-lg">
            SMA Avicenna Leadership School Indonesia memiliki komitmen yang sangat kuat dari semua pihak baik Tenaga Pendidik, Kepala Sekolah, Yayasan dan Orang Tua untuk memberikan upaya maksimal dalam proses belajar siswa.
          </p>

          <p className="text-base md:text-lg">
            Proses belajar guna mencapai tujuan pendidikan yaitu untuk mencerdaskan dan mengembangkan potensi di dalam diri para siswa dirangkum dalam 3 (tiga) fondasi utama yaitu Akademik, Kepemimpinan dan Budaya.
          </p>

          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1">Fondasi Akademik</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dimana Sekolah menjamin lingkungan belajar berlangsung kondusif bagi prestasi siswa dalam mewujudkan potensi tertinggi mereka.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1">Fondasi Kepemimpinan</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dimana Sekolah memastikan bahwa keterampilan kepemimpinan yang penting termasuk 7 Habits diajarkan secara efektif kepada siswa dan keluarga.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-1">Fondasi Budaya</h3>
              <p className="text-sm md:text-base text-gray-600">
                Dimana Sekolah bertanggungjawab atas pendidikan mereka melalui penerapan prinsip KEPEMIMPINAN seperti penetapan tujuan/target dalam setiap aktivitas Siswa, Tenaga Pendidik dan Tenaga Kependidikan.
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Profil Sekolah, Visi & Misi */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8">
          <div>
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              TENTANG KAMI
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1 mb-4">
              Profil Sekolah
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              SMA Avicenna Jagakarsa merupakan sekolah swasta unggulan yang berkomitmen mencetak pemimpin muda berkarakter luhur, berprestasi, dan adaptif di era global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/60">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Sekolah</h3>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;Menjadi sekolah terdepan dalam membentuk pemimpin muda yang berkarakter luhur, berprestasi dan adaptif di era global.&rdquo;
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Sekolah</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base leading-relaxed">
                <li>Menyelenggarakan pendidikan berkualitas berbasis pembentukan karakter kepemimpinan.</li>
                <li>Mengembangkan potensi akademik dan non-akademik siswa secara optimal.</li>
                <li>Menciptakan lingkungan belajar yang kondusif, inovatif, dan berwawasan global.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bagian Program & Kegiatan */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
              <Image
                src="/kegiatan.jpg"
                alt="Kegiatan Sekolah SMA Avicenna"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
                <button
                  onClick={() => setOpenSection(openSection === "program" ? "" : "program")}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-amber-600 hover:bg-gray-100/60 transition-colors"
                >
                  <span className="tracking-wide">PROGRAM SMA AVICENNA</span>
                  <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-600">
                    {openSection === "program" ? "▲" : "▼"}
                  </span>
                </button>

                {openSection === "program" && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white">
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                      {programList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
                <button
                  onClick={() => setOpenSection(openSection === "kegiatan" ? "" : "kegiatan")}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-amber-600 hover:bg-gray-100/60 transition-colors"
                >
                  <span className="tracking-wide">KEGIATAN SMA AVICENNA</span>
                  <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-600">
                    {openSection === "kegiatan" ? "▲" : "▼"}
                  </span>
                </button>

                {openSection === "kegiatan" && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-white">
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                      {kegiatanList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Fasilitas Sekolah */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              SARANA & PRASARANA
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
              Fasilitas Sekolah
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              Lingkungan dan sarana penunjang kegiatan belajar yang nyaman dan representatif di SMA Avicenna Jagakarsa.
            </p>
          </div>

          <div className="space-y-10">
            {fasilitasCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative h-52 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100 group"
                    >
                      <Image
                        src={img}
                        alt={`${category.title} ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}