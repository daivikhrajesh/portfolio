import React, { Fragment } from 'react';
import HeaderRight from '../hero/HeaderRight';

const About = () => {
    return (
        <Fragment>
            <div className="flex flex-col justify-center lg:flex-row lg:justify-evenly">
                <div className="my-12 flex flex-col items-start">
                    <h1 className="text-6xl">Hi, I'm Daivikh Rajesh!</h1>
                    <h2 className="text-4xl text-gray-700">More about Me</h2>
                    <p className="text-lg my-4">
                        I've always been interested and enjoyed working on things that could use my creativity and problem-solving skills. I'm experienced in full-stack web development, python programming, and data visualization. From hackathons to brain-computer interfaces, my journey is all about tech and fun! Please feel free to check them out in my personal projects below.
                    </p>
                    <div className="md:w-1/3">
                        <a href="#contact">
                        <button className="shadow bg-grey hover:bg-gray-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded" type="">
                            Get In Touch
                        </button>
                        </a>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    {/* <HeaderRight /> */}
                    {/* adda a hero image */}
                    <img src="/Webpage-img-1.png" alt="Hero Image" />
                </div>
            </div>

            {/* Skills Section */}
            <div className="my-8 text-center border-2 rounded-lg p-4 max-w-md mx-auto bg-blue-100">
                <h2 className="text-3xl font-bold mb-4"><i>Skills</i></h2>
                <div className="flex justify-center">
                    <div className="mx-4">
                        <ul className="list-disc ml-6">
                            <li>Python</li>
                            <li>MySQL/PostgreSQL</li>
                            <li>PowerBI</li>
                            <li>Tableau</li>
                            <li>MS Azure</li>
                        </ul>
                    </div>
                    <div className="mx-4">
                        <ul className="list-disc ml-6">
                            <li>Tensorflow</li>
                            <li>Numpy/Pandas</li>
                            <li>ETL & EDA</li>
                            <li>Scikit-learn/Matplotlib</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default About;
