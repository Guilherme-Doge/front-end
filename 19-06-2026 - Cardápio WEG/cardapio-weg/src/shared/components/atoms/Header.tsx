import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md z-10">
            <div className="flex items-center">
                <Image 
                    src="/weg-logo.png"
                    alt="WEG's Logo" 
                    width={100} 
                    height={40} 
                    className="object-contain"
                />
            </div>
            
            <nav>
                <ul className="list-none flex flex-row gap-6 font-medium text-gray-700">
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">
                        <Link href="/cardapio">
                            Cardápio
                        </Link>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">
                        <Link href="/admin">
                            Admin
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
