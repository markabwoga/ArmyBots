import { NavLink } from 'react-router-dom';
import simpleTypewriter from 'simple-typewriter';
import '../css/Home.css'

const Home = ()=>{

    return (
        <div className='HomeContainer'>
            <h1>Welcome to the world of robots</h1>
            <div className='intruct'><h2>Proceed by Clicking on the button bellow</h2></div>

            <div className='button'><NavLink to='botList'>PROCEED</NavLink></div>
        </div>  

    );
};

export default Home