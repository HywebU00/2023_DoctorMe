
export default {

    install(Vue) {

        Vue.prototype.getFakeModel = function (value) {
            var model
            if (value == "bus") {
                model = [{
                    name: "John",
                    plate: "HS6",
                    driverName: "John",
                    type: "Texi",
                    lat: 13.159801,
                    lng: -61.159380,
                    speed: "40",
                    nextStop: "Stubbs Post Office",
                    destination: "Kingstown",
                    modifierDate: new Date().getTime(),
                    classOfCar: "COROLA",
                    color: "RED",
                    commercialDescription: "2010 Kawasaki Mule",
                    makeAndType: "TOYOTA",
                    passengerCap: "4",
                    yearOfCar: "2001",
                    history: [
                        {
                            index: "1", lat: 13.155964,
                            lng: -61.157614
                        },
                        {
                            index: "2", lat: 13.152015,
                            lng: -61.154900
                        },
                        {
                            index: "3", lat: 13.157897,
                            lng: -61.152432
                        },
                        {
                            index: "4", lat: 13.166304,
                            lng: -61.154158
                        }
                    ]
                },
                {
                    name: "Tom",
                    plate: "HM369",
                    driverName: "Tom",
                    type: "Texi",
                    lat: 13.197875,
                    lng: -61.135676,
                    speed: "40",
                    nextStop: "Biabou",
                    destination: "Kingstown",
                    modifierDate: new Date().getTime(),
                    classOfCar: "ACCORD",
                    color: "BULE",
                    commercialDescription: "1994 DODGE RAM 250 P/UP 6 CYL,DIESEL,BLACK",
                    makeAndType: "KIA",
                    passengerCap: "10",
                    yearOfCar: "2011",
                    history: [
                        {
                            index: "1", lat: 13.155964,
                            lng: -61.157614
                        },
                        {
                            index: "2", lat: 13.152015,
                            lng: -61.154900
                        },
                        {
                            index: "3", lat: 13.157897,
                            lng: -61.152432
                        },
                        {
                            index: "4", lat: 13.166304,
                            lng: -61.154158
                        }
                    ]
                },
                {
                    name: "Hardy",
                    plate: "HN246",
                    driverName: "Tom",
                    type: "Bus",
                    lat: 13.219204,
                    lng: -61.133913,
                    speed: "40",
                    nextStop: "Black Point Recreational Park",
                    destination: "Kingstown",
                    modifierDate: new Date().getTime(),
                    classOfCar: "ACCORD",
                    color: "BULE",
                    commercialDescription: "1994 DODGE RAM 250 P/UP 6 CYL,DIESEL,BLACK",
                    makeAndType: "KIA",
                    passengerCap: "10",
                    yearOfCar: "2011",
                    history: [
                        {
                            index: "1", lat: 13.731547,
                            lng: -60.952997
                        },
                        {
                            index: "2", lat: 13.733131,
                            lng: -60.940926
                        },
                        {
                            index: "3", lat: 13.735580,
                            lng: -60.939842
                        },
                        {
                            index: "4", lat: 13.737373,
                            lng: -60.945442
                        }
                    ]
                }]
            } else if (value == "menu") {
                model = [{ "icon": "search", "text": "Search Bus", "funcId": "serach_interpreter_id", "link": "/Test01" },
                { "icon": "contacts", "text": "Driver List", "funcId": "article_manager_id", "link": "/Test02" },
                { "icon": "mdi-bus-stop-uncovered", "text": "Stop List", "funcId": "article_manager_id", "link": "/Test03" },
                { "icon": "mdi-car-hatchback", "text": "Vehicle List", "funcId": "article_manager_id", "link": "/Test04" },
                { "icon": "post_add", "text": "Data Manager", "funcId": "article_manager_id", "link": "/Test03" },

                ]
            } else if (value == "driver") {
                model = [
                    {
                        driverClass: "A1,B",
                        expiredDate: null,
                        issuedDate: null,
                        issuedOffice: null,
                        issuedOfficer: null,
                        issuedOfficerId: null,
                        lastMedicalExam: null,
                        lastModifyDate: null,
                        licenseNo: "I739000135",
                        period: "1",
                        status: null,
                        type: null,
                        typeOfVehicle: null,
                        motorAccountName: "Tom",
                        applyingDeptId: null,
                        applyType: null,
                        cardNo: null,
                        district: null,
                        region: null,
                        address: "Central Farm",
                        reconfirmReason: null,
                        drivingTestId: null,
                        driverLicenseNo: 'I739000135',
                        email: "slj22@gmail.com",
                        ssn: "34781136",
                        gender: 'M'
                    },
                    {
                        driverClass: "A",
                        expiredDate: null,
                        issuedDate: null,
                        issuedOffice: null,
                        issuedOfficer: null,
                        issuedOfficerId: null,
                        lastMedicalExam: null,
                        lastModifyDate: null,
                        licenseNo: "I739000365",
                        period: "1",
                        status: null,
                        type: null,
                        typeOfVehicle: null,
                        motorAccountName: "Stone",
                        applyingDeptId: null,
                        applyType: null,
                        cardNo: null,
                        district: null,
                        region: null,
                        address: "City",
                        reconfirmReason: null,
                        drivingTestId: null,
                        driverLicenseNo: 'I739000365',
                        email: "frew@gmail.com",
                        ssn: "34781258",
                        gender: 'M'
                    }
                ]
            } else if (value == 'stop') {
                model = [{
                    name: "Bus Terminal",
                    lat: 13.153779,
                    lng: -61.221360
                },
                {
                    name: "Leeward Bus Terminal",
                    lat: 13.155405,
                    lng: -61.228341
                },
                {
                    name: "Little Tokyo",
                    lat: 13.154751,
                    lng: -61.226384
                },
                {
                    name: "Kingstown Ferry Terminal",
                    lat: 13.149114,
                    lng: -61.222966
                },
                {
                    name: "Argyle International Airport",
                    lat: 13.164631,
                    lng: -61.148954
                }]
            } else if (value == 'vehicle') {
                model = [{
                    applyType: "",
                    bodyType: null,
                    capacity: "4",
                    certificateNo: '123445566',
                    color: 'Black',
                    doors: '4',
                    engineNumber: '467999',
                    fuelType: null,
                    licensePlate: "HS6",
                    make: 'TOYOTA',
                    ownerName: "John",
                    tareInLb: null,
                    type: "Private Vehicles",
                    vinNumber: 'HUIUJK393955',
                    odometer: null,
                    engineSize: null,
                    cylinders: null
                },
                {
                    applyType: "",
                    bodyType: null,
                    capacity: "4",
                    certificateNo: '887G44556',
                    color: 'Blue',
                    doors: '4',
                    engineNumber: '467999',
                    fuelType: null,
                    licensePlate: "HM369",
                    make: 'ACCORD',
                    ownerName: "Tom",
                    tareInLb: null,
                    type: "Private Vehicles",
                    vinNumber: 'UHUBU937372',
                    odometer: null,
                    engineSize: null,
                    cylinders: null
                },
                {
                    applyType: "",
                    bodyType: null,
                    capacity: "20",
                    certificateNo: '12344R4TT',
                    color: 'Green',
                    doors: '2',
                    engineNumber: '4de7999',
                    fuelType: null,
                    licensePlate: "HN246",
                    make: 'ACCORD',
                    ownerName: "Hardy",
                    tareInLb: null,
                    type: "Bus",
                    vinNumber: 'EUUNJJK39351',
                    odometer: null,
                    engineSize: null,
                    cylinders: null
                }
                ]
            }

            return JSON.parse(JSON.stringify(model));
        };



    }
}


