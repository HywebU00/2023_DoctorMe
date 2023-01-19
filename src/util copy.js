import swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
export default {

    install(Vue) {

        Vue.prototype.getData = function () {
            // console.log('我是插件中的方法 22 ' + value);
            // return "EEE"
        };

        Vue.prototype.getDateFormat = function (date, fmt, convert) {
            console.log("date1 " + date)
            if (convert) {
                date = new Date(parseInt(date));
            }
            console.log("date2 " + date)
            var o = {
                "M+": date.getMonth() + 1, //月份 
                "d+": date.getDate(), //日 
                "H+": date.getHours(), //小时 
                "m+": date.getMinutes(), //分 
                "s+": date.getSeconds(), //秒 
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
                "S": date.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };

        Vue.prototype.getTimeInterval = function (val) {
            var ans = "";
            //console.log("TimeInterval : " + val + "  HH : " + val/1000/3600 % 24 + "  MM : " + val/1000/60 % 60);
            //console.log("round : " + val + "  HH : " + Math.round(val/1000/3600 % 24) + "  MM : " + Math.round(val/1000/60 % 60) );
            //console.log("floor : " + val + "  HH : " + Math.floor(val/1000/3600 % 24) + "  MM : " + Math.floor(val/1000/60 % 60) );
            //console.log("ceil : " + val + "  HH : " + Math.ceil (val/1000/3600 % 24) + "  MM : " + Math.ceil (val/1000/60 % 60) );
            if (val != null && val != "") {
                var hh = Math.floor(val / 1000 / 3600 % 24);
                var mm = Math.ceil(val / 1000 / 60 % 60);
                ans = hh + "小時" + mm + "分鐘"
            }
            return ans;
        };

        Vue.prototype.convertJsonDate = function (value, type) {
            // console.log("value " + value)

            var newdateStr
            var newDateInt
            var newDate
            if (type != "now") {
                // newDateInt =
                //     parseInt(value) - 3600000 * 8;
                newDateInt =
                    parseInt(value);
                newDate = new Date(newDateInt);
                // console.log("newDate " + newDate)
            } else {
                newDate = new Date();
            }
            // console.log("newdateStr " + newdateStr);
            if (type == "full") {
                newdateStr =
                    newDate.getFullYear() +
                    "-" +
                    (newDate.getMonth() + 1) +
                    "-" +
                    newDate.getDate() +
                    " " +
                    newDate.getHours() +
                    ":" +
                    newDate.getMinutes();
            } else {
                // newdateStr =
                //     newDate.getFullYear() +
                //     "/" +
                //     (newDate.getMonth() + 1) +
                //     "/" +
                //     newDate.getDate();
                newdateStr =
                    newDate.getFullYear() +
                    "-" +
                    (newDate.getMonth() + 1) +
                    "-" +
                    newDate.getDate();
            }



            return newdateStr;
        };

        Vue.prototype.convertDateToString = function (value) {
            //        var newDateInt =
            //         parseInt(value);
            //    var newDate = new Date(newDateInt);
            var newdateStr =
                value.getFullYear() +
                "-" +
                (value.getMonth() + 1) +
                "-" +
                value.getDate();
            return newdateStr;

        }
        Vue.prototype.convertDBDateToString = function (value) {
            var newDateInt =
                parseInt(value);
            var newDate = new Date(newDateInt);
            var newdateStr =
                newDate.getFullYear() +
                "-" +
                (newDate.getMonth() + 1) +
                "-" +
                newDate.getDate();
            return newdateStr;

        }
        Vue.prototype.convertDateToBelizeString = function (value) {

            if (!this.isNotBlankUtil(value)) {
                return ''
            }
            var newDateArray = value.split('-')

            return newDateArray[2] + "-" + newDateArray[1] + "-" + newDateArray[0];

        }
        Vue.prototype.convertDBDateTimeToString = function (value) {
            var newDateInt =
                parseInt(value);
            var newDate = new Date(newDateInt);
            var newdateStr =
                newDate.getFullYear() +
                "-" +
                (newDate.getMonth() + 1) +
                "-" +
                newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
            return newdateStr;

        }
        Vue.prototype.handleAnimationUtil = function (anim) {

            if (this.anim != null)
                this.anim = anim;

        }



        Vue.prototype.convertStatusToWord = function (value) {
            let caseStatusArray = Vue.prototype.getCodeDateUtil('caseStatus');
            let caseStatus = caseStatusArray.find(status => status.value == value);
            if (caseStatus != null)
                return caseStatus.text;

        }
        Vue.prototype.convertIpStatusToWord = function (value) {
            let ipStatusArray = Vue.prototype.getCodeDateUtil('interpreterStatus');
            let ipStatus = ipStatusArray.find(status => status.value == value);
            if (ipStatus != null)
                return ipStatus.text;

        }
        let weekday = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        let weekdayChinese = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
        Vue.prototype.convertServiceTimeToWord = function (value) {
            let finalValue = ''
            if (value != null && value != undefined && value != "") {
                let timeArray = Vue.prototype.getCommonArrayUtil('timeSolt');
                let valueArray = value.split(",");
                let map = new Map();
                valueArray.forEach(element => {
                    let text = timeArray.find(time => time.value == element.substring(1)).text;

                    weekday.forEach((day, index) => {
                        //console.log("day " + day)
                        //console.log("index " + index)
                        if (element.substring(0, 1) == day) {
                            if (map.get(weekdayChinese[index]) != null)
                                map.set(weekdayChinese[index], map.get(weekdayChinese[index]) + "," + text)
                            else
                                map.set(weekdayChinese[index], text)
                        }
                    })
                })

                for (let [key, value] of map) {
                    finalValue += key + " " + value + "\n";
                }
            }

            return finalValue;

        }
        Vue.prototype.logoutUtil = function () {
            this.$localStorage.remove("idb_login_token");
            this.$localStorage.remove("userProfileStr");
            this.$router.push({ path: "/Login" });
        };
        Vue.prototype.handErrorUtil = function (error) {
            if (error.response != undefined)
                if ("401" == error.response.status) {
                    swal({
                        title: "Pleas login again",
                        showConfirmButton: true
                    });
                    this.$localStorage.remove("wep1_login_token");
                    this.$router.push({ path: "/Login" });
                } else {
                    swal({
                        title: "Error Code " + error.response.status + ". Please contact System Admin.",
                        showConfirmButton: true
                    });
                }


        };

        Vue.prototype.logoutWep1Util = function () {
            this.$localStorage.remove("wep1_login_token");
            this.$localStorage.remove("userProfileStr");
            this.$router.push({ path: "/LoginWep1" });
        };
        Vue.prototype.handErrorWep1Util = function (error) {
            if (error.response != undefined)
                if ("401" == error.response.status) {
                    swal({
                        title: "Pleas login again",
                        showConfirmButton: true
                    });
                    this.$localStorage.remove("wep1_login_token");
                    this.$router.push({ path: "/LoginWep1" });
                } else {
                    swal({
                        title: "Error Code " + error.response.status + ". Please contact System Admin.",
                        showConfirmButton: true
                    });
                }


        };

        Vue.prototype.getErrorUtil = function (fieldName) {
            return this.errors.first(fieldName);
        };
        Vue.prototype.isNotBlankUtil = function (value) {
            if (value == undefined || value == null || value == "") {
                return false
            } else {
                return true;
            }
        };

        Vue.prototype.onlyNumberUtil = function ($event) {
            let keyCode = $event.keyCode ? $event.keyCode : $event.which;
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
                $event.preventDefault();
            }

        };


        Vue.prototype.convertBlankUtil = function (value) {
            if (value == undefined || value == null) {
                return ""
            } else {
                return value;
            }
        };

        Vue.prototype.submitConfirmUtil = function () {

            var foo =
                swal({
                    title: "<font face='Microsoft JhengHei'>Please Confirm</font>",
                    html:
                        "Will be sent out immediately after confirmation",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>Cancel</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>Confirmed</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00'


                }).then(function (response) {
                    // console.log("response true " + response)
                    return response

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });

            return foo;
        };

        Vue.prototype.submitConfirmUtil = function () {

            var foo =
                swal({
                    title: "<font face='Microsoft JhengHei'>Please Confirm</font>",
                    html:
                        "Will be sent out immediately after confirmation",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>Cancel</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>Confirmed</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00'


                }).then(function (response) {
                    // console.log("response true " + response)
                    return response

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });

            return foo;
        };

        Vue.prototype.submitConfirmWithLangUtil = function (lang) {


            //預設
            var foo =
                swal({
                    title: "<font face='Microsoft JhengHei'>Please Confirm</font>",
                    html:
                        "Will be sent out immediately after confirmation",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>Cancel</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>Confirmed</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00'


                }).then(function (response) {
                    // console.log("response true " + response)
                    return response

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });

            if (lang == 'es-US') {
                foo = swal({
                    title: "<font face='Microsoft JhengHei'>Por favor confirmar</font>",
                    html:
                        "Se enviará inmediatamente después de la confirmación.",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>Cancelar</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>Confirmado</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00'


                }).then(function (response) {
                    // console.log("response true " + response)
                    return response

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });
            } else if (lang == 'zh-TW') {
                foo = swal({
                    title: "<font face='Microsoft JhengHei'>請確認</font>",
                    html:
                        "確認後會立即送出",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>取消</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>確認</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00'


                }).then(function (response) {
                    // console.log("response true " + response)
                    return response

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });
            }

            return foo;
        };

        Vue.prototype.NotFindApplicationUtil = function (value) {
            swal({
                title: "No this Application Number  ",
                html:
                    "<font size='20'>" + value + "<font/>",
                showConfirmButton: true
            });


        };

        Vue.prototype.submitCancelUtil = function () {
            let vm = this;
            var foo =
                swal({
                    title: "<font face='Microsoft JhengHei'>請輸入取消原因</font>",
                    input: 'textarea',
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>取消</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>確認</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00',
                    inputValidator: function (value) {
                        return new Promise(function (resolve, reject) {
                            if (value) {
                                resolve()
                            } else {
                                reject('請填寫取消原因')
                            }
                        })
                    }


                }).then(function (response) {
                    vm.cancelReason = response;
                    return true

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });

            return foo;
        };

        Vue.prototype.submitCommentUtil = function () {
            let vm = this;
            var foo =
                swal({
                    title: "<font face='Microsoft JhengHei'>給需求單位意見回饋</font>",
                    input: 'textarea',
                    type: "info",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>取消</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>確認</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00',
                    inputValidator: function (value) {
                        return new Promise(function (resolve, reject) {
                            if (value) {
                                resolve()
                            } else {
                                reject('請填寫意見回饋!')
                            }
                        })
                    }


                }).then(function (response) {
                    vm.comment = response;
                    return true

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });

            return foo;
        };

        Vue.prototype.submitDateTimeUtil = function (dateString) {
            let vm = this;
            let now = new Date();
            var foo =
                swal({
                    title: "<font face='Microsoft JhengHei'>" + dateString + ":" + vm.getDateFormat(now, "yyyy-MM-dd HH:mm:ss") + "</font>",
                    html: '',
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "<font face='Microsoft JhengHei'>取消</font>",
                    confirmButtonText: "<font face='Microsoft JhengHei'>確認</font>",
                    confirmButtonColor: '#f44336',
                    cancelButtonColor: '#fb8c00'


                }).then(function () {
                    vm.confirmDateTime = now;
                    return true

                }).catch(error => {
                    // console.log("error cancel " + error)
                    return error
                });

            return foo;
        };

        Vue.prototype.addAlertUtil = function () {
            swal({
                type: "success",
                title: "<font face='Microsoft JhengHei'>Add to List</font>",

                showConfirmButton: false,
                timer: 1200
            });
        };

        Vue.prototype.districtObjectUtil = function (city) {

            var vm = this;
            vm.districtArray1.forEach(function (element) {
                //console.log(element.id)
                //console.log(city)
                if (element.id == city) {
                    vm.districtArray2 = element.children;
                }
            });

        }


        Vue.prototype.getCommonArrayUtil = function (type) {
            var commonArray
            if (type == "yn") {
                commonArray = [{ text: "Yes", value: "Y" }, { text: "No", value: "N" }];
                return commonArray;
            } else if (type == "onOff") {
                commonArray = [{
                    value: "1",
                    text: "啟用"
                },
                {
                    value: "3",
                    text: "停用"
                }];
                return commonArray;
            } else if (type == "payUnit") {
                commonArray = [{
                    value: "1",
                    text: "小時"
                },
                {
                    value: "2",
                    text: "案件"
                },
                {
                    value: "3",
                    text: "字數"
                }];
                return commonArray;
            }
            else if (type == "payMethod") {
                commonArray = [{
                    value: "勞動部計費方式",
                    text: "勞動部計費方式"
                },
                {
                    value: "法院計費方式",
                    text: "法院計費方式"
                },
                {
                    value: "衛福部計費方式",
                    text: "衛福部計費方式"
                },
                {
                    value: "其他",
                    text: "其他"
                }];
                return commonArray;
            }
            else if (type == "needHours") {
                commonArray = [{
                    value: "1",
                    text: "1小時"
                },
                {
                    value: "2",
                    text: "2小時"
                },
                {
                    value: "3",
                    text: "3小時"
                },
                {
                    value: "4",
                    text: "4小時"
                },
                {
                    value: "5",
                    text: "5小時"
                },
                {
                    value: "6",
                    text: "6小時"
                },
                {
                    value: "7",
                    text: "7小時"
                },
                {
                    value: "8",
                    text: "8小時"
                }];
                return commonArray;
            } else if (type == "timeSolt") {
                commonArray = [{
                    value: "1",
                    text: "早上(06:00-12:00)",
                    childArray: [{
                        value: "06:00",
                        text: "06:00"
                    }, {
                        value: "06:30",
                        text: "06:30"
                    }, {
                        value: "07:00",
                        text: "07:00"
                    }, {
                        value: "07:30",
                        text: "07:30"
                    }, {
                        value: "08:00",
                        text: "08:00"
                    }, {
                        value: "08:30",
                        text: "08:30"
                    }, {
                        value: "09:00",
                        text: "09:00"
                    }, {
                        value: "09:30",
                        text: "09:30"
                    }, {
                        value: "10:00",
                        text: "10:00"
                    }, {
                        value: "10:30",
                        text: "10:30"
                    }, {
                        value: "11:00",
                        text: "11:00"
                    }, {
                        value: "11:30",
                        text: "11:30"
                    }]
                },
                {
                    value: "2",
                    text: "下午(12:00-18:00)",
                    childArray: [{
                        value: "12:00",
                        text: "12:00"
                    }, {
                        value: "12:30",
                        text: "12:30"
                    }, {
                        value: "13:00",
                        text: "13:00"
                    }, {
                        value: "13:30",
                        text: "13:30"
                    }, {
                        value: "14:00",
                        text: "14:00"
                    }, {
                        value: "14:30",
                        text: "14:30"
                    }, {
                        value: "15:00",
                        text: "15:00"
                    },
                    {
                        value: "15:30",
                        text: "15:30"
                    }, {
                        value: "16:00",
                        text: "16:00"
                    }, {
                        value: "16:30",
                        text: "16:30"
                    }, {
                        value: "17:00",
                        text: "17:00"
                    }, {
                        value: "17:30",
                        text: "17:30"
                    }]
                },
                {
                    value: "3",
                    text: "晚上(18:00-24:00)",
                    childArray: [{
                        value: "18:00",
                        text: "18:00"
                    }, {
                        value: "18:30",
                        text: "18:30"
                    }, {
                        value: "19:00",
                        text: "19:00"
                    }, {
                        value: "19:30",
                        text: "19:30"
                    }, {
                        value: "20:00",
                        text: "20:00"
                    }, {
                        value: "20:30",
                        text: "20:30"
                    }, {
                        value: "21:00",
                        text: "21:00"
                    }, {
                        value: "21:30",
                        text: "21:30"
                    }, {
                        value: "22:00",
                        text: "22:00"
                    },
                    {
                        value: "22:30",
                        text: "22:30"
                    }, {
                        value: "23:00",
                        text: "23:00"
                    }, {
                        value: "23:30",
                        text: "23:30"
                    }]
                },
                {
                    value: "4",
                    text: "午夜(00:00-06:00)",
                    childArray: [{
                        value: "00:00",
                        text: "00:00"
                    }, {
                        value: "00:30",
                        text: "00:30"
                    }, {
                        value: "01:00",
                        text: "01:00"
                    }, {
                        value: "01:30",
                        text: "01:30"
                    }, {
                        value: "02:00",
                        text: "02:00"
                    }, {
                        value: "02:30",
                        text: "02:30"
                    }, {
                        value: "03:00",
                        text: "03:00"
                    }, {
                        value: "03:30",
                        text: "03:30"
                    }, {
                        value: "04:00",
                        text: "04:00"
                    }, {
                        value: "04:30",
                        text: "04:30"
                    }, {
                        value: "05:00",
                        text: "05:00"
                    }, {
                        value: "05:30",
                        text: "05:30"
                    }]
                }];
                return commonArray;
            } else if (type == "timeSoltArrayMap") {
                commonArray = {};
                commonArray['1'] = [{
                    value: "06:00",
                    text: "06:00"
                }, {
                    value: "07:00",
                    text: "07:00"
                }, {
                    value: "08:00",
                    text: "08:00"
                }, {
                    value: "09:00",
                    text: "09:00"
                }, {
                    value: "10:00",
                    text: "10:00"
                }, {
                    value: "11:00",
                    text: "11:00"
                }]

                commonArray['2'] = [{
                    value: "12:00",
                    text: "12:00"
                }, {
                    value: "13:00",
                    text: "13:00"
                }, {
                    value: "14:00",
                    text: "14:00"
                }, {
                    value: "15:00",
                    text: "15:00"
                }, {
                    value: "16:00",
                    text: "16:00"
                }, {
                    value: "17:00",
                    text: "17:00"
                }]

                commonArray['3'] = [{
                    value: "18:00",
                    text: "18:00"
                }, {
                    value: "19:00",
                    text: "19:00"
                }, {
                    value: "20:00",
                    text: "20:00"
                }, {
                    value: "21:00",
                    text: "21:00"
                }, {
                    value: "22:00",
                    text: "22:00"
                }, {
                    value: "23:00",
                    text: "23:00"
                }]

                commonArray['4'] = [{
                    value: "00:00",
                    text: "00:00"
                }, {
                    value: "01:00",
                    text: "01:00"
                }, {
                    value: "02:00",
                    text: "02:00"
                }, {
                    value: "03:00",
                    text: "03:00"
                }, {
                    value: "04:00",
                    text: "04:00"
                }, {
                    value: "05:00",
                    text: "05:00"
                }]
                return commonArray;
            }
        };





        Vue.prototype.buttonDisableUtil = function (event) {
            event.target.disabled = true;
            swal({
                title: "<font face='Microsoft JhengHei'>資料傳輸中</font>",
                html:
                    "<font face='Microsoft JhengHei'>三秒後將自動關閉</font>",

                timer: 3000,
                showConfirmButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            });
            setTimeout(function () {
                event.target.disabled = false;
            }, 3000);
        };

        Vue.prototype.successSwalUtil = function () {
            swal({
                title: "<font face='Microsoft JhengHei'>Success</font>",
                // html: "<font face='Microsoft JhengHei'>兩秒後將自動關閉</font>",
                type: "success",
                showConfirmButton: true,
                timer: 2000
            });
        };
        Vue.prototype.delSuccessSwalUtil = function () {
            swal({
                title: "<font face='Microsoft JhengHei'>刪除成功!</font>",
                html: "<font face='Microsoft JhengHei'>兩秒後將自動關閉</font>",
                type: "success",
                showConfirmButton: true,
                timer: 2000
            });
        };

        Vue.prototype.alertSwalUtil = function () {
            swal({
                title: "<font face='Microsoft JhengHei'>每個案件只能選1人!</font>",
                html: "<font face='Microsoft JhengHei'>2秒後將自動關閉</font>",
                type: "warning",
                showConfirmButton: true,
                timer: 1500
            });
        };

        Vue.prototype.alertMessageUtil = function (message) {
            swal({
                title: "<font face='Microsoft JhengHei'>" + message + "</font>",
                html: "<font face='Microsoft JhengHei'>5秒後將自動關閉</font>",
                type: "warning",
                showConfirmButton: true,
                timer: 5000
            });
        };




        Vue.prototype.checkSessionUtil = function () {
            var vm = this;
            vm.axios.get(vm.gipAdminServerUrl + "gipAdmin/checkSession/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: vm.$localStorage.get("idb_login_token")
                }
            })
                .then(function () { })
                .catch(function (error) {
                    vm.handErrorUtil(error);
                    // console.log("!!!! " + error);
                });
        };

    }
}


