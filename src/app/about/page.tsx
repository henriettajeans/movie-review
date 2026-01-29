export default function About() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="mb-6 text-3xl font-semibold text-gray-900">
                Om oss
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                    Den här sidan är skapad ur en kärlek till film – stora berättelser,
                    små detaljer och allt däremellan. Målet är att samla inspiration,
                    tips och nyfikenhet kring filmer som berör, underhåller eller stannar
                    kvar lite längre än eftertexterna.
                </p>

                <p>
                    Här kan du utforska filmer från olika genrer, epoker och uttryck.
                    Oavsett om du letar efter något nytt att se, vill återupptäcka en
                    favorit eller bara bläddra runt bland filmtips, hoppas vi att du ska
                    känna dig hemma.
                </p>

                <p>
                    Projektet är byggt som en del av ett utvecklingsarbete där fokus ligger
                    på enkel design, tydlig struktur och en behaglig användarupplevelse.
                    Innehållet uppdateras och utvecklas löpande.
                </p>
            </div>

            <div className="mt-10 rounded-lg bg-gray-50 p-6">
                <h2 className="mb-2 text-lg font-medium text-gray-900">
                    Teknik & vision
                </h2>
                <p className="text-sm text-gray-600">
                    Webbplatsen är byggd med React och Tailwind CSS och använder ett
                    externt filmdatabibliotek för att hämta aktuell information.
                    Fokus ligger på att hålla koden tydlig, komponenterna återanvändbara
                    och designen avskalad.
                </p>
            </div>
        </section>)
}