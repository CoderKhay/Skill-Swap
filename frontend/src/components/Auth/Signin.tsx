import { Link } from "react-router";
import { ArrowLeft, Lock } from "lucide-react";
import Logo from "../../../src/assets/image.png";
import { ArrowRight } from "lucide-react";

const Signin = () => {
  return (
    <div className="w-full min-h-screen p-5">
      <Link
        to=".."
        className="text-[#a9a3bd] hover:text-white transition-all duration-150 flex gap-3 mb-15"
      >
        <ArrowLeft />
        Back to SkillSwap
      </Link>
      <div className="bg-[#15111F] shadow-2xl shadow-[#5B21B6]/25 border border-[#a78bfa24] rounded-2xl p-5 w-full sm:w-[50%] md:w-[40%]">
        <img src={Logo} alt="sillswap" className="w-10" />
        <div className="mt-2 flex flex-col gap-1">
          <h6 className="text-[#7C3AED]">Welcome back</h6>
          <h2 className="text-white text-2xl font-semibold">
            Sign in to SkillSwap
          </h2>
          <p className="text-[#a9a3bd] text-sm">
            Pick up where you left off and find your next skill exchange
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">
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
              <label htmlFor="email" className="text-white">
                Password
              </label>
              <button className="text-white">Forgot password ?</button>
            </section>
            <input
              id="email"
              type="email"
              className="bg-[#0e0c15] border border-[#7C3AED]/8 hover:border-[#7C3AED]/25 rounded-sm p-2 pl-3 text-[#a9a3bd] text-sm"
              placeholder="you@example"
            />
          </div>

          <button className="bg-[#7C3AED] text-white flex justify-center items-center gap-2 text-sm mt-3 p-2 rounded-3xl cursor-pointer">
            <p>Sign in</p>
            <ArrowRight />
          </button>

          <div className="flex items-center mt-3 justify-center gap-2 text-[#a9a3bd] text-sm">
            <Lock width={20} />
            <p>Your account details stay private.</p>
          </div>

          <hr className="border border-[#7C3AED]/10 mt-2" />

          <div className="flex justify-center gap-2">
            <p className="text-[#a9a3bd]">New to skillswap ?</p>
            <Link to="/signup" className="text-white hover:text-[#7C3AED]">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
