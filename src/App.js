import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCheck, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  /* Main State */
  //Lista de Lembretes
  const [toDo, setToDo] = useState([
    {"id": 1, "titulo": "Preparar Aula de Programação", status: false},
    {"id": 2, "titulo": "Fazer Feira", status: false},
    {"id": 3, "titulo": "Preparar Marmitas", status: false},
    {"id": 4, "titulo": "Ouvir Novo Álbum TTDP", status: false}
  ])

  /* Estado Temporário */
  // Temp State
  const [newTask, setNewTask] = useState('');

  /* Funções do app */
  // Add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, titulo: newTask, status: false}
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  return (
    <div className='container App'>
    <br /><br />
    <h2> Hello, Lembretes </h2>  
    <br /><br />

  {/* Add Task */}
  <div className='row'>
    <div className='col'>
      <input 
        placeholder="Digite seu novo lembrete" // Adicionando o placeholder
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className='form-control form-control-lg'
      />
    </div>
    <div className='col-auto'>
      <button
      onClick={addTask}
        className='btn btn-lg btn-success'
      >Adicionar Lembrete</button>
    </div>
  </div>
  <br />

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'Sem lembretes'}

    {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>

            <div className='col taskBg'>
            
              <div className={task.status ? 'done' : ''}>
                <span className='taskNumber'>{index + 1}</span>
                <span className='taskText'>{task.titulo}</span>
              </div>
              <div className='iconsWrap'>
                <span titulo='Concluído / Não concluído'
                  onClick={ (e) => markDone(task.id) }
                >
                  <FontAwesomeIcon icon={faSquareCheck} />
                </span>

                <span titulo='Apagar'
                  onClick={() => deleteTask(task.id)}
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