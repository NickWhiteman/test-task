import './style/style.css';
import { useDispatch } from "react-redux";

import { Button } from "../../../components/button/Button";

export const HeadShowcase: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="showcase__head">
      <h3>Showcase</h3>
    </div>
  )
};