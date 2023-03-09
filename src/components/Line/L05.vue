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
        <v-simple-table class=" timeTablet">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  日期
                </th>
                <th class="text-center thBtn">
                  <button text>上午診<br />（點此切換時段）</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center" :class="{ hasBorder: item.hasBorder }" v-for="item in timelist" :key="item.name">
                <td>
                  <div>{{ item.date }}</div>
                  <div>( {{ item.week }} )</div>
                </td>
                <td class="text-start">
                  <div v-if="item.name.length === 0">
                    <p>-</p>
                  </div>
                  <div v-for="i in item.name" :key="i">
                    {{ i }}
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-simple-table class=" timeTablet">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  日期
                </th>
                <th class="text-center thBtn">
                  <button text>上午診<br />（點此切換時段）</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-start" :class="{ hasBorder: item.hasBorder }" v-for="item in timelist" :key="item.name">
                <td>
                  <div>星期{{ item.week }}</div>
                </td>
                <td>
                  <div v-if="item.name.length === 0">
                    <p>-</p>
                  </div>
                  <div v-else class="text-start" v-for="i in item.name" :key="i">{{ i }} <span class="typeText">（隔週）</span></div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-simple-table class=" timeTablet">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  日期
                </th>
                <th class="text-center thBtn">
                  <button text>上午診<br />（點此切換時段）</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center" :class="{ hasBorder: item.hasBorder }" v-for="item in timelist" :key="item.name">
                <td>
                  <div>星期{{ item.week }}</div>
                </td>
                <td class="text-start">
                  <div v-if="item.name.length === 0">
                    <p>-</p>
                  </div>
                  <div v-else v-for="i in item.name" :key="i">
                    <span>{{ item.class }}</span> :
                    <span>
                      {{ i }}
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
      timelist: [
        { date: '11/4', name: ['林子凱', '王安安'], week: '五', hasBorder: false, class: '診間一' },
        { date: '11/4', name: ['林子凱', '王安安'], week: '六', hasBorder: false, class: '診間一' },
        { date: '11/4', name: ['林子凱', '王安安'], week: '日', hasBorder: true, class: '診間一' },
        { date: '11/4', name: ['休診'], week: 'ㄧ', hasBorder: false, class: '診間一' },
        { date: '11/4', name: [], week: '二', hasBorder: false, class: '診間一' },
      ],
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
