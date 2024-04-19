import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCheck, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  /* Main State do Projeto */
  //Lista de Lembretes
  const [LembreteLista, setLembreteLista] = useState([
    {"id": 1, "titulo": "Preparar Aula de Programação", status: false},
    {"id": 2, "titulo": "Fazer Feira", status: false},
    {"id": 3, "titulo": "Preparar Marmitas", status: false},
    {"id": 4, "titulo": "Ouvir Novo Álbum TTDP", status: false}
  ])

  /* Estado Temporário */
  // Temp State
  const [LembreteEntrada, setLembreteEntrada] = useState('');

  /* Funções do app */
  // Adicionar Lembrete
  const addLembrete = () => {
    if(LembreteEntrada) {
      let num = LembreteLista.length + 1;
      let novaEntrada = { id: num, titulo: LembreteEntrada, status: false}
      setLembreteLista([...LembreteLista, novaEntrada])
      setLembreteEntrada('');
    }
  }

  // Apagar Lembrete
  const apagarLembrete = (id) => {
    let LembreteEntradas = LembreteLista.filter( lembrete => lembrete.id !== id)
    setLembreteLista(LembreteEntradas);
  }

  // Marcar lembrete como Concluído
  const marcarConcluido = (id) => {
    let LembreteEntrada = LembreteLista.map( lembrete => {
      if( lembrete.id === id ) {
        return ({ ...lembrete, status: !lembrete.status })
      }
      return lembrete;
    })
    setLembreteLista(LembreteEntrada);
  }

  return (
    <div className='container App'>
    <br /><br />
    <h2>✨ Hello, Lembretes ✨</h2>  
    <br /><br />

  {/* Adicionar Lembrete */}
  <div className='row'>
    <div className='col'>
      <input 
        placeholder="Digite seu novo lembrete" // Adicionando o placeholder
        value={LembreteEntrada}
        onChange={(e) => setLembreteEntrada(e.target.value)}
        className='form-control form-control-lg'
      />
    </div>
    <div className='col-auto'>
      <button
      onClick={addLembrete}
        className='btn btn-lg btn-success'
      >Adicionar Lembrete</button>
    </div>
  </div>
  <br />

    {/* Exibir Lembretes */}

    {LembreteLista && LembreteLista.length ? '' : 'Sem lembretes'}

    {LembreteLista && LembreteLista
      .sort((a, b) => a.id > b.id ? 1 : -1) // Organizar a lista de lembretes em ordem
      .map( (lembrete, index) => {
        return(
          <React.Fragment key={lembrete.id}>

            <div className='col lembreteBg'>
            
              <div className={lembrete.status ? 'done' : ''}>
                <span className='lembreteNumero'>{index + 1}</span>
                <span className='lembreteTexto'>{lembrete.titulo}</span>
              </div>
              <div className='organizacaoIcones'>
                <span title='Concluído / Não concluído'
                  onClick={ (e) => marcarConcluido(lembrete.id) }
                >
                  <FontAwesomeIcon icon={faSquareCheck} />
                </span>

                <span title='Apagar'
                  onClick={() => apagarLembrete(lembrete.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>

          </React.Fragment>
        )
      }) 
      }
    
    </div>
  );
}

export default App;
