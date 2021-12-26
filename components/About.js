import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"

const About = () => {
    return (
        <div className="container px-4 mx-auto " >
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left" >
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-black">
                        Hello,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-black ">
                        <p className="mb-4">
                            I'm Altela Eleviansyah Pramardhika, a person who loves to stroll into backend development.<br /><br />
                            
                            My duties in PT. Central Jayatama Abadi is taking care of Odoo ERP that hosted either on SAAS or Linux-based server, along with the web serving software like
                            Nginx and Apache. <br /><br />

                            Currently, I'm fascinated to Python and Javascript programming language. Thus, i devote my focus to learn by contributing in open source.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-20 lg:px-4 mb-1">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
