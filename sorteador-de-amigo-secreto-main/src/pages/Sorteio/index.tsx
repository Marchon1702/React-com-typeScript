import { useState } from "react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";

import './estilos.css';

const Sorteio = () => {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState<string | null>("");

  const resultado = useResultadoSorteio();

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez));
    }
  };

  const someAmigoSecreto = () => {
    setTimeout(() => {
      setAmigoSecreto(null)
    }, 5000)
  }

  
  return (
    <section>
      <form onSubmit={(event) => {
        sortear(event)
        someAmigoSecreto()
      }}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(event) => setParticipanteDaVez(event.target.value)}
        >
          <option>Selecione seu Nome</option>
          {participantes.map((participante) => (
            <option key={participante}> {participante} </option>
          ))}
        </select>
        <button className="botao-sortear">Sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};

export default Sorteio;
