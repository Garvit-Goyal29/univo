import React from "react";
import { useState } from "react";
import bgimg from '../assets/SgpaCardBg.png'
function Cgpap() {
    const [cm, setcm] = useState()
    const [te, sette] = useState()
    const [exm, setexm] = useState()
    const [tc, settc] = useState()
    const [ans, setans] = useState()
    function calcuP() {
        if (!Number.isFinite(cm) || !Number.isFinite(te) || !Number.isFinite(tc) || !Number.isFinite(exm) || tc <= 0 || te < 0 || cm < 0 || exm < 0 || cm > 10 || exm > 10) {
            alert("Please enter valid inputs");
            reset();
            return;
        }
        const answer = (cm * te + exm * tc) / (te + tc);
        setans(answer.toFixed(2));
    }
    function reset() {
        setcm("");
        sette("");
        setexm("");
        settc("");
        setans("");
    }
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center min-h-screen">
                <div className="flex flex-col shadow-2xl shadow-gray-500 justify-evenly items-center overflow-hidden bg-center bg-cover bg-no-repeat"
                    style={{ width: "70vw", height: "90vh", backgroundImage: `url(${bgimg})` }}>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-4xl font-sans text-white font-semibold">CGPA Prediction</p>
                        <p className="font-sans text-xs text-white">Calculate CGPA by current sem GPA Mark - expected</p>
                    </div>
                    <div className="text-black bg-white shadow-2xl shadow-gray-500 rounded flex flex-col justify-center items-start p-3" style={{ width: "30vw", height: "65vh" }}>
                        <label className="ml-1">Current CGPA :</label>
                        <input className="w-15 border-b ml-1 mb-5 outline-none focus:outline-none focus:ring-0"
                            type="number"
                            value={cm}
                            onChange={(e) => setcm(Number(e.target.value))} />
                        <label className="ml-1">Total Credit Earn :</label>
                        <input className="w-15 border-b ml-1 mb-5 outline-none focus:outline-none focus:ring-0"
                            type="number"
                            value={te}
                            onChange={(e) => sette(Number(e.target.value))} />
                        <label className="ml-1">Expexted SGPA of current sem :</label>
                        <input className="w-15 border-b ml-1 mb-5 outline-none focus:outline-none focus:ring-0"
                            type="number"
                            value={exm}
                            onChange={(e) => setexm(Number(e.target.value))} />
                        <label className="ml-1">Total credit of current sem :</label>
                        <input className="w-15 border-b ml-1 mb-5 outline-none focus:outline-none focus:ring-0"
                            type="number"
                            value={tc}
                            onChange={(e) => settc(Number(e.target.value))} />

                        <div className="w-82 flex flex-col justify-evenly items-center">
                            <button onClick={calcuP}
                                className="bg-blue-500 text-white mb-2 w-82 rounded-lg p-1"
                            >CALCULATION</button>
                            <button onClick={reset}
                                className="w-82 border rounded-lg text-black p-1" 
                            >RESET</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl text-blue-500 font-sans font-semibold">CGPA Prediction: {ans}</h1>
                </div>
            </div>
        </>
    )
}
export default Cgpap;