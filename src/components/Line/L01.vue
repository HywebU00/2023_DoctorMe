<template>
  <v-app>
    <div class="mobile_warp">
      <div class="formTitle">
        <h1>服務使用條款</h1>
      </div>
      <div class="content" ref="scroll">
        <v-form class="infoForm">
          <label for="user"> 真實姓名</label>
          <v-text-field type="text" placeholder="請輸入真實姓名" id="user" dense background-color="#fff" outlined></v-text-field>
          <v-radio-group class="radioList" v-model="checkType" row>
            <v-radio color="success" label="身分證" value="01"></v-radio>
            <v-radio color="success" label="居留證" value="02"></v-radio>
          </v-radio-group>
          <v-text-field id="phoneNum" type="text" placeholder="請輸入身分證/居留證號碼" dense background-color="#fff" outlined></v-text-field>
          <label for="phoneNum">聯絡電話</label>
          <v-text-field id="phoneNum" type="tel" placeholder="+886" dense background-color="#fff" outlined></v-text-field>

          <label for="birthday">生日</label>
          <v-menu v-model="menu2" id="birthday" :close-on-content-click="false" transition="scale-transition" max-width="250px" min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field placeholder="請選擇日期" class="" prepend-inner-icon="mdi-calendar-blank" v-model="computedDateFormatted" persistent-hint dense outlined readonly background-color="#fff" v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker width="250px" class="datePicker" v-model="date" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-form>
        <v-card class="infoCard" ref="scrollCard">
          <div>
            <p>
              服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款
              款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款
              款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款
              款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款服務使用條款
              款服務使用條款服務使用條款服務使用條款
            </p>
          </div>
        </v-card>
        <div class="infoSuccess">
          <v-img lazy-src="~@/assets/loginSuccess.svg" max-height="230" max-width="280" src="~@/assets/loginSuccess.svg"></v-img>
          <h1>您已成功綁定 <br />歡迎您加入 凌網診所</h1>
          <p>點擊下方「返回官方帳號」按鈕，打開LINE聊天室主選單即可進行線上預約、診間叫號查看等服務囉 🎉</p>
        </div>
      </div>
      <div class="footerSection">
        <v-checkbox v-model="checkbox" color="success" label="我已閱讀並同意上述說明。" required></v-checkbox>
        <v-btn block color="primaryDark" dark> 下一步</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
//scrollbar
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
export default {
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
    scrollBar() {
      const scrollBar = this.$refs.scroll;

      OverlayScrollbars(scrollBar, {
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 500,
        },
        overflowBehavior: {
          x: 'hidden',
        },
      });
      const scrollCard = this.$refs.scrollCard.$el;
      OverlayScrollbars(scrollCard, {
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 500,
        },
        overflowBehavior: {
          x: 'hidden',
        },
      });
    },
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      checkbox: false,
      checkType: '',
    };
  },
  mounted() {
    var vm = this;

    this.scrollBar();
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>

<style></style>
