import './style/style.css';
import { useSelector } from 'react-redux';

import { selectIsDeleteMode, selectIsOpenModal } from './store/selectors';
import { Showcase } from './showcase/Showcase';
import { HeadShowcase } from './showcase/components/head-showcase/HeadShowcase';

function App() {
  const isOpen = useSelector(selectIsOpenModal);
  const isDelete = useSelector(selectIsDeleteMode);
  return (
    <div className={`${isOpen || isDelete ? "dark-screen" : "App-wrapper"}`}>
      <div className="App">
        <div className="app__head">
          <HeadShowcase />
        </div>
        <div className="app__showcase">
          <Showcase />
        </div>
      </div>
    </div>
  );
}

export default App;
