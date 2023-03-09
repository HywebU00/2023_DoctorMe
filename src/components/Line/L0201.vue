<template>
  <v-app>
    <div class="mobile_warp reserve_warp">
      <div class="reserveTitle">
        <h1>選擇科別與醫生</h1>
      </div>
      <div class="content" ref="scroll">
        <v-form class="infoForm">
          <label for="user">身份關係</label>
          <v-text-field placeholder="請輸入預約號碼" id="user" dense v-model="first" background-color="#fff" outlined></v-text-field>
          <v-radio-group class="radioList" v-model="checkType" row>
            <v-radio color="success" label="身分證" value="01"></v-radio>
            <v-radio color="success" label="居留證" value="02"></v-radio>
          </v-radio-group>
          <v-text-field placeholder="請輸入身分證/居留證號碼" id="idNum" dense v-model="first" background-color="#fff" outlined></v-text-field>

          <label for="user">
            <abbr class="necessary" title="為必填(選)欄位,不能為空白。">*</abbr>
            姓名</label
          >
          <v-text-field placeholder="請輸入預約號碼" id="user" dense v-model="first" background-color="#fff" outlined></v-text-field>
          <label for="phoneNum">
            <abbr class="necessary" title="為必填(選)欄位,不能為空白。">*</abbr>
            手機號碼</label
          >
          <v-text-field id="phoneNum" placeholder="請輸入手機號" dense v-model="first" background-color="#fff" outlined></v-text-field>
          <label for="style">請選擇科別</label>
          <v-select id="style" :items="items1" dense background-color="#fff" outlined placeholder="家醫科"></v-select>
          <label for="doctor">請選擇醫生</label>
          <v-select id="doctor" :items="items3" dense background-color="#fff" placeholder="不指定醫生" outlined></v-select>
          <label for="birthday">請選擇生日</label>
          <v-menu v-model="menu2" id="birthday" :close-on-content-click="false" transition="scale-transition" max-width="250px" min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field class="" prepend-inner-icon="mdi-calendar-blank" v-model="computedDateFormatted" persistent-hint dense outlined readonly background-color="#fff" v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker width="250px" class="datePicker" v-model="date" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>

          <!-- 日期選擇器區塊 start -->
          <label for="birthday">請選擇日期</label>
          <div class="datepickerBlock">
            <v-sheet elevations="0">
              <div>
                <v-date-picker no-title v-model="picker"></v-date-picker>
              </div>
            </v-sheet>
          </div>
          <!-- 日期選擇器區塊 end -->
          <!-- 選擇醫生列表 radio start -->
          <v-radio-group class="listRadio" v-model="radios" v-for="item in doctorItems" :key="item.num">
            <div class="title">
              <v-icon>mdi-clock</v-icon>
              <label>{{ item.title }}</label>
            </div>
            <v-radio :value="item.num">
              <template v-slot:label>
                <div>
                  {{ item.text }}
                  <span>（黃汪汪代診）</span>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
          <!-- 選擇醫生列表 radio end -->
        </v-form>
        <!-- 預約摘要 start -->
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
        <!-- 預約摘要 end -->

        <!-- 確認日期區塊 start -->
        <div class="title">
          <h3>
            <span>您已預約完成</span>
          </h3>
        </div>
        <div class="reserveBlock">
          <v-sheet>
            <ul>
              <li class="title">您預約號碼</li>
              <li class="info">21號</li>
            </ul>
          </v-sheet>
        </div>
        <!-- 確認日期區塊 end -->
        <!-- 確認預約資訊 start -->
        <div class="title">
          <h3>
            <span>確認預約資訊</span>
          </h3>
        </div>
        <div class="infoData">
          <ul class="">
            <li v-for="item in reserveList" :key="item.title">
              <div class="title">
                <h3>
                  <span v-text="item.title"></span>
                </h3>
              </div>
              <p v-text="item.content"></p>
            </li>
          </ul>
        </div>
        <!-- 確認預約資訊 end -->
        <div class="article">
          <p>
            您好，歡迎使用凌網診所線上預約服務，請詳閱以下線上預約說明：
          </p>
          <ul>
            <li>✅ 初診民眾開放線上預約</li>
            <li>✅ 開份預約 一個月內的時間</li>
          </ul>
          <p>本院也有提供視訊門診，若您是預約視訊門診，請見下方看診說明：</p>
          <p>視訊門診流程： <br />線上預約門診時間 → 看診時間到時，由診所撥通LINE 與醫生通訊 → 進行視訊診療 → 非居隔親屬攜帶健保卡</p>
          <p>3日內（含看診當日）至診所補卡、繳費與領藥 ⚠ 網路預約一般現場門診成功者，仍需攜帶健保卡至現場櫃檯報到，才算完成掛號。</p>
        </div>
        <div class="article light">
          <ul>
            <li>各診次預約報到時間</li>
            <li>📌 上午診最後報到時間：11:00</li>
            <li>📌 下午診最後報到時間：17:00</li>
            <li>📌 晚上診最後報到時間：20:30</li>
          </ul>
          <p>
            請於最晚報到時間前至診所櫃檯完成掛號報到，當日若臨時欲取消預約，請洽診所櫃檯
          </p>
        </div>
        <div class="d-flex">
          <v-btn class="ml-auto mb-3 plusBtn" style="background:unset;box-shadow: none;">
            <v-icon class="mr-2">
              mdi-plus
            </v-icon>
            <span>新增親友</span>
          </v-btn>
        </div>
        <v-card class="familyCard">
          <h4>
            林花橘（母親）
          </h4>
          <div class="d-flex align-items-center">
            <v-btn elevation="0">
              <v-icon color="primaryDark" dark>mdi-pencil</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" persistent max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" elevation="0">
                  <v-icon color="primaryDark" dark>mdi-delete</v-icon>
                </v-btn>
              </template>
              <v-card class="modal">
                <v-card-title>
                  <h5 color="primaryDark" text>刪除親友資料</h5>
                  <v-spacer></v-spacer>
                  <button>
                    <v-icon @click="dialog = false">
                      close
                    </v-icon>
                  </button>
                </v-card-title>
                <v-card-text>
                  <p>確認刪除 林花橘（母親）的資料嗎？</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="dialog = false">
                    取消
                  </v-btn>
                  <v-btn color="primaryDark" dark @click="dialog = false">
                    確認
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-card>
      </div>
      <div class="footerSection">
        <v-checkbox v-model="checkbox" color="success" label="我已閱讀並同意上述說明。" required></v-checkbox>
        <div class="btnList">
          <v-btn color="primaryDark" dark> 下一步</v-btn>
          <v-btn outlined style="background:#fff;" color="primaryDark" dark> 下一步</v-btn>
        </div>
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
    },
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      checkbox: false,
      first: '',
      checkType: '',
      dialog: false,
      items1: [{ text: '家醫科' }, { text: '牙科' }, { text: '胸腔科' }, { text: '內科' }],
      items2: [{ text: '上午診' }, { text: '下午診' }, { text: '晚上診' }],
      items3: [{ text: '杜振熙' }, { text: '周敦頤' }, { text: '李清照' }],
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      reserveList: [
        { title: '預約科別', content: '家醫科' },
        { title: '預約日期', content: '2022 / 11 / 10 （一）' },
        { title: '預約時段', content: '上午診（08:30 ~ 12:00）' },
        { title: '看診醫生', content: '診間一：林子凱醫生' },
        { title: '預約者類型', content: '初診' },
        { title: '預約者姓名', content: '林小凌' },
        { title: '身分證/居留證號碼', content: 'H879476902' },
        { title: '生日', content: '1990/10/28' },
        { title: '手機號碼', content: '0987502895' },
      ],
      doctorItems: [
        { text: '診間一：林子凱醫生', title: '上午診 （8:30-12:00）', num: 1 },
        { text: '診間一：林子凱醫生', title: '下午診 （15:00-18:00）', num: 2 },
        { text: '診間一：林子凱醫生', title: '晚上診 （19:00-21:30）', num: 3 },
      ],
      radios: null,
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
