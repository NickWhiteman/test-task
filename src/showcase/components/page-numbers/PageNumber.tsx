import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGetData } from "../../../components/modal-window/selectors";
import { processedDataActions } from "../../../store/action-creator";
import { Data } from "../../../store/types";

type NumberPage = {
  pageNumber: number
}

export const PageNumber: React.FC<NumberPage> = ({
  pageNumber
}) => {  
  return (
    <>
      <span
        key={`page_${pageNumber}`}>{pageNumber + 1}</span>
    </>
  )
}