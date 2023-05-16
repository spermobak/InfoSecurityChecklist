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
        var rft = true;
        if (formData.get("switch") == "yes"){
            rft=true;
        }else{
            rft=false;
        }
        var pdbp = true;
        if (formData.get("switch_bp") == "yes"){
            pdbp = true;
        }else{
            pdbp = false;
        }
        var b_i = false;
        if (formData.get("biometric") == "on"){
            b_i = true;
        }
        var f_i = false;
        if (formData.get("free_info") == "on"){
            f_i = true;
        }
        var sp_i=false;
        if (formData.get("special") == "on"){
            sp_i = true;
        }
        var e_p = false;
        if (formData.get("company_employees") == "on"){
            e_p = true;
        }
        var c_p = false;
        if (formData.get("company_clients") == "on"){
            c_p = true;
        }
        var o_p = false;
        if (formData.get("special") == "on"){
            o_p = true;
        }
        var skzi = false;
        if (formData.get("switch_c") == "yes"){
            skzi = true;
        }
        var t_m = false;
        if (formData.get("switch_rm") == "yes"){
            t_m = true;
        }
        var p_p = false;
        if (formData.get("switch_pp") == "yes"){
            p_p = true;
        }
        var o_d = false;
        if (formData.get("switch_od") == "yes"){
            o_d = true;
        }
        var s_l = false;
        if (formData.get("switch_sl") == "yes"){
            s_l = true;
        }
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
                    responsibleForProtect:rft,
                    numOfTerritories: 3,
                    personalDataBusinessProcess: pdbp,
                    numOfEmployees: formData.get("count_of_employee"),
                    numOfClients: formData.get("count_of_client"),
                    publiclyInfo: f_i,
                    biometricInfo: b_i,
                    specialInfo: sp_i,
                    employeeProcessing: e_p,
                    clientsProcessing: c_p,
                    otherProcessing: o_p,
                    numOfServers: formData.get("numb_of_servers"),
                    arm: formData.get("numb_of_aws"),
                    skzi: skzi,
                    threatModel: t_m,
                    personalDataProtectPolicy: p_p,
                    otherDocumentsOfPdProtect: o_d,
                    securityLevel: s_l,
                    degreeOfDocumentation: formData.get("range_input")
                }
            ],
            reports: [
                {
                    reportsPath: "Еще более новый путь до акта"
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