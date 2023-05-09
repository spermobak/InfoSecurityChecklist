function submitForm() {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const jsonObject = {};
    const formElements = document.querySelectorAll(
        ".form-section input, .form-section select, .form-section textarea"
    );

    let missingItem = null;
    formElements.forEach(function (element, index) {
        if (element.value === "") {
            missingItem = element.name;
            return;
        }
    });
    if (missingItem !== null) {
        alert("Вы пропустили пункт " + missingItem);
        document.querySelector(".form-nav #" + missingItem).click();
        return;
    } else {
        for (const [key, value] of formData.entries()) {
            jsonObject[key] = value;
        }

        console.log(JSON.stringify(jsonObject));
    }
}