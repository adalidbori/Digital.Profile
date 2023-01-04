
import './App.css';
import styles from "./App.module.css";
import { MenuLateral } from './MenuLateral';
import { MainPage } from './MainPage';

function App() {
  return (<div className={styles.prueba}>
      <MenuLateral />
      <MainPage />
  </div>);
}

export default App;
