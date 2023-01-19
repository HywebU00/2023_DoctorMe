
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
                        beneficiary: "Beneficiary of Angel fund／Venture Capital fund /Relief fund",
                        note1: "amount of household expenses／monthly revenue＝percentage",
                        note2: "amount of reinvested in business operation／monthly revenue＝percentage",
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
                    projectNameFull: "Proyecto de Asistencia a la Recuperación Económica y Empoderamiento de las Mujeres de América Latina y el Caribe, en etapa post pandemia",
                    importFileName: "El nombre del archivo debe incluir Spanish / English / Cht",
                    buttonLabel: { new: "Uno nuevo", resume: "Reanudar", submit: "Entregar", temp: "Guadar", entrance: "Entrada", previous: "Previo", next: "Siguiente", complet: "Finalizar" },
                    formWep1Continue: {
                        title: "Reanudar",
                        country: "País",
                        phone: "Teléfono",
                        cancel: "Cancelar",
                        confirm: "Confirmar",

                    },
                    formWep1Entrance: {
                        note: "Nota",
                        title: "Entrada",
                        contentArray: [
                            "Nueva aplicación : crear una nueva solicitud y obtener un nuevo número de solicitud.",
                            "Reanudar : Utilice el número de solicitud para completar el formulario.",
                        ],
                    },
                    formWep1_0_label: { title: "Crear nueva aplicación", phone: "Por favor introduzca su número telefónico", submit: "Cargar Nuevo Beneficiario" },
                    formWep1_1_label: {
                        title: "Información Básica",
                        country: "País",
                        projectName: "Nombre del Proyecto",
                        name: "Nombre",
                        gender: "Género",
                        companyName: "Nombre de la Compañía",
                        registration: "Registro",
                        dateOfCounseling: "Fecha de las asesorías",
                        commencementCounseling: "Fecha de inicio de la consejería",
                        completionCounseling: "Fecha de finalización de la consejería",
                        categoryCounseling: "Categoría del asesoramiento",
                    },
                    formWep1_2_label: {
                        title: "Encuesta Primera Fase",
                        establishedDate: "Fecha establecida",
                        numberOfEmployees: "Número de Empleados",
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
                    { value: 'Haiti', text: 'Haití', code: "509" },
                    { value: 'Saint Lucia', text: 'Santa Lucía', code: "1-758" },
                    { value: 'Saint Christopher and Nevis', text: 'San Cristobal y Nieves', code: "1-869" },
                    { value: 'Saint Vincent', text: 'San Vicente y las Granadinas', code: "1-784" },],
                    genderArray: [{ value: 'Male', text: 'Masculino' },
                    { value: 'Female', text: 'Femenino' },
                    { value: 'X', text: 'X' }],
                    ynArray: [{ value: 'Y', text: 'Sí' },
                    { value: 'N', text: 'No' }],
                    categoryCounselingArray: [{ value: 'Vocational Skill Training', text: 'Entrenamiento para habilidades vocacionales' },
                    { value: 'Entrepreneurship', text: 'Emprendimiento' }, { value: 'MSME Relief Counseling', text: 'Alivio para MIPYMES' }],
                };
            } else if (type == 'Cht') {

                language = {
                    localeBcp47: "zh-TW",
                    projectNameFull: "後疫情時期協助拉丁美洲及加勒比海經濟復甦暨婦女賦權計畫",
                    importFileName: "檔名必須包含 Spanish / English / Cht",
                    buttonLabel: { new: "新案", resume: "續填", submit: "送出", temp: "暫存", entrance: "入口", previous: "上一頁", next: "下一頁", complet: "完成" },
                    formWep1Continue: {
                        title: "續填",
                        country: "國家",
                        phone: "電話",
                        cancel: "取消",
                        confirm: "確認",
                    },
                    formWep1Entrance: {
                        note: "說明",
                        title: "入口",
                        contentArray: [
                            "新案件 : 建立新案以及取得新案號",
                            "繼續填寫 : 使用既有案號，開啟案件續填",
                        ],
                    },
                    formWep1_0_label: { title: "新增資料", phone: "請輸入手機號碼：", submit: "送出" },
                    formWep1_1_label: {
                        title: "基本資訊",
                        country: "國家",
                        projectName: "隸屬計畫",
                        name: "姓名",
                        gender: "性別",
                        companyName: "公司名稱",
                        registration: "是否立案",
                        dateOfCounseling: "輔導起訖",
                        commencementCounseling: "輔導起日",
                        completionCounseling: "輔導訖日",
                        categoryCounseling: "輔導類別",

                    },
                    formWep1_2_label: {
                        title: "第一階段問題調查",
                        establishedDate: "創業時間",
                        numberOfEmployees: "僱用人數",
                        monthlySale: "平均每月銷售額(半年)",
                        revenueInvestedInHouseholdExpenses: "平均每月收入投入家庭開銷百分比(半年)",
                        revenueReinvestedInBusinessOperation: "平均每月收入再投入企業營運百分比(半年)",
                        monthlyRevenue: "每月收入",
                        householdExpenses: "每月家庭開銷金額",
                        businessOperation: "每月再投入企業營運金額",
                        dailyWorkingHours: "平均每日投入企業營運工時數",
                        beneficiary: "獲得天使資金/創業基金/紓困資金",
                        note1: "每月家庭開銷金額／每月收入＝百分比",
                        note2: "每月再投入企業營運金額／每月收入＝百分比",
                    },
                    countryArray: [{ value: 'Guatemala', text: '瓜地馬拉', code: "502" },
                    { value: 'Honduras', text: '宏都拉斯', code: "504" },
                    { value: 'Paraguay', text: '巴拉圭', code: "595" },
                    { value: 'Belize', text: '貝里斯', code: "501" },
                    { value: 'Haiti', text: '海地', code: "509" },
                    { value: 'Saint Lucia', text: '聖露西亞', code: "1-758" },
                    { value: 'Saint Christopher and Nevis', text: '聖克里斯多福及尼維斯', code: "1-869" },
                    { value: 'Saint Vincent', text: '聖文森', code: "1-784" },],
                    genderArray: [{ value: 'Male', text: '男' },
                    { value: 'Female', text: '女' },
                    { value: 'X', text: 'X' }],
                    ynArray: [{ value: 'Y', text: '是' },
                    { value: 'N', text: '否' }],
                    categoryCounselingArray: [{ value: 'Vocational Skill Training', text: '職業技能訓練' },
                    { value: 'Entrepreneurship', text: '創業育成' }, { value: 'MSME Relief Counseling', text: '中小企業輔導' }],
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


