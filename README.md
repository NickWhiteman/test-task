### Техническое задание.
  * Создать приложение, где нужно вывести через Rest API данные (можно плиткам) (Ссылка на данные - http://jsonplaceholder.typicode.com/photos);

  * Сделать постраничный вывод картинок;

  * Сделать кнопку удаления картинки;

  * При нажатии выводить модалку с увеличенной картинок (для списка - thumbnailUrl, для модалки - url);

  * Сделать возможность сортировки по айдишнику альбома (albumId), сделать может быть селектор или же просто вывести над списком все айдишники и при нажатии делать фильтрацию.

#### Стэк: 
  * TypeScript
  * React
  * Redux
  * Scss
  
  Намерено не стал реализовывать Redux-saga.

#### Реализация: 
  * Настроил приложение
  * Для стилей использовал Scss
  * Настроил Redux для работы с состояниями
  * Намерено не стал использовать Redux-saga чтобы не таратить время на работу с еще одним слоем абстракции в тестовом проекте
  * Реализовал UI:
           1.Страница с карточками по 10 карточек на странице
           2.Компонент переключения страницы с отображением 10 страниц и инкрементом и декрементом шаг +- 1
           3.Сделал модальное окно с увеличенной картинкой
           4.Сделал модальное окно с функцией удаления элемента по id

#### Для запуска проекта необходимо:
  * Скачать проект
  * Установить пакеты командой yarn
  * Запустить приложение командой yarn start
