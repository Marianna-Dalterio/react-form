// Milestone 1
// Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

// Milestone 2
// Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

// BONUS
// Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
// Impostare il lavoro su più componenti.

import list from "./data/list";
import { useState } from "react";


function App() {
  const [articles, setArticles] = useState(list); // con la lista 
  const [newArticle, setNewArticle] = useState(""); //quello che l'utente digita

  //gestire il cambiamento dell'input
  const handleInput = (event) => {
    setNewArticle(event.target.value);
  };
  //gestisce l'invio del form prevenendo il caricamento di default e aggiornando la lista con la creazione di un nuovo array
  const handleSubmit = (event) => {
    event.preventDefault();
    setArticles([...articles, { id: Date.now(), title: newArticle }]);
    // Resetta lo stato dell'input (svuota il campo dopo l'aggiunta)
    setNewArticle('');
  }
  //funzione per la rimozione di un elemento dalla lista
  const handleRemove = (idRemove) => {
    // Creazione del nuovo array con filter methof
    const listaAggiornata = articles.filter(item => item.id !== idRemove);

    // 2. Aggiornamento dello stato
    setArticles(listaAggiornata);
  }

  return (
    <>
      <h2>Lista di articoli</h2>

      {/* aggiungo in pagina il form con input  */}

      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Aggiungi un nuovo articolo"
          value={newArticle}
          onChange={handleInput} />

        <button type="submit">Aggiungi</button>
      </form>

      {/* creo lista articoli che mostri solo il titolo e aggiungo bottone rimuovi per ogni elemento */}
      <ul>
        {articles.map((item) => (<li key={item.id}>{item.title}
          <button onClick={() => handleRemove(item.id)}>
            Rimuovi
          </button>
        </li>))}
      </ul>

    </>
  )
}

export default App
