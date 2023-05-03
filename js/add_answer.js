function addAnswer(sectionId) {
  // Получаем значение поля ввода
  const input = document.querySelector(`#${sectionId} .answer-input`);
  const answer = input.value.trim();

  // Если поле ввода пустое, ничего не делаем
  if (answer === "") {
    return;
  }

  // Получаем список ответов
  const answerList = document.querySelector(`#${sectionId} .answer-list`);

  // Если есть редактируемый элемент, то меняем его текст на новое значение
  let editingItem = answerList.querySelector(".editing");
  if (editingItem !== null) {
    editingItem.firstChild.textContent = answer;
    editingItem.classList.remove("editing");
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
    // Снимаем выделение с других элементов
    answerList.querySelectorAll("li").forEach(function(item) {
      item.classList.remove("editing");
    });

    // Выделяем редактируемый элемент
    li.classList.add("editing");
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
  answerList.appendChild(li);

  // Очищаем поле ввода
  input.value = "";
}


function showField(radioId, fieldId) {
  const radio = document.getElementById(radioId);
  if (!radio) {
    console.error(`Radio with id '${radioId}' not found`);
    return;
  }
  const field = document.getElementById(fieldId);
  if (!field) {
    console.error(`Field with id '${fieldId}' not found`);
    return;
  }
  field.style.display = "block";
}

function hideField(radioId, fieldId) {
  const radio = document.getElementById(radioId);
  if (!radio) {
    console.error(`Radio with id '${radioId}' not found`);
    return;
  }
  const field = document.getElementById(fieldId);
  if (!field) {
    console.error(`Field with id '${fieldId}' not found`);
    return;
  }
  field.style.display = "none";
}

