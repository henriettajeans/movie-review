import Link from "next/link"

export default function NavBar() {

    // Creating nav objects to map in render 
    const nav = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
    return (
        <nav className="w-full px-6 py-4">
            <ul className="flex items-center">
                {
                    nav.map((nav, index) => <li
                        key={index}
                        className={index === 1 ? "ml-auto" : ""}
                    >
                        <Link
                            href={nav.href}
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition"
                        >
                            {nav.name}
                        </Link>
                    </li>)
                }
            </ul>
        </nav>
    )
}