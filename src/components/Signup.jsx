import bgimg from '../assets/signImage.png';
function Signup() {
    return (
        <>
            <div className='h-[101vh] w-full bg-[#E0E0E0] flex flex-col items-center justify-center'>
                <div className='bg-white h-[80vh] w-[68vw] rounded-[2vh] flex items-center justify-center p-2 shadow-2xl'>
                    <div className='w-[64%] h-full flex flex-col items-center justify-evenly p-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-bold text-3xl text-[#202322]'>Create your account</h1>
                            <p className='text-[#6E6D7E] text-[2vh] font-semibold'>Hey, let’s create your space at UNIVO.</p>
                        </div>
                        <form className='flex w-full flex-col justify-center items-center gap-6'>
                            <h1 className='text-3xl text-[#FDC432] font-bold'>Sign up</h1>
                            <input className='h-[6vh] w-[80%] border border-[#BEBEC2] rounded-[1vh] pl-4 text-[2vh] font-semibold' type="text" placeholder='Full Name' />
                            <input className='h-[6vh] w-[80%] border border-[#BEBEC2] rounded-[1vh] pl-4 text-[2vh] font-semibold' type="email" placeholder='Email Address' />
                            <input className='h-[6vh] w-[80%] border border-[#BEBEC2] rounded-[1vh] pl-4 text-[2vh] font-semibold' type="password" placeholder='Password' />
                            <input className='h-[6vh] w-[80%] border border-[#BEBEC2] rounded-[1vh] pl-4 text-[2vh] font-semibold' type="password" placeholder='Confirm Password' />
                            <button className='h-[6vh] w-[80%] bg-linear-to-r from-[#7736FF] to-[#B35EFA] hover:bg-linear-to-r hover:from-[#B35EFA] hover:to-[#7736FF] rounded-[1vh] text-white font-bold text-[2vh]'>Sign Up</button>
                        </form>
                        <div>
                            <p className='text-[2vh] text-[#6E6D7E]'>Already have an account? <a href="/login"  className='text-[#7736FF] font-semibold'>Log in</a></p>
                        </div>
                    </div>
                    <img className='w-[36%] h-full rounded-[1vh]' src={bgimg} alt="" />
                </div>
            </div>
        </>
    )
}
export default Signup;