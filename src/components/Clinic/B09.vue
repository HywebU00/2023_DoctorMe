<template>
  <div class="">
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
    </div>
    <section class="dataSection d-flex">
      <div class="item">
        <div class="title">
          <h3>
            <span>帳戶資訊</span>
          </h3>
        </div>
        <!-- 帳戶資訊 start -->
        <div class="infoData">
          <ul class="idList">
            <li>
              <span class="title">
                診所ID
              </span>
              <p>
                catclinic
              </p>
            </li>
            <li>
              <span class="title">
                管理後台
              </span>
              <p>
                https://catclinic.secure.doctorme/v2/welcomehttps://catclinic.secure.doctorme/v2/welcome
              </p>
            </li>
            <li>
              <span class="title">
                預約頁面
              </span>
              <p>
                https://catclinic.secure.doctorme/v2/welcome
              </p>
            </li>
          </ul>
        </div>
        <!-- 帳戶資訊 end -->
      </div>
      <div class="item">
        <div class="title">
          <h3>
            <span>訂閱方案</span>
          </h3>
        </div>
        <!-- 訂閱方案 start -->
        <div class="infoData">
          <v-card class="card subscriptionCard">
            <div>
              <h4>
                專業完整版
              </h4>
              <ul>
                <li>訂閱開始日：2022/01/01</li>
                <li>訂閱截止日：2022/12/31</li>
                <li>費用：3165/月</li>
              </ul>
            </div>
            <div class="footer">
              <v-btn class="v-btn" depressed>取消訂閱</v-btn>
              <v-btn class="submitBtn" depressed color="primaryDark" dark>變更方案</v-btn>
            </div>
          </v-card>
        </div>
        <!-- 訂閱方案 end -->
      </div>
      <v-card class=" settingCard ">
        <div class="item">
          <h4 class="">診所設定</h4>
          <v-progress-circular :rotate="360" :size="120" :width="12" :value="progressValue" color="secondary"> {{ Math.round(progressValue / 14) }}/7</v-progress-circular>
        </div>
        <div class="item">
          <ul class="clinicList">
            <li>診所名稱 <v-btn depressed disabled>設定完成</v-btn></li>
            <li v-for="i in 5" :key="i">門診時間維護<v-btn depressed color="secondary">立即設定</v-btn></li>
          </ul>
        </div>
      </v-card>
    </section>
    <section class="dataSection ">
      <div class="title">
        <h3>
          <span>訂閱方案</span>
        </h3>
      </div>
      <div class="d-flex">
        <v-card class="card payCard">
          <div class="title" color="secondary" dark>
            <h6>免費基本版</h6>
            <p>NT$ <span>4,000</span> /月</p>
          </div>
          <ul>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span> 專屬診所LINE官方帳號</span>
            </li>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span> 專屬診所LINE官方帳號</span>
            </li>
            <li>
              <v-icon color="error">mdi-close</v-icon>
              <span>方案內容待討論</span>
            </li>
            <li>
              <v-icon color="error">mdi-close</v-icon>
              <span>方案內容待討論</span>
            </li>
            <li>
              <v-icon color="error">mdi-close</v-icon>
              <span>方案內容待討論</span>
            </li>
            <li>
              <v-icon color="error">mdi-close</v-icon>
              <span>方案內容待討論</span>
            </li>
          </ul>
          <div class="footer">
            <v-btn block depressed color="secondary">選擇此方案</v-btn>
          </div>
        </v-card>
        <v-card class="card payCard">
          <div class="title" color="secondary" dark>
            <h6>免費基本版</h6>
            <p>NT$ <span>4,000</span> /月</p>
          </div>
          <ul>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span> 專屬診所LINE官方帳號</span>
            </li>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span> 專屬診所LINE官方帳號</span>
            </li>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span>方案內容待討論</span>
            </li>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span>方案內容待討論</span>
            </li>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span>方案內容待討論</span>
            </li>
            <li>
              <v-icon color="success">mdi-check</v-icon>
              <span>方案內容待討論</span>
            </li>
          </ul>
          <div class="footer">
            <v-btn block depressed disabled>目前方案</v-btn>
          </div>
        </v-card>
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
      //snackbar 參數 start

      snackbar: false,
      text: `已成功複製`,
      //snackbar 參數 end
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
      progressValue: 70,
      //
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
