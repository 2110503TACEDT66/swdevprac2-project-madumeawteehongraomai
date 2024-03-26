"use client"
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
export default function VideoBanner () {

    const [playing, setPlaying] = useState(true)
    const [pointerPosition, setPointerPosition] = useState({ x:0, y:0})

    return (
        <div className="w-[50%] shadow-lg ml-[2%] my-[3%] p-2 rounded-lg bg-gray-200
        flex flex-row">
            <VideoPlayer vdoSrc="\vdo\IMG_8627.mov" isPlaying={playing}></VideoPlayer>
        </div>
    )
}