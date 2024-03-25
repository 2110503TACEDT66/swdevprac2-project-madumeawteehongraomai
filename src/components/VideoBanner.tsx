"use client"
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { Rating } from '@mui/material'
import { useWindowListener } from "@/hooks/useWindowListener"
export default function VideoBanner () {

    const [playing, setPlaying] = useState(true)
    const [pointerPosition, setPointerPosition] = useState({ x:0, y:0})
    const contextMenuHandler = (event: MouseEvent) => {
        event.preventDefault();
    };

    useWindowListener("contextmenu", (e)=>contextMenuHandler);


    useWindowListener('pointermove', (e)=>{
        setPointerPosition( {x: (e as PointerEvent).clientX, y: (e as PointerEvent).clientY } )
    })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
        flex flex-row">
            <VideoPlayer vdoSrc="/vdo/promote.mp4" isPlaying={playing}></VideoPlayer>
        </div>
    )
}