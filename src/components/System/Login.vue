<template>
  <v-app id="inspire">
    <v-content style="font-family:Microsoft JhengHei;">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar color="red" dark flat>
                <v-toolbar-title style="color:white;" v-if="typeFlag">機關團體登入</v-toolbar-title>
                <v-toolbar-title style="color:white;" v-if="!typeFlag">通譯人員登入</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large target="_blank" v-on="on" @click="typeFlag = !typeFlag">
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </template>
                  <span>角色切換</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    label="帳號"
                    prepend-icon="person"
                    type="text"
                    v-model="ac"
                    clearable
                    required
                    :rules="nameRules"
                    counter
                    maxlength="20"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="密碼"
                    prepend-icon="lock"
                    :append-icon="showPassword1 ? 'visibility_off' : 'visibility'"
                    :type="showPassword1 ? 'text' : 'password'"
                    @click:append="showPassword1 = !showPassword1"
                    v-model="pw"
                    clearable
                    required
                    :rules="pwRules"
                    counter
                    maxlength="20"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue"
                  style="color:white;"
                  v-if="!typeFlag"
                  @click="loginFB()"
                >Facebook 登入</v-btn>
                <!-- <v-btn
                  color="#FFA000"
                  style="color:white;"
                  v-if="!typeFlag"
                  @click="submitObject($event);"
                >Google登入</v-btn>-->
                <!-- <div class="g-signin2" data-onsuccess="loginGoogle" data-theme="dark"></div> -->
                <div id="gSignInWrapper" v-show="!typeFlag">
                  <div id="customBtn" class="customGPlusSignIn">
                    <span class="icon"></span>
                    <span class="buttonText">Google登入</span>
                  </div>
                </div>
                <v-btn
                  color="red"
                  style="color:white;"
                  :disabled="!valid"
                  @click="loginMethod1($event);"
                >登入</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click.prevent="$router.push({path: '/ForgetPW/' });">
                  <span class="mr-2" style="color:grey;font-size:12px;">忘記密碼</span>
                </v-btn>
                <v-btn text v-if="typeFlag" @click.prevent="$router.push({path: '/OrgAdd/' });">
                  <span class="mr-2" style="color:grey;font-size:12px;">機關團體註冊</span>
                </v-btn>
                <v-btn
                  text
                  v-if="!typeFlag"
                  @click.prevent="$router.push({path: '/PersonalAdd/' });"
                >
                  <span class="mr-2" style="color:grey;font-size:12px;">通譯人員註冊</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      idbServerUrl: ["getIdbServerUrl"]
    })
  },
  data() {
    return {
      initGoogle: false,
      firstLogin: false,
      ac: "",
      pw: "",
      showPassword1: false,
      member: this.getModel("motorAccount"),
      rules: {
        required: value => !!value || "Required."
      },
      valid: true,
      formHasErrors: false,
      nameRules: [
        v => !!v || "帳號為必填",
        v => (v && v.length >= 3) || "必須大於3",
        v => (v && v.length <= 21) || "不能大於20"
      ],
      pwRules: [
        v => !!v || "密碼為必填",
        v => (v && v.length >= 3) || "必須大於3",
        v => (v && v.length <= 21) || "不能大於20"
      ],
      typeFlag: true
    };
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    meta: [
      { name: "google-signin-scope", content: "profile email" },
      {
        name: "google-signin-client_id",
        content:
          "811319054431-rl7dpuh3pe85vp5mr76hd12ufretkbka.apps.googleusercontent.com"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto",
        type: "text/css"
      }
    ],
    script: [
      {
        type: "text/javascript",
        src: "https://apis.google.com/js/platform.js?onload=myFunc",
        async: true,
        defer: true,
        body: true
      } // Insert in body
    ]
  },
  mounted() {
    //console.log("time1 "+ Math.round(new Date()));
  },
  watch: {
    typeFlag() {
      if (!this.typeFlag && !this.initGoogle) {
        this.initGoogle = true;
        this.startApp();
      }
    }
  },
  methods: {
    // ...mapActions(["updateUser"]),

    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    loginMethod1() {
      // loginMethod1(event) {
      // event.target.disabled = true;

      // setTimeout(function() {
      //   event.target.disabled = false;
      // }, 5000);
      var vm = this;
      // console.log("vm.idbServerUrl " + vm.idbServerUrl);
      if (this.$refs.form.validate()) {
        // json封裝;
        var data = JSON.stringify({
          account: vm.ac,
          password: vm.pw
          // username: "ABC123",
          // password: "12345"
        });

        vm.axios
          .post(vm.idbServerUrl + "idb/login", data, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(function(response) {
            //console.log("response " + JSON.stringify(response));
            if ("200" == response.status) {
              vm.$localStorage.set(
                "idb_login_token",
                "Bearer " + response.data.token
              );
              vm.$localStorage.set(
                "idb_login_token_expire_date",
                JSON.parse(
                  window.atob(
                    response.data.token.substring(
                      response.data.token.indexOf(".") + 1,
                      response.data.token.lastIndexOf(".")
                    )
                  )
                ).exp
              );

              //console.log("login status1 : " + JSON.stringify(vm.firstLogin));
              vm.firstLogin = response.data.firstLogin;
              //console.log("login status2 : " + JSON.stringify(vm.firstLogin));

              var token = vm.$localStorage.get("idb_login_token");

              vm.axios
                .get(vm.idbServerUrl + "idb/userProfile", {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                  }
                })
                .then(function(response) {
                  // var dataResponse = JSON.stringify(response.data);
                  //console.log( "dataResponse!!! " + JSON.stringify(response.data) );
                  //console.log("login status3 : " + JSON.stringify(vm.firstLogin));
                  // var sysAdmin = response.data.sysAdmin;
                  if (response.data.memberAccount.status === "Y") {
                    var authFuncList = [];
                    var sourceAuthFuncList = response.data.authFuncList;
                    sourceAuthFuncList.forEach(function(element) {
                      if (element.depth == "0") {
                        authFuncList.push(vm.parseFunc(element));
                      }
                    });
                    sourceAuthFuncList.forEach(function(element) {
                      if (element.depth == "1") {
                        authFuncList.forEach(function(authFunc) {
                          if (element.parentFunc.funcId == authFunc.funcId) {
                            if (authFunc.children == undefined) {
                              authFunc.children = [];
                            }
                            authFunc.children.push(vm.parseFunc(element));
                          }
                        });
                      }
                    });

                    vm.$localStorage.set(
                      "userProfileStr",
                      JSON.stringify(response.data)
                    );
                    vm.$localStorage.set(
                      "idb_funcIdList",
                      JSON.stringify(authFuncList)
                    );

                    if (vm.firstLogin) {
                      vm.$localStorage.set(
                        "idb_funcIdList",
                        JSON.stringify([])
                      );
                      vm.loginChangePW();
                    } else {
                      vm.loginGo();
                    }
                  } else {
                    vm.loginError("無法登入系統 請洽系統管理者", 3000);
                  }
                })
                .catch(function(error) {
                  console.log("@@@@99 " + error);
                });

              // console.log(JSON.stringify(response.data.infoUser));
              // vm.$localStorage.set(
              //   "userProfileStr",
              //   JSON.stringify(response.data.infoUser)
              // );
              // var authFuncList = response.data.menuMap;
              // var menuKey = Object.keys(authFuncList);
              // var funcIdList = [];
              // //改用funcId控制
              // for (var i = 0; i < menuKey.length; i++) {
              //   for (var j = 0; j < authFuncList[menuKey[i]].length; j++) {
              //     funcIdList.push(authFuncList[menuKey[i]][j][5]);
              //   }
              // }
              // vm.$localStorage.set("motor_funcIdList", funcIdList);
              // vm.loginGo();
            }
          })
          .catch(function(error) {
            if (error.response) {
              console.log("@@@@5 " + error.response.status);
              if ("401" == error.response.status) {
                // vm.processStatus = false;
              }
            } else if (error.request) {
              console.log("@@@@4 " + error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("@@@@1 " + error.message);
            }
            console.log("@@@@2 " + JSON.stringify(error.config));
            // 失敗回應
            console.log("@@@@3 " + error);
            vm.loginError("帳號或密碼輸入錯誤", 2000);
          });
      }
    },
    loginGo() {
      swal({
        title: "歡迎",
        // text: "I will close in 5 seconds.",
        timer: 1000,
        showConfirmButton: false
      });
      var vm = this;
      vm.$router.push({ path: "/Test01" });
    },
    loginChangePW() {
      swal({
        title: "第一次登入系統請先更改帳號及密碼",
        type: "warning",
        allowOutsideClick: false,
        confirmButtonText: "確認",
        showConfirmButton: true
      });
      var vm = this;
      vm.$router.push({ path: "/ChangePW" });
    },
    loginError(par1, par2) {
      swal({
        title: par1,
        // text: "I will close in 5 seconds.",
        timer: par2,
        allowOutsideClick: false,
        confirmButtonText: "確認",
        showConfirmButton: true
      });
    },
    parseFunc(obj) {
      var newFunc = {
        icon: obj.description,
        text: obj.name,
        funcId: obj.funcId
      };
      if (this.isNotBlankUtil(obj.path)) {
        newFunc.link = obj.path;
      }
      //console.log("newFunc " + JSON.stringify(newFunc));
      return newFunc;
    },
    submitObject() {
      event.target.disabled = true;
      setTimeout(function() {
        event.target.disabled = false;
      }, 5000);
      var vm = this;
      //   vm.getModel("motorAccount");
      //   vm.$refs.form.validate();
      //console.log("!!!!!!!!!! " + this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        if (
          (vm.ac == "111" || vm.ac == "hyweb") &&
          (vm.pw == "111" || vm.pw == "12345")
        ) {
          // vm.ac = "hyweb1";。
          var account = {
            account: "hyweb",
            name: "王大明",
            deptName: "臺北市政府警察局中正第一分局",
            authFuncId: ["id_1", "id_2"]
          };
          // vm.updateUser("XXXX");
          vm.$localStorage.set("idb_login_token", "Bearer " + " 12345");

          // vm.$store.state.userProfile = response.data.infoUser;
          // vm.$store.state.userId = response.data.infoUser.newAccount;
          // vm.$localStorage.set("userProfile", response.data.infoUser);
          vm.$localStorage.set("userProfileStr", JSON.stringify(account));
          // console.log("!!!!!!");
          this.$router.push({ path: "/HelloWorld2" });
        }
      } else {
        console.log("SSSSSSSSS");
      }
    },
    loginFB() {
      const vm = this;
      // 檢查登入狀態
      window.FB.getLoginStatus(function(response) {
        // 登入狀態 - 已登入
        if (response.status === "connected") {
          // Server驗證fb access_token並取得Token
          vm.getTokenByFbAccessToken(
            response.authResponse.userID,
            response.authResponse.accessToken
          );
          // vm.getFBProfile();
        } else {
          // 登入狀態 - 未登入
          // 用戶登入(確認授權)
          window.FB.login(
            function(res) {
              // Server驗證fb access_token並取得Token
              console.log(JSON.stringify(res));
              vm.getTokenByFbAccessToken(
                res.authResponse.userID,
                res.authResponse.accessToken
              );
            },
            // 授權 - 個人資料&Email
            { scope: "public_profile,email" }
          );
        }
      });
    },
    logoutFB() {
      // let vm = this;
      // 檢查登入狀態
      window.FB.getLoginStatus(function(response) {
        // 檢查登入狀態
        if (response.status === "connected") {
          // 移除授權
          window.FB.api("/me/permissions", "DELETE", function(res) {
            // 用戶登出
            console.log(JSON.stringify(res));
            window.FB.logout();
          });
        } else {
          // do something
        }
      });
    },
    getFBProfile() {
      // let vm = this;
      window.FB.api("/me?fields=name,id,email", function(res) {
        // do something
        console.log(JSON.stringify(res));
      });
    },
    getTokenByFbAccessToken(id, token) {
      let vm = this;
      vm.axios
        .get(vm.idbServerUrl + "idb/fbToken/" + id + "/" + token)
        .then(function(response) {
          if (response.data.message == "notBinding") {
            vm.$localStorage.set("fb_userid", id);
            vm.$router.push({ path: "/BindingFb/" });
            return;
          }
          vm.setUserProfile(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    loginGoogle(googleUser) {
      let vm = this;
      // 客戶端如果有需要的話可以通過profile來獲取使用者資訊
      // var profile = googleUser.getBasicProfile();
      // 傳回後臺驗證，並獲取userid
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);

      var data = JSON.stringify({ googleId: id_token });
      vm.axios
        .post(vm.idbServerUrl + "idb/googleToken", data, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
          console.log("Signed in as: " + JSON.stringify(response.data));
          if (response.data.message == "notBinding") {
            // 客戶端如果有需要的話可以通過profile來獲取使用者資訊
            var profile = googleUser.getBasicProfile();
            console.log(profile);
            console.log(googleUser.getBasicProfile().getId());
            vm.$localStorage.set(
              "google_userid",
              googleUser.getBasicProfile().getId()
            );
            vm.$router.push({ path: "/BindingGoogle/" });
            return;
          }
          vm.setUserProfile(response);
        })
        .catch(function(error) {
          console.log(error);
        });

      // var xhr = new XMLHttpRequest();
      // xhr.open('POST', 'http://gntina.iok.la/googleVerify');
      // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // xhr.onload = function() {
      //   console.log('Signed in as: ' + xhr.responseText);
      // };
      // xhr.send('idtokenstr=' + id_token);
    },
    onFailure(error) {
      console.log(error);
    },
    startApp() {
      let vm = this;
      window.gapi.load("auth2", function() {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        window.auth2 = window.gapi.auth2.init({
          client_id:
            "811319054431-rl7dpuh3pe85vp5mr76hd12ufretkbka.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
          // Request scopes in addition to 'profile' and 'email'
          scope: "profile email",
          prompt: "consent"
        });
        vm.attachSignin(document.getElementById("customBtn"));
      });
    },
    attachSignin(element) {
      let vm = this;
      console.log(element.id);
      window.auth2.attachClickHandler(
        element,
        {},
        function(googleUser) {
          console.log(googleUser.getBasicProfile().getName());
          vm.loginGoogle(googleUser);
        },
        function(error) {
          console.log(JSON.stringify(error, undefined, 2));
        }
      );
    },
    setUserProfile(response) {
      let vm = this;
      vm.$localStorage.set("idb_login_token", "Bearer " + response.data.token);
      vm.$localStorage.set(
        "idb_login_token_expire_date",
        JSON.parse(
          window.atob(
            response.data.token.substring(
              response.data.token.indexOf(".") + 1,
              response.data.token.lastIndexOf(".")
            )
          )
        ).exp
      );

      //console.log("login status1 : " + JSON.stringify(vm.firstLogin));
      vm.firstLogin = response.data.firstLogin;
      //console.log("login status2 : " + JSON.stringify(vm.firstLogin));

      var token = vm.$localStorage.get("idb_login_token");

      vm.axios
        .get(vm.idbServerUrl + "idb/userProfile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        })
        .then(function(response) {
          // var dataResponse = JSON.stringify(response.data);
          //console.log( "dataResponse!!! " + JSON.stringify(response.data) );
          //console.log("login status3 : " + JSON.stringify(vm.firstLogin));
          // var sysAdmin = response.data.sysAdmin;
          if (response.data.memberAccount.status === "Y") {
            var authFuncList = [];
            var sourceAuthFuncList = response.data.authFuncList;
            sourceAuthFuncList.forEach(function(element) {
              if (element.depth == "0") {
                authFuncList.push(vm.parseFunc(element));
              }
            });
            sourceAuthFuncList.forEach(function(element) {
              if (element.depth == "1") {
                authFuncList.forEach(function(authFunc) {
                  if (element.parentFunc.funcId == authFunc.funcId) {
                    if (authFunc.children == undefined) {
                      authFunc.children = [];
                    }
                    authFunc.children.push(vm.parseFunc(element));
                  }
                });
              }
            });

            vm.$localStorage.set(
              "userProfileStr",
              JSON.stringify(response.data)
            );
            vm.$localStorage.set(
              "idb_funcIdList",
              JSON.stringify(authFuncList)
            );

            if (vm.firstLogin) {
              vm.$localStorage.set("idb_funcIdList", JSON.stringify([]));
              vm.loginChangePW();
            } else {
              vm.loginGo();
            }
          } else {
            vm.loginError("無法登入系統 請洽系統管理者", 3000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    // let vm = this;

    if (!window.FB) {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "2536061506607336",
          cookie: true,
          xfbml: true,
          version: "v6.0"
        });

        window.FB.AppEvents.logPageView();
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }
};
</script>

<style type="text/css">
#customBtn {
  display: inline-block;
  background: white;
  color: #444;
  width: 190px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
}
#customBtn:hover {
  cursor: pointer;
}
span.label {
  font-family: serif;
  font-weight: normal;
}
span.icon {
  background: url("../../assets/g-normal.png") transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
}
span.buttonText {
  display: inline-block;
  vertical-align: middle;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 14px;
  font-weight: bold;
  /* Use the Roboto font that is loaded in the <head> */
  font-family: "Roboto", sans-serif;
}
</style>