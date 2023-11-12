import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const resumePdfUrl = 'src/resume/Daivikh_Rajesh_Resume.pdf';

    const openResumeInNewTab = () => {
        window.location.href = '#resume';

        setTimeout(() => {
            window.open(resumePdfUrl, '_blank');
        }, 0);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 shadow sm:shadow-md md:shadow-lg lg:shadow-xl">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
            </div>
            <div className="block hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm flex justify-center lg:justify-start lg:flex-grow">
                    <a
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 border-red-500 mr-4 hover:text-gray-300"
                        href="#about"
                    >
                        <span className="text-2xl">About</span>
                    </a>
                    <a
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4 hover:text-gray-300"
                        href="#projects"
                    >
                        <span className="text-2xl">Projects</span>
                    </a>
                    <a
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4 hover:text-gray-300"
                        href="https://daivikhrajesh.github.io/Resume.pdf"
                        target='_blank'
                        // onClick={openResumeInNewTab}
                    >
                        <span className="text-2xl">Resume</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
