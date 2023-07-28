<template>
  <div>
    <div class="titleInfo">
      <div class="clinicInfo"><h2>凌網診所台北總院</h2></div>
      <div class="title">
        <h3>
          <span>新增看診科別</span>
        </h3>
        <v-btn color="primaryDark">
          新增科別
        </v-btn>
      </div>
      <div class="title">
        <h3>
          <span>林小凌<small>（啟用）</small></span>
        </h3>
        <v-btn color="primaryDark">
          刪除醫生
        </v-btn>
      </div>
      <div class="selectNav">
        <div class="selectGroup">
          <v-autocomplete v-model="item1" :items="items1" dense label="科別" solo item-text="text" class="ml-0"> </v-autocomplete>
          <v-text-field placeholder="請輸入醫生名稱" prepend-inner-icon="mdi-magnify" dense solo></v-text-field>
          <v-btn class="submitBtn" depressed color="primaryDark">
            查詢
          </v-btn>
          <v-btn class="submitBtn" depressed color="primaryDark">
            重設
          </v-btn>
        </div>
      </div>
    </div>
    <section class="dataSection  hasBtnSection">
      <v-form class="infoForm">
        <!-- 拖曳區塊 start-->
        <label for="">醫生形象圖片</label>
        <v-card class="uploadImgCard">
          <div class="header ">
            <v-img cover lazy-src="https://picsum.photos/id/11/10/6" height="70" width="70" src="https://picsum.photos/id/11/500/300"></v-img>
            <span class="name">林小凌.jpeg</span>
          </div>
          <v-spacer></v-spacer>
          <v-btn class="v-btn mr-2" depressed>
            刪除
          </v-btn>
          <v-btn class="submitBtn" depressed color="primaryDark">
            更換
          </v-btn>
        </v-card>

        <label for="">醫生形象圖片</label>
        <v-card class="uploadImgCard">
          <div class="header ">
            <v-img cover lazy-src="~@/assets/default_img.png" height="70" width="70" src="~@/assets/default_img.png"></v-img>

            <span class="default">點擊上傳按鈕以上傳圖像。</span>
          </div>
          <v-spacer></v-spacer>

          <v-btn class="submitBtn" depressed color="primaryDark">
            上傳
          </v-btn>
        </v-card>
        <label for=""> <v-icon class="errorIcon">mdi-alert-octagon-outline</v-icon>科別</label>
        <v-autocomplete class="inlineInput" v-model="item1" :items="items1" dense label="科別" solo item-text="text"> </v-autocomplete>

        <div class="inlineBtn_group">
          <v-btn class="v-btn mr-2" depressed>
            取消
          </v-btn>
          <v-btn class="submitBtn" depressed color="primaryDark">
            新增
          </v-btn>
        </div>
        <label for="">科別名稱</label>
        <v-text-field class="inlineInput" placeholder="請輸入科別" id="idNum" dense v-model="first" background-color="#fff" outlined></v-text-field>
        <div class="inlineBtn_group">
          <v-btn class="v-btn mr-2" depressed>
            取消
          </v-btn>
          <v-btn class="submitBtn" depressed color="primaryDark">
            新增
          </v-btn>
        </div>

        <label for="">醫生形象圖片</label>
        <div class="dropInput">
          <vueDropzone ref="myVueDropzoneFile" id="dropzoneFile" :options="dropzonePicOptions" @vdropzone-success="successUploadFile" @vdropzone-removed-file="removedFile" @vdropzone-download-file="downloadFile"></vueDropzone>
          <div class="infoText">
            <small>只能上傳jpg/png文件，且不超過500kb</small>
            <v-btn class="submitBtn" depressed color="primaryDark">
              取消更換
            </v-btn>
          </div>
        </div>
        <!-- 拖曳區塊 end-->
        <label for="idNum">科別名稱</label>
        <p class="emptyText">尚未新增任何看診科別，點擊上方「新增科別」按鈕，開始新增看診科別與醫生資訊</p>
        <v-text-field placeholder="請輸入科別" id="idNum" dense v-model="first" background-color="#fff" outlined></v-text-field>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-btn class="v-btn mr-2" depressed>
            取消
          </v-btn>
          <v-btn class="submitBtn" depressed color="primaryDark">
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
        <label for="">專長</label>
        <v-textarea counter="100" outlined :rules="rules2" placeholder="請輸入內容" background-color="#fff" :value="textareaValue2"></v-textarea>

        <label for="">未分科醫生（1）</label>
        <!-- 新增科別手風琴 start -->
        <label for="">科別</label>
        <div class="cardContent">
          <v-card class="doctorInfoCard">
            <v-avatar>
              <img src="~@/assets/icon_face.svg" />
            </v-avatar>
            <div class="">
              <div class="name">醫生名稱</div>
              <span class="status">停用</span>
            </div>
          </v-card>
          <v-card class="doctorInfoCard" v-for="(item, i) in 6" :key="i">
            <v-avatar>
              <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
            </v-avatar>
            <div class="">
              <div class="name">醫生名稱</div>
            </div>
          </v-card>
        </div>
        <v-expansion-panels multiple>
          <v-expansion-panel class="accordionCard" v-for="(item, i) in 3" :key="i">
            <v-expansion-panel-header>
              <h6>
                小兒科 (0)
                <v-btn @click.stop="" elevation="0" color="primaryDark" outlined>
                  新增醫生
                </v-btn>
              </h6>
              <v-spacer></v-spacer>
              <v-btn @click.stop="" elevation="0">
                <v-icon color="primaryDark" dark>mdi-delete</v-icon>
              </v-btn>
              <v-btn @click.stop="" elevation="0">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="content">
                <v-card class="doctorInfoCard">
                  <v-avatar>
                    <img src="~@/assets/icon_face.svg" />
                  </v-avatar>
                  <div class="">
                    <div class="name">醫生名稱</div>
                    <span class="status">停用</span>
                  </div>
                </v-card>
                <v-card class="doctorInfoCard" v-for="(item, i) in 20" :key="i">
                  <v-avatar>
                    <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
                  </v-avatar>
                  <div class="">
                    <div class="name">醫生名稱</div>
                  </div>
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- 無法展開的樣式為 v-expansion-panel-header 增加 disabled標籤 -->
        <v-expansion-panels multiple>
          <v-expansion-panel class="accordionCard" v-for="(item, i) in 1" :key="i">
            <v-expansion-panel-header disabled>
              <h6>婦產科</h6>
              <v-spacer></v-spacer>
              <v-btn @click.stop="" elevation="0">
                <v-icon color="primaryDark" dark>mdi-delete</v-icon>
              </v-btn>
              <v-btn @click.stop="" elevation="0">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- 新增科別手風琴 end -->

        <v-expansion-panels multiple>
          <v-expansion-panel class="accordionCard ">
            <v-expansion-panel-header>
              <h6>
                發送名單（7）
              </h6>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="content limitContent">
                <v-chip v-for="i in 20" :key="i" class="memberCard" close color="primaryDark" label text-color="white" @click:close="chip1 = false">
                  <v-icon left>
                    mdi-account
                  </v-icon>
                  姓名名
                </v-chip>
                <v-chip v-for="i in 15" :key="i" class="memberCard" close color="primaryDark" label text-color="white" @click:close="chip1 = false">
                  <v-icon left>
                    mdi-account
                  </v-icon>
                  姓名名
                </v-chip>
              </div>
              <div class="footer">
                <router-link class="linkBtn" to="">
                  展開全部
                </router-link>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- alert start -->
        <v-alert class="alert infoAlert">
          <div class="d-flex ">
            <div class="text">
              <v-icon>mdi-alert-octagon-outline</v-icon>
              <p>尚未新增任何看診科別，點擊上方「新增科別」按鈕，開始新增看診科別，始能進行預約服務。</p>
            </div>
          </div>
        </v-alert>
        <!-- alert end -->
      </v-form>
      <!-- <template>
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
            <v-data-table mobile-breakpoint="0" hide-default-header fixed-header :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1 width-scroll" :footer-props="{ itemsPerPageText: '1頁顯示 :' }">
              <template slot="header" :headers="headers">
                <thead>
                  <tr>
                    <th width="100">預約號碼</th>
                    <th>姓名</th>
                    <th width="200">
                      <div class="selectComponent" transition="slide-x-transition">
                        <span class="selectBtn" @click="selectExpand = !selectExpand">
                          類型
                          <v-icon>
                            mdi-menu-down
                          </v-icon>
                        </span>
                        <v-expand-transition>
                          <v-card class="selectContent" v-show="selectExpand">
                            <v-list>
                              <v-list-item-group v-model="model" multiple>
                                <template v-for="(item, i) in SelectItems">
                                  <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>
                                  <v-list-item v-else :key="`item-${i}`" :value="item" active-class="primaryActive ">
                                    <template v-slot:default="{ active }">
                                      <v-list-item-content>
                                        <v-list-item-title v-text="item"></v-list-item-title>
                                      </v-list-item-content>
                                      <v-list-item-action>
                                        <v-checkbox :input-value="active" color=""></v-checkbox>
                                      </v-list-item-action>
                                    </template>
                                  </v-list-item>
                                </template>
                              </v-list-item-group>
                            </v-list>
                          </v-card>
                        </v-expand-transition>
                      </div>
                    </th>
                    <th width="200">報到</th>
                    <th width="80">檢視的資料</th>
                  </tr>
                </thead>
              </template>
              <template v-slot:[`item.type`]="{ item }">
                <span>{{ item.type }}</span>
              </template>
              <template v-slot:[`item.check`]="{ item }">
                <span>{{ item.check }}</span>
                <v-btn class="checkBtn" depressed color="primaryDark" dark>報到</v-btn>
                <v-btn class="cancelBtn" depressed>取消報到</v-btn>
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
      </template> -->
      <!-- 沒有header的table end -->
      <!-- 拖曳區塊 start-->
      <!-- <div class="form-group">
        <div class="col-md-10 offset-md-1">
          <vueDropzone ref="myVueDropzoneFile" id="dropzoneFile" :options="dropzonePicOptions" @vdropzone-success="successUploadFile" @vdropzone-removed-file="removedFile" @vdropzone-download-file="downloadFile"></vueDropzone>
        </div>
      </div> -->
      <!-- 拖曳區塊 end-->
    </section>
    <div class="btnSection" :class="{ closeMenu: mini }">
      <v-btn outlined color="primaryDark" style="background:#fff;" dark>返回</v-btn>
      <v-btn color="primaryDark">新增</v-btn>
    </div>
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
                  <v-text-field class="datePickerSelect" v-model="computedDateFormatted" persistent-hint dense readonly solo v-bind="attrs" v-on="on"></v-text-field>
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
          <!-- <v-btn color="primaryDark"  block>更改預約</v-btn> -->
          <v-btn class="cancelBtn" depressed block>取消報到</v-btn>
          <!-- 取消預約 視窗＋按鈕 start -->
          <v-dialog v-model="dialog2" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primaryDark" block v-bind="attrs" v-on="on">取消預約</v-btn>
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
                <v-btn color="primaryDark" @click="dialog2 = false">
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
        dictDefaultMessage: '將圖片拖曳到此處，或點擊上傳',
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

      //textareaValue
      rules: [(v) => v.length <= 300 || '輸入內容不超過300字'],
      rules2: [(v) => v.length <= 100 || '輸入內容不超過100字'],
      textareaValue: '',
      textareaValue2: '',
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
    updateItme(model, vuex) {
      // do Something
      console.log('test');
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
