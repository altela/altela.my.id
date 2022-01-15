import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"
import Typical from 'react-typical'


const Home = () => {
return(
    <div className="container px-4 mx-auto " >
    <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left" >
        <div className="lg:px-4 lg:mt-12 ">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-6xl">
                Hello,
            </h1>
            <div className="mt-6 text-gray-800 ">
                <p className="mb-4 text-4xl font-bold">
                I'm Altela Eleviansyah Pramardhika. 
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

            <strong className=" mb-5 text-3xl font-white">
                <Typical
                    steps={[
                    'A Backend Developer.',
                    1200,
                    'Odoo ERP Developer.',
                    1200,
                    'Server Administrator.',
                    1200,
                    'A Backend Developer.',
                    1200,
                    ]}
                    wrapper="p"
                    loop={1}
                />
            </strong>
        </div>




        {/* <div className="flex-shrink-0 lg:mt-20 lg:px-4 mb-1">
            <Image
                src={profile}
                alt="Profile"
                priority={true}
                className="rounded-full"
                width={250}
                height={250}
                placeholder="blur"
            />
        </div> */}
    </div>
</div>
)
}

export default Home;
