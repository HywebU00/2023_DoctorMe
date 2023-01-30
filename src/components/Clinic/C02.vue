<template>
  <v-form v-model="valid" class="">
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <template>
        <div class="selectNav">
          <div class="datePicker">
            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-model="date" v-bind="attrs" v-on="on" fab color="primary" @click="expand = !expand">
                  <v-icon>
                    calendar_today
                  </v-icon>
                </v-btn>
                <h3>
                  <strong>{{ date }}</strong>
                  <span>診間列表</span>
                </h3>
              </template>
              <v-date-picker no-title v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </div>
          <div class="selectGroup">
            <v-autocomplete v-model="item1" :items="items1" dense label="科別" solo item-text="text"> </v-autocomplete>
            <v-select v-model="item2" :items="items2" dense small-chips label="所有時段" multiple solo item-text="text" no-data-text="查無資料" :rules="requiredRules"> </v-select>
            <v-btn class="submitBtn" depressed color="primaryDark" dark>
              搜尋
            </v-btn>
          </div>
        </div>
      </template>
    </div>
    <section class="dataSection">
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
                <v-btn class="viewBtn" depressed color="rgba(0,0,0,0)">
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
  </v-form>
</template>
<script>
//swiper 套件
import Swiper, { Navigation, Pagination } from 'swiper';

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
          // window.open(vm.landServerUrl + "land/" + path, "_blank");
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
      ];
    },
    init() {
      Swiper.use([Navigation]);
      var swiper = new Swiper('.cardSlider', {
        slidesPerView: 1.5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.sliderBtnNext',
          prevEl: '.sliderBtnPrev',
        },

        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 6,
          },
        },
      });
    },
  },
  created: function() {
    console.log('!!!! ' + this.$route.params.id);
    // 此時物件尚未被init;
    let vm = this;
    console.log('vm.idbServerUrl ' + vm.idbServerUrl);
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
  },
  mounted() {
    this.init();
  },
};
</script>
<style></style>
