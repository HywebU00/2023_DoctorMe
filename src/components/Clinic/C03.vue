<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>新增預約 - 一般門診</h2></div>
      <div class="title">
        <h3>
          <span>請輸入基本資料</span>
        </h3>
      </div>
    </div>
    <section class="dataSection hasBtnSection">
      <v-form class="infoForm">
        <label for="idNum">
          <abbr class="necessary" title="為必填(選)欄位,不能為空白。">*</abbr>
          身分證/居留證號碼</label
        >
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
            <v-text-field class="datePickerSelect" v-model="computedDateFormatted" persistent-hint dense outlined readonly background-color="#fff" v-bind="attrs" v-on="on"></v-text-field>
          </template>
          <v-date-picker width="250px" class="datePicker" v-model="date" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>

        <!-- 日期選擇器區塊 start -->
        <div class="datepickerBlock">
          <label for="birthday">請選擇日期</label>
          <v-sheet elevations="0">
            <div>
              <v-date-picker no-title v-model="picker"></v-date-picker>
            </div>
          </v-sheet>
        </div>
        <!-- 日期選擇器區塊 end -->
        <!-- 選擇醫生列表 radio start -->
        <v-radio-group class="listRadio" v-model="radios" v-for="item in doctorItems" :key="item">
          <div class="title">
            <v-icon>mdi-clock</v-icon>
            <label>{{ item.title }}</label>
          </div>
          <v-radio :value="item.num">
            <template v-slot:label>
              <div>{{ item.text }}</div>
            </template>
          </v-radio>
        </v-radio-group>
        <!-- 選擇醫生列表 radio end -->
        <!-- 選擇醫生列表 start -->
        <!-- <v-list class="listSelect">
          <v-list-item-group v-model="selectedItem" color="primary">
            <div class="" v-for="(item, i) in doctorItems" :key="i">
              <div class="title">
                <v-icon>mdi-clock</v-icon>
                <span>{{ item.title }}</span>
              </div>
              <v-list-item dense>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list> -->
        <!-- 選擇醫生列表 end -->
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
      <!-- 確認預約資訊 end -->
    </section>
    <div class="btnSection" :class="{ closeMenu: mini }">
      <v-btn outlined color="primaryDark" style="background:#fff;" dark>上一步</v-btn>
      <v-btn color="primaryDark" dark>下一步</v-btn>
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
      items1: [{ text: '家醫科' }, { text: '牙科' }, { text: '胸腔科' }, { text: '內科' }],
      item1: '家醫科',
      items2: [{ text: '上午診' }, { text: '下午診' }, { text: '晚上診' }],
      items3: [{ text: '杜振熙' }, { text: '周敦頤' }, { text: '李清照' }],
      item2: ['上午診'],
      mini: false,
      requiredRules: [(v) => !!v || '此欄位是必填'],
      dropzonePicOptions: {
        url: 'https://idb.m20cloud.tk:8443/idb/uploadFile',
        headers: { Authorization: this.$localStorage.get('land_login_token') },
        maxFilesize: 9999, // MB
        maxFiles: 10,
        filesizeBase: 1024,
        thumbnailWidth: 300,

        autoProcessQueue: true,
        init: function() {},
        addRemoveLinks: true,
        addDownloadLinks: true,
      },
      expand: false,
      selectExpand: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      selectedItem: 1,
      doctorItems: [
        { text: '診間一：林子凱醫生', title: '上午診 （8:30-12:00）', num: 1 },
        { text: '診間一：林子凱醫生', title: '下午診 （15:00-18:00）', num: 2 },
        { text: '診間一：林子凱醫生', title: '晚上診 （19:00-21:30）', num: 3 },
      ],
      radios: null,
      //表單的ＪＳ
      search: '',
      dialog: false,
      dialog2: false,
      dialogDelete: false,
      headers: [
        {
          text: '預約號碼',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'num',
          width: '100px',
        },
        { text: '姓名', value: 'name', sortable: false },
        { text: '類型', type: 'select', value: 'type', sortable: true, width: '200px' },
        { text: '報到', value: 'check', sortable: false, width: '200px' },
        { text: '檢視預約資料', value: 'file', sortable: false, width: '60px' },
      ],
      desserts: [],
      editedIndex: -1,
      tableSelect: ['視訊', '門診'],
      //右側選單資料
      styles: ['家醫科', '牙科'],
      doctors: ['林子凱', '王子凱'],
      times: ['上午診', '下午診', '晚上診'],
      //select
      SelectItems: ['視訊', '門診'],

      //

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
    };
  },

  methods: {
    successUploadFile(file, response) {
      var attachFile = {};
      response.type = 'ATT'; //ATT, IMG, DWN
      attachFile.uuid = file.upload.uuid;
      attachFile.attachName = response.fileName;
      attachFile.attachFile = response.fileDownloadUri;
      attachFile.description = response.fileName;
      attachFile.attachNameNew = response.newFileName.toLowerCase();
      attachFile.fileDownloadUri = response.fileDownloadUri;
      attachFile.attachSize = file.upload.total; // record pic size
      attachFile.attachPath = response.filePath;
      var newDate = new Date();
      attachFile.createDate = newDate.getTime();
      // attachFile.title = response.fileName;
      attachFile.type = 'REC';
      attachFile.status = 'T';
      this.attachDataDocument.push(attachFile);
    },
    removedFile(file, error, xhr) {
      this.attachDataDocument.forEach((element, index) => {
        if (file.upload) {
          if (file.upload.uuid == element.uuid) {
            this.deleteFile(element.attachNameNew);
            this.attachDataDocument.splice(index, 1);
          }
        } else {
          if (file.attachNameNew == element.attachNameNew) {
            this.attachDataDocument.splice(index, 1);
          }
        }
      });
    },
    downloadFile(file, error, xhr) {
      var vm = this;
      this.attachDataDocument.forEach((element, index) => {
        if ((file.upload && file.upload.uuid == element.uuid) || (!file.upload && file.attachNameNew == element.attachNameNew)) {
          var path = '';
          if (element.status == 'T') path = 'downloadTmpFile/' + element.attachNameNew;
          else path = 'downloadFile/' + element.attachNameNew + '/REC';
          window.open(element.attachFile, '_blank');
        }
      });
    },
    deleteFile(filename) {
      var vm = this;
      vm.axios
        .delete(vm.landServerUrl + 'land/deleteFile/' + filename, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: vm.$localStorage.get('land_login_token'),
          },
        })
        .then(function(response) {
          console.log('delete tmp file ---->\n' + JSON.stringify(response));
        })
        .catch(function(error) {
          vm.handErrorUtil(error);
          console.log(error);
        });
    },
    initialize() {
      this.desserts = [
        {
          num: 1,
          name: '杜振熙',
          check: '未報到',
          type: '門診',
        },
        {
          num: 2,
          name: '周敦頤',
          check: '未報到',
          type: '門診',
        },
        {
          num: 3,
          name: '李清照',
          check: '已報到',
          type: '視訊',
        },
        {
          num: 4,
          name: '歐陽脩',
          check: '已報到',
          type: '視訊',
        },
        {
          num: 5,
          name: '畢卡索',
          check: '已報到',
          type: '門診',
        },
        {
          num: 6,
          name: '張大千',
          check: '已報到',
          type: '門診',
        },
        {
          num: 7,
          name: '馬蒂斯',
          check: '已報到',
          type: '視訊',
        },
        {
          num: 8,
          name: '達文西',
          check: '已報到',
          type: '門診',
        },
        {
          num: 9,
          name: '拉斐爾',
          check: '已報到',
          type: '門診',
        },
        {
          num: 10,
          name: '克林姆',
          check: '已報到',
          type: '門診',
        },
      ];
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
  mounted() {
    this.init();
  },
};
</script>
<style></style>
