import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { HeaderBack } from '../../components/hearder';
import Back from "../../assets/svg/back.svg";
import Properties from "../../assets/svg/properties.svg";
import Modal from "../../components/modal";
import './style.css';
import Input, { InputGray } from "../../components/Input";
import TextArea from "../../components/textarea";

const inicialItems = [
    {
      id:"1", 
      content:"Conteúdo 1", 
      descricao: "Descrição"},
    {
      id:"2", 
      content:"Conteúdo 2",
      descricao: "Descrição"
    },
    {
      id:"3", 
      content:"Conteúdo 3",
      descricao: "Descrição"
    },
]

const inicialColumns = [
    {
        name:"Backlog",
        id:"1",
        items: inicialItems,
    },
    {
        name:"Sprint em Desenvolvimento",
        id:"2",
        items: [],
    },
    {
        name:"Sprint em Revisão",
        id:"3",
        items: [],
    },
    {
        name:"Sprint Finalizadas",
        id:"4",
        items: [],
    },
]

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export default function Kanban() {
  const [id, setId] = useState('');
  const [openModalCardView, setOpenModalCardView] = useState(false)

  //Abrindo Modal do card
  const cardSelected = (id) =>{
    setId(id)
    setOpenModalCardView(true)
  }

  console.log()
  const [columns, setColumns] = useState(inicialColumns);
  const [items, setItems] = useState(inicialItems);

  return (
    <div>
        <HeaderBack
            title= "Nome do projeto"
            icon={Back}
        />
      <div className='containerKanban'>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                className='dragDropContext'
                key={columnId}
              >
                <div className='column'>
                  <h3 className='columnTitle' >{column.name}</h3>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className='card'
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {item.content}
                                      <img src={Properties} alt='Propriedades' onClick={() => cardSelected(item.id)} className='properties'/>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                          {
                            column.name == "Backlog"
                              ?
                              <div className='addBacklog'>
                                <a>+ Adicionar uma backlog</a>
                              </div>
                              :
                            null
                          }                       
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>

      <Modal 
        isOpen={openModalCardView} 
        setModalOpen={() => setOpenModalCardView(!openModalCardView)}
      >
        <InputGray
          title="Título"
          value={items.name}
        />
        <TextArea 
          title="Descrição"
        />
      </Modal>
    </div>
  );
}