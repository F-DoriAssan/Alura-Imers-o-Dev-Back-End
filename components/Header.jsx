"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/context/context";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const { user, handleLogout } = useContext(Context);
  const name = user?.data?.name.replace(/ .*/, "");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activa la animación después de un pequeño delay
    setTimeout(() => setAnimate(true), 50);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 py-4 px-6 text-white shadow-lg rounded-b-lg transition-transform duration-550ms bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-[length:400%_400%] ${
        animate ? "translate-y-0" : "-translate-y-full"
      } animate-gradientMove hover:animate-none`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Título del proyecto */}
        <h1
          onClick={() => (window.location.href = "/")}
          className="text-2xl md:text-3xl font-bold tracking-wide hover:text-fuchsia-500 transition-colors duration-550ms cursor-pointer"
        >
          The Marketing
        </h1>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6">
            {user?.data?.isAdmin && (
              <li>
                <button
                  onClick={() => (window.location.href = "/dashboard")}
                  className="px-4 py-2 text-white bg-transparent border-2 border-white rounded-md hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-550ms shadow-md"
                >
                  Admin
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Acciones del usuario */}
        <div className="flex items-center gap-4">
          {user?.data ? (
            <div className="flex items-center gap-4">
              <span className="hidden rounded-lg bg-white bg-opacity-10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-550ms hover:opacity-90 sm:block">
                {name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-gradient-to-r hover:text-gray-500 from-pink-500 to-red-500 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-550ms"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <button
                onClick={() => (window.location.href = "/login")}
                className="px-4 py-2 text-white bg-transparent border-2 hover:text-gray-500 border-white rounded-md hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:scale-105 transition-transform duration-550ms shadow-md"
              >
                Ingresar
              </button>
              <button
                onClick={() => (window.location.href = "/signup")}
                className="px-4 py-2 text-white bg-transparent border-2 hover:text-gray-500 border-white rounded-md hover:bg-pink-500 hover:border-pink-500 hover:scale-105 transition-transform duration-550ms shadow-md"
              >
                Cadastre-se
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
