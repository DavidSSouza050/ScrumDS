import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { HeaderBack } from '../../components/hearder';
import Back from "../../assets/svg/back.svg";
import './style.css';

const inicialItems = [
    {id:"1", content:"Conteúdo 1"},
    {id:"2", content:"Conteúdo 2"},
    {id:"3", content:"Conteúdo 3"},
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

export default function Kanban(){
    
    const [columns, setColumns] = useState(inicialColumns)

    const onDragEnd = (result) => {
        //var sourceColumnItems = columns[0].items
        var sourceColumnItems = []
        var destinationColumnItems = []
        var draggedItem = {}

        var sourceColumnId = 0
        var destinationColumnId = 0

        for(var i in columns){
            if (columns[i].id == result.source.droppableId){
                sourceColumnItems = columns[i].items
                sourceColumnId = i
            } else if(columns[i].id == result.destination.droppableId){
                destinationColumnItems = columns[i].items
                destinationColumnId = i
            }
        }

        for(var i in sourceColumnItems){
            if (sourceColumnItems[i].id == result.draggableId){
                draggedItem = sourceColumnItems[i]
            }
        }

        //Excluir o objeto arrastado
        var filteredSourceColumnItems =sourceColumnItems.filter((item) => item.id != result.draggableId)

        // Adicionar o mesmo na nova posição
        if(result.source.droppableId == result.destination.droppableId){
            filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem)

            // Mudar o state
            var columnsCopy = JSON.parse(JSON.stringify(columns))
            columnsCopy[sourceColumnId].items = filteredSourceColumnItems
            setColumns(columnsCopy)
        } else {
            destinationColumnItems.splice(result.destination.index, 0, draggedItem)

            // Mudar o state
            var columnsCopy = JSON.parse(JSON.stringify(columns))
            columnsCopy[sourceColumnId].items = filteredSourceColumnItems
            columnsCopy[destinationColumnId].items = destinationColumnItems
            setColumns(columnsCopy)
        }
    }

    return(
        <>
        <HeaderBack
            title= "Nome do projeto"
            icon={Back}
        />
        <div className='container'>
            <DragDropContext onDragEnd={onDragEnd}>
            {columns.map((column) => (
                <div className='dragDropContext'>
                <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                    <div className='column'>
                        <h3 className='columnTitle'>{column.name}</h3>
                        <div ref={provided.innerRef} style={{width: "100%", height: "100%"}}>
                            {column.items.map((item, index) => (
                            <Draggable draggableId={item.id} index={index} key={item.id}>
                            {(provided) =>(
                                <div className='card'
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                    ref={provided.innerRef} 
                                    style={{...provided.draggableProps.style}}
                                >
                                    {item.content}
                                </div>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                            <div className='addBacklog'>
                                <a>+ Adicionar uma backlog</a>
                            </div>
                        </div>
                    </div>
                )}
                </Droppable>
                </div>
            ))}
            </DragDropContext>
        </div>
        </>
    )
}