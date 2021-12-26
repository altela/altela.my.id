import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-8 sm:pb-25 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-black">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-black-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p></p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://www.linkedin.com/in/altelapramardhika/"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/altela"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://projectflakes.com"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Blog
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;