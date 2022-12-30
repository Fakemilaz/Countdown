import React from "react";

export default function Navbar() {
    return (
        <>
            <div className="md:container md:mx-auto shadow-lg py-5 px-5 rounded-lg flex justify-between items-center text-center">
                <h1 className="font-bold text-xl">⏱ Let's Countdown</h1>

                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-2 py-2 rounded-lg">Contact Me</button>
            </div>
        </>
    )
}