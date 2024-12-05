"use client";

import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';

import { Context } from '@/context/context';

import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const { user, handleLogout } = useContext(Context);
  const name = user?.data?.name.replace(/ .*/, "");
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50); // Activa la animación
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 text-white shadow-lg transition-transform duration-500 ease-in-out bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-[length:400%_400%] ${
        animate ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-3 md:py-4">
        {/* Título del proyecto */}
        <h1
          className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide cursor-pointer hover:text-fuchsia-300 transition-colors duration-300"
          onClick={() => (window.location.href = "/")}
        >
          The Marketing
        </h1>

        {/* Botón del menú toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="block md:hidden text-white p-2 rounded-md hover:bg-fuchsia-500 transition-all duration-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-14 left-0 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 md:static md:flex md:w-auto md:bg-transparent flex-col md:flex-row items-center`}
        >
          <ul className="w-full md:w-auto flex flex-col md:flex-row md:space-x-6 items-center gap-4 md:gap-0 p-4 md:p-0">
            {user?.data?.isAdmin && (
              <li>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-white bg-transparent border-2 border-white rounded-md hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 shadow-md"
                >
                  Admin
                </Link>
              </li>
            )}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>

          {/* Botón de cerrar menú en móvil */}
          {menuOpen && (
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white p-2 rounded-md hover:bg-gray-800 transition-all duration-300 md:hidden"
            >
              <X size={24} />
            </button>
          )}
        </nav>

        {/* Acciones del usuario */}
        <div
          className={`${
            menuOpen ? "flex flex-col gap-4 mt-6 md:flex-row md:gap-4" : "hidden"
          } md:flex md:items-center`}
        >
          {user?.data ? (
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <span className="text-sm md:text-base rounded-lg bg-white bg-opacity-10 px-4 py-2.5 font-medium text-white transition-all duration-300">
                {name}
              </span>
              <Link
                href="/logout"
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <Link
                href="/login"
                className="px-4 py-2 text-white bg-transparent border-2 hover:text-gray-500 border-white rounded-md hover:bg-fuchsia-500 hover:border-fuchsia-500 transition-transform duration-300 shadow-md"
              >
                Ingresar
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-white bg-transparent border-2 hover:text-gray-500 border-white rounded-md hover:bg-pink-500 hover:border-pink-500 transition-transform duration-300 shadow-md"
              >
                Cadastre-se
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
