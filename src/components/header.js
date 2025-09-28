import Button from "./Button";

export default function Header() {
  return (
    <>
      
      <h1>Header</h1>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        {/* Botão Vermelho */}
        <Button color="red" onClick={() => console.log("Alugar agora!")}>
          Rent Now
        </Button>

        {/* Botão Azul (padrão) */}
        <Button onClick={() => console.log("Ver detalhes!")}>
          View Details
        </Button>

        {/* Exemplo com outra cor e classes extras */}
        <Button
          color="gray"
          onClick={() => console.log("Confirmado!")}

        >
          Confirmar
        </Button>
      </div>
    </>
  );
}
