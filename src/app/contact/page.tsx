"use client";

import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, isSubmitted] = useState(false);

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(name, email, message)
    }

    return (
        <section>
            <h2>
                Kontakta oss!</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label>Ditt namn:</label>
                <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} type="text" placeholder="Namn Namnsson" className="border border-gray-300 rounded-md px-3 py-2" />
                <label>Din mejladress:</label>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="border border-gray-300 rounded-md px-3 py-2" />
                <label>Meddelande:</label>
                <textarea value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setMessage(e.target.value) }} placeholder="Skriv ditt meddelande här..." className="border border-gray-300 rounded-md px-3 py-2"></textarea>
                <button type="submit" >Skicka meddelande</button>
            </form>
        </section>

    )
}