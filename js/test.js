// Находим кнопку отправки результатов по ID
const submitButton = document.getElementById('submit-button');

// Добавляем обработчик событий на нажатие кнопки
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Находим все элементы формы с помощью метода querySelectorAll
  const formElements = document.querySelectorAll('form input, form select');

  // Объявляем переменную, которая будет хранить номер пропущенного пункта
  let missingItem = null;

  // Проходим по всем элементам формы
  formElements.forEach(function(element, index) {
    // Если элемент не заполнен, записываем его номер в переменную missingItem
    if (element.value === '') {
      missingItem = index + 1; // Добавляем 1, т.к. индексы начинаются с 0
      return; // Прерываем цикл forEach
    }
  });

  // Если есть пропущенный пункт, выводим сообщение и прокручиваем к нему страницу
  if (missingItem !== null) {
    alert('Вы пропустили пункт ' + missingItem);
    formElements[missingItem - 1].scrollIntoView(); // Прокручиваем к пропущенному пункту
    return; // Прерываем выполнение функции
  }

  // Если все поля заполнены, отправляем данные формы на сервер
  // Для этого можно использовать метод fetch или XMLHttpRequest
  // ...
});
