import Head from 'next/head'
import Mains from "../components/Mains"
import Footer from "../components/Footer"
import { data } from 'autoprefixer';
import Image from 'next/image'



// function fetchData(){
//   fetch("https://api.github.com/users/altela/repos")
//     .then(response => {
//       if (!response.ok) {
//         throw Error("Error");
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data.data);
//       document.querySelector("#app").innerHTML = <h1>Hellooo</h1>
//     })
// }

// fetch("https://api.github.com/users/altela/repos")
//   .then(function (response) {
//       return response.json();
// }).then(function (obj) {
//   console.log(obj);
// }).catch(function (error){
//   console.error('Something Error');
//   console.error(error);
// })


export default function Projects() {
  return (
    <div className="container mx-auto lg:max-w-4xl px-5">
      <h2 class="text-xl font-medium leading-tight mt-0 mb-2 text-gray-900 mt-20 mb-5">Google Cloud - Juara GCP 2022</h2>
        <div class="grid gap-2 grid-cols-3">
          <div>
          <div class="relative group">
            <a href ="https://www.cloudskillsboost.google/public_profiles/e2e11897-359a-4020-ab4a-4276c7218d56/badges/1644680">
              <img src="/ensure_identity.png"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end bg-black text-gray-200 text-sm">Issued January 14, 2022</div>
            </a>
          </div>
          </div>

          <div>
          <div class="relative group">
            <a href ="https://www.cloudskillsboost.google/public_profiles/e2e11897-359a-4020-ab4a-4276c7218d56/badges/1657380">
            <div><img src="/cloudres.png"></img></div>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end bg-black text-gray-200 text-sm">Issued January 18, 2022</div>
            </a>
          </div>
          </div>

          <div>
          <div class="relative group">
            <a href ="https://www.cloudskillsboost.google/public_profiles/e2e11897-359a-4020-ab4a-4276c7218d56/badges/1679820">
            <div><img src="/fundamental.png"></img></div>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end bg-black text-gray-200 text-sm">Issued January 25, 2022</div>
            </a>
          </div>
          </div>

          <div>
          <div class="relative group">
            <a href ="https://www.cloudskillsboost.google/public_profiles/e2e11897-359a-4020-ab4a-4276c7218d56/badges/1659792">
            <div><img src="/essential.png"></img></div>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end bg-black text-gray-200 text-sm">Issued January 19, 2022</div>
            </a>
          </div>
          </div>

          <div>
          <div class="relative group">
            <a href ="https://www.cloudskillsboost.google/public_profiles/e2e11897-359a-4020-ab4a-4276c7218d56/badges/1681158">
            <div><img src="/sports.png"></img></div>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end bg-black text-gray-200 text-sm">Issued January 25, 2022</div>
            </a>
          </div>
          </div>

          <div>
          <div class="relative group">
            <a href ="https://www.cloudskillsboost.google/public_profiles/e2e11897-359a-4020-ab4a-4276c7218d56/badges/1684884">
            <div><img src="/workspace.png"></img></div>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end bg-black text-gray-200 text-sm">Issued January 26, 2022</div>
            </a>
          </div>
          </div>
          
        </div>

        <h2 class="text-xl font-medium leading-tight mt-0 mb-2 text-gray-900 mt-10 mb-5">Dicoding - Indosat Oreedoo Digital Camp 2020</h2>
        
        <div class="grid gap-2 grid-cols-2 w-80 content-center">

        <div>
          <div class="relative group">
            <a href ="https://www.dicoding.com/certificates/MEPJ5L8LLP3V">
            <div><img src="/ios.png"></img></div>
              <div class="opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Memulai Pemrograman Dengan Swift<br /> Issued May 25, 2020</div>
            </a>
          </div>
          </div>

          <div class="relative group">
            <a href ="https://www.dicoding.com/certificates/MRZMGK2K0ZYQ">
            <div><img src="/ios.png"></img></div>
              <div class="opacity-0 group-hover:opacity-80 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Membuat Aplikasi iOS untuk Pemula<br /> Issued June 17, 2020</div>
            </a>
          </div>
          
        </div>



    </div>

    
  )
}
