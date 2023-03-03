<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>會員名單</span>
        </h3>
      </div>
    </div>
    <section class="dataSection">
      <template>
        <div class="tabList">
          <v-tabs v-model="tab" color="primaryDark" background-color="transparent" grow>
            <v-tab v-for="item in tabItems" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-form class="infoForm">
                <label for=""> <v-icon class="errorIcon">mdi-alert-octagon-outline</v-icon>科別</label>
                <v-autocomplete class="inlineInput" v-model="item1" :items="items1" dense label="科別" solo item-text="text"> </v-autocomplete>

                <div class="inlineBtn_group">
                  <v-btn class="v-btn mr-2" depressed>
                    取消
                  </v-btn>
                  <v-btn class="submitBtn" depressed color="primaryDark" dark>
                    新增
                  </v-btn>
                </div>
                <label for="">科別名稱</label>
                <v-text-field class="inlineInput" placeholder="請輸入科別" id="idNum" dense v-model="first" background-color="#fff" outlined></v-text-field>
                <div class="inlineBtn_group">
                  <v-btn class="v-btn mr-2" depressed>
                    取消
                  </v-btn>
                  <v-btn class="submitBtn" depressed color="primaryDark" dark>
                    新增
                  </v-btn>
                </div>

                <label for="idNum">科別名稱</label>
                <p class="emptyText">尚未新增任何看診科別，點擊上方「新增科別」按鈕，開始新增看診科別與醫生資訊</p>
                <v-text-field placeholder="請輸入科別" id="idNum" dense v-model="first" background-color="#fff" outlined></v-text-field>
                <div class="d-flex">
                  <v-spacer></v-spacer>
                  <v-btn class="v-btn mr-2" depressed>
                    取消
                  </v-btn>
                  <v-btn class="submitBtn" depressed color="primaryDark" dark>
                    新增
                  </v-btn>
                </div>
                <label for="doctorName"
                  >醫生名稱
                  <v-btn class="editBtn" @click.stop="" elevation="0">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn></label
                >

                <v-text-field placeholder="請輸入醫生名稱" id="doctorName" dense v-model="first" background-color="#fff" outlined></v-text-field>
                <label for="">學經歷</label>
                <v-textarea counter="300" outlined :rules="rules" placeholder="請輸入內容" background-color="#fff" :value="textareaValue"></v-textarea>
              </v-form>
            </v-tab-item>
            <v-tab-item>
              <h6 class="mb-4">預約次數：1</h6>
              <v-card class="tabletList">
                <template>
                  <v-data-table mobile-breakpoint="0" :headers="headers" :items="desserts" class="elevation-1 width-scroll" :footer-props="{ itemsPerPageText: '1頁顯示 :' }">
                    <template v-slot:[`item.file`]="item">
                      <v-btn class="viewBtn" depressed color="rgba(0,0,0,0)">
                        <v-icon>
                          description
                        </v-icon>
                      </v-btn>
                    </template>
                  </v-data-table>
                </template>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </template>
    </section>
  </div>
</template>
<script>
//swiper 套件
import { mapGetters, mapActions } from 'vuex';
// import vue2Dropzone from 'vue2-dropzone';
// import 'vue2-dropzone/dist/vue2Dropzone.min.css';

//scrollbar
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

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
  components: {
    // vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      model: null,
      valid: null,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      tab: null,
      tabItems: ['基本資料', '預約記錄'],
      openOffcanvas: false,
      items1: [{ text: '家醫科' }, { text: '牙科' }, { text: '胸腔科' }, { text: '內科' }],
      item1: '家醫科',
      items2: [{ text: '上午診' }, { text: '下午診' }, { text: '晚上診' }],
      item2: ['上午診'],
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
          value: 'date',
          width: '100px',
        },
        { text: '看診日期', value: 'time', sortable: false },
        { text: '時段', type: 'select', value: 'time', sortable: true, width: '200px' },
        { text: '科別', value: 'department', sortable: false },
        { text: '類型', value: 'type', sortable: false },
        { text: '醫生', value: 'doctor', sortable: false },
        { text: '報到狀態', value: 'check', sortable: false, width: '200px' },
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
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          department: '小兒科',
          type: '門診',
          doctor: '杜振熙',
          check: '未報到',
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
    scrollBar() {
      const scrollBar = this.$refs.scrollBar;

      OverlayScrollbars(scrollBar, {
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 500,
        },
      });
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
    this.scrollBar();
  },
};
</script>
<style></style>
