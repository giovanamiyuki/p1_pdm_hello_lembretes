import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCheck, faPenClip, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {

  // Lembretes: Aqui aparece a exibição de "Lembretes Fictícios"
  const [LembreteLista, setLembreteLista] = useState([
    {"id": 1, "titulo": "Preparar Aula de Programação", "status": false},
    {"id": 2, "titulo": "Fazer Feira", "status": false},
    {"id": 3, "titulo": "Preparar Marmitas", "status": false}
  ])

  return (
    <div className="container App">

    <br /><br />
    <h2> ✨ Hello, Lembretes! ✨ </h2>
    <br /><br />

    </div>
  );
}

export default App;
