<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>門診表</span>
        </h3>
      </div>
      <p class="infoText">生效日：2022/01/01</p>
    </div>
    <section class="dataSection ">
      <v-card class="cardClinic">
        <div>
          <h4>
            門診表名稱
            <v-chip small color="error">
              即將生效
            </v-chip>
          </h4>
          <div class="time">生效日：2023/02/01</div>
        </div>
        <div class="d-flex align-items-center">
          <v-switch class="switch" v-model="switch5" color="secondary" :label="switch5" true-value="已開啟" false-value="關閉"></v-switch>
          <v-btn elevation="0">
            <v-icon color="primaryDark" dark>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-card>
      <div class="d-flex">
        <!-- <v-btn class="ml-auto mb-3" color="accent">
          <v-icon class="mr-2">
            mdi-calendar-account
          </v-icon>
          <span>休假代班設定</span>
        </v-btn> -->
        <v-dialog v-model="dialog" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ml-auto mb-3" color="accent" v-bind="attrs" v-on="on">
              <v-icon class="mr-2">
                mdi-calendar-account
              </v-icon>
              <span>休假代班設定</span>
            </v-btn>
          </template>
          <v-card class="modal">
            <v-card-title>
              <h5 color="primaryDark" text>新增預約</h5>
              <v-spacer></v-spacer>
              <button>
                <v-icon @click="dialog = false">
                  close
                </v-icon>
              </button>
            </v-card-title>
            <v-card-text>
              <label class="labelTitle" for="">選擇診間</label>
              <v-autocomplete v-model="item1" :items="items1" dense label="科別" solo item-text="text"> </v-autocomplete>
              <label class="labelTitle" for="">預約號碼</label>
              <v-text-field dense placeholder="請輸入預約號碼" outlined required></v-text-field>
              <v-checkbox label="安排至最後一號"></v-checkbox>
              <ul class="dataList">
                <li>時間：週一</li>
                <li>時段：上午診</li>
              </ul>
              <v-radio-group class="radioList" v-model="checkType" row>
                <label>是否開放視訊看診</label>
                <v-radio color="secondary" label="是" value="01"></v-radio>
                <v-radio color="secondary" label="否" value="02"></v-radio>
              </v-radio-group>
              <v-radio-group class="radioList" v-model="checkType2" row>
                <label>是否開放新冠診療</label>
                <v-radio color="secondary" label="是" value="01"></v-radio>
                <v-radio color="secondary" label="否" value="02"></v-radio>
              </v-radio-group>
              <v-checkbox label="限制可預約人數"></v-checkbox>
              <ul class="inputList">
                <li><span class="title">一般看診</span><v-text-field dense placeholder="請輸入最大可預約人數" outlined required></v-text-field></li>
                <li><span class="title">視訊看診</span><v-text-field dense placeholder="請輸入最大可預約人數" outlined required></v-text-field></li>
                <li><span class="title">新冠診療</span><v-text-field dense placeholder="請輸入最大可預約人數" outlined required></v-text-field></li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="dialog = false">
                取消
              </v-btn>
              <v-btn color="primaryDark" @click="dialog = false">
                確認
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="reserveTable">
        <div class="theadFilter">
          <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field prepend-inner-icon="mdi-calendar-blank" v-model="computedDateFormatted" persistent-hint dense readonly solo v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker class="datePicker" v-model="date" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn-toggle class="ml-auto" dark v-model="toggle_exclusive" mandatory>
            <v-btn>
              上午
            </v-btn>
            <v-btn>
              下午
            </v-btn>
            <v-btn>
              晚上
            </v-btn>
            <v-btn>
              所有時段
            </v-btn>
          </v-btn-toggle>
        </div>
        <v-simple-table fixed-header height="500px">
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-center">上午診</th>
                <th class="text-center">
                  下午診
                </th>
                <th class="text-center">
                  晚上診
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tableList" :key="item.time">
                <td :class="{ closed: item.status }" class="text-center">{{ item.time }}</td>
                <td :class="{ closed: item.morning.length === 0 }">
                  <div class="itemContent">
                    <div class="empty">
                      <span v-if="item.morning.length === 0" class="name text-truncate">休診</span>
                    </div>
                    <div class="item" v-for="i in item.morning" :key="i.time">
                      <div class="">
                        <span> {{ i.place }}</span>
                        <span v-if="item.status === false" class="name text-truncate">新增醫生<span class="oddText">單</span></span>
                      </div>
                      <v-btn :class="{ hide: item.status }" class="functionBtn" @click.stop="" elevation="0">
                        <v-icon color="primaryDark" dark>mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </td>
                <td :class="{ closed: item.afternoon.length === 0 }">
                  <div class="itemContent">
                    <div class="empty">
                      <span v-if="item.afternoon.length === 0" class="name text-truncate">休診</span>
                    </div>
                    <div class="item" v-for="i in item.afternoon" :key="i.time">
                      <div class="">
                        <span> {{ i.place }}</span>
                        <span v-if="item.status === false" class="name text-truncate">新增醫生<span class="evenText">雙</span></span>
                      </div>
                      <v-btn :class="{ hide: item.status }" class="functionBtn" @click.stop="" elevation="0">
                        <v-icon color="primaryDark">mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </td>
                <td :class="{ closed: item.night.length === 0 }">
                  <div class="itemContent ">
                    <div class="empty">
                      <span v-if="item.night.length === 0" class="name text-truncate">休診</span>
                    </div>
                    <div class="item" v-for="i in item.night" :key="i.time">
                      <div class="">
                        <span> {{ i.place }}</span>
                        <span v-if="item.status === false" class="name text-truncate">新增醫生</span>
                      </div>
                      <v-btn :class="{ hide: item.status }" class="functionBtn" @click.stop="" elevation="0">
                        <v-icon color="primaryDark">mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </section>
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
      checkType2: null,
      switch1: true,
      switch2: true,
      switch5: '關閉',

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
      toggle_exclusive: undefined,

      tableList: [
        {
          time: '週一',
          morning: [],
          afternoon: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          night: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          status: false,
        },
        {
          time: '週二',
          morning: [{ place: '診間一 : ' }, { place: '診間一 : ' }],
          afternoon: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          night: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          status: false,
        },
        {
          time: '週三',
          morning: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          afternoon: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          night: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          status: false,
        },
        {
          time: '週四',
          morning: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          afternoon: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          night: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          status: false,
        },
        {
          time: '週五',
          morning: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          afternoon: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          night: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          status: false,
        },
        {
          time: '週六',
          morning: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          afternoon: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          night: [{ place: '診間一 : ' }, { place: '診間一 : ' }, { place: '診間一 : ' }],
          status: false,
        },
        {
          time: '週日',
          morning: [],
          afternoon: [],
          night: [],
          status: true,
        },
      ],
    };
  },

  methods: {
    initialize() {},
    changeText(text) {
      if (text === true) {
        this.switchText = '已啟用';
      } else {
        this.switchText = '關閉';
      }
    },
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
