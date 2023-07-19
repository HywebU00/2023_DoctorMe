<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>門診表</span>
        </h3>
      </div>
      <!-- <p class="infoText">生效日：2022/01/01</p> -->
    </div>
    <section class="dataSection hasBtnSection">
      <v-card class="reserveTypeTable mb-4">
        <v-simple-table class="" mobile-breakpoint="0">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  預約類型
                </th>
                <th width="150">
                  啟用狀態
                </th>
                <th width="100">
                  排序
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in desserts" :key="item.name">
                <td class="text-no-wrap">{{ item.name }}</td>
                <td>
                  <div class="switchGroup">
                    <label for=""> {{ item.switch ? '已啟用' : '關閉' }}</label>
                    <v-switch class="switch" v-model="item.switch" color="secondary"></v-switch>
                  </div>
                </td>
                <td>
                  <div class="d-flex btnGroup">
                    <!-- 按鈕排列第一個不能點擊網上 最後一個不能點擊往下 -->
                    <v-btn v-if="index === 0" elevation="0" disabled>
                      <v-icon color="primaryDark" dark>mdi-chevron-down</v-icon>
                    </v-btn>
                    <v-btn v-else @click.stop="" elevation="0">
                      <v-icon color="primaryDark" dark>mdi-chevron-down</v-icon>
                    </v-btn>
                    <v-btn disabled elevation="0" v-if="index === desserts.length - 1">
                      <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                    <v-btn v-else @click.stop="" elevation="0">
                      <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <v-card class="reserveTypeTable mb-4">
        <v-simple-table class="" mobile-breakpoint="0">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  預約類型
                </th>
                <th width="150">
                  啟用狀態
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts2" :key="item.name">
                <td>{{ item.name }}</td>
                <td>
                  <div class="switchGroup">
                    <label for=""> {{ item.switch ? '已啟用' : '關閉' }}</label>
                    <v-switch class="switch" v-model="item.switch" color="secondary"></v-switch>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <v-card class="card" elevation="0">
        <label> <v-icon color="secondary">mdi-numeric-1-circle</v-icon> 預約號碼設定</label><span class="infoText">設定預約給號規則</span>
        <div class="cardContent">
          <div class="inlineInput_group ">
            <span>從</span>
            <v-text-field class="inlineInput" placeholder="請輸入起始號碼" dense solo></v-text-field>
            <span>開始給號，每次跳號間隔</span>
            <v-text-field class="inlineInput" placeholder="請輸入給號間隔數字" dense solo></v-text-field>
            <span>號</span>
          </div>

          <v-radio-group class="radioList" v-model="checkType" row>
            <label>選擇預約給號類型</label>
            <v-radio color="secondary" label="連續流水號" value="01"></v-radio>
            <v-radio color="secondary" label="跳號" value="02"></v-radio>
          </v-radio-group>
        </div>
      </v-card>
      <v-card class="card" elevation="0">
        <label> <v-icon color="secondary">mdi-numeric-1-circle</v-icon> 預約說明</label><span class="infoText">描述您提供的看診預約服務與預約注意事項</span>
        <div class="cardContent">
          <v-textarea counter="500" outlined :rules="rules2" placeholder="請輸入內容" background-color="#fff" :value="textareaValue2"></v-textarea>
        </div>
      </v-card>
      <v-card class="card rangeSliderCard" elevation="0">
        <label> <v-icon color="secondary">mdi-numeric-2-circle</v-icon> 預約時間開放設定</label><span class="infoText">開放幾天前可以預約</span>
        <div class="cardContent">
          <div class="rangeSlider">
            <div class="d-flex">
              <span v-if="this.sliderValue[1] < 170" class="ml-auto sliderText">
                180
              </span>
            </div>
            <v-range-slider v-model="sliderValue" color="secondary" thumb-color="secondary" min="0" max="180" thumb-size="50" thumb-label="always"> </v-range-slider>
          </div>
        </div>
      </v-card>
      <v-card class="card" elevation="0">
        <label> <v-icon color="secondary">mdi-numeric-3-circle</v-icon> 預約完成訊息</label><span class="infoText">設定預約成功訊息</span>
        <div class="cardContent">
          <v-textarea counter="500" outlined :rules="rules2" placeholder="請輸入內容" background-color="#fff" :value="textareaValue2"></v-textarea>
          <div class="switch">
            <label>預約完成時，自動傳送預約成功line訊息給會員</label>
            <v-switch v-model="openDate" color="secondary" value="週日"></v-switch>
          </div>
          <div class=""></div>
          <!-- alert start -->
          <v-alert class="alert errorTextAlert">
            <div class="d-flex ">
              <div class="text">
                <v-icon class="material-icons-round">warning</v-icon>
                <p>提醒您，依據您所使用的LINE官方帳號方案，LINE推播訊息可能產生額外費用，可參考 <a href="#">說明</a>。</p>
              </div>
            </div>
          </v-alert>
          <!-- alert end -->
        </div>
      </v-card>
    </section>
    <div class="btnSection" :class="{ closeMenu: mini }">
      <v-btn outlined color="primaryDark" style="background:#fff;" dark>
        儲存
      </v-btn>
      <!-- 取消預約 視窗＋按鈕 start -->
      <v-dialog v-model="dialog2" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primaryDark" dark v-bind="attrs" v-on="on">儲存</v-btn>
        </template>
        <v-card class="modal">
          <v-card-title>
            <h5 color="primaryDark" text>確認變更</h5>
            <v-spacer></v-spacer>
            <button>
              <v-icon @click.stop="dialog2 = !dialog2">
                close
              </v-icon>
            </button>
          </v-card-title>
          <v-card-text>
            <p>確認變更後，診所營業資訊、門診表等相關設定將隨之更動，無法復原。確認變更，請點選確認變更鍵。</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primaryDark" dark @click="changeData">
              確認變更
            </v-btn>
            <v-snackbar class="" right top v-model="snackbar" timeout="5000" color="success">
              {{ text }}
              <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" small @click="snackbar = false">
                  關閉
                </v-btn>
              </template>
            </v-snackbar>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- 取消預約 視窗＋按鈕 end -->
    </div>
  </div>
