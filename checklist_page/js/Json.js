function submitForm() {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const date = new Date();
    // const formElements = document.querySelectorAll(
    //     ".form-section input, .form-section select, .form-section textarea"
    // );

    // let missingItem = null;
    // formElements.forEach(function (element, index) {
    //     if (element.value === "") {
    //         missingItem = element.name;
    //         return;
    //     }
    // });
    // if (missingItem !== null) {
    //     alert("Вы пропустили пункт " + missingItem);
    //     document.querySelector(".form-nav #" + missingItem).click();
    //     return;
    // } else {
        var today = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        const jsonObject = {
            addInfo: {
                description: formData.get("name_org"),
                email: formData.get("email"),
                phoneNumber: formData.get("phone"),
                dateSheetWasCreated: today,
                site: formData.get("url")
            },
            criteria: [
                {
                    responsibleIs: formData.get("numb_of_responsible_for_is"),
                    responsibleForProtect: true,
                    numOfTerritories: 3,
                    personalDataBusinessProcess: false,
                    numOfEmployees: 20,
                    numOfClients: 55,
                    publiclyInfo: true,
                    biometricInfo: true,
                    specialInfo: false,
                    employeeProcessing: true,
                    clientsProcessing: true,
                    otherProcessing: false,
                    numOfServers: 10,
                    arm: 3,
                    skzi: true,
                    threatModel: true,
                    personalDataProtectPolicy: true,
                    otherDocumentsOfPdProtect: false,
                    securityLevel: false,
                    degreeOfDocumentation: 7
                }
            ],
            reports: [
                {
                    reportsPath: "Еще более новый путь до акта"
                }
            ],
            meansOfProtections: [
                {
                    antivirus: "Avast, ESET32, Касперский",
                    againstUnauthorizedAccess: "Нет",
                    interNetworkShielding: "Да",
                    siem: "Да",
                    dlp: "Такая-то",
                    crypto: "Есть одна",
                    securityMonitoringTool: "Тоже есть"
                }
            ],
            informationSystems: [
                {
                    system: "Kali Linux",
                    foreign: true
                },
                {
                    system: "Windows",
                    foreign: true
                }
            ],
            addresses: [
                {
                    address: "Санкт-Петербург, Xrfkjdcrfz"
                }
            ],
            businessProcesses: [
                {
                    businessProcess: "Сбор данных454545"
                },
                {
                    businessProcess: "Сбор данных657486/87"
                }
            ]
        };

        console.log(JSON.stringify(jsonObject));
    // }
}