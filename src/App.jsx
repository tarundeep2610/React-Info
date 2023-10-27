import { useState } from 'react';
import Header from './Header'
import { MainSection } from './MainSection'
import './styles/style.css';

function App() {
    const [theme,setTheme]= useState(true);

    function handleClick(){
        setTheme((prevTheme)=>{
          console.log(prevTheme);
            return !prevTheme;
        });
    }


  return (
    <>
      <Header theme={theme} handleClick={handleClick}></Header>
      <MainSection theme={theme}></MainSection>
    </>
  )
}

export default App
