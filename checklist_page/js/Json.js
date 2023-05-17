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
        var jsonObject = {
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
                    responsibleForProtect: booleanification("switch"),
                    numOfTerritories: 3,
                    personalDataBusinessProcess: booleanification("switch_bp"),
                    numOfEmployees: formData.get("count_of_employee"),
                    numOfClients: formData.get("count_of_client"),
                    publiclyInfo: booleanification("free_info"),
                    biometricInfo: booleanification("biometric"),
                    specialInfo: booleanification("special"),
                    employeeProcessing: booleanification("company_employees"),
                    clientsProcessing: booleanification("company_clients"),
                    otherProcessing: booleanification("special"),
                    numOfServers: formData.get("numb_of_servers"),
                    arm: formData.get("numb_of_aws"),
                    skzi: booleanification("switch_c"),
                    threatModel: booleanification("switch_rm"),
                    personalDataProtectPolicy: booleanification("switch_pp"),
                    otherDocumentsOfPdProtect: booleanification("switch_od"),
                    securityLevel: booleanification("switch_sl"),
                    degreeOfDocumentation: formData.get("range_input")
                }
            ],
            reports: [
                {
                    reportsPath: null
                }
            ],
            meansOfProtections: [
                {
                    antivirus: formData.get("antivirus"),
                    againstUnauthorizedAccess: formData.get("againstUnauthorizedAccess"),
                    interNetworkShielding: formData.get("nterNetworkShielding"),
                    siem: formData.get("siem"),
                    dlp: formData.get("dlp"),
                    crypto: formData.get("crypto"),
                    securityMonitoringTool: formData.get("securityMonitoringTool")
                }
            ],
            informationSystems: [],
            addresses: [
                {
                    address: dearreyfication("address")
                }
            ],
            businessProcesses: []
        };
        const bp_list = dearreyficationlite("buisness_processes");
        for (let index = 0; index < bp_list.length; index++) {
            const buisness_processes = bp_list[index];
            jsonObject.businessProcesses.push({businessProcess : buisness_processes});   
        }

        const is_list = dearreyficationlite("list_is");
        for (let index = 0; index < is_list.length; index++) {
            const system = is_list[index];
            const answer = document.querySelector("#is_answer_list input[name=" + system + "]");
            var foreign = false;
            console.log(answer.value);
            if (answer.value == "on"){
                foreign = true;
            }
            jsonObject.informationSystems.push({system : system, foreign : foreign});   
        }

        console.log(JSON.stringify(jsonObject));
    // }
}

function booleanification(name) {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    if ((formData.get(name) == "yes") || (formData.get(name) == "on")){
        return true;
    }else{
        return false;
    }
}

function dearreyfication(name) {
    const answerList = document.querySelectorAll(`#${name} .answer-list li span`);
    var str = "";
    if (answerList.length != 0){
    for (let index = 0; index < (answerList.length - 1); index++) {
        const answer = answerList[index];
            str = str + answer.textContent + ", ";
    }
    str = str + answerList[answerList.length - 1].textContent;
}
    return str
}

function dearreyficationlite(name) {
    const answerList = document.querySelectorAll(`#${name} .answer-list li span`);
    var list = [];
    if (answerList.length != 0){
    for (let index = 0; index < (answerList.length ); index++) {
        const answer = answerList[index];
            list.push(answer.textContent);
    }
}
    return list
}