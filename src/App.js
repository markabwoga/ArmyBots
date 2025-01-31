import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import BotList from './pages/botList';
import Army from './pages/Army';

function App() {
  return (
    <BrowserRouter>
            <div className="App">
              <nav>
                <Nav />
              </nav>

              <main>
                      <Routes>
                        <Route path='/' element ={<Home />}></Route>
                        <Route path='/BotList' element ={<BotList />}></Route>
                        <Route path='/Army' element ={<Army />}></Route>
                      </Routes>
              </main>
            </div>
    </BrowserRouter>

  );
}

export default App;
