import Head from 'next/head'
import Mains from "../components/Mains"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Altela Eleviansyah Pramardhika</title>
        <link rel="icon" href="/fav.png" />
      </Head>


      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Mains/>
      </main>
    </div>
  )
}