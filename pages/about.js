import Head from 'next/head'
import Mains from "../components/Mains"
import Footer from "../components/Footer"
import { data } from 'autoprefixer';
import Image from 'next/image'



export default function About() {
  return (

    <div className="container mx-auto lg:max-w-4xl px-5">

    <Head>
      <title>About</title>
      <link rel="icon" href="/fav.png" />
    </Head>

      <h2 class="text-3xl font-medium leading-tight mt-0 mb-2 text-gray-900 mt-20">Hi, let's get to know each other!</h2>
        <p align="justify">My name is Altela Eleviansyah Pramardhika. Most people call me Altela.. or... Aal.<br />
        I live in Balikpapan City, East Borneo, Indonesia.<br /><br />
        After graduating from Vocational Highschool 3 Balikpapan back in 2016, I started my career as IT Support Specialist that mostly handling computer and other end-user device problem.
        I also started pursuing my computer science degree in Universitas Mulia Balikpapan on the same year, and graduated in 2020.<br /><br />
        Besides having experience as technician in previous title, I work using Linux machine as a server administrator in daily basis. At my current company I work in, i have a chance to 
        learn Odoo ERP Enterprise from it's technical side. Started from on-premise or cloud server deployment, along with the core understanding of how the workflow is.
        </p>

        <h2 class="text-3xl font-medium leading-tight mt-0 mb-2 text-gray-900 mt-10">What hobby you are into?</h2>
        <p align="justify">
        Well, i spent my time everyday building something. It's mostly an app that you can find in the project section. 
        When i feel like there's nothing to do, i spent my time strolling github to contribute to open-source project, or, writing things in my blog.
        For the time being, i'm interested in Python programming language and building Odoo Enterprise module.<br /><br />
        Outside the tech industry, I do trade in financial market such as stocks or cryptocurrencies. I also loved to play open world RPG game, and currently playing Genshin Impact.
        </p>

    </div>

    
  )
}
