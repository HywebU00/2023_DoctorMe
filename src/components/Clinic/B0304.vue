<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>門診表</span>
        </h3>
      </div>
    </div>
    <section class="dataSection hasBtnSection">
      <div class="cardContent">
        <v-card class="typeInfoCard " v-for="i in 10" :key="i">
          <span>科別名稱</span>
        </v-card>
      </div>
      <v-form class="infoForm">
        <label for="idNum">門診表名稱</label>
        <v-text-field placeholder="門診表" id="idNum" dense v-model="first" background-color="#fff" outlined></v-text-field>
        <label for="idNum">門診表類型</label>
        <v-radio-group class="radioTableTypeList" v-model="checkType" row>
          <div class="cardContent">
            <v-card>
              <v-radio color="secondary" label="星期制" value="01"></v-radio>
              <p>適用於班表固定，不需每月變動班表的診所。</p>
              <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250" contain src="https://picsum.photos/id/11/500/300"></v-img>
            </v-card>
            <v-card>
              <v-radio color="secondary" label="月排制" value="02"></v-radio>
              <p>適用於班表固定，不需每月變動班表的診所。</p>
              <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250" contain src="https://picsum.photos/id/11/500/300"></v-img>
            </v-card>
          </div>
        </v-radio-group>
        <label>設定診所診間型態</label>

        <v-radio-group class="radioList" v-model="checkType2">
          <v-radio color="secondary" label="獨立式診間（具有獨立看診空間的診所）" value="01"></v-radio>
          <ul>
            <li>
              <label for="">診間數量 :</label>
              <div style="width:55px;" class="">
                <v-text-field id="" placeholder="1" dense v-model="first" background-color="#fff" outlined></v-text-field>
              </div>
            </li>
            <li>
              <label for="">診間1 名稱 :</label>
              <div style="width:260px;" class="">
                <v-text-field id="" placeholder="診間一" dense v-model="first" background-color="#fff" outlined></v-text-field>
              </div>
            </li>
          </ul>
          <v-radio color="secondary" label="開放式診間（不具獨立看診空間的診所）" value="02"></v-radio>
        </v-radio-group>
      </v-form>
    </section>
    <div class="btnSection" :class="{ closeMenu: mini }">
      <v-btn disabled>
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
      items1: [{ text: '家醫科' }, { text: '牙科' }, { text: '胸腔科' }, { text: '內科' }],
      item1: '家醫科',
      items2: [{ text: '上午診' }, { text: '下午診' }, { text: '晚上診' }],
      items3: [{ text: '杜振熙' }, { text: '周敦頤' }, { text: '李清照' }],
      item2: ['上午診'],
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
      switch3: false,
      // 時間選取器
      start: '8:30',
      end: '12:30',
      start2: '8:30',
      end2: '12:30',
      start3: '8:30',
      end3: '12:30',

      singleSelect: false,
      selected: [],
      headers: [
        { text: '日期', value: 'name', sortable: false, width: '300px' },
        { text: '說明', value: 'content' },
        { text: '類型', value: 'type', width: '100px' },
      ],
      // headers: [
      //   {
      //     text: 'Dessert (100g serving)',
      //     align: 'start',
      //     sortable: false,
      //     value: 'date',
      //   },
      //   { text: ' content', value: 'content' },
      //   { text: 'Fat (g)', value: 'fat' },
      // ],
      // desserts: [
      //   {
      //     name: 'Frozen Yogurt',
      //     content: 159,
      //     fat: 6.0,
      //   },
      //   {
      //     name: 'Ice cream sandwich',
      //     content: 237,
      //     fat: 9.0,
      //   },
      // ],
      desserts: [
        {
          name: '2022/01/01 ',
          content: '國定假日-元旦',
          type: '休診',
        },
        {
          name: '2022/02/10 ',
          content: '國定假日-農曆春節（彈性放假）',
          type: '休診',
        },
        {
          name: '2022/02/20 ',
          content: '農曆春節-彈性放假補班',
          type: '休診',
        },
        {
          name: '2022/09/11',
          content: '中秋節-彈性放假補班',
          type: '休診',
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
