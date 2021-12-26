import Link from "next/link"
import React from "react"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-black md:py-3 md:mb-6">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center gap-x-20">
                <Link href="/">
                    <a className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"} >
                        About
                    </a>


                </Link>
            
                <Link href="Project">
                <a className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"} >
                        Projects
                    </a>


                </Link>

            </div>


        </div>
    )
}

export default Navigation;