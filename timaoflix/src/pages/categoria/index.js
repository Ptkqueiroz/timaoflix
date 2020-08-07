import React, {useState} from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';

function CadastroCategoria(){
  const [categorias, setCategorias] = useState([])

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [values,setValues] = useState(valoresIniciais);
  
  function setValue (chave, valor){
    setValues({
      // chave: nome, descrição
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }

  function handleChange(infosDoEvento){
    setValue(
    infosDoEvento.target.getAttribute('name'), 
    infosDoEvento.target.value);
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();          
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)

        }}>

          <FormField
          label = "Nome da Categoria"
          type= "text"
          name="nome"
          value={values.nome}
          onChange = {handleChange}
          />

          <FormField
          label = "Descrição"
          type= "textarea"
          name="descricao"
          value={values.descricao}
          onChange = {handleChange}
          />

          <FormField
          label = "Cor"
          type= "color"
          name="cor"
          value={values.cor}
          onChange = {handleChange}
          />


<button>
  Cadastrar
</button>
</form>

<ul>
{categorias.map((categoria, indice)=>{
  return (
  <li key={`${categoria}${indice}`}>
    {categoria.nome}
  </li>
  )
})}

</ul>


        <Link to="/">
          Ir Para Home
        </Link>
      </PageDefault>
    )
  }


  export default CadastroCategoria;