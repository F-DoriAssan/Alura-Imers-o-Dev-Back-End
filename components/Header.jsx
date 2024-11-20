import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-primary text-primary-foreground py-4 shadow-md rounded-lg transition-all duration-550 hover:shadow-lg hover:scale-[0.98]">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Título del proyecto */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide hover:text-muted-foreground transition-colors duration-200">
          Alura Dev
        </h1>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-4">
            {["Ingresar", "Cadastre-se"].map((item) => (
              <li key={item}>
                <Button
                  variant="outline"
                  className="text-primary hover:bg-primary hover:text-primary-foreground border focus:ring-2 focus:ring-offset-2 focus:ring-ring hover:shadow-xl hover:scale-105 transition-all"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
