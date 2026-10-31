import { Link } from "react-router";
import { ArrowLeft, Lock } from "lucide-react";
import Logo from "../../../src/assets/image.png";
import { ArrowRight } from "lucide-react";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen p-5 ">
      <Link
        to=".."
        className="text-[#a9a3bd] hover:text-white transition-all duration-150 flex gap-3 mb-10 mt-5 font-mono"
      >
        <ArrowLeft />
        Back to SkillSwap
      </Link>

      <div className="sm:flex sm:justify-center">
        <div className="bg-[#15111F] shadow-2xl shadow-[#5B21B6]/25 border border-[#a78bfa24] rounded-2xl p-5 w-full sm:w-[60%] md:w-[50%]">
          <img src={Logo} alt="sillswap" className="w-10" />
          <div className="mt-2 flex flex-col gap-1">
            <h6 className="text-[#7C3AED] font-mono">Start swapping skills</h6>
            <h2 className="text-white text-2xl font-semibold">
              Create your account
            </h2>
            <p className="text-[#a9a3bd] text-sm ">
              join a private community where every skill can open a new door.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-mono">
                Name
              </label>
              <input
                id="email"
                type="email"
                className="bg-[#0e0c15] border border-[#7C3AED]/8 rounded-sm p-2 pl-3 text-[#a9a3bd] hover:border-[#7C3AED]/25 text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-mono">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="bg-[#0e0c15] border border-[#7C3AED]/8 rounded-sm p-2 pl-3 text-[#a9a3bd] hover:border-[#7C3AED]/25 text-sm"
                placeholder="you@example"
              />
            </div>
            <div className="flex flex-col gap-2">
              <section className="flex justify-between">
                <label htmlFor="email" className="text-white font-mono">
                  Password
                </label>
              </section>
              <input
                id="email"
                type="email"
                className="bg-[#0e0c15] border border-[#7C3AED]/8 hover:border-[#7C3AED]/25 rounded-sm p-2 pl-3 text-[#a9a3bd] text-sm"
                placeholder="********"
              />
            </div>

            <button className="bg-[#7C3AED] text-white flex justify-center items-center gap-2 text-sm mt-3 p-2 rounded-3xl cursor-pointer font-mono">
              <p>Sign up</p>
              <ArrowRight />
            </button>

            <div className="flex items-center mt-3 justify-center gap-2 text-[#a9a3bd] text-sm font-mono">
              <Lock width={20} />
              <p>Your account details stay private.</p>
            </div>

            <hr className="border border-[#7C3AED]/10 mt-2" />

            <div className="mt-3 mb-3 flex justify-center gap-2">
              <p className="text-[#a9a3bd]">Already have an account ? </p>
              <Link
                to="/signin"
                className="text-white hover:text-[#7C3AED] font-mono"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
