import { useDispatch } from "react-redux";
import { Button } from "../../../components/button/Button";
import { pluseIcon } from "../../../components/button/iconButton";
import { ShowcaseActions } from "../../reducer";
import './style/style.css';

export const HeadShowcase: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="showcase__head">
      <h3>Showcase</h3>
      <Button
        mode="button-primary"
        children={"Сортировка по убыванию"}/>
      <Button
        mode="button-primary"
        children={"Сортировка по возрастанию"}/>
    </div>
  )
};