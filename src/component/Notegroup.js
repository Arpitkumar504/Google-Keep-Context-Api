import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { useNotesContext } from '../context/Notescontext'

const Notegroup = ({ id, name, text }) => {
    const { removedata } = useNotesContext();
    return (
        <div className='notegroup'>
            <h1>{name}</h1>
            <div className="content">
                <h5>{text}</h5>
            </div>
            <div className="button">
                <button type='button' className='notebtn' onClick={(e) => { removedata(id) }}> <AiOutlineMinus /></button>
            </div>
        </div>
    )
}

export default Notegroup