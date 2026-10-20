import Logo from "../../assets/image.png";
import {
  CircleUserRound,
  Handshake,
  ScanSearch,
  Sparkles,
  Lock,
  Copyright,
} from "lucide-react";
import { skillsList } from "./skillsList";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="">
      <header className="fixed top-0 w-full p-2 md:p-5 bg-[#0B0912]/30 backdrop-blur-md flex justify-between items-center">
        <nav className="flex items-center">
          <img src={Logo} alt="skillswap logo" width={50} />
          <div className="font-semibold text-sm md:text-lg text-[#F4F1FA]">
            Skill<span className="text-[#7C3AED]">Swap</span>
          </div>
        </nav>

        <Link
          to="/signin"
          className="flex justify-center items-center h-7 w-17 bg-[#15111F] text-[#F4F1FA] text-xs md:text-sm p-2 border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 rounded-2xl cursor-pointer"
        >
          Sign in
        </Link>
      </header>

      <div
        id="header"
        className="hero p-5 sm:p-4 min-h-screen md:flex md:flex-col md:gap-20 md:justify-center md:items-center"
      >
        <div className="flex flex-col justify-center items-center md:gap-2 mt-28 p-5 md:mt-20">
          <section className="flex justify-center items-center gap-2 h-7 w-auto bg-[#15111F] text-[#A9A3BD] text-xs md:text-sm p-2 border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 rounded-2xl cursor-pointer mb-5">
            <Sparkles width={15} color="#7C3AED" />
            <h4> A better way to grow</h4>
          </section>
          <div className="font-bold text-5xl md:text-6xl">
            <h2 className="text-white ">Trade skills.</h2>
            <h2 className="text-[#7C3AED] ">Not money.</h2>
          </div>
          <p className="text-[#A9A3BD] mt-8 mb-8 w-90 text-center">
            SkillSwap finds the people whose offer and needs mirror yours, then
            brings you together.
          </p>
          <div className="text-white flex justify-between items-center p-2 w-84 h-20 ">
            <button className="border border-[#a78bfa24] text-sm p-2 rounded-3xl bg-[#5B21B6] w-36 cursor-pointer shadow-2xl shadow-[#5B21B6]/30">
              Get started
            </button>
            <button className="border border-[#a78bfa24] text-sm p-2 rounded-3xl bg-[#15111F] w-36 cursor-pointer">
              See how it works
            </button>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="bg-[#15111F] shadow-2xl shadow-[#5B21B6]/25 w-56 border border-[#a78bfa24] rounded-3xl p-5">
            <div className="flex items-center gap-2">
              <div className="text-white rounded-full bg-[#2c204f] border border-[#7C3AED]/8 h-8 w-8 flex items-center justify-center font-semibold text-xs">
                TB
              </div>
              <div className="text-xs">
                <h4 className="text-white ">Troy Bolton</h4>
                <h6 className="text-[#A9A3BD]">Available to swap</h6>
              </div>
            </div>
            <div className="text-xs mt-4 flex flex-col gap-3">
              <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl">
                <h4 className="text-[#A9A3BD]">Offers</h4> <h4>Python</h4>
              </div>
              <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl">
                <h4 className="text-[#A9A3BD]">Needs</h4> <h4>Guitar</h4>
              </div>
            </div>
          </div>

          <div className="rounded-full h-15 w-15 border border-[#7C3AED]/40 shadow-2xl shadow-[#5B21B6]/25" />

          <div className="bg-[#15111F] shadow-2xl shadow-[#5B21B6]/25 w-56 border border-[#a78bfa24] rounded-3xl p-5">
            <div className="flex items-center gap-2">
              <div className="text-white rounded-full bg-[#2c204f] border border-[#7C3AED]/8 h-8 w-8 flex items-center justify-center font-semibold text-xs">
                MA
              </div>
              <div className="text-xs">
                <h4 className="text-white ">Muhammad Ali</h4>
                <h6 className="text-[#A9A3BD]">Available to swap</h6>
              </div>
            </div>
            <div className="text-xs mt-4 flex flex-col gap-3">
              <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl">
                <h4 className="text-[#A9A3BD]">Offers</h4> <h4>Guitar</h4>
              </div>
              <div className="text-white flex justify-between border border-[#0B0912] bg-[#0B0912] p-2 rounded-2xl">
                <h4 className="text-[#A9A3BD]">Needs</h4>
                <h4>Python</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-[#7C3AED]/10 mt-10" />

      <div className="">
        <div
          id="work"
          className="p-10 mt-10 flex flex-col justify-center gap-3 md:h-screen"
        >
          <h6 className="text-[#7C3AED] font-semibold text-xs md:text-sm tracking-widest pl-3">
            SIMPLE BY DESIGN
          </h6>
          <h1 className="text-white w-60 md:w-auto p-2 text-3xl font-bold">
            A better kind of <span className="text-[#A9A3BD]">exchange.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-3 md:flex md:flex-row md:justify-between">
            <div className="w-full h-auto bg-[#15111F] border border-[#a78bfa24] rounded-3xl p-5 md:w-[35%]">
              <section className="flex justify-between items-center mb-10">
                <div className="w-8 h-8 bg-[#15111F] flex justify-center items-center rounded-full border border-[#7C3AED]/8">
                  <CircleUserRound width={20} color="#7C3AED" />
                </div>
                <span className="text-[#A9A3BD] text-sm">01</span>
              </section>
              <div className="flex flex-col gap-2">
                <h3 className="text-white">Tell us what you offer</h3>
                <p className="text-[#A9A3BD] text-sm">
                  Add the skills you have and the ones you love sharing.
                </p>
              </div>
            </div>
            <div className="w-full h-auto bg-[#15111F] border border-[#a78bfa24] rounded-3xl p-5 md:w-[35%]">
              <section className="flex justify-between items-center mb-10">
                <div className="w-8 h-8 bg-[#15111F] flex justify-center items-center rounded-full border border-[#7C3AED]/8">
                  <Handshake width={20} color="#7C3AED" />
                </div>
                <span className="text-[#A9A3BD] text-sm">02</span>
              </section>
              <div className="flex flex-col gap-2">
                <h3 className="text-white">Tell us what you need</h3>
                <p className="text-[#A9A3BD] text-sm">
                  Name the skill you want to learn without the awkward ask.
                </p>
              </div>
            </div>
            <div className="w-full h-auto bg-[#15111F] border border-[#a78bfa24] rounded-3xl p-5 md:w-[35%] ">
              <section className="flex justify-between items-center mb-10">
                <div className="w-8 h-8 bg-[#15111F] flex justify-center items-center rounded-full border border-[#7C3AED]/8">
                  <ScanSearch width={20} color="#7C3AED" />
                </div>
                <span className="text-[#A9A3BD] text-sm">03</span>
              </section>
              <div className="flex flex-col gap-2">
                <h3 className="text-white">Meet your mirror</h3>
                <p className="text-[#A9A3BD] text-sm">
                  We find the person whose exchange fits yours perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col justify-center gap-15 md:flex lg:flex lg:flex-row lg:justify-center lg:items-center mt-15 md:mt-10">
          <div className="md:w-[80%] md:flex md:flex-col md:justify-center md:gap-8">
            <h6 className="text-[#7C3AED] font-semibold text-xs md:text-sm tracking-widest pl-3">
              PRIVATE BY DESIGN
            </h6>
            <h1 className="text-white w-87 md:w-auto p-2 text-3xl md:text-4xl font-bold">
              Good things happen when skills{" "}
              <span className="text-[#A9A3BD]">cross paths.</span>
            </h1>

            <p className="text-[#A9A3BD] pl-2">
              Your matches are personal. Only you can see who you've connected
              with and what you can learn together.
            </p>
          </div>

          <div className="w-full h-auto bg-[#15111F] border border-[#a78bfa24] rounded-3xl p-4 md:w-[60%]">
            <section className="flex justify-between items-center mb-5">
              <div className="text-white text-xs md:text-sm">
                A glimpse of your maches
              </div>
              <span className="text-[#A9A3BD] text-xs md:text-sm flex gap-2 justify-center items-center ">
                <Lock width={15} />
                Private to you
              </span>
            </section>
            <div className="flex flex-col gap-2 ">
              <div className="flex justify-between items-center pr-4 pl-4 h-10 w-full bg-[#110e17] text-[#F4F1FA] text-xs md:text-sm p-2 border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 rounded-xl cursor-pointer">
                <p className="text-white">System Design</p>
                <Sparkles width={15} color="#7C3AED" />
                <p className="text-[#A9A3BD]">Frontend development</p>
              </div>
              <div className="flex justify-between items-center pr-4 pl-4 h-10 w-full bg-[#110e17] text-[#F4F1FA] text-xs md:text-sm p-2 border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 rounded-xl cursor-pointer">
                <p className="text-white">Conversational Spanish</p>
                <Sparkles width={15} color="#7C3AED" />
                <p className="text-[#A9A3BD]">Travel planning</p>
              </div>
              <div className="flex justify-between items-center pr-4 pl-4 h-10 w-full bg-[#110e17] text-[#F4F1FA] text-xs md:text-sm p-2 border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 rounded-xl cursor-pointer">
                <p className="text-white">User Research</p>
                <Sparkles width={15} color="#7C3AED" />
                <p className="text-[#A9A3BD]">Product Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-[#7C3AED]/10 mt-35" />

      <div className="p-5 md:h-screen ">
        <div className="mt-15">
          <h4 className="text-[#7C3AED] text-xs md:text-sm font-semibold tracking-widest mb-4">
            FIND YOUR PEOPLE
          </h4>
          <h2 className="text-white text-3xl font-semibold">
            Whatever you know.
          </h2>
          <h2 className="text-[#A9A3BD] text-3xl font-semibold">
            Whatever you want.
          </h2>
        </div>

        <div className="mt-10 p-2 h-[60%] flex justify-between flex-wrap">
          {skillsList.map((skillList) => (
            <div
              key={skillList.num}
              className=" h-30 bg-[#15111F] border border-[#a78bfa24] rounded-3xl p-5 w-[48%] md:w-[23%] mt-5 flex flex-col justify-between text-sm cursor-pointer hover:border-[#6829d4]/70 hover:scale-110 transition-all duration-150"
            >
              <h2 className="text-[#A9A3BD] text-xs md:text-sm">
                {" "}
                {skillList.num}
              </h2>
              <p className="text-white">{skillList.skill}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border border-[#7C3AED]/10" />

      <div className="flex flex-col justify-center items-center p-5 text-4xl font-semibold h-80 md:h-screen ">
        <h2 className="text-white md:text-5xl text-shadow-sm text-shadow-white">
          Your next skill
        </h2>
        <h2 className="text-[#7C3AED] md:text-5xl text-shadow-sm text-shadow-[#7C3AED]">
          is out there.
        </h2>
        <button className="text-white mt-7 font-light border border-[#a78bfa24] text-sm md:text-lg p-2 rounded-3xl bg-[#5B21B6] w-36 cursor-pointer shadow-2xl shadow-[#5B21B6]/80">
          Find your match
        </button>
      </div>

      <hr className="border border-[#7C3AED]/10" />

      <footer className="p-5 md:flex md:justify-between md:items-center ">
        <section className="flex items-center">
          <img src={Logo} alt="skillswap logo" width={25} />
          <div className="font-semibold text-xs md:text-sm text-[#F4F1FA]">
            Skill<span className="text-[#7C3AED]">Swap</span>
          </div>
        </section>
        <section className="text-[#A9A3BD] flex items-center gap-10 text-xs p-3 md:p-5">
          <a href="#work">How it works</a>
          <a href="#header">Back to top</a>
          <p className="flex items-center gap-1">
            <Copyright width={12} />
            <span>2026</span>
            SkillSwap
          </p>
        </section>
      </footer>
    </div>
  );
};

export default LandingPage;
