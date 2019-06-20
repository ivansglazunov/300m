# 300m

### архитектура

Что бы обеспечить самую удобную, легкую и быструю разработку интерфейса, проще вести разработку не на реальной среде данных вроде meteor, а на create-react-app.

Это позволит иметь практически моментальную перезагрузку приложения при любых изменениях.

### директории

- `src/routes.js` только описания роутинга
- `src/pages/:pageName/index.js` оптимальное размещение страниц
- `src/pages/:pageName/:componentName.js` оптимально для компонентов страницы
- `src/components/:componentName/index.js` оптимально для универсальных компонентов
- `src/components/:componentName/:innerUsedFiles.js` файлы используемые внутри компонента

### данные

Для удобства переноса на реальную среду данных создан файл `src/simulate.js` предназначенный для симуляции получения и изменения данных.

> Структура используемых данных должна постоянно согласовываться в процессе работы.

#### пример использования симуляции данных

```jsx
import React, { useState } from "react";
import withTracker from "../../simulate"; // получаем симуляцию метеоровского withTracker

export default withTracker(() => {
  // вместо запросов к базе здесь можно создать демо данные хранимые прямо здесь в react hook стейтах
  const [currentUser, setCurrentUser] = useState(123);

  // эта функция не компонент, она предназначена для обеспечения компонента страницы данными
  // эта функция будет переписана на реальное получение и функции изменения данных в реальной базе после завершения разработки интерфейса

  // наружу эта функция должна возвращать:
  // - данные которые должны быть доступны в рамках страницы
  // - функции для изменения данных которые должны быть доступны в рамках страницы
  return {
    currentUser: currentUser,
    setCurrentUser
  };
})(({ currentUser, setCurrentUser }) => {
  // эта функция компонент страницы, в пропсах она получает:
  // - все что было передано из функции переданной withTracker
  // - мета инфомрация от react-router, скорее всего не потребуется

  const [count, setCount] = useState(0);

  // грубый пример для понимания

  // 1 button работа с псевдоданными данными из базы
  // 2 button работа с состояниями компонента
  return (
    <>
      <button onClick={() => setCurrentUser(currentUser ? 0 : 123)}>
        currentUser: {currentUser}
      </button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
});
```

#### рекомендованный способ работы со страницами

> это тот-же предыдущий пример, только без комментариев и разбитый на 2 компонента вместо одного

```jsx
import React, { useState } from "react";
import withTracker from "../../simulate";

export const SomePageComponent = ({
  currentUser,
  setCurrentUser,
  count,
  setCount
}) => {
  return (
    <>
      <button onClick={() => setCurrentUser(currentUser ? 0 : 123)}>
        currentUser: {currentUser}
      </button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

export default withTracker(() => {
  const [currentUser, setCurrentUser] = useState(123);

  return {
    currentUser: currentUser,
    setCurrentUser
  };
})(({ currentUser, setCurrentUser }) => {
  const [count, setCount] = useState(0);

  return (
    <SomePageComponent
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      count={count}
      setCount={setCount}
    />
  );
});
```
