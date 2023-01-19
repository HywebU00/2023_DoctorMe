<template>
  <v-app id="inspire">
    <v-content style="font-family:Microsoft JhengHei;">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="red" dark flat>
                <v-toolbar-title style="color:white;">需求單位登入</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }"></template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <!-- <v-btn
                        icon
                        large
                        href="https://codepen.io/johnjleider/pen/pMvGQO"
                        target="_blank"
                        v-on="on"
                      >
                        <v-icon>mdi-codepen</v-icon>
                    </v-btn>-->
                  </template>
                  <span>Codepen</span>
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
                    counter="20"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="密碼"
                    prepend-icon="lock"
                    type="password"
                    v-model="pw"
                    clearable
                    required
                    :rules="pwRules"
                    counter="20"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="red"
                  style="color:white;"
                  :disabled="!valid"
                  @click="submitObject($event);"
                >登入</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
// import swal from "sweetalert2";
import { mapActions } from "vuex";
export default {
  computed: {
    xxx: function() {
      return this.ac + "XXX";
    }
  },
  data() {
    return {
      ac: null,
      pw: null,
      member: this.getModel("motorAccount"),
      rules: {
        required: value => !!value || "Required."
      },
      valid: true,
      formHasErrors: false,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 3) || "必須大於3",
        v => (v && v.length <= 10) || "不能大於10"
      ],
      pwRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 3) || "必須大於3",
        v => (v && v.length <= 10) || "不能大於10"
      ]
    };
  },
  methods: {
    ...mapActions(["updateUser"]),
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
    submitObject() {
      event.target.disabled = true;
      setTimeout(function() {
        event.target.disabled = false;
      }, 5000);
      var vm = this;
      //   vm.getModel("motorAccount");
      //   vm.$refs.form.validate();
      console.log("!!!!!!!!!! " + this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        if (vm.ac == "111" && vm.pw == "111") {
          // vm.ac = "hyweb1";。
          var account = {
            account: "hyweb",
            name: "王大明",
            deptName: "臺北市政府警察局中正第一分局",
            authFuncId: ["id_1", "id_2"]
          };
          vm.updateUser("XXXX");
          vm.$localStorage.set("idb_login_token", "Bearer " + " 12345");

          // vm.$store.state.userProfile = response.data.infoUser;
          // vm.$store.state.userId = response.data.infoUser.newAccount;
          // vm.$localStorage.set("userProfile", response.data.infoUser);
          vm.$localStorage.set("userProfileStr", JSON.stringify(account));
          // console.log("!!!!!!");
          this.$router.push({ path: "/" });
        }
      } else {
        console.log("SSSSSSSSS");
      }
    }
  }
};
</script>