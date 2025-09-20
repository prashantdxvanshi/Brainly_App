
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Join us today to explore amazing features.  
          Sign up if you're new or sign in to continue your journey.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="px-8 py-3 bg-white text-indigo-700 hover:bg-gray-100 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
