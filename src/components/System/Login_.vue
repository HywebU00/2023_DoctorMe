<template>
  <v-app id="inspire">
    <v-content class="loginPage">
      <v-container>
        <v-card class="">
          <v-card-title>
            <v-img :aspect-ratio="1 / 1" lazy-src="~@/assets/Logo.svg" src="~@/assets/Logo.svg"></v-img>
            <h5 color="primaryDark" text>智慧醫療互動</h5>
          </v-card-title>
          <v-card-text>
            <v-form class="infoForm" ref="form" v-model="valid" lazy-validation>
              <label for="id">診所</label>
              <v-text-field id="id" dense outlined v-model="name" placeholder="請輸入診所ID" :rules="nameRules" required></v-text-field>
              <label for="id2">帳號</label>
              <v-text-field id="id2" dense outlined placeholder="請輸入帳號" v-model="email" :rules="emailRules" required></v-text-field>
              <label for="password">密碼</label>
              <v-text-field id="password" dense outlined v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" placeholder="請輸入密碼" :type="show1 ? 'text' : 'password'" hint="At least 8 characters" @click:append="show1 = !show1"></v-text-field>
              <div class="btnList">
                <v-checkbox v-model="checkbox" :rules="[(v) => !!v || 'You must agree to continue!']" label="記住我" required></v-checkbox>
                <a href="javascript:;">忘記密碼</a>
              </div>
              <v-btn color="primaryDark" dark block class="mr-4">
                登入
              </v-btn>
            </v-form>
            <div class="title">
              <h3>
                <span>確認預約資訊</span>
              </h3>
            </div>
            <div class="infoData">
              <div class="title">
                <h3>
                  <span>請預約摘要</span>
                </h3>
              </div>
              <ul class="">
                <li>2022/11/20</li>
                <li>晚上診</li>
                <li>診間一：林子凱醫生</li>
              </ul>
            </div>
          </v-card-text>
        </v-card>

        <!-- <v-card class="">
          <v-card-title>
            <div class="title">
              <h3>
                <span>確認預約資訊</span>
              </h3>
            </div>
          </v-card-title>
          <v-card-text>
            <div class="infoData">
              <div class="title">
                <h3>
                  <span>請預約摘要</span>
                </h3>
              </div>
              <ul class="">
                <li>2022/11/20</li>
                <li>晚上診</li>
                <li>診間一：林子凱醫生</li>
              </ul>
            </div>
          </v-card-text>
        </v-card> -->
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  computed: {},
  data: () => ({
    valid: true,
    name: '',
    show1: false,
    show2: true,
    nameRules: [(v) => !!v || 'Name is required', (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'],
    email: '',
    emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],

    password: '',
    checkbox: false,
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || '最少需要輸入8個字元',
      emailMatch: () => `沒有相對印符合的信箱`,
    },
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  watch: {},

  created() {},
};
</script>
