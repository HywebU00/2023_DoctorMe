<template>
  <v-form v-model="valid" class="">
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <template>
        <div class="selectNav">
          <!-- 標題 start-->
          <div class="title">
            <h3>
              <span>預約名單</span>
            </h3>
            <v-btn color="primaryDark" dark>
              新增預約
            </v-btn>
          </div>
          <!-- 標題 end-->
        </div>
      </template>
    </div>
    <section class="dataSection">
      <template>
        <v-card class="tabletList">
          <v-card-title>
            <div class="tableTitle">
              <v-icon>
                calendar_today
              </v-icon>
              <h5>2022/11/10 <span> (40筆預約)</span></h5>
            </div>
            <v-text-field class="tableSearch" v-model="search" append-icon="mdi-magnify" label="請輸入姓名" single-line hide-details></v-text-field>
          </v-card-title>
          <template>
            <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1" :footer-props="{ itemsPerPageText: '1頁顯示 :' }">
              <template v-slot:[`item.type`]>
                <v-select class="tabletSelect" placeholder="視訊" multiple :items="tableSelect"> </v-select>
              </template>
              <template v-slot:[`item.check`]="{ item }">
                <span>{{ item.check }}</span>
                <v-btn depressed color="primaryDark" dark>報到</v-btn>
                <!-- <v-btn depressed color="rgba(236, 236, 236, 1)">取消報到</v-btn> -->
              </template>
              <template v-slot:[`item.file`]="{ item }">
                <v-btn class="viewBtn" depressed color="rgba(0,0,0,0)" @click.stop="openOffcanvas = !openOffcanvas">
                  <v-icon>
                    description
                  </v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </template>
        </v-card>
      </template>
      <!-- 拖曳區塊 start-->
      <div class="form-group">
        <div class="col-md-10 offset-md-1">
          <vueDropzone ref="myVueDropzoneFile" id="dropzoneFile" :options="dropzonePicOptions" @vdropzone-success="successUploadFile" @vdropzone-removed-file="removedFile" @vdropzone-download-file="downloadFile"></vueDropzone>
        </div>
      </div>
      <!-- 拖曳區塊 end-->
    </section>
    <!-- offcanvas start -->
    <section class="offcanvas" :class="{ open: openOffcanvas }">
      <div class="">
        <div class="offcanvasHeader">
          <h5>林小凌</h5>
          <button>
            <v-icon @click.stop="openOffcanvas = !openOffcanvas">
              close
            </v-icon>
          </button>
        </div>
        <div class="offcanvasBody">
          <h6>預約資訊</h6>
          <ul>
            <li>
              <span>預約日期</span>
              <p>2022 / 11 / 20 （一）</p>
            </li>
            <li>
              <span>預約時段</span>
              <p>晚上診 （19:00-21:30）</p>
            </li>
            <li>
              <span>看診科別</span>
              <p>家醫科</p>
            </li>
            <li>
              <span>看診醫生</span>
              <p>診間一：林建凱醫生</p>
            </li>
          </ul>
          <h6>預約資訊</h6>
          <ul>
            <li>
              <span>類型</span>
              <p>初診病患</p>
            </li>
            <li>
              <span>預約者姓名</span>
              <p>林小凌</p>
            </li>
            <li>
              <span>身分證字號/居留證號碼</span>
              <p>P222222222</p>
            </li>
            <li>
              <span>聯絡電話</span>
              <p>0989101010</p>
            </li>
            <li>
              <span>生日</span>
              <p>1999/01/01</p>
            </li>
          </ul>
          <!-- 選擇科別 -->
          <ul>
            <li>
              <span>請選擇科別</span>
              <v-select :items="styles" label="請選擇科別" dense solo></v-select>
            </li>
            <li>
              <span>請選擇醫生</span>
              <v-select :items="doctors" label="請選擇醫生" dense solo></v-select>
            </li>
            <li>
              <span>請選擇日期</span>
              <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" max-width="250px" min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="computedDateFormatted" persistent-hint dense readonly solo v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker width="250px" class="datePicker" v-model="date" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </li>
            <li>
              <span>請選擇時段</span>
              <v-select :items="times" label="請選擇時段" dense solo></v-select>
            </li>
          </ul>
        </div>
        <div class="offcanvasFooter">
          <v-btn color="primaryDark" dark block>更改預約</v-btn>
          <v-btn color="primaryDark" dark block>取消預約</v-btn>
        </div>
      </div>
    </section>
    <!-- offcanvas end -->
  </v-form>
</template>
<script>
//swiper 套件
import { mapGetters, mapActions } from 'vuex';
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

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
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      model: null,
      valid: null,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      openOffcanvas: true,
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
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),

      //表單的ＪＳ
      search: '',
      dialog: false,
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
        { text: '類型', value: 'type', sortable: false, width: '200px' },
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
        },
        {
          num: 2,
          name: '周敦頤',
          check: '已報到',
        },
        {
          num: 3,
          name: '李清照',
          check: '已報到',
        },
        {
          num: 4,
          name: '歐陽脩',
          check: '已報到',
        },
        {
          num: 5,
          name: '畢卡索',
          check: '已報到',
        },
        {
          num: 6,
          name: '張大千',
          check: '已報到',
        },
        {
          num: 7,
          name: '馬蒂斯',
          check: '已報到',
        },
        {
          num: 8,
          name: '達文西',
          check: '已報到',
        },
        {
          num: 9,
          name: '拉斐爾',
          check: '已報到',
        },
        {
          num: 10,
          name: '克林姆',
          check: '已報到',
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
    if (vm.idbServerUrl != '/landProxy/') vm.dropzonePicOptions.url = vm.idbServerUrl + 'land/uploadFile';
    vm.dropzonePicOptions.url = vm.idbServerUrl + 'land/uploadFile';
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
