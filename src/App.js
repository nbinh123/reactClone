import logo from './logo.svg';
import './App.css';
import styles from "./app.module.scss"
import Header from './layouts/header/Header';
import Body from './layouts/body/Body';
import Footer from './layouts/footer/Footer';

function App() {

  const change = (boolean, setState) => {
    setState(!boolean)
  }

  return (
    <div className="App">
      <Header onWatchingChangeLogin={change}/>
      <Body onWatchingChangeLogin={change}/>
      <Footer />
    </div>
  );
}

export default App;
