
export default {

    install(Vue) {

        // Vue.prototype.getLesModel = function (value) {
        //     var model
        //     if (value == "formMapping") {
        //         model = {
        //             "createDate": null,
        //             "formId": "init",
        //             "formKey": null,
        //             "modifyDate": null,
        //             "status": null,
        //             "targetId": null,
        //             "targetTable": null,
        //             formStep: null,
        //             phone: null,
        //         }

        //     }

        //     return JSON.parse(JSON.stringify(model));
        // };

        Vue.prototype.getWep1Language = function (type) {
            var language = {}
            if (type == 'English') {

                language = {
                    localeBcp47: "en-US",
                    projectNameFull: "Assisting the Economic Empowerment of Women in Latin America and the Caribbean in the Post-Pandemic of COVID-19",
                    importFileName: "File name must include Spanish / English / Cht",
                    buttonLabel: { new: "New One", resume: "Resume", submit: "Submit", temp: "Save", entrance: "Entrance", previous: "Previous", next: "Next", complet: "Complet" },
                    formWep1Continue: {
                        title: "Continue",
                        country: "Country",
                        phone: "Phone",
                        cancel: "Cancel",
                        confirm: "Confirm",
                    },
                    formWep1Entrance: {
                        note: "Note",
                        title: "Entrance",
                        contentArray: [
                            "New Application : create a new application and get a new Application No.",
                            "Resume : Use Application No. to fill in the form",
                        ],
                    },
                    formWep1_0_label: { title: "Create New Application", phone: "Please enter your phone number", submit: "Submit" },
                    formWep1_1_label: {
                        title: "Basic Information",
                        country: "Country",
                        projectName: "Project Name",
                        name: "Name",
                        gender: "Gender",
                        companyName: "Company Name",
                        registration: "Registration",
                        dateOfCounseling: "Date of counseling",
                        commencementCounseling: "Start Date of counseling",
                        completionCounseling: "End Date of counseling",
                        categoryCounseling: "Category of counseling",


                    },
                    formWep1_2_label: {
                        title: "First Phase Survey",
                        establishedDate: "Established Date",
                        numberOfEmployees: "Number of Employees",
                        monthlySale: "Monthly Sale Amount (Average in 6 months)",
                        revenueInvestedInHouseholdExpenses: "Percentage of revenue invested in household expenses (Average in 6 months)",
                        revenueReinvestedInBusinessOperation: "Percentage of revenue reinvested in business operation (Average in 6 months)",
                        monthlyRevenue: "Monthly revenue",
                        householdExpenses: "Amount of household expenses",
                        businessOperation: "Amount of reinvested in business operation",
                        dailyWorkingHours: "Daily working hours in business operations",
                        beneficiary: "Beneficiary of Angel fund???Venture Capital fund /Relief fund",
                        note1: "amount of household expenses???monthly revenue???percentage",
                        note2: "amount of reinvested in business operation???monthly revenue???percentage",
                    },
                    countryArray: [{ value: 'Guatemala', text: 'Guatemala', code: "502" },
                    { value: 'Honduras', text: 'Honduras', code: "504" },
                    { value: 'Paraguay', text: 'Paraguay', code: "595" },
                    { value: 'Belize', text: 'Belize', code: "501" },
                    { value: 'Haiti', text: 'Haiti', code: "509" },
                    { value: 'Saint Lucia', text: 'Saint Lucia', code: "1-758" },
                    { value: 'Saint Christopher and Nevis', text: 'Saint Christopher and Nevis', code: "1-869" },
                    { value: 'Saint Vincent', text: 'Saint Vincent', code: "1-784" },],
                    genderArray: [{ value: 'Male', text: 'Male' },
                    { value: 'Female', text: 'Female' },
                    { value: 'X', text: 'X' }],
                    ynArray: [{ value: 'Y', text: 'Yes' },
                    { value: 'N', text: 'No' }],
                    categoryCounselingArray: [{ value: 'Vocational Skill Training', text: 'Vocational Skill Training' },
                    { value: 'Entrepreneurship', text: 'Entrepreneurship' }, { value: 'MSME Relief Counseling', text: 'MSME Relief Counseling' }],
                };

            } else if (type == 'Spanish') {

                language = {
                    localeBcp47: "es-US",
                    projectNameFull: "Proyecto de Asistencia a la Recuperaci??n Econ??mica y Empoderamiento de las Mujeres de Am??rica Latina y el Caribe, en etapa post pandemia",
                    importFileName: "El nombre del archivo debe incluir Spanish / English / Cht",
                    buttonLabel: { new: "Uno nuevo", resume: "Reanudar", submit: "Entregar", temp: "Guadar", entrance: "Entrada", previous: "Previo", next: "Siguiente", complet: "Finalizar" },
                    formWep1Continue: {
                        title: "Reanudar",
                        country: "Pa??s",
                        phone: "Tel??fono",
                        cancel: "Cancelar",
                        confirm: "Confirmar",

                    },
                    formWep1Entrance: {
                        note: "Nota",
                        title: "Entrada",
                        contentArray: [
                            "Nueva aplicaci??n : crear una nueva solicitud y obtener un nuevo n??mero de solicitud.",
                            "Reanudar : Utilice el n??mero de solicitud para completar el formulario.",
                        ],
                    },
                    formWep1_0_label: { title: "Crear nueva aplicaci??n", phone: "Por favor introduzca su n??mero telef??nico", submit: "Cargar Nuevo Beneficiario" },
                    formWep1_1_label: {
                        title: "Informaci??n B??sica",
                        country: "Pa??s",
                        projectName: "Nombre del Proyecto",
                        name: "Nombre",
                        gender: "G??nero",
                        companyName: "Nombre de la Compa????a",
                        registration: "Registro",
                        dateOfCounseling: "Fecha de las asesor??as",
                        commencementCounseling: "Fecha de inicio de la consejer??a",
                        completionCounseling: "Fecha de finalizaci??n de la consejer??a",
                        categoryCounseling: "Categor??a del asesoramiento",
                    },
                    formWep1_2_label: {
                        title: "Encuesta Primera Fase",
                        establishedDate: "Fecha establecida",
                        numberOfEmployees: "N??mero de Empleados",
                        monthlySale: "Ingreso Mensual por Ventas (Promedio en 6 months)",
                        revenueInvestedInHouseholdExpenses: "Porcentaje de ingresos invertidos en gastos del hogar (Promedio en 6 meses)",
                        revenueReinvestedInBusinessOperation: "Porcentaje de ingresos reinvertidos en gastos operativos del negocio (Promedio en 6 meses) ",
                        monthlyRevenue: "Ingresos del negocio Mensual",
                        householdExpenses: "Ingresos invertidos en gastos del hogar",
                        businessOperation: "Ingresos reinvertidos en gastos operativos del negocio",
                        dailyWorkingHours: "Horas laboradas diarias en operaciones del negocio",
                        beneficiary: "Beneficiario del Capital Angel / Capital Semilla /Fondo de Alivio",
                        note1: "ingresos invertidos en gastos del hogar/ gastos del hogar mensual=%",
                        note2: "ingresos reinvertidos en gastos operativos del negocio/  ingresos del negocio Mensual=%",
                    },
                    countryArray: [{ value: 'Guatemala', text: 'Guatemala', code: "502" },
                    { value: 'Honduras', text: 'Honduras', code: "504" },
                    { value: 'Paraguay', text: 'Paraguay', code: "595" },
                    { value: 'Belize', text: 'Belice', code: "501" },
                    { value: 'Haiti', text: 'Hait??', code: "509" },
                    { value: 'Saint Lucia', text: 'Santa Luc??a', code: "1-758" },
                    { value: 'Saint Christopher and Nevis', text: 'San Cristobal y Nieves', code: "1-869" },
                    { value: 'Saint Vincent', text: 'San Vicente y las Granadinas', code: "1-784" },],
                    genderArray: [{ value: 'Male', text: 'Masculino' },
                    { value: 'Female', text: 'Femenino' },
                    { value: 'X', text: 'X' }],
                    ynArray: [{ value: 'Y', text: 'S??' },
                    { value: 'N', text: 'No' }],
                    categoryCounselingArray: [{ value: 'Vocational Skill Training', text: 'Entrenamiento para habilidades vocacionales' },
                    { value: 'Entrepreneurship', text: 'Emprendimiento' }, { value: 'MSME Relief Counseling', text: 'Alivio para MIPYMES' }],
                };
            } else if (type == 'Cht') {

                language = {
                    localeBcp47: "zh-TW",
                    projectNameFull: "?????????????????????????????????????????????????????????????????????????????????",
                    importFileName: "?????????????????? Spanish / English / Cht",
                    buttonLabel: { new: "??????", resume: "??????", submit: "??????", temp: "??????", entrance: "??????", previous: "?????????", next: "?????????", complet: "??????" },
                    formWep1Continue: {
                        title: "??????",
                        country: "??????",
                        phone: "??????",
                        cancel: "??????",
                        confirm: "??????",
                    },
                    formWep1Entrance: {
                        note: "??????",
                        title: "??????",
                        contentArray: [
                            "????????? : ?????????????????????????????????",
                            "???????????? : ???????????????????????????????????????",
                        ],
                    },
                    formWep1_0_label: { title: "????????????", phone: "????????????????????????", submit: "??????" },
                    formWep1_1_label: {
                        title: "????????????",
                        country: "??????",
                        projectName: "????????????",
                        name: "??????",
                        gender: "??????",
                        companyName: "????????????",
                        registration: "????????????",
                        dateOfCounseling: "????????????",
                        commencementCounseling: "????????????",
                        completionCounseling: "????????????",
                        categoryCounseling: "????????????",

                    },
                    formWep1_2_label: {
                        title: "????????????????????????",
                        establishedDate: "????????????",
                        numberOfEmployees: "????????????",
                        monthlySale: "?????????????????????(??????)",
                        revenueInvestedInHouseholdExpenses: "?????????????????????????????????????????????(??????)",
                        revenueReinvestedInBusinessOperation: "????????????????????????????????????????????????(??????)",
                        monthlyRevenue: "????????????",
                        householdExpenses: "????????????????????????",
                        businessOperation: "?????????????????????????????????",
                        dailyWorkingHours: "???????????????????????????????????????",
                        beneficiary: "??????????????????/????????????/????????????",
                        note1: "???????????????????????????????????????????????????",
                        note2: "????????????????????????????????????????????????????????????",
                    },
                    countryArray: [{ value: 'Guatemala', text: '????????????', code: "502" },
                    { value: 'Honduras', text: '????????????', code: "504" },
                    { value: 'Paraguay', text: '?????????', code: "595" },
                    { value: 'Belize', text: '?????????', code: "501" },
                    { value: 'Haiti', text: '??????', code: "509" },
                    { value: 'Saint Lucia', text: '????????????', code: "1-758" },
                    { value: 'Saint Christopher and Nevis', text: '??????????????????????????????', code: "1-869" },
                    { value: 'Saint Vincent', text: '?????????', code: "1-784" },],
                    genderArray: [{ value: 'Male', text: '???' },
                    { value: 'Female', text: '???' },
                    { value: 'X', text: 'X' }],
                    ynArray: [{ value: 'Y', text: '???' },
                    { value: 'N', text: '???' }],
                    categoryCounselingArray: [{ value: 'Vocational Skill Training', text: '??????????????????' },
                    { value: 'Entrepreneurship', text: '????????????' }, { value: 'MSME Relief Counseling', text: '??????????????????' }],
                };

            }

            return JSON.parse(JSON.stringify(language));
            // var commonArray
            // if (type == 'formWep1_counrty') {
            //     commonArray = [
            //         { value: 'Guatemala', name: 'Guatemala' },
            //         { value: 'Honduras', name: 'Honduras' },
            //         { value: 'Paraguay', name: 'Paraguay' },
            //         { value: 'Belize', name: 'Belize' },
            //         { value: 'Haiti', name: 'Haiti' },
            //         { value: 'Saint Lucia', name: 'Saint Lucia' },
            //         { value: 'Saint Christopher and Nevis', name: 'Saint Christopher and Nevis' },
            //         { value: 'Saint Vincent', name: 'Saint Vincent' },

            //     ]
            //     return commonArray;
            // }
        };



    }
}


