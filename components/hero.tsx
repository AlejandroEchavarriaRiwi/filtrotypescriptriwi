'use client'

import { useEffect } from "react";
export default function Hero() {
    useEffect(() => {
        localStorage.removeItem('token');
    }, []);
    return (
        <div className="flex flex-wrap">
            <div className="w-full mb-10 sm:w-8/12">
                <div className="container h-full mx-auto sm:p-10">
                    <nav className="flex items-center justify-between px-4">
                        <div className="flex gap-3 text-4xl font-bold">
                            Data Leaker Gates<span className="text-yellow-300">.</span>
                        </div>
                    </nav>
                    <header className="container items-center h-full px-4 mt-10 lg:flex lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold lg:text-6xl">Encuentra <span className="text-yellow-300">AQUI</span></h1>
                            <div className="w-20 h-2 my-4 bg-blue-400"></div>
                            <p className="mb-10 text-xl">Información de calidad e información segura para los usuarios de foros, chats y demás</p>
                            <div className="flex gap-5">
                            <button className="px-4 py-2 text-xl font-medium text-white bg-red-500 rounded shadow hover:bg-red-600" onClick={()=>{window.location.href = "/login"}}>Ingresa</button>
                            <button className="px-4 py-2 text-xl font-medium text-white bg-red-500 rounded shadow hover:bg-red-600" onClick={()=>{window.location.href = "/register"}}>Registrate</button>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <img src="https://www.freecodecamp.org/news/content/images/2022/05/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" alt="Leafs" className="object-cover w-full h-48 sm:h-screen sm:w-4/12"/>
        </div>
    )
}