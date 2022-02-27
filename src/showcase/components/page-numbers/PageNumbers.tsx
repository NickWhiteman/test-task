import './style/style.css';
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectGetData, selectPageNumber } from "../../../store/selectors";
import { pageNumberActions, processedDataActions } from "../../../store/action-creator";
import { Data } from "../../../store/types";
import { PageNumber } from "./PageNumber";

type PageProps = {
  numberPages: number[]
}

// Велосипед для отображения данных на страницах и нумерация страниц
// но я посчитал это адекватным примером демонстрации построения условных конструкций
export const PageNumbers: React.FC<PageProps> = React.memo(({
  numberPages
}) => {

  const dispatch = useDispatch();
  const dataForPage: Data[]= useSelector(selectGetData);
  const currentPage = useSelector(selectPageNumber);

  useEffect(() => {
    dataOnPage();
  },[ currentPage, dataForPage ]);

  const dataOnPage = () => {
    const startData = currentPage * 10;//крайний элемент на странице
    let curr = currentPage; // первый элемент на странице
    let arrayDataForPage: Data[] = []; // массив готовых элементов

    if (currentPage === 0) {
      curr = 1;
      arrayDataForPage = dataForPage.filter(
        (data, index) =>
          (curr - 1) <= index
          && index <= curr + 9
      );
    } else {
      arrayDataForPage = dataForPage.filter(
        (data, index) =>
          startData + 9 <= index
          && index >= startData
      );
    }

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
  
  const decrementPage = useCallback((pageNumber: number) => {
    if (pageNumber === 0) {
      return;
    }

    dispatch(pageNumberActions(pageNumber - 1));
  }, []);

  return (
    <div className="page-numbers">
      <span
        key={`page-decrement`}
        onClick={() => decrementPage(currentPage)}>--i</span>
      {
        numberPages.map((page, index) => {

          if (
            currentPage <= index
            || index <= currentPage + 9
            && !(index < currentPage)
            && !(index > currentPage + 9)
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