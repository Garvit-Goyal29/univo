import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logoMMM from "../assets/logoMMM.png"
import heroM from "../assets/heroM.png"
import './Home.css'
import ScrollProgramBar from "./ScrollProgramBar";
import { UserIcon } from "@heroicons/react/24/solid";

function Home() {
    const [num, setNum] = useState(0);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(prevNum => {
                if (prevNum == 529) {
                    return prevNum;
                }
                return prevNum + 1;
            });
        }, 5);

        return () => clearInterval(interval);
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <>
            <ScrollProgramBar />
            <div className="w-full flex flex-col items-center bg-white">
                <div className="w-full min-h-[10vh] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-9 py-3">
                    <img src={logoMMM} alt="" className="h-10 sm:h-12 w-auto" />
                    <div className="flex items-center gap-3 border-2 border-purple-400 rounded-2xl p-2">
                        {user ? (
                            <>
                                <div className="flex flex-col text-left">
                                    <div className="flex items-center gap-1">
                                        <UserIcon className="h-4 w-4 text-purple-500" />
                                        <p className="font-semibold text-sm text-black">{user.name}</p>
                                    </div>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="bg-linear-to-r from-[#7736FF] to-[#B35EFA]
                       hover:from-[#B35EFA] hover:to-[#7736FF]
                       text-white px-3 py-1 rounded-lg text-sm font-bold"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-purple-400 text-sm font-bold">
                                    Login
                                </Link>
                                <span className="text-purple-400 font-bold">/</span>
                                <Link
                                    to="/signup"
                                    className="bg-purple-400 px-3 py-1 text-sm rounded-xl font-bold
                       hover:bg-black hover:text-purple-400"
                                >
                                    Sign-up
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* HERO SECTION */}
                <div className="flex flex-col md:flex-row w-full items-center justify-between gap-10 mt-15">
                    <div className="w-full text-center md:text-left md:pl-20">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                            All{" "}
                            <span className="text-purple-400 typing">Student tools</span>
                            <span className="text-purple-400 blink">|</span>
                            <br />
                            one smart place.
                        </p>
                    </div>
                    <div className="relative flex justify-center w-full md:pl-24">
                        {/* style={{ backgroundImage: `url(${heroM})`}} */}
                        <div className="heroMB w-full hidden md:block h-32 sm:h-40 rounded-l-full bg-no-repeat bg-center bg-cover"></div>
                        <img
                            src={heroM}
                            alt=""
                            className="h-40 sm:h-48 md:h-56 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,1)] static md:absolute md:bottom-0 md:right-14"
                        />
                    </div>
                </div>
                <div className="flex justify-center md:justify-start
                  mt-6 px-4 md:px-16 w-full">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFC632]">
                        {num}+ Users
                    </p>
                </div>

                <div className="w-full max-w-full px-4 md:px-10 mt-10 flex justify-center">
                    <div className="relative block group w-full">
                        <span className="absolute inset-0 border-2 border-black border-dashed rounded-lg"></span>
                        <div className="w-full transition text-purple-400 border-2 border-black
                      rounded-lg group-hover:-translate-x-2
                      group-hover:-translate-y-2 hover:bg-purple-400 hover:text-black">
                            <div className="p-6">
                                <p className="mb-4 text-3xl sm:text-4xl font-bold">UNIVO</p>
                                <p className="text-base sm:text-lg max-w-4xl">
                                    Your Academic Control Panel — a smart utility platform built to help students calculate,
                                    track, and manage their academic life efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="w-full flex flex-col items-center mt-16 px-4 md:px-10">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-8">
                        FEATURES
                    </p>

                    <div className="flex align-center gap-2 w-full justify-evenly flex-wrap">
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

            <footer className="h-full md:h-full bg-[#171717] border-t border-neutral-800 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-sm">
                        Made with <span className="text-red-500">❤️</span> by Garv
                    </p>
                    <p className=" text-gray-400 text-xs">
                        Learn • Build • Improve
                    </p>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-evenly p-5 text-sm text-gray-400">
                    <div className="w-[100%] md:w-[33%] h-full md:h-32 pb-10 flex flex-col items-start md:flex-col md:items-center md:justify-start px-3">
                        <h3 className="text-white mb-2 text-lg font-semibold">About</h3>
                        <p className="text-center">
                            B.Tech student building web applications using React & Tailwind CSS.
                        </p>
                    </div>
                    <div className="w-[100%] md:w-[33%] h-full md:h-32 pb-10 flex flex-col items-start md:items-center md:justify-start px-3">
                        <h3 className="text-white mb-2 text-lg font-semibold">Tech Stack</h3>
                        <ul className="space-y-1 text-start md:text-center">
                            <li><a href="https://react.dev/" className="hover:text-purple-300 transition">React</a></li>
                            <li><a href="https://vite.dev/" className="hover:text-purple-300 transition">Vite</a></li>
                            <li><a href="https://tailwindcss.com/" className="hover:text-purple-300 transition">Tailwind CSS</a></li>

                        </ul>
                    </div>
                    <div className="w-[100%] md:w-[33%] h-full md:h-32 flex flex-col md:items-center md:justify-start px-3 text-gray-400 text-sm">
                        <h3 className="text-white mb-2 text-lg font-semibold">Contact</h3>
                        <p className="text-start md:text-center">
                            Open to feedback, suggestions & opportunities
                        </p>
                        <p className="inline">Email : </p>
                        <a href="mailto:garvitpersonal29557@gmail.com"
                            className="hover:text-purple-300 transition">
                            garvitpersonal29557@gmail.com
                        </a>
                    </div>
                </div>
                <div className="border-t border-neutral-800 py-1 text-center text-xs text-white">
                    © {new Date().getFullYear()} Garvit Goyal. All rights reserved.
                </div>

            </footer>

        </>
    )
}
export default Home;