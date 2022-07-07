import { useRef, useState } from "react";
import { useAdicionaParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMsgError } from "../state/hooks/useMsgError";

export default function Formulario() {

  const [nome, setNome] = useState("")
  
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionaParticipante()

  const msgError = useMsgError()

  const adicionaParticipante = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    adicionarNaLista(nome)

    setNome("")
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionaParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {msgError && <p role={"alert"}>{msgError}</p>}
    </form>
  );
}