import React, { useState } from "react";
import SearchTasks from '../Search/Search';
import {IoRemove} from 'react-icons/io5';
import './List.css';

/*- Eu devo conseguir adicionar uma tarefa da lista de tarefas a fazer - A tarefa DEVE possuir um nome (ex: limpar o fogão), mas pode possuir outros atributos que você quiser incluir, tipo data máxima para conclusão, data em que foi adicionada na lista, etc;
- Eu devo conseguir excluir uma tarefa da lista de tarefas a fazer
- Eu devo poder filtrar as tarefas que estão sendo exibidas na lista de tarefas por status (ex: finalizadas/pendente)

Opcional: 
- Eu posso editar uma tarefa que já existe
- Eu posso fazer upload de uma imagem na criação da tarefa, que vai ser exibida junto com a listagem
- Eu posso selecionar uma ou mais tarefas a serem excluídas de uma vez só*/
const List = (props) => {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const onClickDelete = (index) =>{
    const taskList = items.slice();
    taskList.splice(index, 1)//pega o array, encontra o index e remove um item
    setItems(taskList);
  }

  return (
    <div className="toDoList">
      <h1>Insira uma tarefa</h1>
      <div className="tasks">
          <form
          onSubmit={event => {
              event.preventDefault();
              if(!!task){
                setItems([...items, task]);
                setTask('');
              }
              return;
          }}
          >
            <input
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}//setando o valor novo do input
            />
            <button
            type="submit"
            >Adicionar</button>
            {items.length !== 0 ? (<SearchTasks />) : null}
            <ul className="list">
            {items.map((item, index)=>(
                <li key={index} className="item">{item}
                <button className="deleteTask" onClick={() => onClickDelete(index)}><IoRemove /></button>
                </li>
            ))}
            </ul>
            </form>
      </div>
    </div>
  );
};

export default List;
