import { useState } from 'react';
import './product.css'
import { toast } from 'react-toastify';
import logo from '../../assets/product.svg';


export default function Produto(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [editar, setEditar] = useState({});

    const [listaProdutos, setListaProdutos] = useState([1,2,3,4,5,6,7,8,9,10]);


    function handleSubmit(e) {
        e.preventDefault();

        if(editar?.id) {
            handleUpdateProduto();
            return;
        }

        if(nome !== '' && descricao !== '' && preco !== '') {
            const p = {
                id: listaProdutos.length + 1,
                nome: nome, 
                descricao: descricao, 
                preco: preco
            };

            setListaProdutos([...listaProdutos, p]);
    
            limparInputs()
            toast.success('Adicionado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }

    }

    function handleCadastrar() {
        if(listaProdutos.length > 0) {
            toast.success('Produtos cadastrados!');
        } else {
            toast.error('Lista de produtos está vazia!');
        }
    }

    function handleEditar(item) {
        setNome(item.nome);
        setDescricao(item.descricao);
        setPreco(item.preco);

        setEditar(item);
    }

    function handleUpdateProduto() {
        if(nome !== '' && descricao !== '' && preco !== '') {
            listaProdutos.map((item) => {
                if(item.id == editar.id) {
                    item.nome = nome;
                    item.descricao = descricao;
                    item.preco = preco;
                }
            });

            toast.success('Produto atualizado!');
            limparInputs();
            setEditar({});
            
        } else {
            toast.error('Preencha todos os campos!');
        }
    }

    function handlerRemover(item) {
        setListaProdutos(
            listaProdutos.filter((a) => a.id !== item.id)
        );

        toast.success('Produto removido!');
    }

    function limparInputs() {
        setNome('');
        setDescricao('');
        setPreco('');
    }


    return(
        <div className='content-product'>
            <div className='cadastro'>
                <strong className='titulo'>Cadastro de Produto</strong>
                <label className='subTitulo'>Dados do Produto</label>
                
                <form className='form-cadastro' onSubmit={handleSubmit}>
                    <label>Nome do produto</label>
                    <input type="text" value={nome} onChange={ (e) => setNome(e.target.value) }/>


                    <label>Descrição</label>
                    <input type="text" value={descricao} onChange={ (e) => setDescricao(e.target.value) }/>

                    <label>Valor</label>
                    <input type="number" placeholder='R$ 0,00' value={preco} onChange={ (e) => setPreco(e.target.value) }/>

                    {Object.keys(editar).length > 0 ?
                        (<button type='submit'>Atualizar</button>) : 
                        (<button type='submit'>Adicionar</button>)            
                    }
                    
                </form>
            </div>

            <div className='list-product'>
                <div className='title'>
                    <input type='text' placeholder='Pequisar produto' />
                    <input type='text' placeholder='Filtrar' />
                    <button>LIMPAR FILTRO</button>
                </div>
                <div className='itens-product'>
                    { listaProdutos.map( (item, index) => (
                        <div className='products'>
                            <img src={logo} alt='produto' title='imagem do produto'/>
                            <div className='details'>
                                <p className='name-product'>Computador Desktop - Intel Core i7</p>
                                <p className='price-product'>R$ 2.700,00</p>
                                <p className='description-product'>Projetado para garantir a produtividade no seu dia a dia.
                                Projetado para garantir a produtividade no seu dia a dia.</p>
                            </div>
                            <div className='options-btn'>
                                <button className='btn-editar'>EDITAR</button>
                                <button className='btn-excluir'>EXCLUIR</button>
                            </div>
                        </div>
                    ) )
                    }
                </div>
            </div>

        </div>
    )
}
