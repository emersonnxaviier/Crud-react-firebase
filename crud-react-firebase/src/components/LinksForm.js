import React, { useState, useEffect } from 'react';

import Api from '../service/Api';

export default function LinksForm(props) {

    const initialValues = {
        url: '',
        name: '',
        description: ''
    };

    // vai armazenar os valores dos inputs.
    const [values, setValues] = useState(initialValues);

    // vai verificar se ouve alteração nos IDs, para a modificação dos itens.
    useEffect(() => {
        console.log(props.id)
        if (props.id === '') {
            setValues({ ...initialValues });
        }
        else {
            Api.getLinkById(props.id, setValues);
        }
    }, [props.id]);




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.id === '') {
            Api.add(values); // adiciona os dados no banco de dados.
            setValues(initialValues); // limpa o campo dos inputs.
        } else {
            Api.edit(props.id, values);
            setValues(initialValues); // limpa o campo dos inputs.
            props.setId(''); // seta o id como vazio para o botão alterar seu nome.
        }

    }


    return (
        <form className="card card-body" onSubmit={handleSubmit}>

            <div className="form-group input-group">
                <div className="input-group-text bt-light">
                    <i className="material-icons">insert_link</i>
                </div>

                <input
                    type="text"
                    name="url"
                    className="form-control"
                    placeholder="https://site.com"
                    value={values.url}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bt-light">
                    <i className="material-icons">create</i>
                </div>

                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nome da página"
                    value={values.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <textarea
                    name="description"
                    rows="5"
                    className="form-control"
                    placeholder="Escreva uma descrição"
                    value={values.description}
                    onChange={handleInputChange}
                >
                </textarea>

            </div>

            <button className="btn btn-primary btn-block">
                {props.id === '' ? 'Salvar' : 'Alterar'}
            </button>

        </form>
    );
}