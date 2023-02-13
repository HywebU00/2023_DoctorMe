<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>門診時間維護</span>
        </h3>
      </div>
    </div>
    <section class="dataSection hasBtnSection">
      <v-form class="infoForm">
        <label for="">營業日設定</label>
        <ul class="switchList">
          <!-- 選取的日期 value -->
          <!-- <p>{{ openDate }}</p> -->
          <li>
            <v-switch v-model="openDate" color="secondary" label="週一" value="週一"></v-switch>
          </li>
          <li><v-switch v-model="openDate" color="secondary" label="週二" value="週二"></v-switch></li>
          <li><v-switch v-model="openDate" color="secondary" label="週三" value="週三"></v-switch></li>
          <li><v-switch v-model="openDate" color="secondary" label="週四" value="週四"></v-switch></li>
          <li><v-switch v-model="openDate" color="secondary" label="週五" value="週五"></v-switch></li>
          <li><v-switch v-model="openDate" color="secondary" label="週六" value="週六"></v-switch></li>
          <li><v-switch v-model="openDate" color="secondary" label="週日" value="週日"></v-switch></li>
        </ul>
        <label>看診時段設定</label>
        <ul class="switchList timeRangePickList">
          <li>
            <div class="">
              <v-switch class="switch" v-model="switch1" color="secondary" label="上午診"></v-switch>
              <div class="">
                <v-menu ref="menu" v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="start" readonly solo dense v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker color="primaryDark" v-if="menu2" v-model="start" :max="end" @click:minute="$refs.menu.save(start)"></v-time-picker>
                </v-menu>
                <span class="mr-2 mt-2">~</span>
                <v-menu ref="menu" v-model="menu3" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="end" readonly solo dense v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker color="primaryDark" v-if="menu3" v-model="end" :min="start" @click:minute="$refs.menu.save(end)"></v-time-picker>
                </v-menu>
              </div>
            </div>
          </li>
          <li>
            <div>
              <v-switch class="switch" v-model="switch2" color="secondary" label="下午診"></v-switch>
              <div class="">
                <v-menu ref="menu" v-model="menu4" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="start2" readonly solo dense v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker color="primaryDark" v-if="menu4" v-model="start2" :max="end2" @click:minute="$refs.menu.save(start2)"></v-time-picker>
                </v-menu>
                <span class="mr-2 mt-2">~</span>
                <v-menu ref="menu" v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="end2" readonly solo dense v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker color="primaryDark" v-if="menu5" v-model="end2" :min="start2" @click:minute="$refs.menu.save(end2)"></v-time-picker>
                </v-menu>
              </div>
            </div>
          </li>
          <li>
            <div>
              <v-switch class="switch" v-model="switch3" color="secondary" label="晚上診"></v-switch>
              <div class="">
                <v-menu ref="menu" v-model="menu6" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="start3" readonly solo dense v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker color="primaryDark" v-if="menu6" v-model="start3" :max="end3" @click:minute="$refs.menu.save(start3)"></v-time-picker>
                </v-menu>
                <span class="mr-2 mt-2">~</span>
                <v-menu ref="menu" v-model="menu7" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="end3" readonly solo dense v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker color="primaryDark" v-if="menu7" v-model="end3" :min="start3" @click:minute="$refs.menu.save(end3)"></v-time-picker>
                </v-menu>
              </div>
            </div>
          </li>
        </ul>
        <label>診所預約方式</label>
        <v-radio-group class="radioList" v-model="checkType" row>
          <v-radio color="secondary" label="給號預約（適用於按照預約序號診療的診所）" value="01"></v-radio>
          <v-radio color="secondary" label="時段預約（付費版限定，適用於排時間預約診療的診所，如牙醫）" value="02"></v-radio>
        </v-radio-group>
      </v-form>
      <!-- 預約摘要 start -->
      <div class="infoData">
        <div class="title">
          <h3>
            <span>特殊日設定</span>
          </h3>
        </div>
        <template>
          <v-card class="tabletList">
            <v-card-title>
              <div class="tableTitle">
                <v-select :items="SelectItems" label="所有類型" dense solo></v-select>
              </div>
              <div class="ml-auto">
                <v-btn class="cancelBtn" depressed>刪除</v-btn>
                <v-dialog v-model="dialog" persistent max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primaryDark" dark v-bind="attrs" v-on="on">
                      新增
                    </v-btn>
                  </template>
                  <v-card class="modal">
                    <v-card-title>
                      <h5 color="primaryDark" text>新增特殊日</h5>
                      <v-spacer></v-spacer>
                      <button>
                        <v-icon @click="dialog = false">
                          close
                        </v-icon>
                      </button>
                    </v-card-title>
                    <v-card-text>
                      <label for="birthday">日期</label>
                      <v-menu v-model="menu8" id="birthday" :close-on-content-click="false" transition="scale-transition" max-width="250px" min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field class="datePickerSelect" v-model="computedDateFormatted" persistent-hint dense outlined readonly background-color="#fff" v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker width="250px" class="datePicker" v-model="date" no-title @input="menu8 = false"></v-date-picker>
                      </v-menu>
                      <label for="">說明</label>
                      <v-text-field dense placeholder="請輸入預約說明" outlined required></v-text-field>
                      <label for="">類型</label>
                      <v-select :items="SelectItems" label="所有類型" dense solo></v-select>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text @click="dialog = false">
                        取消
                      </v-btn>

                      <v-btn color="primaryDark" dark @click="dialog = false">
                        新增
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-card-title>
            <template>
              <v-data-table mobile-breakpoint="0" v-model="selected" :headers="headers" :items="desserts" :single-select="singleSelect" item-key="name" show-select class="elevation-1" :footer-props="{ itemsPerPageText: '1頁顯示 :' }"> </v-data-table>
            </template>
          </v-card>
        </template>
      </div>
      <!-- 預約摘要 end -->
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
      switch3: true,
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
