import Link from "next/link";
import Image from "next/image";

const beritaData = {
  "1": {
    title: "Penerimaan Siswa Baru 2026/2027",
    date: "10 Okt 2026",
    image: "/beritappdb.jpg", 
    content: "SMA Avicenna School Jagakarsa sudah membuka PPDB Gelombang Early Bird pada tanggal 21 September - 20 November 2025. Daftarkan putra-putri Anda sekarang dan jadikan bagian dari komunitas Avicenna Leadership School.",
  },
  "2": {
    title: "80,12% Keterserapan Siswa Masuk PTN, PTLN, dan Kedinasan",
    date: "04 Sep 2026",
    image: "/beritaptn.jpg", 
    content: "Segenap civitas akademika SMA Avicenna Jagakarsa mengucapkan Selamat & Sukses atas pencapaian membanggakan para siswa dengan 80,12% keterserapan di PTN, PTLN, dan sekolah kedinasan. Pencapaian ini menjadi bukti dari kerja keras, semangat belajar, serta dukungan dan kolaborasi seluruh keluarga besar Avicenna. Berdasarkan data sebaran, siswa diterima di berbagai perguruan tinggi ternama seperti Universitas Indonesia, Universitas Pembangunan Nasional Veteran Jakarta, serta berbagai PTN/PTLN dan kedinasan lainnya.",
  },
  "3": {
    title: "SMA Avicenna Jagakarsa Raih Bronze Medal di China",
    date: "14 Sep 2026",
    image: "/beritasiswa.jpg", 
    content: "Kabar prestasi membanggakan datang dari SMA Avicenna Jagakarsa! Selamat kepada Sultan dan Atifa yang berhasil meraih Bronze Medal pada Indonesia–China International Business Case Competition 2026. Kompetisi bisnis internasional ini merupakan bagian dari rangkaian Indonesia–China Innovation Education Summit 2026 dalam Worlddidac Asia 2026 di Hangzhou, China. Ajang ini menjadi wadah bagi generasi muda untuk mengasah kemampuan bisnis, bertukar ide, dan membangun koneksi global.",
  },
};

export default async function DetailBerita({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const berita = beritaData[id] || {
    title: "Detail Berita Sekolah",
    date: "Oktober 2026",
    image: "/sekolah.jpg",
    content: "Informasi lengkap mengenai kegiatan dan pengumuman resmi dari SMA Avicenna Jagakarsa.",
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Link
            href="/berita"
            className="text-sm font-semibold text-amber-600 hover:underline"
          >
            &larr; Kembali ke Berita
          </Link>
        </div>

        <div className="mb-3">
          <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-md font-semibold inline-block">
            {berita.date}
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          {berita.title}
        </h1>
        
        <div className="relative h-[450px] md:h-[600px] w-full rounded-2xl overflow-hidden mb-8 border border-gray-200 shadow-sm bg-gray-900 flex items-center justify-center">
          <Image
            src={berita.image}
            alt={berita.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed">
          <p>{berita.content}</p>
        </div>
      </div>
    </div>
  );
}