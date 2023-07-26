<template>
  <div class="">
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>LINE BOT 串接設定</span>
        </h3>
      </div>
      <ul class="lineInfo">
        <li><span class="infoTitle">Callback URL</span> <v-icon>mdi-alert-octagon-outline</v-icon>請複製下方Callback URL連結，並貼上至 <a class="infoLink" href="javascript:;">LINE 管理者後台</a> 的 Webhool URL 欄位</li>
        <li class="darkText">
          https://catclinic.hyclinic/v2/bot/linebot/ <v-btn outlined color="primaryDark" class="copyBtn" small @click="snackbar = true">複製</v-btn>
          <v-snackbar right top v-model="snackbar" color="success">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn text v-bind="attrs" small @click="snackbar = false">
                關閉
              </v-btn>
            </template>
          </v-snackbar>
        </li>
      </ul>
    </div>
    <section class="dataSection">
      <!-- 預約摘要 start -->
      <div class="infoData">
        <div class="title">
          <h3><span>串接設定</span></h3>
          <v-dialog v-model="dialog" persistent max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primaryDark" small v-bind="attrs" v-on="on">
                編輯
              </v-btn>
            </template>
            <v-card class="modal">
              <v-card-title>
                <h5 color="primaryDark" text>串接設定</h5>
                <v-spacer></v-spacer>
                <button>
                  <v-icon @click="dialog = false">
                    close
                  </v-icon>
                </button>
              </v-card-title>
              <v-card-text>
                <label for="">Line ID</label>
                <v-text-field placeholder="對應 LINE 平台之 Line ID 欄位" dense outlined required></v-text-field>
                <label for="">Channel ID</label>
                <v-text-field placeholder="對應 LINE 平台之 Chanel ID 欄位" dense outlined required></v-text-field>
                <label for="">Chanel Secret</label>
                <v-text-field placeholder="對應 LINE 平台之 Chanel Secret 欄位" dense outlined required></v-text-field>
                <label for="">Access token</label>
                <v-text-field placeholder="對應 LINE 平台之 Access token 欄位" dense outlined required></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">
                  取消
                </v-btn>
                <v-btn color="primaryDark" @click="dialog = false">
                  儲存
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <ul class="lineList">
          <li>
            <span class="title">
              Line ID
            </span>
            <p>
              @hyweb2023
            </p>
          </li>
          <li>
            <span class="title">
              Channel ID
            </span>
            <p>
              1657586980
            </p>
          </li>
          <li>
            <span class="title">
              Channel Secret
            </span>
            <p>
              971e9a12644bef748384050622a0606d
            </p>
          </li>
          <li>
            <span class="title">
              Access token
            </span>
            <p>
              B3JIStf+3gSFlaJ3VYU9bG9dYsrOoqKIOMlnvmo1dK70XUTS... ...
            </p>
          </li>
        </ul>
      </div>
      <!-- 預約摘要 end -->
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
