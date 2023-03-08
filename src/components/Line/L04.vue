<template>
  <v-app>
    <div class="mobile_warp reserveCheck_warp">
      <div class="reserveTitle">
        <h1>選擇科別與醫生</h1>
      </div>
      <div class="content" ref="scroll">
        <v-form class="infoForm">
          <label for="style">請選擇科別</label>
          <v-select id="style" :items="items1" dense background-color="#fff" outlined placeholder="家醫科"></v-select>
          <label for="doctor">請選擇醫生</label>
          <v-select id="doctor" :items="items3" dense background-color="#fff" placeholder="不指定醫生" outlined></v-select>
        </v-form>

        <template>
          <div class="tabList">
            <v-tabs v-model="tab" color="primaryDark" background-color="transparent" grow>
              <v-tab v-for="item in tabItems" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <p class="emptyText">您目前未有任何預約。</p>
                <label for="doctor">請選擇醫生</label>
                <v-select id="doctor" :items="items3" dense background-color="#fff" placeholder="不指定醫生" outlined></v-select>
                <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img>
                <!-- 預約摘要 start -->
                <div class="infoData">
                  <div class="title">
                    <h3>
                      <span>黃菱瑩</span>
                    </h3>
                  </div>
                  <ul class="">
                    <li>中山醫學院醫學系</li>
                    <li>台北市立中興醫院婦產科主治醫師</li>
                    <li>台北市立中興醫院病理科主治醫師</li>
                    <li>婦產科專科醫師</li>
                    <li>周產期專科醫師</li>
                  </ul>
                </div>
                <!-- 預約摘要 end -->
                <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img>
                <div class="article">
                  <p>診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊診所資訊</p>
                  <ul>
                    <li>台中總院</li>
                    <li>
                      地址：台中市南屯區公益路二段19號
                      <button><v-icon color="secondary">mdi-map</v-icon></button>
                    </li>
                    <li>
                      電話：04 - 2310-575
                      <button><v-icon color="secondary">mdi-phone</v-icon></button>
                    </li>
                  </ul>
                </div>
              </v-tab-item>
              <v-tab-item>
                <h6 class="mb-4">預約次數：1</h6>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </template>
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
      tab: null,
      tabItems: ['即將到來', '已經完成'],
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
