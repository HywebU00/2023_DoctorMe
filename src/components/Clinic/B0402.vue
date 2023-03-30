<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>群發訊息</span>
          <v-btn class="" depressed color="primaryDark" dark>
            發送訊息
          </v-btn>
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
              <div class="selectNav">
                <div class="selectGroup">
                  <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" max-width="250px" min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field label="請選擇日期" prepend-inner-icon="mdi-calendar-blank" v-model="computedDateFormatted" persistent-hint dense readonly solo v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker width="250px" class="datePicker" v-model="date" no-title @input="menu2 = false"></v-date-picker>
                  </v-menu>
                  <v-btn class="submitBtn" depressed color="primaryDark" dark>
                    查詢
                  </v-btn>
                  <v-btn class="submitBtn" depressed color="primaryDark" dark>
                    重設
                  </v-btn>
                </div>
              </div>
              <v-card class="tabletList">
                <template>
                  <v-data-table :headerProps="headerprops" mobile-breakpoint="0" :headers="headers" :items="desserts" hide-default-footer class="elevation-1 width-scroll">
                    <template v-slot:item.content="{ item }">
                      <div class="imgItem">
                        <v-img lazy-src="" height="70" max-height="70" max-width="70" width="70" :src="item.content.img"></v-img>
                        <span class="text-truncate">{{ item.content.text }} </span>
                      </div>
                    </template>
                    <template v-slot:[`item.delete`]>
                      <v-btn class="viewBtn" depressed color="rgba(0,0,0,0)">
                        <v-icon>delete </v-icon>
                      </v-btn>
                    </template>
                  </v-data-table>
                </template>
              </v-card>
              <div class="text-center">
                <v-pagination color="primaryDark" v-model="page" :length="6" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
              </div>
            </v-tab-item>
            <v-tab-item>
              <h6 class="mb-4">預約次數：1</h6>
            </v-tab-item>
            <v-tab-item>
              <div class="">3</div>
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
      tabItems: ['已預約傳送', '草稿', '已傳送'],
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
      headerprops: {
        'sort-icon': 'mdi-menu-down',
      },
      headers: [
        { text: '內容', value: 'content', sortable: false },
        { text: '對象', value: 'user', sortable: false, width: '200px' },
        { text: '傳送時間', value: 'sentTime', sortable: true, width: '100px' },
        { text: '刪除', value: 'delete', sortable: false, width: '60px', align: 'center' },
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
          content: { text: '訊息內容訊息內容訊息內容訊息內容訊息內容訊息內容', img: 'https://picsum.photos/id/11/500/300' },
          user: '所有好友',
          sentTime: '2022/11/12',
        },
        {
          content: { text: '訊息內容訊息內容訊息內容訊息內容訊息內容訊息內容', img: 'https://picsum.photos/id/13/500/300' },
          user: '所有好友',
          sentTime: '2022/11/15',
        },
        {
          content: { text: '訊息內容訊息內容訊息內容訊息內容訊息內容訊息內容', img: 'https://picsum.photos/id/12/500/300' },
          user: '所有好友',
          sentTime: '2022/11/13',
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
