'use client'

import { textCheak } from "@/controllers/text.controller"
import { useState } from "react";

export default function Createpost() {
    const [text, setText] = useState("");

    const textString = `${text}`

    textCheak(textString)


    return (
        <div className="flex w-full justify-center my-9">
            <form
                className="flex flex-col w-6/12 gap-5 justify-center"
                id="formulario"
            >
                <label htmlFor="titulo">Titulo: </label>
                <input className="bg-transparent border-orange-400 border rounded-lg p-1" type="text" name="titulo" id="title" />
                <textarea
                    className="bg-transparent border-orange-400 border rounded-lg p-1"
                    name="body"
                    id="textArea"
                    cols={30}
                    rows={10}
                    placeholder="Inserte texto aqui"
                    onSubmit={(e) => setText}
                >

                </textarea>
                <button className="bg-orange-500 border-none rounded-lg py-2 hover:bg-orange-600">Enviar</button>
            </form>
        </div>
    )
}

