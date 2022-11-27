import React, {useState} from 'react';
import './App.css';
import GameForm from './GameForm';
import AddGame from './AddGame';

function App() {
  const [gamelist,setGamelist]=useState([]);
  const [input, setInput]=useState({league:'리그', title: '', date:'', kickoff:'', content: ''});
  const {league, title, date, kickoff, content}=input;
  const [check, setCheck]=useState(['전체','A매치','EPL','챔스','카라바오']);
  const [id, setId]=useState(0);

  const writeHandler= (props)=>{
    const {name, value}= props.target;
    //console.log(name);
    //console.log(value);
    //setInput({league, title, date, kickoff, content, [name]:value})
    setInput({...input, [name]:value});
  };

  const deleteHandler = (props)=>{
    const id=props.target.id;
    setGamelist(gamelist.filter((game)=>(game.id!==parseInt(id))));
  };

  const saveHandler =()=>{
    if(title===''){
      alert('경기이름을 작성해주세요');
    }
    else if(league==='리그'){
      alert('리그를 선택해주세요');
    }
    else if(date===''){
      alert('날짜를 선택해주세요');
    }
    else{
      setId(id+1);
      const game={id, league, date, kickoff, title, content};
      setGamelist(gamelist.concat(game));
      setInput({league:'리그', title: '', date:'', kickoff:'', content: ''});
    }
  };
  
  const filterHandler = (props)=>{
    const name=props.target.name;
    if(check.includes(name)){
      if(name==='전체'){
        setCheck([]);
      }
      else{
        if(!check.includes('전체')){setCheck(check.filter((fil)=>(fil!==name)));}
        
      }
    }
    else{
      if(name==='전체'){
        setCheck(['전체','A매치','EPL','챔스','카라바오']);
      }
      else{
      setCheck(check.concat(name));
      }
    }
  }

  return (
      <>
        <div className="main"><b>Football Game List</b></div>
        
        < AddGame league={league} title={title} date={date} kickoff={kickoff} content={content} writeHandler={writeHandler} saveHandler={saveHandler} />
        <br/>
        <div className="league_filter">
          <p>Leauge :
          <input type="radio" name="전체" checked={check.includes('전체')} onClick={filterHandler}/>
          <span>전체</span>
          <input type="radio" name="A매치" checked={check.includes('A매치')} onClick={filterHandler}/>
          <span>A매치</span>
          <input type="radio" name="EPL"  checked={check.includes('EPL')} onClick={filterHandler}/>
          <span>프리미어리그</span>
          <input type="radio" name="챔스"  checked={check.includes('챔스')} onClick={filterHandler}/>
          <span>챔피언스 리그</span>
          <input type="radio" name="카라바오"  checked={check.includes('카라바오')} onClick={filterHandler}/>
          <span>카라바오컵</span>
          </p>
        </div>
        <br/>

        {gamelist.filter((game)=>check.includes(game.league)).map((game)=>
          < GameForm id={game.id} league={game.league} title={game.title} date={game.date} kickoff={kickoff} content={game.content} key={game.id} deleteHandler={deleteHandler}/>
        )}
      </>
  );
}

export default App;