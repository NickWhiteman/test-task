import './style/style.css';
import { selectIsOpenModal } from './store/selectors';
import { useSelector } from 'react-redux';
import { Showcase } from './showcase/Showcase';

function App() {
  const isOpen = useSelector(selectIsOpenModal)
  return (
    <div className={`${isOpen ? "dark-screen" : "App-wrapper"}`}>
      <div className="App">
        <div className="app__head"></div>
        <div className="app__showcase">
          <Showcase />
        </div>
      </div>
    </div>
  );
}

export default App;
