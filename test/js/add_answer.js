
  function addAnswer(sectionId) {
    const input = document.querySelector(`#${sectionId} .answer-input`);
    const answer = input.value.trim();

    if (answer === "") {
      return;
    }

    const answerList = document.querySelector(`#${sectionId} .answer-list`);

    const duplicateItem = Array.from(answerList.querySelectorAll('li span'))
      .find(item => item.textContent === answer);

    if (duplicateItem !== undefined) {
      input.value = "";
      return;
    }

    let editingItem = answerList.querySelector(".editing");
    if (editingItem !== null) {
      editingItem.firstChild.textContent = answer;
      editingItem.classList.remove("editing");
      input.value = "";
      updateCheckbox();
      return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = answer;
    li.appendChild(span);

    li.onclick = function () {
      answerList.querySelectorAll("li").forEach(function (item) {
        item.classList.remove("editing");
      });
      li.classList.add("editing");
      input.value = span.textContent;
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.onclick = function () {
      li.remove();
      updateCheckbox();
    };
    li.appendChild(deleteButton);

    answerList.appendChild(li);

    input.value = "";
    updateCheckbox();
  }

  function updateCheckbox() {
  const answerList = document.querySelector("#list_is .answer-list");
  const isAnswerList = document.querySelector("#is_answer_list");
  isAnswerList.innerHTML = ""; // очищаем список ответов второй секции

  answerList.querySelectorAll("li").forEach(function (item) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item.firstChild.textContent;
    checkbox.checked = Array.from(
      isAnswerList.querySelectorAll("li")
    ).some(function (li) {
      return li.textContent === checkbox.value;
    });
    checkbox.onchange = function () {
      const li = Array.from(isAnswerList.querySelectorAll("li")).find(
        function (li) {
          return li.textContent === checkbox.value;
        }
      );

      if (checkbox.checked) {
        if (!li) {
          const li = document.createElement("li");
          li.textContent = checkbox.value;
          isAnswerList.appendChild(li);
        }
      } else {
        if (li) {
          li.remove();
        }
      }
    };

    const label = document.createElement("label");
    label.textContent = item.firstChild.textContent;
    label.insertBefore(checkbox, label.firstChild);

    const li = document.createElement("li");
    li.appendChild(label);
    isAnswerList.appendChild(li);
  });
}

  updateCheckbox();

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

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

