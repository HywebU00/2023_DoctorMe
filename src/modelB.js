export default {

    install(Vue) {
        Vue.prototype.getMotorModel = function (value) {
            // console.log('我是插件中的方法 22 ' + value);
            // return "EEE"
            var model
            if (value == "motorAccount") {

                model = {
                    address: null,
                    birthday: null,
                    blood: null,
                    cardNo: null,
                    contactHomeTel: null,
                    contactMobileTel: null,
                    contactOfficeTel: null,
                    contactOfficeTelExt: null,
                    createDate: null,
                    creatorId: null,
                    creatorName: null,
                    district: null,
                    email: null,
                    firstName: null,
                    gender: "M",
                    height: null,
                    lastModifyDate: null,
                    lastName: null,
                    latitude: null,
                    longitude: null,
                    middleName: null,
                    modifierId: null,
                    modifierName: null,
                    name: null,
                    passportNo: null,
                    region: null,
                    ssn: null,
                    status: "Y",
                    type: "USR",
                    uuid: null,
                    validateNo: null,
                    voterNo: null,
                    nationality: "Belizean",
                    driverLicenseId: null
                }
            }

            return JSON.parse(JSON.stringify(model));
        };
    }
}