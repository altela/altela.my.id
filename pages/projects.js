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
      <h2 class="text-3xl font-medium leading-tight mt-0 mb-2 text-gray-900 mt-20">Odoo ERP Modules</h2>

<table>
  <tbody>
    <tr>
      <td>

      <div class="relative group">
        <a href="https://apps.odoo.com/apps/modules/15.0/adjustment_rename/" target="_blank">
          <img src="/rename_adj.jpg" class="max-w-full max-h-full"></img>
          <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-end bg-black text-gray-200 text-sm">Allows user to rename in-progress Inventory Adjustment </div>
        </a>
      </div>

      </td>
      <th><img src="/banner-base.jpg" alt="mammals" class="max-w-full max-h-full" title="mammals"></img></th>

    </tr>
  </tbody>
</table>



    </div>

    
  )
}