</template>
<script>
//swiper 套件
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      idbServerUrl: ['getIdbServerUrl'],
    }),
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  components: {},
  data() {
    return {
      model: null,
      valid: null,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
      menu6: false,
      menu7: false,
      menu8: false,
      switch3: true,
      sliderValue: [0, 180],
      mini: false,
      requiredRules: [(v) => !!v || '此欄位是必填'],
      expand: false,
      selectExpand: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      selectedItem: 1,

      radios: null,
      //表單的ＪＳ
      search: '',
      dialog: false,
      dialog2: false,
      dialogDelete: false,

      editedIndex: -1,
      tableSelect: ['視訊', '門診'],
      //右側選單資料

      //select
      SelectItems: ['視訊', '門診'],
      snackbar: false,
      text: `門診時間維護已更新`,
      // switch value
      openDate: ['週二'],
      checkType: null,
      switch1: true,
      switch2: true,
      switch5: false,
      switchText: '關閉',
      // 時間選取器
      start: '8:30',
      end: '12:30',
      start2: '8:30',
      end2: '12:30',
      start3: '8:30',
      end3: '12:30',
      toggle_exclusive: [],
      singleSelect: false,
      selected: [],
      headers: [
        { text: '日期', value: 'name', sortable: false, width: '300px' },
        { text: '說明', value: 'content' },
        { text: '類型', value: 'type', width: '100px' },
      ],
      // toggle_exclusive: undefined,
      desserts: [
        {
          name: '一般門診',
          switch: false,
        },
        {
          name: '新冠診療',
          switch: true,
        },
        {
          name: '疫苗注射',
          switch: false,
        },
      ],
      desserts2: [
        {
          name: '一般門診',
          switch: false,
        },
        {
          name: '新冠診療',
          switch: true,
        },
        {
          name: '疫苗注射',
          switch: false,
        },
      ],
    };
  },

  methods: {
    initialize() {},
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    changeData() {
      // this.snackbar = true;
      this.dialog2 = false;
    },
  },
  created: function() {
    // 此時物件尚未被init;
    let vm = this;
    if (vm.idbServerUrl != '/landProxy/') {
      vm.dropzonePicOptions.url = vm.idbServerUrl + 'land/uploadFile';
      vm.dropzonePicOptions.url = vm.idbServerUrl + 'land/uploadFile';
    }
    this.initialize();
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>
<style></style>
