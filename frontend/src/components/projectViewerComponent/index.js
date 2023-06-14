import React, { useEffect, useState } from 'react'
import './style.css'
import { InputGray } from '../Input'
import Button, { ButtonGray } from '../button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextArea from '../textarea';
import HeaderTable from '../headerTable';
import BodyTable from '../bodyTable';

export default function ProjectViwerComponent(props) {
  //variaveis
  const [nome, setNome] = useState('');
  const [perfilLogado, setPerfilLogado] = useState('');
  const [dono, setDono] = useState('');
  const [cliente, setCliente] = useState('');
  const [segmento, setSegmento] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataTime, setDataTime] = useState([])

  //*Pegando o token do usuario */
  const token = localStorage.getItem('token');

    //fazendo a requisição dos projetos que o usuário participa
    useEffect(() => {
      const getUser = async () => {
        try {
              const response = await axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/token/${token}`);
              console.log(response.data);
              setPerfilLogado(response.data.perfil)
              
          } catch (error) {
              console.error(error);
          }
      };
      
      getUser();
        
    }, []);

  //consulta para apresentação na pagina
  useEffect(() => {
      axios.get(`http://localhost:8080/sistemas-solucoes-digitais/projeto/${props.id}`)
      .then(function (response) {
          console.log(response.data)
          setNome(response.data.nome)
          setDono(response.data.donoProduto)
          setCliente(response.data.cliente.nome)
          setSegmento(response.data.cliente.ramoAtividade)
          setDescricao(response.data.descricao)
          setDataTime(response.data.times)
      })
      .catch(function (error) {
          console.log(error);
      })
  },[])


  return (
    <div id="containerProjectViwerComponent" className='center'>

      <InputGray
        title="Título do Projeto"
        placeholder="Projeto X"
        type="text"
        value={nome}
        disabled={true} 
      />

      <InputGray
        title="Dono do Produto"
        placeholder="João Silva"
        type="text"
        value={dono}
        disabled={true} 
      />

      <div id='containerFormGroupProjectViwerComponent'>

        <div className='formGroupProjectViwerComponent'>

          <InputGray
            title="Cliente"
            placeholder="Amazon"
            type="text"
            value={cliente}
            disabled={true} 
          />
        </div>

        <div className='formGroupProjectViwerComponent'>
          <InputGray
            title="Segmento"
            placeholder="Técnologia"
            type="text"
            value={segmento}
            disabled={true} 
          />
        </div>

      </div>

      <TextArea 
        disabled={true} 
        title='Descrição' 
        value={descricao}
      />

        <HeaderTable 
            title1="Nome"
            title2="Cargo"
        />
        <div id="listParticipants">
        
        {dataTime.map((time) =>
          <BodyTable 
            nome={time.nome}
            status={time.perfil}
            information={null}
          />
        )}
        <div/>
      </div>

      <div id="containerButtonViewProject">
        {
          perfilLogado !== 'DEVELOPER' ?
          <div className='itemButtonViewProject'>
          <Link to="/projectCreate">
              <Button
                  nome="Editar"
              />
            </Link>
          </div>
          : null
        }


        <div className='itemButtonViewProject'>
          <Link to="/project/kanban">
            <ButtonGray
                nome="Kanban"
            />
          </Link>
        </div>
      </div>

    </div>
  )
}
