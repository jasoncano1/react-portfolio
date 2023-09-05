import './App.css';
import { useState } from 'react';
import { Header, About, Portfolio, Resume, Contact } from './componets';



const App = () => {

  const [page,setPage] = useState('about');
  
  return (

    <>
      <Header setpage = {setPage} />

      {
        page == 'about' ?
          <About /> : 
        page == 'portfolio' ?
          <Portfolio /> :
        page == 'contact' ?
          <Contact /> :
        <Resume />
      }
    </>
  )
}
export default App;
