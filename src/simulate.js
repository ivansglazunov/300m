import React from 'react';

// Симулирует withTracker метеора. Вместо запросов к данным в generator нужно возвращать демо данные.
// Нужен для удобства замены на реальный withTracker после завершения разработки прототипа интерфейса.
export default (generator) => {
  return (Component) => {
    return (props) => {
      return <Component {...props} {...generator(props)}/>;
    };
  };
};