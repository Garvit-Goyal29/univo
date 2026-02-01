import { useState } from "react";
function Bmic() {
  const [bmiU, setbmiU] = useState("Not Calculate")
  const [w, setw] = useState("")
  const [h, seth] = useState("")
  const [mess, setmess] = useState("______________")
  function calcuBMI(e) {
    e.preventDefault();
    if(!w || !h || w <= 0 || h <= 0){
      alert("Invalid input!")
      reloadP()
      return
    }
    const bmi = w/((h * 0.0254) * (h * 0.0254));
    if(bmi<18.5){
      setmess("underweight")
    } else if (bmi >= 18.5 && bmi < 24.9 ){
        setmess("normal")
    } else if (bmi >= 25 && bmi < 29.9) {
      setmess("overweight")
    } else if (bmi > 29.9){
      setmess("obese")
    }
    setbmiU(bmi.toFixed(1))
}
  function reloadP() {
    setw("")
    seth("")
    setbmiU("Not Calculate")
    setmess("______________")
  }
  return (
    <>
      <div className='h-dvh flex justify-center items-center' style={{height:"101vh"}}>
        <div className='w-xs h-100 flex flex-col justify-around items-center shadow-xl shadow-black/50 rounded-xl bg-linear-to-r from-blue-700 to-blue-400'>
          <div className='font-bold text-white'>BMI Calculator</div>
          <div className='pl-2'>
            <form  onSubmit={calcuBMI} className='w-50 h-60 flex flex-col justify-evenly items-start'>
              <label className='text-white'>Weight</label>
              <input
                className='w-48 border p-1 rounded text-white outline-none focus:outline-none focus:ring-0'
                type="number"
                placeholder='In Kg'
                value={w}
                onChange={(e)=>setw(Number(e.target.value))}
              />
              <label className='text-white'>Height</label>
              <input
                className='w-48 border p-1 rounded text-white outline-none focus:outline-none focus:ring-0'
                type="number"
                placeholder='In Inch'
                value={h}
                onChange={(e)=>seth(Number(e.target.value))}
              />
              <button type='submit'
              className='w-48 p-1 rounded bg-black text-white'>SUBMIT</button>
              <button  type="button" onClick={reloadP}
              className='w-48 border p-1 rounded'>RELOAD</button>
            </form>
          </div>
          <div className='text-white'>Your BMI is:  {bmiU}</div>
          <p className='text-white'>You are {mess}</p>
        </div>
      </div>
    </>
  )
}
export default Bmic;