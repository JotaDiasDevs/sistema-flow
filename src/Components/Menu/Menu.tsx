import { Link, useLocation } from "react-router-dom";

export function Menu() {
  const location = useLocation();

  return (
    <nav className="flex gap-3">
      <Link 
        to="/" 
        className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
          location.pathname === "/" 
            ? "bg-yellow-300 text-blue-700 shadow-md" 
            : "text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200"
        }`}
      >
        Home
      </Link>
      <Link 
        to="/login" 
        className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
          location.pathname === "/login" 
            ? "bg-yellow-300 text-blue-700 shadow-md" 
            : "text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200"
        }`}
      >
        Login
      </Link>
      <Link 
        to="/cadastro" 
        className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
          location.pathname === "/cadastro" 
            ? "bg-yellow-300 text-blue-700 shadow-md" 
            : "text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200"
        }`}
      >
        Cadastro
      </Link>
    </nav>
  );
}
