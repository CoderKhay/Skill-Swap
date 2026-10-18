import Logo from "../../assets/image.png"

const LandingPage = () => {
  return (
    <div  className="bg-[#0B0912] min-h-screen w-full" >
         <header className="fixed top-0 w-full p-2 md:p-5 bg-[#0B0912]/30 backdrop-blur-md flex justify-between items-center">
            <nav className="flex items-center">
                <img src={Logo} alt="skillswap logo" width={50}/>
                <div className="font-semibold text-sm md:text-lg text-[#F4F1FA]">Skill<span className="text-[#7C3AED]">Swap</span></div>
            </nav>

            <button className="flex justify-center items-center h-7 w-17 bg-[#15111F] text-[#F4F1FA] text-xs md:text-sm p-2 border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 rounded-2xl cursor-pointer">
                Sign in
            </button>
        </header> 

        <div className="hero p-5 sm:p-4 min-h-screen">
    <div className="flex flex-col justify-center items-center sm:flex sm:items-center mt-28">
    <section className="flex justify-center items-center h-7 w-40 bg-[#15111F] text-[#A9A3BD] text-xs md:text-sm p-2 border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 rounded-2xl cursor-pointer mb-5">
        A better way to grow
    </section>
    <div className="font-bold">
        <h2 className="text-white text-5xl">Trade skills.</h2>
        <h2 className="text-[#7C3AED] text-5xl">Not money.</h2>
    </div>
    <p className="text-[#A9A3BD] mt-8 mb-8 w-90 text-center">SkillSwap finds the people whose offer and needs mirror yours, then brings you together.</p>
   <div className="text-white flex justify-between w-80"> 
    <button className="border border-[#a78bfa24] text-sm md:text-lg p-2 rounded-3xl bg-[#5B21B6] w-36 cursor-pointer">Get started</button>
    <button className="border border-[#a78bfa24] text-sm md:text-lg p-2 rounded-3xl bg-[#15111F] w-36 cursor-pointer">See how it works</button>
    </div>
    </div>

    <div className="mt-20 flex flex-col justify-center items-center gap-2">
            <div className="bg-[#15111F] shadow-2xl shadow-[#5B21B6]/25 w-56 border border-[#a78bfa24] rounded-3xl p-5">
<div className="flex items-center gap-2">
    <div className="text-white rounded-full bg-[#2c204f] border border-[#7C3AED]/8 h-8 w-8 flex items-center justify-center font-semibold text-xs">TB</div>
<div className="text-xs">
    <h4 className="text-white ">Troy Bolton</h4>
    <h6 className="text-[#A9A3BD]">Available to swap</h6>
</div>

</div>
<div className="text-xs mt-4 flex flex-col gap-3">
    <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl"><h4 className="text-[#A9A3BD]">Offers</h4> <h4>Python</h4></div>
    <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl"><h4 className="text-[#A9A3BD]">Needs</h4> <h4>Guitar</h4></div>
   
</div>
        </div>

<div className="rounded-full h-15 w-15 border border-[#7C3AED]/40 shadow-2xl shadow-[#5B21B6]/25"/>

        <div className="bg-[#15111F] shadow-2xl shadow-[#5B21B6]/25 w-56 border border-[#a78bfa24] rounded-3xl p-5">
<div className="flex items-center gap-2">
    <div className="text-white rounded-full bg-[#2c204f] border border-[#7C3AED]/8 h-8 w-8 flex items-center justify-center font-semibold text-xs">MA</div>
<div className="text-xs">
    <h4 className="text-white ">Muhammad Ali</h4>
    <h6 className="text-[#A9A3BD]">Available to swap</h6>
</div>

</div>
<div className="text-xs mt-4 flex flex-col gap-3">
    <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl"><h4 className="text-[#A9A3BD]">Offers</h4> <h4>Guitar</h4></div>
    <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl"><h4 className="text-[#A9A3BD]">Needs</h4> <h4>Python</h4></div>
   
</div>
        </div>
    </div>
        </div>

        <hr className="border border-[#7C3AED]/10"/>
      
    </div>
  )
}

export default LandingPage