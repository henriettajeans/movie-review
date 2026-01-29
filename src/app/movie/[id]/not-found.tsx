import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>
                Kunde inte hitta filmen...
            </h2>
            <Link href="/">Gå tillbaka till startsidan</Link>
        </div>
    )
}