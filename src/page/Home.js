import React from 'react'
import Notes from '../component/Notes'
import Notesshow from '../component/Notesshow'

const Home = () => {
    return (
        <div className='container'>
            <Notes />
            <Notesshow />
        </div>
    )
}

export default Home
