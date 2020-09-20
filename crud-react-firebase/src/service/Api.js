import React from 'react';
import { db } from '../firebaseConfig';


const add = async (item) => {
    await db.collection('links').doc().set(item);
    console.log('Adicionado com sucesso !!');
}

const list = async (setLinks) => {
    await db.collection('links').onSnapshot((result) => {
        const docsList = [];
        result.forEach(item => {
            docsList.push({ ...item.data(), id: item.id });
        });
        setLinks(docsList);
    });

}

const delet = async (id) => {
    if (window.confirm('Excluir permanentemente?')) {
        await db.collection('links').doc(id).delete();
        console.log('Item eliminado');
    }
}

const getLinkById = async (id, setValues) => {
    const resp = await db.collection('links').doc(id).get();
    setValues(resp.data());
}

const edit = async (id, values) => {
    await db.collection('links').doc(id).update(values);
}


export default {
    add,
    list,
    delet,
    getLinkById,
    edit,
}
