import React from 'react';
import './GameForm.css';

const GameForm =({id, league, title, date, kickoff, content, deleteHandler})=>{

    return(
        <>
            <div className="gamelist">
                <p><b>{title} ({league})</b></p>
                <p>Date: {date}</p>
                <p>KickOff: {kickoff}~</p>
                <p>Content: {content}</p>
                
                <div className='del_button'>
                    <button type="button" id={id} onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </>
    );
};

export default GameForm;