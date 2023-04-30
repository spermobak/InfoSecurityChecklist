let editingItem = null; // Переменная для хранения ссылки на редактируемый элемент

function addAnswer() {
  // Получаем значение поля ввода
  const input = document.getElementById("answers");
  const answer = input.value.trim();

  // Если поле ввода пустое, ничего не делаем
  if (answer === "") {
    return;
  }

  // Если есть редактируемый элемент, то меняем его текст на новое значение
  if (editingItem !== null) {
    editingItem.firstChild.textContent = answer;
    editingItem = null; // Сбрасываем ссылку на редактируемый элемент
    input.value = ""; // Очищаем поле ввода
    return;
  }

  // Создаем элемент списка
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = answer;
  li.appendChild(span);

  // Добавляем возможность редактировать элемент списка
  li.onclick = function() {
    editingItem = li; // Сохраняем ссылку на редактируемый элемент
    input.value = span.textContent;
  };

  // Создаем кнопку "Удалить"
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  deleteButton.onclick = function() {
    li.remove();
  };
  li.appendChild(deleteButton);

  // Добавляем элемент в список
  const list = document.getElementById("answer-list");
  list.appendChild(li);

  // Очищаем поле ввода
  input.value = "";
}
