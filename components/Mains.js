import React from "react"
import Typical from 'react-typical'



const Home = () => {
return(
    <div className="container px-5 mx-auto " >
    <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left" >
        <div className="lg:px-4 lg:mt-0 ">
            <h1 className="text-3xl font-bold text-gray-900 lg:text-6xl">
                Hello,
            </h1>
            <div className="mt-6 text-gray-800 ">
                <p className="mb-4 text-2xl font-bold">
                I'm Altela Eleviansyah Pramardhika. 
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

            <strong className="mb-5 text-2xl text-gray-800 font-mono">
                <Typical
                    steps={[
                    'IT Support. Server Administrator. Odoo Developer.',
                    500,
                    'A Backend Developer. Based in Balikpapan, Indonesia.',
                    500,
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
