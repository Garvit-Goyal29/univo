import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logoMMM from "../assets/logoMMM.png"
import heroM from "../assets/heroM.png"
import './Home.css'
import ScrollProgramBar from "./ScrollProgramBar";

function Home() {
    const [num, setNum] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setNum(prevNum => {
                if (prevNum == 529) {
                    return prevNum;
                }
                return prevNum + 1;
            });
        },5);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ScrollProgramBar />
            <div className="w-full min-h-screen flex flex-col items-center justify-evenly bg-white">
                <div className="w-full h-28 flex justify-between items-center pl-9 pr-9">
                    <img src={logoMMM} alt="" className="h-12 w-auto" />
                    <div className="flex gap-1 items-center justify-center">
                        <Link to="/login"
                            className="text-purple-400 text-sm font-bold hover:text-black">
                            Login
                        </Link>
                        <p className="text-purple-400 font-bold">/</p>

                        <Link to="/signup"
                            className="bg-purple-400 p-2 text-sm rounded-xl font-bold hover:bg-black hover:text-purple-400">
                            Sign-up
                        </Link>
                    </div>
                </div>
                <div className="flex w-full h-full items-center justify-evenly gap-10 pl-8 mt-10">
                    <div className="w-full pl-32">
                        <p className="text-3xl font-bold leading-tight">
                            All{" "}
                            <span className="text-purple-400 typing">Student tools</span>
                            <span className="text-purple-400 blink">|</span>
                            <br />
                            one smart place.
                        </p>
                    </div>
                    <div className="heroWrapper w-full pl-40 relative">
                        <div className="heroMB w-full h-40 rounded-l-full"></div>
                        <img src={heroM} alt="" className="imghero h-56 drop-shadow-[0_0_6px_rgba(0,0,0,1)] w-auto absolute bottom-0 right-14" />
                    </div>
                </div>

                <div className="flex items-center justify-start mt-2 pl-7 text-start w-220">
                    <p className="text-3xl font-bold text-[#FFC632]">{num}+ {"Users"}</p>
                </div>

                <div className="w-220 h-[45vh] mt-[2vh] flex items-center justify-center">
                    <div className="relative block group">
                        <span className="absolute inset-0 border-2 border-black border-dashed rounded-lg"></span>
                        <div className="w-220 transition text-purple-400 border-2 titlediv border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 hover:bg-purple-400 hover:text-black">
                            <div className="p-6">
                                <p className="mb-4 text-5xl font-bold title">UNIVO</p>
                                <p className="mt-1 max-w-4xl text-lg">Your Academic Control Panel — a smart utility platform built to help students calculate, track,
                                    and manage their academic life efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-evenly bg-white">
                    <p className="text-4xl font-bold inline text-purple-400 mb-5 w-220">FEATURES</p>
                    <div className="w-220 flex items-center justify-between">
                        <div className="relative block group  ">
                            <span className="absolute inset-0 border-2 border-black border-dashed rounded-lg"></span>
                            <div className="w-50 transition text-purple-400 border-2 border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 hover:bg-purple-400 hover:text-black">
                                <div className="p-6">
                                    <p className="mt-4 text-lg font-medium">SGPA Calcu</p>
                                    <p className="mt-1 text-xs">“Calculate semester performance using grades and credits.”</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative block group  ">
                            <span className="absolute inset-0 border-2 border-black border-dashed rounded-lg"></span>
                            <div className="w-50 transition text-purple-400 border-2 border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 hover:bg-purple-400 hover:text-black">
                                <div className="p-6">
                                    <p className="mt-4 text-lg font-medium">Cgpa Predic</p>
                                    <p className="mt-1 text-xs">“Estimate your overall CGPA using past results and upcoming semesters.”</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative block group  ">
                            <span className="absolute inset-0 border-2 border-black border-dashed rounded-lg"></span>
                            <div className="w-50 transition text-purple-400 border-2 border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 hover:bg-purple-400 hover:text-black">
                                <div className="p-6">
                                    <p className="mt-4 text-lg font-medium">Notes Area</p>
                                    <p className="mt-1 text-xs">“Keep all your academic notes easily accessible and well organized.”</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative block group  ">
                            <span className="absolute inset-0 border-2 border-black border-dashed rounded-lg"></span>
                            <div className="w-50 transition text-purple-400 border-2 border-black rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 hover:bg-purple-400 hover:text-black">
                                <div className="p-6">
                                    <p className="mt-4 text-lg font-medium">BMI Calcu</p>
                                    <p className="mt-1 text-xs">“Check your BMI using height and weight to track your physical health.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full mx-auto px-8 py-16">
                <div className="mb-14">
                    <h2 className="text-4xl font-bold text-purple-400 mb-4">About UNIVO</h2>
                    <p className="text-black leading-relaxed w-full">
                        UNIVO is designed for students who want clarity and control over their academics.
                        Instead of switching between multiple apps and manual calculations,
                        UNIVO centralizes essential academic tools into a single, easy-to-use. <br />
                        Health Calcu Tools - Coming soon
                    </p>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-purple-400 mb-8">
                        What Problems UNIVO Solves
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        <div className="bg-purple-400 p-6 rounded-xl shadow-purple-300 hover:shadow-md transition hover:scale-103 duration-300">
                            <h3 className="font-semibold text-white mb-2">Scattered Tools</h3>
                            <p className="text-sm">
                                No more switching between calculators, notes apps etc. many tools live inside UNIVO.
                            </p>
                        </div>

                        <div className="bg-purple-400 p-6 rounded-xl shadow-purple-300 hover:shadow-md hover:scale-103 transition duration-300">
                            <h3 className="font-semibold text-white mb-2">Manual Calculations</h3>
                            <p className="text-sm">
                                Manual SGPA and CGPA calculations are error-prone. UNIVO gives instant and accurate results.
                            </p>
                        </div>

                        <div className="bg-purple-400 p-6 rounded-xl shadow-purple-300 hover:shadow-md hover:scale-103 transition duration-300">
                            <h3 className="font-semibold text-white mb-2">Lack of Academic Planning</h3>
                            <p className="text-sm">
                                Students don’t know how grades affect CGPA. UNIVO helps predict and plan ahead.
                            </p>
                        </div>

                        <div className="bg-purple-400 p-6 rounded-xl shadow-purple-300 hover:shadow-md hover:scale-103 transition duration-300">
                            <h3 className="font-semibold text-white mb-2">No Central Resource Hub</h3>
                            <p className="text-sm">
                                Important notes and links get lost.
                                UNIVO becomes your personal academic vault.
                            </p>
                        </div>

                        <div className="bg-purple-400 p-6 rounded-xl shadow-purple-300 hover:shadow-md hover:scale-103 transition duration-300">
                            <h3 className="font-semibold text-white mb-2">Overcomplicated Systems</h3>
                            <p className="text-sm">
                                Existing platforms are heavy and confusing.
                                UNIVO focuses on speed, simplicity, and clarity.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            <footer className="h-[40vh] bg-[#171717] border-t border-neutral-800 flex flex-col justify-between">

                {/* Top / Identity */}
                <div className="flex flex-col items-center justify-center pt-2">
                    <p className="text-white text-sm">
                        Made with <span className="text-red-500">❤️</span> by Garv
                    </p>
                    <p className=" text-gray-400 text-xs">
                        Learn • Build • Improve
                    </p>
                </div>

                {/* Middle / Info */}
                <div className="flex w-full h-[60%] justify-evenly p-5 text-sm text-gray-400">

                    <div className="w-[31%]">
                        <h3 className="text-white mb-2 text-lg font-semibold">About</h3>
                        <p>
                            B.Tech student building web applications using React & Tailwind CSS.
                        </p>
                    </div>

                    <div className="w-[31%]">
                        <h3 className="text-white mb-2 text-lg font-semibold">Tech Stack</h3>
                        <ul className="space-y-1">
                            <li><a href="https://react.dev/" className="hover:text-purple-300 transition">React</a></li>
                            <li><a href="https://vite.dev/" className="hover:text-purple-300 transition">Vite</a></li>
                            <li><a href="https://tailwindcss.com/" className="hover:text-purple-300 transition">Tailwind CSS</a></li>
                        </ul>
                    </div>

                    <div className="w-[31%] text-gray-400 text-sm">
                        <h3 className="text-white mb-2 text-lg font-semibold">Contact</h3>
                        <p className="mb-1">
                            Open to feedback, suggestions & opportunities
                        </p>
                        <p className="inline">Email : </p>
                        <a href="mailto:garvitpersonal29557@gmail.com"
                            className="hover:text-purple-300 transition">
                            garvitpersonal29557@gmail.com
                        </a>
                    </div>


                </div>

                {/* Bottom / Copyright */}
                <div className="border-t border-neutral-800 p-3 text-center text-xs text-white">
                    © {new Date().getFullYear()} Garvit Goyal. All rights reserved.
                </div>

            </footer>

        </>
    )
}
export default Home;