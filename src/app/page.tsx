import Image from "next/image"
import Banner from "@/components/Banner"
import HeaderBanner from "@/components/HeaderBanner"

export default function Home() {
  return (
    <main className="h-[80vh] w-[100%] bg-white">
      <HeaderBanner/>
      <Banner/>
    </main>
  )
}
