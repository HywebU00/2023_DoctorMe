<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="selectNav">
        <div class="datePicker">
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-model="date" v-bind="attrs" v-on="on" fab @click="expand = !expand">
                <v-icon color="#fff">
                  calendar_today
                </v-icon>
              </v-btn>
              <h3>
                <strong>{{ date }}</strong>
                <span>診間列表</span>
              </h3>
            </template>
            <v-date-picker no-title v-model="date" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </div>
        <div class="selectGroup">
          <v-autocomplete v-model="item1" :items="items1" dense label="科別" solo item-text="text"> </v-autocomplete>
          <v-select v-model="item2" :items="items2" dense small-chips label="所有時段" multiple solo item-text="text" no-data-text="查無資料" :rules="requiredRules"> </v-select>
          <v-btn class="submitBtn" depressed color="primaryDark">
            搜尋
          </v-btn>
        </div>
      </div>
    </div>
    <section class="dataSection">
      <!-- alert-start -->
      <v-alert class="alert">
        <div class="d-flex ">
          <div class="text">
            <v-icon>mdi-alert-octagon-outline</v-icon>
            <p>提醒您，您目前所選擇的日期非當日。</p>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="primaryDark">切換至當日（2022/11/10）</v-btn>
        </div>
      </v-alert>
      <!-- alert-end -->
      <!-- 診間卡片 slider start-->
      <div v-show="item2.length == 0">
        <div class="emptyImg">
          <img src="~@/assets/empty.svg" alt="" />
          <p>無門診資訊</p>
          <v-btn class="submitBtn" depressed color="primaryDark">
            診所尚未完成設定，請先完成診所設定以啟動完整服務
          </v-btn>
        </div>
      </div>
      <!-- 選取的科別 -->
      <h4 class="dataTitle">{{ item1 }}</h4>
      <div v-for="(menu, i) in item2" :key="i.text">
        <!-- 選取的時間 -->
        <h4 class="dataTitle">{{ menu }}</h4>
        <!-- 卡片 slide-groups -->
        <div class="swiper-container cardSlider ">
          <div class="swiper-wrapper">
            <div class="swiper-slide " v-for="item in items" :key="item.text">
              <v-card class="cardItem">
                <v-card-title class="room">
                  {{ item.room }}
                </v-card-title>
                <v-card-text>
                  <span class="doctor">{{ item.doctor }}醫生</span>
                  <span class="number">{{ item.standby }}號</span>
                </v-card-text>
                <v-btn color="primaryDark">
                  預約資料
                </v-btn>
                <!-- <v-btn color="primaryDark"  block @click="toggle">
                    預約資料
                  </v-btn> -->
                <v-btn outlined color="primaryDark"> 叫號管理 </v-btn>
              </v-card>
              <div alt="間隔用，請刪除" style="height:10px;"></div>
              <v-card class="cardItem">
                <v-card-title class="room">
                  {{ item.room }}
                </v-card-title>
                <v-card-text>
                  <span class="doctor">{{ item.doctor }}醫生</span>
                  <span class="d-block text-center">預約總數:41人</span>
                </v-card-text>
                <v-btn color="primaryDark">
                  預約資料
                </v-btn>
              </v-card>
            </div>
          </div>
          <div class="swiper-button-next sliderBtnNext"></div>
          <div class="swiper-button-prev sliderBtnPrev"></div>
        </div>
      </div>
      <!-- 診間卡片 slider end-->
    </section>
  </div>
</template>
<script>
//swiper 套件
import Swiper, { Navigation, Pagination } from 'swiper';
// import { mapGetters, mapActions } from 'vuex';

export default {
  // computed: {
  //   ...mapGetters({
  //     idbServerUrl: ['getIdbServerUrl'],
  //   }),
  //   formTitle() {
  //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
  //   },
  // },
  data() {
    return {
      model: null,
      valid: null,
      items: [
        { room: '診間一', doctor: '林子凱', standby: '10' },
        { room: '診間二', doctor: '林黴因', standby: '5' },
        { room: '診間三', doctor: '林黴因', standby: '7' },
        { room: '診間四', doctor: '琦君', standby: '30' },
        { room: '診間五', doctor: '琦君', standby: '31' },
        { room: '診間四', doctor: '琦君', standby: '30' },
        { room: '診間五', doctor: '琦君', standby: '31' },
        { room: '診間四', doctor: '琦君', standby: '30' },
        { room: '診間五', doctor: '琦君', standby: '31' },
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      items1: [{ text: '家醫科' }, { text: '牙科' }, { text: '胸腔科' }, { text: '內科' }],
      item1: '家醫科',
      items2: [{ text: '上午診' }, { text: '下午診' }, { text: '晚上診' }],
      item2: ['上午診', '下午診', '晚上診'],
      requiredRules: [(v) => !!v || '此欄位是必填'],
      expand: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    };
  },

  methods: {
    init() {
      Swiper.use([Navigation]);
      new Swiper('.cardSlider', {
        slidesPerView: 1.5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.sliderBtnNext',
          prevEl: '.sliderBtnPrev',
        },
        breakpoints: {
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        },
      });
    },
  },
  created: function() {
    // 此時物件尚未被init;
    // let vm = this;
    // if (vm.idbServerUrl != '/landProxy/') vm.dropzonePicOptions.url = vm.idbServerUrl + 'land/uploadFile';
    // vm.dropzonePicOptions.url = vm.idbServerUrl + 'land/uploadFile';
    // this.initialize();
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  },
};
</script>
<style></style>
