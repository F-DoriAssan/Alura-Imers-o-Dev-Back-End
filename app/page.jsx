"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const paragraphRef = useRef(null);
  const circleRef = useRef(null); // Referencia para el círculo pulsante
  const containerRef = useRef(null); // Referencia para el contenedor
  const venderRef = useRef(null);
  const bastaRef = useRef(null);
  const lidereRef = useRef(null);
  const marketingRef = useRef(null); // Referencia para el texto themarketing.com.br
  const backgroundRef = useRef(null); // Referencia para el fondo animado

  useEffect(() => {
    // Animaciones en cascada para cada sección del título
    gsap.timeline({ repeat: -1, repeatDelay: 2 })
      .fromTo(
        [venderRef.current, bastaRef.current, lidereRef.current],
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.5, duration: 1.5, ease: "power2.out" }
      )
      .to(
        [venderRef.current, bastaRef.current, lidereRef.current],
        { y: 50, opacity: 0, stagger: 0.5, duration: 1.5, ease: "power2.in" },
        "+=2"
      );

    // Animación para el párrafo
    const letters = paragraphRef.current.querySelectorAll("span");
    gsap.timeline({ repeat: -1, repeatDelay: 2 })
      .fromTo(
        letters,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "power2.out",
        }
      )
      .to(
        letters,
        {
          y: 50,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power2.in",
        },
        "+=2"
      );

    // Animación de círculo pulsante con límites
    const container = containerRef.current;
    const circle = circleRef.current;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const circleSize = 128;

    gsap.to(circle, {
      x: `random(0, ${containerWidth - circleSize})`,
      y: `random(0, ${containerHeight - circleSize})`,
      scale: 1.5,
      opacity: 0.5,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Animación para el texto themarketing.com.br
    gsap.timeline({ repeat: -1, repeatDelay: 3 })
      .fromTo(
        marketingRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      )
      .to(
        marketingRef.current,
        { x: -100, opacity: 0, duration: 1.5, ease: "power2.in" },
        "+=3"
      );

    // Animación para el fondo dinámico
    gsap.to(backgroundRef.current, {
      backgroundPosition: "200% 0%",
      duration: 5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div>
      <section
        ref={containerRef}
        className="relative bg-card text-foreground p-6 rounded-lg shadow-md transition-colors overflow-hidden flex flex-col md:flex-row items-center"
      >
        {/* Fondo dinámico */}
        <div
          ref={backgroundRef}
          className="section-background absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-500 z-0 bg-cover bg-fixed"
        ></div>

        {/* Círculo pulsante */}
        <div
          ref={circleRef}
          className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 absolute z-10 pointer-events-none"
        ></div>

        {/* Contenido principal */}
        <div className="relative z-10 flex-1 text-center md:text-left mb-6 md:mb-0">
          <h1
            ref={venderRef}
            className="text-4xl font-bold uppercase text-primary mb-2"
          >
            VENDER NÃO
          </h1>
          <h1
            ref={bastaRef}
            className="text-6xl font-black uppercase text-rose-600 mb-2"
          >
            BASTA
          </h1>
          <h2 ref={lidereRef} className="text-3xl font-bold text-muted mt-4">
            LIDERE O MERCADO!
          </h2>

          {/* Párrafo animado con letras más grandes */}
          <p
            ref={paragraphRef}
            className="relative text-2xl font-semibold tracking-wide mt-4 leading-snug"
          >
            {"Estratégias que maximizam resultados e conectam seu produto ao público certo...!".split(
              ""
            ).map((letter, i) => (
              <span key={i} className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </p>
        </div>

        {/* Texto animado themarketing.com.br */}
        <div
          ref={marketingRef}
          className="relative z-10 flex-1 text-center md:text-right text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
        >
          themarketing.com.br
        </div>
      </section>
    </div>
  );
}
