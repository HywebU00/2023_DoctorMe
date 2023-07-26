<template>
  <v-app id="inspire">
    <v-content class="loginPage">
      <v-container>
        <v-card class="">
          <!-- 智慧醫療重設密碼 start -->
          <v-card-text>
            <div class="title">
              <h3>
                <span>確認預約資訊</span>
              </h3>
              <span class="remark">請輸入以下資訊驗證身份</span>
            </div>
            <div class="infoData">
              <ul class="">
                <li v-for="item in reserveList" :key="item">
                  <div class="title">
                    <h3>
                      <span v-text="item.title">確認預約資訊</span>
                    </h3>
                  </div>
                  <p v-text="item.content"></p>
                </li>
              </ul>
            </div>
            <v-form class="infoForm" ref="form" v-model="valid" lazy-validation>
              <label for="password">請輸入新密碼</label>
              <v-text-field id="password" dense outlined v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" placeholder="請輸入密碼" :type="show1 ? 'text' : 'password'" hint="At least 8 characters" @click:append="show1 = !show1"></v-text-field>
              <label for="password">請再次輸入新密碼</label>
              <v-text-field id="password" dense outlined v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" placeholder="請輸入密碼" :type="show1 ? 'text' : 'password'" hint="At least 8 characters" @click:append="show1 = !show1"></v-text-field>
              <v-btn color="primaryDark" block class="mr-4">
                登入
              </v-btn>
            </v-form>
          </v-card-text>
          <!-- 智慧醫療重設密碼 end -->
          <!-- 智慧醫療重設密碼成功 start -->
          <v-card-text>
            <div class="title">
              <h3>
                <span>密碼變更成功</span>
              </h3>
              <span class="remark">密碼重設信件已發送至h****@gmail.com</span>
            </div>
            <div class="infoData">
              <div class="img">
                <img src="~@/assets/password_success.svg" alt="" />
              </div>
              <p class="content">
                歡迎您回來！<br />
                新密碼已設定成功，請使用您的新密碼登入DoctorMe，持續使用便捷智慧的診所預約服務
              </p>
            </div>
            <v-btn color="primaryDark" block class="mr-4">
              返回登入頁
            </v-btn>
          </v-card-text>
          <!-- 智慧醫療重設密碼成功 end -->
        </v-card>
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
    nameRules: [(v) => !!v || '診所ID錯誤', (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'],
    email: '',
    emailRules: [(v) => !!v || '帳號輸出錯誤', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    reserveList: [
      { title: '診所 ID', content: '使用者的診所 ID' },
      { title: '帳號', content: '使用者的帳號' },
      { title: 'Email', content: '使用者的Email' },
    ],
    password: '',
    checkbox: false,
    rules: {
      required: (value) => !!value || '密碼輸入錯誤',
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
