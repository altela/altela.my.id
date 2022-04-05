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

    <Head>
      <title>Projects</title>
      <link rel="icon" href="/fav.png" />
    </Head>

      <h2 class="text-2xl font-medium leading-tight mt-0 text-gray-900 mt-20">Odoo ERP Modules</h2>
        <div class="grid gap-2 grid-cols-3">

        <div class="relative group">
            <a href="https://apps.odoo.com/apps/modules/15.0/effective_date_change/" target="_blank">
              <img src="/effective.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Allows user to set Effective Date in transfers</div>
            </a>
          </div>

          <div class="relative group">
            <a href="https://apps.odoo.com/apps/modules/14.0/replace_cust_so/" target="_blank">
              <img src="/replace_cust.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Allows user to change Customer in validated Sales Order</div>
            </a>
          </div>

          <div class="relative group">
            <a href="https://apps.odoo.com/apps/modules/14.0/adjustments_rename/" target="_blank">
              <img src="/rename_adj.jpg"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Allows user to rename in-progress Inventory Adjustment</div>
            </a>
          </div>

          <div class="relative group">
            <a href="https://apps.odoo.com/apps/modules/14.0/base_replace/" target="_blank">
              <img src="/banner-base.jpg"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">The base module of Customer and Vendor replacement</div>
            </a>
          </div>

          <div class="relative group">
            <a href="https://apps.odoo.com/apps/modules/14.0/replace_vendor_po/" target="_blank">
              <img src="/replace_vendor.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Allows user to change Vendor in validated Purchase Order</div>
            </a>
          </div>

          <div class="relative group">
            <a href="https://github.com/altela/ecommerce_central_module" target="_blank">
              <img src="/ecom.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Integrating Central Jayatama Abadi with E-Commerce</div>
            </a>
          </div>

        </div>

        <h2 class="text-2xl font-medium leading-tight mt-0 mb-5 text-gray-900 mt-10">Open-source Contribution</h2>
          <div class="grid gap-2 grid-cols-3">
            <div class="relative group">
              <a href ="https://github.com/altela/sublime-pine-autocomplete" target="_blank">
                <img src="/pine-highlighter.jpg" class="w-50"></img>
                <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Pine Script syntax highlighter for Sublime editor, used in TradingView</div>
              </a>
            </div>

            <div class="relative group">
            <a href="https://github.com/odoo/odoo" target="_blank">
              <img src="/odoo-trans.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Contributing Bahasa Indonesia to Odoo Version 12</div>
            </a>
            </div>

            <div class="relative group">
            <a href="https://github.com/nukeop/nuclear#community-translations/" target="_blank">
              <img src="/nuclear.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Open-source music player that provide songs from all over the internet</div>
            </a>



          </div>
          </div>

          <h2 class="text-2xl font-medium leading-tight mt-0 mb-5 text-gray-900 mt-10">TradingView Scripts</h2>
          <div class="grid gap-2 grid-cols-3">

            <div class="relative group">
            <a href="https://www.tradingview.com/script/LVfJ9vtY-Estimate-Earnings-Surprise-Earnings/" target="_blank">
              <img src="/estimate.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Plot estimate and surprise earning as indicator in TradingView</div>
            </a>
          </div>

          <div class="relative group">
            <a href="https://github.com/altela/TradingView-PineScript/blob/main/10%20Moving%20Averages" target="_blank">
              <img src="/10-MA.jpg" class="w-50"></img>
              <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Plot 10 Moving Averages lines that calculate the average price of certain times</div>
            </a>
          </div>
          </div>

        <h2 class="text-2xl font-medium leading-tight mt-0 mb-5 text-gray-900 mt-10">Code Editor</h2>
          <div class="grid gap-2 grid-cols-3">
            <div class="relative group">
              <a href ="https://github.com/altela/sublime-pine-autocomplete" target="_blank">
                <img src="/pinescript_auto.jpg" class="w-50"></img>
                <div class="opacity-0 group-hover:opacity-70 duration-300 absolute left-0 bottom-0 right-0 z-10 flex text-center items-end bg-black text-gray-200 text-sm">Pine Script Autocomplete for Sublime editor, used in TradingView</div>
              </a>
            </div>
          </div>
        

          

    </div>


)
}



      

{/* <table>
  <tbody>
    <tr>
      <td>


      </td>

      <td>

      </td>

      <td>

      </td>

    </tr>
  </tbody>
</table>

<table>
<tr>
<h2 class="text-2xl font-medium leading-tight mt-0 mb-2 text-gray-900 mt-10">Code Editor</h2>
</tr>
<tr>

<td>
<div>

      </td>


</tr>
</table> */}



// </div>



    

    
//   )
// }
