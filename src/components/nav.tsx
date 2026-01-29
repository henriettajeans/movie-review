import Link from "next/link"

export default function NavBar() {

    // Creating nav objects to map in render 
    const nav = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
    return (
        <nav>
            <ul>
                {
                    nav.map((nav, index) => <li key={index}> <Link href={nav.href}>{nav.name}</Link></li>)
                }
            </ul>
        </nav>
    )
}