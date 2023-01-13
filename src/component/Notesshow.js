import React from 'react'
import { useNotesContext } from '../context/Notescontext'
import Notegroup from './Notegroup';

const Notesshow = () => {
    const { alldata } = useNotesContext();
    return (
        <div className='notesbox'>
            {
                alldata.map((element, index) => {
                    const { names, texts } = element;
                    return (
                        <Notegroup
                            key={index}
                            id={index}
                            name={names}
                            text={texts}
                        />
                    )
                })
            }
        </div>
    )
}

export default Notesshow
