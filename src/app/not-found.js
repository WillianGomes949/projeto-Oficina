// src/app/not-found.tsx
import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
    return (
        <main
            className="flex min-h-screen w-full flex-col items-center justify-center 
                  px-4 py-20 text-center"
        >
            <div className="max-w-lg flex flex-col justify-center items-center">
                <span className="font-serif text-9xl font-bold text-primary">404</span>
                <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground-heading sm:text-5xl">
                    Página Não Localizada
                </h1>
                <p className="mt-6 font-sans text-lg leading-7 text-foreground">
                    Pedimos desculpas, mas a página que você está tentando acessar não
                    existe, foi movida ou está temporariamente indisponível.
                </p>
                <p className="mt-4 font-sans text-lg leading-7 text-foreground">
                    Recomendamos verificar o endereço digitado ou retornar à página
                    inicial.
                </p>
                <div className="mt-10">
                    <Button>
                        <Link href="/">Voltar à Página Inicial</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
