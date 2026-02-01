import React from "react";
import bgimg from '../assets/SgpaCardBg.png'
import { TrashIcon } from "@heroicons/react/24/outline";
function Cgpac() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center min-h-screen">
                <div className="flex flex-col shadow-2xl shadow-gray-500 justify-space items-center overflow-hidden bg-center bg-cover bg-no-repeat"
                    style={{ width: "70vw", height: "90vh", backgroundImage: `url(${bgimg})` }}>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-3xl font-sans text-white font-semibold">CGPA Calculator</p>
                        <p className="font-sans text-sm text-white">Calculate All Semester GPA Mark</p>
                    </div>
                    <div className="bg-white shadow-2xl shadow-gray-500 p-1 flex flex-col rounded" style={{ width: "35vw", height: "75vh" }}>
                        <div className="text-black flex justify-center items-center rounded bg-blue-500">
                            <label className="m-1">SEMESTER {1} -</label>
                            <label className="m-1">Credit :</label>
                            <input className="w-12 border-b p-1 m-1 outline-none focus:outline-none focus:ring-0 text-black"
                                type="number" />
                            <label className="m-1">SGPA :</label>
                            <input className="w-12 border-b p-1 m-1 outline-none focus:outline-none focus:ring-0 text-black"
                                type="number" />
                            <TrashIcon className="rounded-lg bg-red-500 w-8 h-8 hover:bg-red-400 p-2 m-1"
                            >DEL</TrashIcon>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <button className="w-40 border-2 rounded-lg m-1 bg-blue-600 hover:bg-blue-500 text-white"
                            >ADD MORE</button>
                            <button className="w-40 border rounded-lg m-1 text-black"
                            >CALCULATE</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl text-blue-500 font-sans font-semibold">Your CGPA : </h1>
                </div>
            </div>

        </>
    )
}
export default Cgpac;