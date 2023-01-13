import { AiOutlinePlus } from 'react-icons/ai'
import { useNotesContext } from '../context/Notescontext'


const Notes = () => {
    const { notesdata: { name, texts }, setinput, adddata, clearall } = useNotesContext();
    return (
        <div className='notecontent'>
            <div className="note">
                <input type="text" placeholder='Title' name='name' value={name} autoComplete="off" onChange={(e) => { setinput(e.currentTarget) }} />
                <textarea className='notetext' name='texts' placeholder='Enter Text Here' value={texts} onChange={(e) => { setinput(e.currentTarget) }}></textarea>
                <div className="button">
                    <button type='button' className='notebtn'  ><AiOutlinePlus onClick={() => adddata()} /></button>
                </div>
            </div>
            <div className="clearbutton">
                <button type='button' onClick={() => clearall()}>Clear All</button>
            </div>
        </div>
    )
}

export default Notes
