import { Link, Outlet } from "react-router";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  return (
    <div className="w-full min-h-screen p-5 ">
      <Link
        to=".."
        className="text-[#a9a3bd] hover:text-white transition-all duration-150 flex gap-3 mb-10 mt-5 font-mono"
      >
        <ArrowLeft />
        Back to SkillSwap
      </Link>

      <Outlet />
    </div>
  );
};

export default Auth;
