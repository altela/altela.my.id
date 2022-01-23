import Link from "next/link"
import React from "react"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-black md:py-3 md:mb-6">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center gap-x-8">
                <Link href="/">
                    <a className={"font-large tracking-wider transition-colors text-white hover:text-sky-500 uppercase"} >
                    ◆
                    </a>
                </Link>

                <Link href="/about">
                <a className={"font-medium tracking-wider transition-colors text-white hover:text-sky-500 uppercase"} >
                        About
                    </a>
                </Link>

                <Link href="/projects">
                <a className={"font-medium tracking-wider transition-colors text-white hover:text-sky-500 uppercase"} >
                        Projects
                    </a>

                </Link>



            </div>


        </div>
    )
}

export default Navigation;