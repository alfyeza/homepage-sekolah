import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {}
        <Link href="/" className="flex items-center">
          <Image
            src="/logosekolah.png" 
            alt="Logo SMA Avicenna"
            width={90} 
            height={28} 
            className="object-contain"
          />
        </Link>

        {}
        <div className="flex gap-8 text-base font-semibold text-gray-700">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="/berita" className="hover:text-amber-600 transition-colors">
            Berita
          </Link>
        </div>
      </div>
    </nav>
  );
}