import Link from "next/link";

export default function BeritaCard({ id, title, date, summary }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="p-5">
        <span className="text-xs text-amber-600 font-semibold">{date}</span>
        <h3 className="font-bold text-lg text-gray-800 mt-1 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{summary}</p>
      </div>
      <div className="px-5 pb-5">
        <Link
          href={`/berita/${id}`}
          className="text-sm font-semibold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
        >
          Baca Selengkapnya &rarr;
        </Link>
      </div>
    </div>
  );
}