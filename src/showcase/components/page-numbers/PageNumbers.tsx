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

  console.log("%c currentPage", "color: orange", currentPage);


  useEffect(() => {
    dataOnPage();
  },[ currentPage, dataForPage.length ]);

  const dataOnPage = () => {
    let arrayDataForPage: Data[] = []; // массив готовых элементов
    
    if (currentPage === 0) {
      arrayDataForPage = dataForPage.filter(
        (data, index) =>
          currentPage <= index
          && index <= currentPage + 9
      );
    } else {
      arrayDataForPage = dataForPage.filter(
        (data, index) =>
          currentPage <= index
          && index <= currentPage + 9
      );
    }
    console.log("%c Data for page", "color: blue", arrayDataForPage);
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

  const renderNumbersPage = useCallback((currentPage: number) => {
    const element: JSX.Element[] = []
    for (let index = currentPage; index < 10 + currentPage; index++) {
      element.push(
        <span
          key={`page_${index}`}
          className={`page-number${currentPage === index ? "_current" : ""
            }`}
          onClick={() => pageHandler(index)}>
          <PageNumber pageNumber={index} />
        </span>
      );
    }
    return element;
  }, []);

  return (
    <div className="page-numbers">
      <span
        key={`page-decrement`}
        onClick={() => decrementPage(currentPage)}>--i</span>
      {
        renderNumbersPage(currentPage)
      }
      <span
        key={`page-increement`}
        onClick={() => incrementPage(currentPage)}>i++</span>
    </div>
  )
});
