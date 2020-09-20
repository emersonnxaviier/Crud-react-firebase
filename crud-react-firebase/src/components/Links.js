import React, { useState, useEffect } from 'react';

import LinkForm from './LinksForm';

import Api from '../service/Api';

export default function Links() {

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');

    useEffect(() => {
        Api.list(setLinks);
    }, []);

    function deleteLink(id) {
        Api.delet(id);
    }


    return (
        <div className='col-md-4 d-flex justify-content-between '>
            <div className="col-md-12 p-2">
                <LinkForm
                    id={currentId}
                    setId={setCurrentId}
                />
            </div>

            <h3>LINKS: </h3>
            <div className="col-md-10 p-2">
                {links.map((item) => (
                    <div className="card mb-1">
                        <div
                            key={item.id}
                            className="card-body"
                        >
                            <div className='d-flex justify-content-between'>
                                <h4> {item.name} </h4>
                                <div>
                                    <i
                                        className="material-icons"
                                        onClick={() => setCurrentId(item.id)}
                                    >
                                        create
                                    </i>


                                    <i
                                        className="material-icons text-danger"
                                        onClick={() => deleteLink(item.id)}
                                    >
                                        close
                                    </i>
                                </div>

                            </div>

                            <p> {item.description} </p>
                            <a href={item.url} target='_blanck'> Ir para o site </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}