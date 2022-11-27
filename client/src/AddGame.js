import React from 'react';
import './AddGame.css';

function AddGame({league, title, date, kickoff, content, writeHandler, saveHandler,dueHandler}) {
  
  return (
      <div className="AddGame">
        <p>League: 
        <select onChange={writeHandler} name="league" value={league}>
          <option value="리그">선택하세요</option>
          <option value="A매치">A매치</option>
          <option value="EPL">EPL</option>
          <option value="챔스">챔피언스리그</option>
          <option value="카라바오">카라바오컵</option>
        </select>
        </p>
        <p>Match: <input name="title" onChange={writeHandler} value={title}/></p>
        <p>Date: <input type="date" name="date" value={date} onChange={writeHandler}/></p>
        <p>KickOff: <input type='time' name="kickoff" value={kickoff} onChange={writeHandler}/></p>
        <p>Content: <input name="content" onChange={writeHandler} value={content}/></p>
        
        <button onClick={saveHandler} >Add Game</button>
      </div>
  );
}

export default AddGame;