"use client";
import { Context } from "@/context/context";
import Loader from "@/components/loader";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Signup = () => {
  const { signup, setSignUp, handleSignUpSubmit, loading, error, message, theme } =
    useContext(Context);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50);
  }, []);

  const handleChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 transition-transform duration-550ms ${
        theme === "dark" ? "bg-background-dark text-text-dark" : "bg-background-light text-text-light"
      } ${
        animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <svg
          id="logo-70"
          width="68"
          height="20"
          viewBox="0 0 78 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:scale-110 transition-transform duration-550ms"
        >
          <path
            d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0Z"
            fill="#ec4899"
          />
          <path
            d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853Z"
            fill="#8b5cf6"
          />
        </svg>
        <span className="text-lg font-semibold">AO VIVO FUTEBOL</span>
      </Link>

      {/* Header Text */}
      <h1 className="mt-6 text-3xl font-extrabold text-center leading-tight tracking-tight sm:text-4xl">
        Crie sua conta
      </h1>
      <p className="mt-4 text-center">
        Cadastre-se para acessar todas as funcionalidades.
      </p>

      {/* Error Message */}
      {error && (
        <div
          className="mt-4 p-4 w-full max-w-md bg-red-500 text-white text-center rounded-lg"
          role="alert"
        >
          {message}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSignUpSubmit}
        className="mt-8 w-full max-w-lg space-y-4"
      >
        <div>
        <label htmlFor="name" className="block text-sm font-medium">
  Nome
</label>
<input
  type="text"
  id="name"
  name="name"
  required
  value={signup.name}
  onChange={handleChange}
  className="mt-1 w-full rounded-lg px-4 py-2 bg-red-100 dark:bg-gray-700 text-gray-300 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
  placeholder="Seu nome"
/>

<div>
  <label htmlFor="email" className="block text-sm font-medium">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    required
    value={signup.email}
    onChange={handleChange}
    className="mt-1 w-full rounded-lg px-4 py-2 bg-red-100 dark:bg-gray-700 text-gray-300 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
    placeholder="seuemail@example.com"
/>
</div>

<div>
  <label htmlFor="password" className="block text-sm font-medium">
    Senha
  </label>
  <input
    type="password"
    id="password"
    name="password"
    required
    value={signup.password}
    onChange={handleChange}
    className="mt-1 w-full rounded-lg px-4 py-2 bg-red-100 dark:bg-gray-700 text-gray-300 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
    placeholder="********"
/>
</div>
</div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:from-pink-500 hover:to-fuchsia-500 transition-all duration-550ms"
        >
          {loading ? <Loader /> : "Criar Conta"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        Já tem uma conta?{" "}
        <Link
          href="/login"
          className="text-fuchsia-500 hover:underline transition-all duration-550ms"
        >
          Faça login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
