
export default {

    install(Vue) {

        Vue.prototype.getModel = function (value) {
            var model
            if (value == "motorAccount") {
                model = {
                    "account": String,
                    "applyAccountDate": Date,
                    "birthday": Date,
                    "chiName": String,
                    "city": String,
                    "contactAddress": String,
                    "contactFax": String,
                    "contactHomeTel": '',
                    "contactMobileTel": '',
                    "contactOfficeTel": String,
                    "contactOfficeTelExt": String,
                    "createDate": Date,
                    "creatorId": String,
                    "creatorName": String,
                    "currentJob": String,
                    "district": String,
                    "domain": String,
                    "educationLevel": String,
                    "email": String,
                    "engFirstName": String,
                    "engLastName": String,
                    "engMiddleName": String,
                    "examAccountDate": Date,
                    "facebookId": String,
                    "gender": String,
                    "googleId": String,
                    "idNo": String,
                    "lastLoginDate": Date,
                    "lastModifyDate": Date,
                    "mainDeptId": String,
                    "mainDeptName": '',
                    "memberCode": String,
                    "modifierId": String,
                    "modifierName": String,
                    "name": String,
                    "nationality": String,
                    "note": String,
                    "password": String,
                    "qualificationInTaiwan": String,
                    "score": Number,
                    "serviceCity": String,
                    "serviceDistrict": String,
                    "serviceLanguage": String,
                    "serviceStartDate": Date,
                    "serviceTime": String,
                    "serviceType": String,
                    "status": String,
                    "titleName": String,
                    "type": String,
                    "uuid": String
                }
            } else if (value == "interpreterCase") {
                model = {
                    "cancelCaseReason": String,
                    "cancelDate": Date,
                    "caseId": String,
                    "caseNote": String,
                    "caseType": String,
                    "checkInDatetime": Date,
                    "checkInLantitude": String,
                    "checkInLongtitude": String,
                    "checkInPosition": String,
                    "cloneCaseId": String,
                    "commentToDept": String,
                    "contactHomeTel": String,
                    "contactMobileTel": String,
                    "contactName": String,
                    "createDate": Date,
                    "creatorId": String,
                    "creatorName": String,
                    "decideInterpreterDate": Date,
                    "deptId": String,
                    "deptName": String,
                    "estimatedHours": String,
                    "estimatedServiceStartTime": String,
                    "feeType": String,
                    "finishServiceDatetime": Date,
                    "interpreterId": String,
                    "interpreterName": String,
                    "isCommentToInterpreter": String,
                    "language": String,
                    "lastModifyDate": Date,
                    "modifierId": String,
                    "modifierName": String,
                    "responseDueDate": Date,
                    "scoreToDept": Number,
                    "serviceAddress": String,
                    "serviceCity": String,
                    "serviceDate": Date,
                    "serviceDistrict": String,
                    "serviceFee": Number,
                    "serviceSession": String,
                    "startServiceDatetime": Date,
                    "status": String,
                    "transportationFee": Number,
                    "people": Number
                }
            } else if (value == "interpreterCaseDetail") {
                model = {
                    "cancelDate": Date,
                    "cancelReason": String,
                    "caseDetailId": String,
                    "comment": String,
                    "createDate": Date,
                    "creatorId": String,
                    "creatorName": String,
                    "lastModifyDate": Date,
                    "memberDeptId": String,
                    "memberId": String,
                    "memberName": String,
                    "modifierId": String,
                    "modifierName": String,
                    "responseDate": Date,
                    "responseType": String,
                    "scoreAll": Number,
                    "scoreAttitude": Number,
                    "scoreAverage": Number,
                    "scoreEthics": Number,
                    "scoreProfession": Number,
                    "status": String
                }
            } else if (value == "searchCase") {
                model = {
                    "searchDistrict": String,
                    "searchDate": Date,
                    "searchTime": String,
                }
            }

            return JSON.parse(JSON.stringify(model));
        };



    }
}


