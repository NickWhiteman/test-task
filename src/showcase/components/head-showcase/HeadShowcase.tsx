import './style/style.css';
import { useDispatch, useSelector } from "react-redux";

import { selectGetData } from '../../../store/selectors';
import { albumIdActions } from '../../../store/action-creator';

export const HeadShowcase: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectGetData);
  const idsAlbums = data.map(item => item.albumId);
  const listIdAlbum = Array.from(new Set(idsAlbums));

  const filterAlbum = (idAlbum: number) => {
    dispatch(albumIdActions(idAlbum));
  }
  
  return (
    <div className="showcase__head">
      <h3>Showcase</h3>
      <select className="head-album">
        {
          listIdAlbum.map(idAlbum => 
            <option value={idAlbum}>{`Album id: ${idAlbum}`}</option>
          )
        }
      </select>
    </div>
  )
};