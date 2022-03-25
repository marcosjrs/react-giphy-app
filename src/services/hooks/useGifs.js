import { useEffect, useState } from "react";
import { getGifs } from "../../services/gifs.service";

export const useGifs = (categoria) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
  });

  //Para que no esté llamando continuamente (que es lo que pasa si pones solo la llamada a getState()), con variable categoria como segundo parametro hace que solo se ejecute si se cambia el valor de esa variable.
  useEffect(() => {
    getGifs(categoria).then((data) => setState({ loading: false, data }));
  }, [categoria]);

  //El truco es que se devuelve los datos del useState:
  return state;
};
