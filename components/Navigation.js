import Link from "next/link"
import React from "react"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-black md:py-3 md:mb-6">
            <div className="container lg:max-w-4xl px-4 mx-auto items-center border-0">
                <div class="grid gap-x-5 grid-cols-4 ">
                    <div>
                        <Link href="/">
                        <a className={"font-medium tracking-wider transition-colors text-white hover:text-sky-500 uppercase"} >
                        ◆
                        </a>
                    </Link>
                    </div>

                    <Link href="/projects">
                        <a className={"font-medium tracking-wider transition-colors text-white hover:text-sky-500 uppercase"} >
                        Projects
                    </a>

                    </Link>

                    <div>
                            <Link href="/experiences">
                        <a className={"font-medium tracking-wider transition-colors text-white hover:text-sky-500 uppercase"} >
                                Experiences
                            </a>
                        </Link>
                    </div>

                    <div>
                            <Link href="/about">
                        <a className={"font-medium tracking-wider transition-colors text-white hover:text-sky-500 uppercase"} >
                                About
                            </a>
                        </Link>
                    </div>
                    <div>


                    </div>

                </div>








            </div>


        </div>
    )
}

export default Navigation;