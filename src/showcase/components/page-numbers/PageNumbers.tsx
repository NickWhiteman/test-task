import './style/style.css';
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectGetData, selectPageNumber } from "../../../components/modal-window/selectors";
import { getDataActions, pageNumberActions, processedDataActions } from "../../../store/action-creator";
import { Data } from "../../../store/types";
import { PageNumber } from "./PageNumber";

type PageProps = {
  numberPages: number[]
}

export const PageNumbers: React.FC<PageProps> = React.memo(({
  numberPages
}) => {

  const dispatch = useDispatch();
  const dataForPage = useSelector(selectGetData);
  const currentPage = useSelector(selectPageNumber);

  useEffect(() => {
    dataOnPage();
  },[ currentPage, dataForPage ]);

  const dataOnPage = () => {
    let curr = currentPage;

    if (currentPage === 0) {
      curr = 1;
    }

    const arrayDataForPage = dataForPage.filter(
      (data, index) => curr * 10 > index || curr >= index
    );

    dispatch(processedDataActions(arrayDataForPage));
  };

  const pageHandler = useCallback((pageNumber: number) => {
    dispatch(pageNumberActions(pageNumber));
  }, []);

  const incrementPage = useCallback((pageNumber: number) => {
    if (pageNumber === numberPages.length) {
      return;
    }

    dispatch(pageNumberActions(pageNumber + 1));
  }, []);
  
  const decrementPage = (pageNumber: number) => {
    if (pageNumber === 1) {
      return;
    }

    dispatch(pageNumberActions(pageNumber - 1));
  };

  return (
    <div className="page-numbers">
      <span
        key={`page-decrement`}
        onClick={() => decrementPage(currentPage)}>--i</span>
      {
        numberPages.map((page, index) => {

          if (
            (currentPage) === index // проверяем текущую страницу
              || index < currentPage + 9 // новые страницы
              && !(index < currentPage) // скрытые индексы
          ) {
            
            return (
              <span
                key={`page_${index}`}
                className={`page-number${
                  currentPage === index ? "_current" : ""
                }`}
                onClick={() => pageHandler(page)}>
                <PageNumber pageNumber={page} />
              </span>
            )

          }
        })
      }
      <span
        key={`page-increement`}
        onClick={() => incrementPage(currentPage)}>i++</span>
    </div>
  )
});