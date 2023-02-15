<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>預約名單</span>
        </h3>
      </div>
      <div class="selectNav">
        <div class="selectGroup">
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field prepend-inner-icon="mdi-calendar-blank" class="dateRangeInput" background-color="#fff" dense solo v-model="dateRangeText" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="dates" range no-title>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                取消
              </v-btn>
              <v-btn text color="primary" @click="menu = false">
                確認
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-select v-model="item2" :items="items2" dense small-chips label="所有時段" multiple solo item-text="text" no-data-text="查無資料" :rules="requiredRules"> </v-select>
          <v-autocomplete v-model="item1" :items="items1" dense label="科別" solo item-text="text"> </v-autocomplete>
          <v-autocomplete v-model="SelectItem1" :items="SelectItems" dense label="類型" solo item-text="text"> </v-autocomplete>
          <v-autocomplete v-model="doctor" :items="doctors" dense label="醫生" solo item-text="text"> </v-autocomplete>
          <v-autocomplete v-model="doctor" :items="doctors" class="limitInput" dense label="所有狀態" solo item-text="text"> </v-autocomplete>

          <v-btn class="submitBtn" depressed color="primaryDark" dark>
            查詢
          </v-btn>
          <v-btn class="submitBtn" depressed color="primaryDark" dark>
            重設
          </v-btn>
        </div>
      </div>
    </div>
    <section class="dataSection">
      <!-- 沒有header的table start -->
      <template>
        <v-card class="tabletList">
          <v-card-title>
            <v-text-field class="tableSearch" v-model="search" append-icon="mdi-magnify" label="請輸入姓名" single-line hide-details></v-text-field>
          </v-card-title>
          <template>
            <v-data-table mobile-breakpoint="0" fixed-header :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1 width-scroll" :footer-props="{ itemsPerPageText: '1頁顯示 :' }">
              <template v-slot:[`item.type`]="{ item }">
                <span>{{ item.type }}</span>
              </template>
              <template v-slot:[`item.check`]="{ item }">
                <span>{{ item.check }}</span>
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
      <!-- 沒有header的table end -->
      <!-- 拖曳區塊 start-->
      <!-- <div class="form-group">
        <div class="col-md-10 offset-md-1">
          <vueDropzone ref="myVueDropzoneFile" id="dropzoneFile" :options="dropzonePicOptions" @vdropzone-success="successUploadFile" @vdropzone-removed-file="removedFile" @vdropzone-download-file="downloadFile"></vueDropzone>
        </div>
      </div> -->
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
          <!-- 更改預約 header start -->
          <!-- <button>
            <v-icon>
              mdi-chevron-left
            </v-icon>
          </button>
          <h5>更改預約</h5> -->
          <!-- 更改預約 header end -->
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
                  <v-text-field prepend-inner-icon="mdi-clock-outline" v-model="computedDateFormatted" persistent-hint dense readonly solo v-bind="attrs" v-on="on"></v-text-field>
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
          <!-- <v-btn color="primaryDark" dark block>更改預約</v-btn> -->
          <v-btn class="cancelBtn" depressed block>取消報到</v-btn>
          <!-- 取消預約 視窗＋按鈕 start -->
          <v-dialog v-model="dialog2" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primaryDark" dark block v-bind="attrs" v-on="on">取消預約</v-btn>
            </template>
            <v-card class="modal">
              <v-card-title>
                <h5 color="primaryDark" text>取消預約</h5>
                <v-spacer></v-spacer>
                <button>
                  <v-icon @click.stop="dialog2 = !dialog2">
                    close
                  </v-icon>
                </button>
              </v-card-title>
              <v-card-text>
                <p>確認取消 2022/11/10 林小凌的預約嗎？</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primaryDark" dark @click="dialog2 = false">
                  確認取消
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- 取消預約 視窗＋按鈕 end -->
        </div>
      </div>
    </section>
    <!-- offcanvas end -->
  </div>
</template>
<script>
//swiper 套件
import { mapGetters, mapActions } from 'vuex';
// import vue2Dropzone from 'vue2-dropzone';
// import 'vue2-dropzone/dist/vue2Dropzone.min.css';

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
    dateRangeText() {
      return this.dates.join(' ~ ');
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
          text: '看診日期',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'date',
          width: '100px',
        },
        { text: '時段', value: 'time', sortable: false, width: '200px' },
        { text: '科別', value: 'category', sortable: false, width: '200px' },
        { text: '類型', value: 'type', sortable: false, width: '200px' },
        { text: '看診者', value: 'name', sortable: false },
        { text: '醫生', value: 'doctor', sortable: false, width: '150px' },
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
      dates: ['2019-09-10', '2019-09-20'],
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
          name: '周敦頤',
          category: '小兒科',
          type: '門診',
          doctor: '杜振誒',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          name: '周敦貳',
          category: '小兒科',
          type: '門診',
          doctor: '杜振逼',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          name: '周敦參',
          category: '小兒科',
          type: '門診',
          doctor: '杜振熙',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          name: '周敦頤',
          category: '小兒科',
          type: '門診',
          doctor: '杜振誒',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          name: '周敦貳',
          category: '小兒科',
          type: '門診',
          doctor: '杜振逼',
        },
        {
          date: '2022/11/13',
          time: '上午診',
          name: '周敦參',
          category: '小兒科',
          type: '門診',
          doctor: '杜振熙',
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
