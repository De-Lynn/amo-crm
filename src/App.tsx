import './scss/App.scss';
import {ReactComponent as BigRedBall} from './iconsfont/red-ball-big.svg'
import {ReactComponent as SmallRedBall} from './iconsfont/red-ball-small.svg'
import {ReactComponent as RedBall43} from './iconsfont/red-ball-43.svg'
import {ReactComponent as PurpleBall} from './iconsfont/purple-ball.svg'
import {ReactComponent as PurpleBall40} from './iconsfont/purple-ball-40.svg'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='wrapper'>
      {/*-------------- HEADER --------------*/}
      <Header />

      {/*-------------- MAIN --------------*/}
      <Main />

      {/*-------------- FOOTER --------------*/}
      <Footer />

      {/*-------------- BACKGROUND ITEMS --------------*/}
      <span className='red light'/>
      <span className='purple light'/>

      <BigRedBall className='ball red big'/>
      <SmallRedBall className='ball red small'/>
      <PurpleBall className='ball purple'/>

      <RedBall43 className='ball red mobile'/>
      <PurpleBall40 className='ball purple mobile'/>
    </div>
  );
}

export default App;
