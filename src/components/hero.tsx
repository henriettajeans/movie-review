import Image from "next/image";
export default function Hero() {
    const imgUrl = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <>
            <span>
                Hej och vvälkommen till.....
            </span>
            <h1>Movie Review Page</h1>
            <figure>
                <Image src={imgUrl} alt="_" width={700} height={400} />
            </figure>
        </>
    )
}