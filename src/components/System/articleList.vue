<template>
  <v-form v-model="valid" style="font-family:Microsoft JhengHei;">
    <v-container md="12">
      <v-row dense>
        <v-col cols="12" sm="3" md="3" offset-sm="1" offset-md="1">
          <v-select
            :items="getCodeDateUtil('articleType')"
            label="訊息類別"
            dense
            clearable
            class="font-weight-normal"
            v-model="queryObject.category"
            @change="getInterpreterFromServer"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="2" md="2" offset-sm="1" offset-md="1">
          <v-select
            :items="getCodeDateUtil('articleStatus')"
            label="狀態"
            dense
            clearable
            class="font-weight-normal"
            v-model="queryObject.status"
            @change="getInterpreterFromServer"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="2" md="2" offset-sm="1" offset-md="1">
          <v-select
            :items="getCodeDateUtil('languageType')"
            label="語言"
            dense
            clearable
            class="font-weight-normal"
            v-model="queryObject.languageType"
            @change="getInterpreterFromServer"
          ></v-select>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" sm="3" md="4" offset-sm="1" offset-md="1">
          <v-text-field
            type="text"
            label="標題"
            clearable
            class="font-weight-normal"
            v-model="queryObject.subject"
            @input="getInterpreterFromServer"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3" md="4" offset-sm="1" offset-md="1">
          <v-dialog
            ref="dialog"
            v-model="selectDate"
            :return-value.sync="dates"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateRangeText"
                @click:clear="dates=[];getInterpreterFromServer();"
                label="張貼起迄日期"
                readonly
                v-on="on"
                clearable
                class="font-weight-normal"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dates"
              locale="zh-tw"
              style="font-family:Microsoft JhengHei;"
              color="red"
              scrollable
              range
            >
              <v-spacer></v-spacer>
              <v-btn color="grey lighten-3" style="color:black;" @click="selectDate = false">取消</v-btn>
              <v-btn color="red" style="color:white;"  class="ma-2" @click="$refs.dialog.save(dates);getInterpreterFromServer();" >確定</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row dense justify="center">
        <v-col cols="12">
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="items"
            :options.sync="options"
            :server-items-length="pageSize"
            :loading="loading"
            :footer-props="{ itemsPerPageText:'每頁筆數' }"
            class="elevation-1"
            widths="1500"
            no-data-text="無資料"
            loading-text="資料傳輸中"
            hide-default-footer
            show-select
            item-key="announId"
            multi-sort
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>
                  <v-row class="pa-1 ma-1" align="center" justify="center">
                    <span class="red--text">共 {{totalCount}} 筆，每頁</span>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn dark text color="red" dense v-on="on">
                          {{ itemsPerPage }}
                          <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(number, index) in itemsPerPageArray"
                          :key="index"
                          @click="updateItemsPerPage(number)"
                        >
                          <v-list-item-title>{{ number }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <span class="red--text">筆</span>
                  </v-row>
                </v-toolbar-title>

                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="1024">
                  <template v-slot:activator="{ on }">
                    <v-btn color="red" style="color:white;" class="pa-1 ml-1 mb-1" v-on="on">新增</v-btn>
                    <v-btn
                      v-show="selected.length>0"
                      color="indigo accent-2"
                      style="color:white;"
                      class="pa-1 ml-1 mb-1"
                      @click="deleteall"
                    >刪除全部</v-btn>
                  </template>
                  <v-card outlined>
                    <v-card-title class="red" dark>
                      <h2>
                        <font style="color:white">{{ formTitle }}</font>
                      </h2>
                    </v-card-title>

                    <v-card-text>
                      <v-form ref="form" v-model="valid">
                        <v-container>
                          <v-row dense>
                            <v-col cols="12" sm="3" md="3">
                              <v-select
                                :items="getCodeDateUtil('articleType')"
                                label="訊息類別"
                                dense
                                v-model="editedItem.category"
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="3" md="4" offset-md="1">
                              <v-radio-group v-model="editedItem.status" row label="狀態" dense>
                                <v-radio label="公開" value="Y"></v-radio>
                                <v-radio label="不公開" value="N"></v-radio>
                              </v-radio-group>
                            </v-col>
                            <v-col cols="12" sm="3" md="4">
                              <v-radio-group v-model="editedItem.languageType" row label="語言" dense>
                                <v-radio label="中文" value="C"></v-radio>
                                <v-radio label="英文" value="E"></v-radio>
                              </v-radio-group>
                            </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col cols="12" sm="5" md="5">
                              <v-menu
                                v-model="menu3"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="editedItem.postDate"
                                    label="張貼日"
                                    readonly
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="editedItem.postDate"
                                  @input="menu3 = false"
                                  locale="zh-tw"
                                  color="red"
                                ></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="5" md="5">
                              <v-dialog
                                ref="dialog2"
                                v-model="selectDate2"
                                :return-value.sync="dates2"
                                persistent
                                width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="dateRangeText2"
                                    @click:clear="dates2=[];"
                                    label="張貼起迄日期"
                                    readonly
                                    v-on="on"
                                    clearable
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="dates2"
                                  locale="zh-tw"
                                  style="font-family:Microsoft JhengHei;"
                                  color="red"
                                  scrollable
                                  range
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn color="grey lighten-3" style="color:black;" @click="selectDate2 = false">取消</v-btn>
                                  <v-btn color="red" style="color:white;"  class="ma-2" @click="$refs.dialog2.save(dates2);" >確定</v-btn>
                                </v-date-picker>
                              </v-dialog>
                            </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col cols="12" sm="11" md="11">
                              <v-text-field
                                v-model="editedItem.subject"
                                label="標題"
                                :rules="requiredRules"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="11" md="11">
                              <wysiwyg v-model="editedItem.announContent" placeholder="輸入內文" />
                            </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                :rules="urlRules"
                                v-model="link_addr"
                                placeholder="相關網址"
                                @input="checklink()"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="4">
                              <v-text-field
                                v-model="link_desc"
                                placeholder="網址標題"
                                @input="checklink()"
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-btn
                                text
                                icon
                                fab
                                color="blue"
                                style="color:white;"
                                :disabled="disabledAddLinkBtn"
                                @click="addlink()"
                              >
                                <v-icon>mdi-plus</v-icon>增加網址
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-row dense v-for="(result ,index) in linkList" v-bind:key="index">
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field
                                v-model="result.linkUrl"
                                placeholder="相關網址"
                                :rules="urlRules2"
                                dense
                                outlined
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="4">
                              <v-text-field
                                v-model="result.title"
                                placeholder="網址標題"
                                :rules="requiredRules"
                                dense
                                outlined
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-btn
                                text
                                icon
                                color="blue"
                                style="color:white;"
                                @click="dellink(index)"
                              >
                                <v-icon>delete</v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col cols="12" sm="6" md="6">
                              <div>圖片</div>
                              <vue-dropzone
                                ref="myVueDropzonePic"
                                id="dropzonePic"
                                :options="dropzonePicOptions"
                                @vdropzone-success="successUploadPic"
                                @vdropzone-removed-file="removedPic"
                              ></vue-dropzone>
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="removeAllObjects('IMG')"
                              >移除所有圖片</v-btn>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <div>檔案</div>
                              <vue-dropzone
                                ref="myVueDropzoneFile"
                                id="dropzoneFile"
                                :options="dropzoneFileOptions"
                                @vdropzone-success="successUploadFile"
                                @vdropzone-removed-file="removedFile"
                              ></vue-dropzone>
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="removeAllObjects('ATT')"
                              >移除所有檔案</v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="grey lighten-3" style="color:black;" @click="canceldata();">取消</v-btn>
                      <v-btn color="red" style="color:white;" class="ma-2"  @click="savedata" :disabled="(!valid)">儲存</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.status="{ item }">{{getCodeName(item.status)}}</template>
            <template v-slot:item.category="{ item }">{{getCodeName(item.category)}}</template>
            <template v-slot:item.action="{ item }">
              <v-icon @click="editItem(item)" class="mr-2">edit</v-icon>
              <v-icon @click="deleteItem(item)">delete</v-icon>
            </template>
            <template v-slot:footer>
              <div class="text-center pa-2 ma-2">
                <v-pagination
                  color="red"
                  v-model="currentPage" 
                  :length="maxPage" 
                  :total-visible="9"
                  @input="getInterpreterFromServer()"
                ></v-pagination>
              </div>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  computed: {
    ...mapGetters({
      idbServerUrl: ["getIdbServerUrl"]
    }),
    dateRangeText() {
      if (this.isNotBlankUtil(this.dates)) {
        return this.dates.join(" ~ ");
      } else {
        return "";
      }
    },
    dateRangeText2() {
      if (this.isNotBlankUtil(this.dates2)) {
        return this.dates2.join(" ~ ");
      } else {
        return "";
      }
    },
    formTitle() {
      return this.editedIndex === -1 ? "新增" : "修改";
    }
  },
  data() {
    return {
      selected: [],
      requiredRules: [v => !!v || "此欄位是必填"],
      /* eslint-disable */
      urlRules: [
        v =>
          v.length == 0 ||
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?%#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
            v
          ) ||
          "網址格式有誤!"
      ],
      urlRules2: [
        v =>
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?%#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
            v
          ) || "網址格式有誤!"
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      /* eslint-enable */

      attachDataPhoto: [],
      attachDataFile: [],
      linkList: [],
      linkListIndex: 0,
      dropzonePicOptions: {
        url: "http://146.71.77.32:8080/idb/uploadFile",
        maxFilesize: 5, // MB
        maxFiles: 10,
        filesizeBase: 1024,
        addRemoveLinks: true,
        thumbnailWidth: 150,
        // chunking: true,
        // chunkSize: 500, // Bytes
        // uploadMultiple: true,
        // parallelUploads: 3,
        autoProcessQueue: true,
        acceptedFiles: ".jpg, .jpeg, .png, .gif, .bmp",
        dictDefaultMessage:
          "<i class='fa fa-cloud-upload'></i>請點擊或拖曳圖片上傳<br/>圖片請勿超過5MB<br/>最多上傳10個圖片",
        dictRemoveFile: "刪除圖片",
        dictFileTooBig: "檔案太大",
        dictInvalidFileType: "不允許的檔案格式",
        dictMaxFilesExceeded: "檔案數量超過限制",
        dictCancelUploadConfirmation: "是否確定要取消上傳",
        headers: { Authorization: this.$localStorage.get("idb_login_token") },
        init: function() {
          // var self = this;
          // self.on("uploadprogress", function(file, progress) {
          //   console.log("File progress", progress);
          // });
          // self.removeAllFiles();
        }
      },
      dropzoneFileOptions: {
        url: "http://146.71.77.32:8080/idb/uploadFile",
        maxFilesize: 5, // MB
        maxFiles: 10,
        filesizeBase: 1024,
        addRemoveLinks: true,
        thumbnailWidth: 150,
        // chunking: true,
        // chunkSize: 500, // Bytes
        // uploadMultiple: true,
        // parallelUploads: 3,
        autoProcessQueue: true,
        acceptedFiles:
          ".doc, .docx, .odt, .xls, .xslx, .csv, .ods, .ppt, .pptx, .odp, .pdf, .zip",
        dictDefaultMessage:
          "<i class='fa fa-cloud-upload'></i>請點擊或拖曳檔案上傳<br/>檔案請勿超過5MB<br/>最多上傳10個檔案",
        dictRemoveFile: "刪除檔案",
        dictFileTooBig: "檔案太大",
        dictInvalidFileType: "不允許的檔案格式",
        dictMaxFilesExceeded: "檔案數量超過限制",
        headers: { Authorization: this.$localStorage.get("idb_login_token") },
        init: function() {
          // var self = this;
          // self.on("uploadprogress", function(file, progress) {
          //   console.log("File progress", progress);
          // });
        }
      },
      editedIndex: -1,
      editedItem: {
        type: "1",
        subject: "",
        postDate: new Date().toISOString().substr(0, 10),
        announContent: "",
        status: "Y",
        dateRange: [],
        languageType: "C",
        isNewWindow: "N",
        category: "A",
        validStartDate: null,
        validEndDate: null
      },
      defaultItem: {
        type: "1",
        subject: "",
        postDate: new Date().toISOString().substr(0, 10),
        announContent: "",
        status: "Y",
        dateRange: [],
        languageType: "C",
        isNewWindow: "N",
        category: "A",
        validStartDate: null,
        validEndDate: null
      },
      date: new Date().toISOString().substr(0, 10),
      dates: [],
      selectDate: false,

      date2: new Date().toISOString().substr(0, 10),
      dates2: [],
      selectDate2: false,
      dialog2: false,

      date3: new Date().toISOString().substr(0, 10),
      menu3: false,
      dialog: false,
      dialogResponeIp: false,
      dialogResponeDept: false,
      dialogRadio: null,

      disabledAddLinkBtn: true,
      link_addr: "",
      link_desc: "",
      batchDelIndex: 0,

      valid: true,
      loading: false,
      options: {},

      items: [],
      queryObject: {},
      queryPager: {
        pageSize: 5,
        currentPage: 1,
        sortColumnNameList: ["-postDate"]
      },
      itemsPerPageArray: [2, 5, 10, 30, 50],
      currentPage: 1,
      itemsPerPage: 5,
      maxPage: 0,
      pageSize: 10,
      totalCount: 0,
      criterion: {},
      headers: [
        { text: "標題", value: "subject", width: 250 },
        { text: "張貼日", value: "postDate", width: 110 },
        { text: "編輯者", value: "modifierName", width: 100 },
        { text: "狀態", value: "status", width: 70 },
        { text: "訊息類別", value: "category", width: 90 },
        { text: "動作", value: "action", width: 90, sortable: false }
      ]
    };
  },
  watch: {
    options: {
      handler() {
        this.getInterpreterFromServer();
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(["updateTargetCaseId"]),
    getCodeName(value) {
      if (value == "Y") {
        return "公開";
      } else if (value == "N") {
        return "不公開";
      } else if (value == "A") {
        return "最新消息";
      } else if (value == "B") {
        return "培訓課程";
      } else if (value == "C") {
        return "通譯須知";
      } else if (value == "D") {
        return "常見問答";
      } else if (value == "E") {
        return "關於本站";
      } else if (value == "F") {
        return "下載APP";
      }
    },
    deleteFile(filename) {
      var vm = this;
      vm.axios
        .delete(vm.idbServerUrl + "idb/deleteFile/" + filename, {
          headers: {
            "Content-Type": "application/json",
            Authorization: vm.$localStorage.get("idb_login_token")
          }
        })
        .then(function(response) {
          console.log("delete tmp file ---->\n" + JSON.stringify(response));
        })
        .catch(function(error) {
          vm.handErrorUtil(error);
          console.log(error);
        });
    },
    removedPic(file, error, xhr) {
      //console.log("removedPic is ->", file.upload.uuid);
      //console.log("removedPic is ->", JSON.stringify(file));
      //console.log("file start is ->", JSON.stringify(file));
      console.log("error is ->", JSON.stringify(error));
      console.log("xhr is ->", JSON.stringify(xhr));
      this.attachDataPhoto.forEach((element, index) => {
        if (file.upload) {
          if (file.upload.uuid == element.uuid) {
            this.deleteFile(element.newAttachName);
            this.attachDataPhoto.splice(index, 1);
          }
        } else {
          if (file.name == element.newAttachName) {
            this.attachDataPhoto.splice(index, 1);
          }
        }
      });
      //console.log("attachDataPhoto end is ->", JSON.stringify(this.attachDataPhoto));
    },
    removedFile(file, error, xhr) {
      console.log("error is ->", JSON.stringify(error));
      console.log("xhr is ->", JSON.stringify(xhr));
      this.attachDataFile.forEach((element, index) => {
        if (file.upload) {
          if (file.upload.uuid == element.uuid) {
            this.deleteFile(element.newAttachName);
            this.attachDataFile.splice(index, 1);
          }
        } else {
          if (file.name == element.newAttachName) {
            this.attachDataFile.splice(index, 1);
          }
        }
      });
    },
    successUploadPic(file, response) {
      var attachFile = {};
      response.type = "IMG"; //ATT, IMG, DWN
      //console.log("File uploaded successfully");
      //console.log("Response is ->", response);
      attachFile.uuid = file.upload.uuid;
      attachFile.attachName = response.fileName.toLowerCase();
      attachFile.attachPath =
        "idb/downloadFile/" + response.newFileName.toLowerCase() + "/IMG";
      attachFile.description = response.fileName.toLowerCase();
      attachFile.newAttachName = response.newFileName.toLowerCase();
      attachFile.priority = file.upload.total; // record pic size
      attachFile.title = response.fileName.toLowerCase();
      attachFile.type = "IMG";
      this.attachDataPhoto.push(attachFile);
      //console.log("attachDataPhoto is ->", JSON.stringify(this.attachDataPhoto));
    },
    successUploadFile(file, response) {
      var attachFile = {};
      response.type = "ATT"; //ATT, IMG, DWN
      attachFile.uuid = file.upload.uuid;
      attachFile.attachName = response.fileName;
      attachFile.attachPath =
        "idb/downloadFile/" + response.newFileName + "/ATT";
      attachFile.description = response.fileName;
      attachFile.newAttachName = response.newFileName;
      attachFile.priority = file.upload.total; // record pic size
      attachFile.title = response.fileName;
      attachFile.type = "ATT";
      this.attachDataFile.push(attachFile);
    },
    removeAllObjects(act) {
      if (act == "IMG") {
        this.$refs.myVueDropzonePic.removeAllFiles();
        this.attachDataPhoto = [];
      } else if (act == "ATT") {
        this.$refs.myVueDropzoneFile.removeAllFiles();
        this.attachDataFile = [];
      }
    },
    processAttachSet(act) {
      var attachFile = {};
      var mockFile = {};
      var i = 0;
      if (act == "IMG") {
        for (i = 0; i < this.editedItem.announcementImageSet.length; i++) {
          attachFile = {};
          mockFile = {};
          attachFile.attachId = this.editedItem.announcementImageSet[
            i
          ].attachId;
          attachFile.uuid = this.editedItem.announcementImageSet[i].attachId;
          attachFile.attachName = this.editedItem.announcementImageSet[
            i
          ].attachName;
          attachFile.attachPath = this.editedItem.announcementImageSet[
            i
          ].attachPath;
          attachFile.description = this.editedItem.announcementImageSet[
            i
          ].description;
          attachFile.newAttachName = this.editedItem.announcementImageSet[
            i
          ].newAttachName;
          attachFile.priority = this.editedItem.announcementImageSet[
            i
          ].priority;
          attachFile.title = this.editedItem.announcementImageSet[i].attachName;
          attachFile.type = this.editedItem.announcementImageSet[i].type;
          mockFile.name = this.editedItem.announcementImageSet[i].newAttachName;
          mockFile.size = this.editedItem.announcementImageSet[i].priority;
          this.attachDataPhoto.push(attachFile);
          this.$refs.myVueDropzonePic.manuallyAddFile(
            mockFile,
            this.idbServerUrl +
              this.editedItem.announcementImageSet[i].attachPath
          );
        }
      } else if (act == "ATT") {
        for (i = 0; i < this.editedItem.announcementAttachSet.length; i++) {
          attachFile = {};
          mockFile = {};
          attachFile.attachId = this.editedItem.announcementAttachSet[
            i
          ].attachId;
          attachFile.uuid = this.editedItem.announcementAttachSet[i].attachId;
          attachFile.attachName = this.editedItem.announcementAttachSet[
            i
          ].attachName;
          attachFile.attachPath = this.editedItem.announcementAttachSet[
            i
          ].attachPath;
          attachFile.description = this.editedItem.announcementAttachSet[
            i
          ].description;
          attachFile.newAttachName = this.editedItem.announcementAttachSet[
            i
          ].newAttachName;
          attachFile.priority = this.editedItem.announcementAttachSet[
            i
          ].priority;
          attachFile.title = this.editedItem.announcementAttachSet[
            i
          ].attachName;
          attachFile.type = this.editedItem.announcementAttachSet[i].type;
          mockFile.name = this.editedItem.announcementAttachSet[
            i
          ].newAttachName;
          mockFile.size = this.editedItem.announcementAttachSet[i].priority;
          this.attachDataFile.push(attachFile);
          this.$refs.myVueDropzoneFile.manuallyAddFile(
            mockFile,
            this.idbServerUrl +
              this.editedItem.announcementAttachSet[i].attachPath
          );
        }
      }
    },
    checkExistingFiles() {
      this.removeAllObjects("IMG");
      this.processAttachSet("IMG");
      this.removeAllObjects("ATT");
      this.processAttachSet("ATT");
    },
    editItem(item) {
      //console.log("item ======= > " + JSON.stringify(item));
      console.log("count: " + item.viewCount);
      if (this.isNotBlankUtil(item.announcementLinkSet)) {
        var linkitem = {};
        item.announcementLinkSet.forEach(element => {
          linkitem = {};
          linkitem.isNewWindow = "Y";
          linkitem.linkUrl = element.linkUrl;
          linkitem.title = element.title;
          this.linkList.push(linkitem);
        });
      }
      if (this.isNotBlankUtil(item.dateRange)) {
        this.dates2 = item.dateRange;
      }
      this.editedIndex = item.announId;
      this.editedItem = Object.assign({}, item);
      this.editedItem.announId = item.announId;
      this.dialog = true;
      this.checkExistingFiles();
      // setTimeout(() => {
      //   this.checkExistingFiles()
      // },500)
    },
    deleteItem(item) {
      var vm = this;
      if (confirm("確定要刪除資料 " + item.subject + " 嗎?")) {
        //console.log("Delete Item " + item.announId);
        vm.axios
          .delete(vm.idbServerUrl + "idb/announcement/" + item.announId, {
            headers: {
              "Content-Type": "application/json",
              Authorization: vm.$localStorage.get("idb_login_token")
            }
          })
          .then(function(response) {
            console.log("delete item --> \n" + JSON.stringify(response));
            vm.delSuccessSwalUtil();
            vm.getInterpreterFromServer();
          })
          .catch(function(error) {
            vm.handErrorUtil(error);
            console.log(error);
          });
      } else {
        //console.log("Delete canceled " + item.announId);
      }
    },
    deleteall() {
      var vm = this;
      //console.log("Batch delete count " + vm.selected.length);
      if (vm.selected.length > 0) {
        if (confirm("確定要批次刪除 " + vm.selected.length + "資料嗎?")) {
          vm.batchDelIndex = 0;
          for (var i = 0; i < vm.selected.length; i++) {
            vm.axios
              .delete(
                vm.idbServerUrl + "idb/announcement/" + vm.selected[i].announId,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: vm.$localStorage.get("idb_login_token")
                  }
                }
              )
              .then(function(response) {
                console.log(
                  "delete " +
                    (vm.batchDelIndex + 1) +
                    " of  " +
                    vm.selected.length +
                    " items\n" +
                    JSON.stringify(response)
                );
                vm.batchDelIndex++;
                if (vm.batchDelIndex == vm.selected.length) {
                  vm.delSuccessSwalUtil();
                  vm.getInterpreterFromServer();
                  vm.selected = [];
                }
              })
              .catch(function(error) {
                vm.handErrorUtil(error);
                console.log(error);
              });
          }
        } else {
          //console.log("Batch delete canceled " + vm.selected.length);
        }
      }
    },
    canceldata() {
      this.dialog = false;
      this.dates2 = [];
      this.linkList = [];
      this.link_addr = "";
      this.link_desc = "";
      this.selected = [];
      setTimeout(() => {
        this.removeAllObjects("IMG");
        this.removeAllObjects("ATT");
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    checklink() {
      var vm = this;
      if (
        this.isNotBlankUtil(vm.link_addr) &&
        this.isNotBlankUtil(vm.link_desc)
      ) {
        //console.log("enable btn")
        vm.disabledAddLinkBtn = false;
      } else {
        //console.log("disable btn")
        vm.disabledAddLinkBtn = true;
      }
    },
    dellink(index) {
      //console.log("Delete Link item ---->" + JSON.stringify(index));
      this.linkList.splice(index, 1);
      //console.log("linkList after delete ======= > " + JSON.stringify(this.linkList));
    },
    addlink() {
      var vm = this;
      /* eslint-disable */
      //var urlR = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?%#[\]@!\$&'\(\)\*\+,;=.]+$/;
      /* eslint-enable */
      if (
        this.isNotBlankUtil(vm.link_addr) &&
        this.isNotBlankUtil(vm.link_desc)
      ) {
        // if (!urlR.test(vm.link_addr)) {
        //   console.log("Link addr error ---->" + JSON.stringify(vm.link_addr));
        // } else {
        var linkitem = {};
        linkitem.isNewWindow = "Y";
        linkitem.linkUrl = vm.link_addr;
        linkitem.title = vm.link_desc;
        vm.linkList.push(linkitem);
        vm.disabledAddLinkBtn = true;
        vm.link_addr = "";
        vm.link_desc = "";
        // console.log("Link ary ---->" + JSON.stringify(vm.linkList));
        // }
      }
    },
    savedata() {
      var vm = this;
      if (vm.isNotBlankUtil(vm.dates2)) {
        vm.editedItem.validStartDate = vm.dates2[0];
        vm.editedItem.validEndDate = vm.dates2[1];
      }
      vm.editedItem.announcementAttachSet = [];
      vm.editedItem.announcementImageSet = [];
      vm.editedItem.announcementLinkSet = [];
      var data = {
        announcement: vm.editedItem,
        attachList: vm.attachDataFile,
        imageList: vm.attachDataPhoto,
        linkList: vm.linkList
      };
      if (vm.editedIndex == -1) {
        //console.log("action Add Item \n" + JSON.stringify(data));
        vm.axios
          .post(vm.idbServerUrl + "idb/announcement", data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: vm.$localStorage.get("idb_login_token")
            }
          })
          .then(function(response) {
            console.log(
              "Response Add -------->  \n" + JSON.stringify(response)
            );
            vm.successSwalUtil();
            vm.getInterpreterFromServer();
          })
          .catch(function(error) {
            vm.handErrorUtil(error);
            console.log(error);
          });
      } else {
        //console.log("action Edit Item \n" + JSON.stringify(data));
        vm.axios
          .put(vm.idbServerUrl + "idb/announcement", data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: vm.$localStorage.get("idb_login_token")
            }
          })
          .then(function(response) {
            console.log(
              "Response Edit --------> \n" + JSON.stringify(response)
            );
            //console.log("Response Edit -------->  END \n");
            vm.successSwalUtil();
            vm.getInterpreterFromServer();
          })
          .catch(function(error) {
            vm.handErrorUtil(error);
            console.log(error);
          });
      }
      vm.canceldata();
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
      this.getInterpreterFromServer();
    },
    getInterpreterFromServer() {
      var vm = this;
      vm.loading = true;

      const { sortBy, sortDesc } = this.options;

      var sortColumnNameList = ["-postDate"];
      sortBy.forEach((element, index) => {
        sortColumnNameList[index] = (sortDesc[index] ? "-" : "") + element;
      });
      var queryObjectStr = JSON.stringify(vm.queryObject);

      var queryPagerStr = JSON.stringify({
        pageSize: vm.itemsPerPage,
        currentPage: vm.currentPage,
        sortColumnNameList: sortColumnNameList
      });
      var criterionStr = JSON.stringify({});
      if (vm.isNotBlankUtil(vm.dates))
        criterionStr = JSON.stringify({
          between: [
            {
              propertyName: "postDate",
              startDate: vm.dates[0],
              endDate: vm.dates[1]
            }
          ]
        });
      // console.log("queryObjectStr " + queryObjectStr)
      // console.log("queryPagerStr " + queryPagerStr)
      // console.log("itemsPerPage " + vm.itemsPerPage)
      // console.log("currentPage " + vm.currentPage)
      // console.log("criterionStr " + criterionStr)
      vm.axios
        .get(
          vm.idbServerUrl +
            "idb/announcement?queryString=" +
            encodeURIComponent(queryObjectStr) +
            "&queryPager=" +
            encodeURIComponent(queryPagerStr) +
            "&criterion=" +
            encodeURIComponent(criterionStr),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: vm.$localStorage.get("idb_login_token")
            }
          }
        )
        .then(function(response) {
          //console.log("response \n" + JSON.stringify(response.data.resultList));
          vm.currentPage = response.data.currentPage;
          vm.maxPage = response.data.maxPage;
          vm.pageSize = response.data.pageSize;
          vm.totalCount = response.data.totalCount;
          vm.items = response.data.resultList;
          for (var i = 0; i < vm.items.length; i++) {
            var newDateStr = "";
            if (vm.items[i].lastModifyDate != null) {
              newDateStr = vm.convertJsonDate(vm.items[i].lastModifyDate, "");
              vm.items[i].lastModifyDate = newDateStr;
            }
            if (vm.items[i].postDate != null) {
              newDateStr = vm.convertJsonDate(vm.items[i].postDate, "");
              vm.items[i].postDate = newDateStr;
            }
            vm.items[i].dateRange = [];
            if (
              vm.items[i].validStartDate != null &&
              vm.items[i].validEndDate != null
            ) {
              newDateStr = vm.convertJsonDate(vm.items[i].validStartDate, "");
              vm.items[i].validStartDate = newDateStr;
              newDateStr = vm.convertJsonDate(vm.items[i].validEndDate, "");
              vm.items[i].validEndDate = newDateStr;
              vm.items[i].dateRange.push(vm.items[i].validStartDate);
              vm.items[i].dateRange.push(vm.items[i].validEndDate);
            }
          }
          setTimeout(() => {
            vm.loading = false;
          }, 300);
        })
        .catch(function(error) {
          vm.handErrorUtil(error);
          console.log(error);
        });
    }
  },
  mounted() {
    let vm = this;
    vm.getInterpreterFromServer();
    this.dialog = true;
    setTimeout(() => {
      this.dialog = false;
    }, 5);
    // this.$nextTick(()=>{
    //   let self = this
    //   console.log(self.$refs) // Shows the mapRef object reference
    //   console.log(self.$refs.myVueDropzonePic) // returns undefined ???
    // });
    // console.log("this.$refs --> " + this.$refs)
    // console.log("this.$refs --> " + JSON.stringify(this.$refs))
    // console.log("this.$refs.myVueDropzonePic --> " + this.$refs.myVueDropzonePic)
  }
};
</script>




