import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import imgurl from "../assets/loginImage.png";
import logoForLogin from "../assets/logoForLogin.png";
import { loginUser } from "../api/auth";
import Loader from "./Loader.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const data = await loginUser(email, password);

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#E0E0E0] flex flex-col items-center justify-center min-h-[101vh]">
      <div className="bg-white h-[80vh] w-[68vw] rounded-[2vh] flex items-center justify-center p-2 shadow-2xl">

        <div className="h-full w-[50%] p-10 flex flex-col items-start justify-evenly">
          <img className="h-4 w-15" src={logoForLogin} alt="logo" />

          <div>
            <h1 className="font-bold text-3xl text-[#202322]">Welcome Back</h1>
            <p className="text-[#6E6D7E] text-[1.8vh] font-semibold">
              Hey, welcome back to your special place.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly h-[40%] items-start"
          >
            <input
              className="w-60 border border-[#BEBEC2] h-8 p-3 text-sm rounded"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-60 border border-[#BEBEC2] h-8 p-3 text-sm rounded"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="bg-linear-to-r from-[#7736FF] to-[#B35EFA]
              hover:from-[#B35EFA] hover:to-[#7736FF]
              text-white text-sm p-2 rounded w-28 transition duration-300 flex items-center justify-center"
            >
              {loading ? <Loader size={18} /> : "Login"}
            </button>
          </form>

          <p className="text-[2vh] text-[#6E6D7E]">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#7736FF] font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        <img className="h-full w-[50%] rounded-[1vh]" src={imgurl} alt="login" />
      </div>
    </div>
  );
}
