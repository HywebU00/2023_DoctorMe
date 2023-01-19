
<template>
  <v-form v-model="valid" style="font-family: Microsoft JhengHei">
    <v-container>
      <v-row dense>
        <v-col cols="12" md="4" offset-md="1">
          <v-select :items="selectOption" label="語言別" dense></v-select>
        </v-col>

        <v-col cols="12" md="4" offset-md="2">
          <v-select
            :items="getCommonArrayUtil('needHours')"
            label="預計時數"
            dense
          ></v-select>
        </v-col>

        <v-col cols="12" md="3" offset-md="1">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
            disabled
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="需求時間"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu = false"
              locale="zh-cn"
              style="font-family: Microsoft JhengHei"
              color="red"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="getCommonArrayUtil('timeSolt')"
            label="時段"
            v-model="timeSolt"
            @change="timeSoltObject"
            readonly
          ></v-select>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field label="預計服務開始時間" v-mask="timeMask" />
        </v-col>
        <v-col cols="12" md="1">
          <div class="text-center">
            <v-btn
              color="red"
              dark
              @click="
                dialogNote = !dialogNote;
                noteItem = notes.note1;
              "
              >注意事項</v-btn
            >
            <!-- <v-bottom-sheet v-model="sheetFlag1" inset>
              <template v-slot:activator="{ on }">
                <v-btn color="red" dark v-on="on" @click.prevent="changeFlag">注意事項</v-btn>
              </template>
              <v-sheet class="text-center" height style="font-family:Microsoft JhengHei;">
                <div>
                  <br />
                  <h3>依照地方政府辦理非營利組織陪同外國人接受詢問作業要點規定：</h3>
                  <br />（1）以通知通譯人員到場之約定時間或實際開始通譯時間起至實際結束通譯時間。
                  <br />（2）第三小時起，未滿三十分鐘者，以半小時計；三十分鐘以上未滿一小時者，以一小時計。
                  <br />（3）每次通譯時間以四小時為限。但經通譯人員同意者，可延長至八小時。
                  <br />（4）連續通譯四小時，經通譯人員同意者，得暫停翻譯並休息，休息時間不計入時數。但案件有連續性或緊急性者，得另行調配其休息時間。
                  <br />
                </div>
              </v-sheet>
            </v-bottom-sheet>-->
          </div>
        </v-col>

        <v-col cols="12" md="3" offset-md="1">
          <v-select :items="startTimeHours" label="服務地點"></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select :items="startTimeHours" label="服務地區"></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field label="服務地址" />
        </v-col>
        <v-col cols="12" md="4" offset-md="1">
          <v-select :items="startTimeHours" label="案件類型"></v-select>
        </v-col>
        <v-col cols="12" md="4" offset-md="2"></v-col>
        <v-col cols="12" md="10" offset-md="1">
          <v-textarea label="案件敘述" dense />
        </v-col>
        <v-col cols="12" md="3" offset-md="1">
          <v-text-field
            label="費用給付"
            v-mask="numberMask"
            v-model="numberMaskTest"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="getCommonArrayUtil('payUnit')"
            label="計算單位"
          ></v-select>
        </v-col>
        <v-col cols="12" md="1">
          <div class="text-center">
            <v-btn
              color="red"
              dark
              @click="
                dialogNote = !dialogNote;
                noteItem = notes.note2;
              "
              >注意事項</v-btn
            >
            <!-- <v-bottom-sheet v-model="sheetFlag2">
              <template v-slot:activator="{ on }">
                <v-btn color="red" dark v-on="on">注意事項</v-btn>
              </template>
              <v-sheet class="text-center" height="400px" style="font-family:Microsoft JhengHei;">
               
                <div>
                  <br />
                  <h3>依照地方政府辦理非營利組織陪同外國人接受詢問作業要點規定：</h3>
                  <br />（1）日間通譯費用：每案次前二小時內補助六百元，第三小時起，每一小時補助三百元。
                  <br />（2）夜間通譯費用：執行通譯時間為夜間時段（二十二時至翌日六時）者，每案次前二小時內補助一千二百元，第三小時起，每一小時補助六百元。
                  <br />（3）每案次前二小時跨日間及夜間時段，採夜間通譯費用計算。第三小時起若跨日間及夜間時段，則該跨越時段之費用，以夜間通譯費用計算，其餘依各時段通譯費用計算。
                  <br />（4）通譯人員之交通費用，比照第六點陪同人員之規定覈實補助。
                  <br />
                </div>
              </v-sheet>
            </v-bottom-sheet>-->
          </div>
        </v-col>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="3" offset-md="1">
          <v-text-field label="交通費" v-mask="numberMask" />
        </v-col>
        <v-col cols="12" md="8"></v-col>
        <v-col cols="12" md="3" offset-md="1">
          <!-- <vuetify-datetime v-model="value" label="通譯回覆期限" v-bind:options="options" /> -->
        </v-col>
        <v-col cols="12" md="8"></v-col>

        <v-col
          cols="12"
          md="4"
          offset-md="1"
          class="text-center"
          v-for="(item, i) in items"
          v-bind:key="i"
        >
          <v-card>
            <v-card-title>
              <h1>{{ item.name }}</h1>
              <h2>(女) 案件數：22</h2>
              <v-spacer />
              <v-rating
                readonly
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
              ></v-rating>
              <v-spacer />
              <v-btn
                @click="
                  dialog = !dialog;
                  targetItem = item;
                "
                class="ma-1"
              >
                <v-icon>mdi-account-search</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="10" offset-md="1" class="text-center">
          <v-btn color="red" class="ma-1" large @click.prevent="submitObject">
            <font style="color: white; font-size: 18px">確定</font>
          </v-btn>
          <v-btn
            color="warning"
            class="ma-1"
            large
            @click.prevent="$router.go(-1)"
          >
            <font style="color: white; font-size: 18px">取消</font>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" width="800px" v-if="dialog">
      <InterpreterDetail
        :targetItem="targetItem"
        v-on:childDialog="parentDialog"
      ></InterpreterDetail>
    </v-dialog>

    <v-dialog v-model="dialogNote" width="800px">
      <NoteComponents
        :noteItem="noteItem"
        v-on:childDialog="parentDialog"
      ></NoteComponents>
    </v-dialog>
  </v-form>
</template>

<script>
import { mask } from "vue-the-mask";
import InterpreterDetail from "./Common/InterpreterDetail";
import NoteComponents from "./Common/NoteComponents";

export default {
  components: {
    InterpreterDetail,
    NoteComponents,
  },
  directives: {
    mask,
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      // date: null,

      menu: false,
      dialog: false,
      dialogNote: false,
      valid: false,
      sheetFlag1: false,
      sheetFlag2: false,
      timeMask: "##:##",
      numberMask: "#######",
      numberMaskTest: "2252",
      moneyTest: 1232222.45,
      selectOption: ["A", "B"],
      startTimeHours: [],
      timeSoltArrayMap: this.getCommonArrayUtil("timeSoltArrayMap"),
      timeSolt: "1",
      rating: 3.5,
      targetItem: {
        name: "王佳容",
        address: "100臺北市中正區重慶南路二段45號",
        fat: "越南",
        carbs: "中文、英文、越南語",
        protein: "衛生醫療、社會福利",
        sodium: "通譯人才巴拉巴拉巴拉相關認證",
        calcium: "14%",
        iron: "1%",
      },
      items: [
        {
          rating: 3.5,
          name: "王佳容",
          address: "100臺北市中正區重慶南路二段45號",
          fat: "越南",
          carbs: "中文、英文、越南語、緬甸語、泰語",
          protein: "衛生醫療、社會福利",
          sodium: "通譯人才巴拉巴拉巴拉相關認證",
          calcium: "14%",
          iron: "1%",
          a: "臺北市 : 中正區、大同區、大同區、大同區、大同區\n新竹市\n臺中市\n嘉義縣\n臺南市\n高雄市",
          b: "綜合社會福利、衛生醫療、就業輔導、陪同出庭、陪同偵訊、家庭暴力案件",
          c: "持中華民國身分證",
          d: "河內外語師範大學中文系畢業",
          e: "hyweb123@hyweb.com.tw",
          f: "02 2395 6966",
          g: new Date(),
          h: "星期一 : 06:00-1200、1200-1800、1800-2400、2400-0600\n星期二 : \n星期三 : \n星期四 : \n星期五 : \n星期六 : \n星期日 :  ",
          set: [
            {
              a: "臺北1OOOOO",
              b: new Date(),
              c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
              f: "陪同偵訊",
              d1: 3.5,
              d2: 4.5,
              d3: 2,
              d4: 5,
            },
            {
              a: "臺北2OOOOO",
              b: new Date(),
              c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
              f: "陪同偵訊",
              d1: 3.5,
              d2: 4.5,
              d3: 2,
              d4: 5,
            },
            {
              a: "臺北3OOOOO",
              b: new Date(),
              c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
              f: "陪同偵訊",
              d1: 3.5,
              d2: 4.5,
              d3: 2,
              d4: 5,
            },
          ],
        },
        {
          name: "陳煌明",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%",
        },
        {
          name: "王佳容",
          address: "100臺北市中正區重慶南路二段45號",
          fat: "越南",
          carbs: "中文、英文、越南語",
          protein: "衛生醫療、社會福利",
          sodium: "通譯人才巴拉巴拉巴拉相關認證",
          calcium: "14%",
          iron: "1%",
        },
        {
          name: "陳煌明",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%",
        },
        {
          name: "王佳容",
          address: "100臺北市中正區重慶南路二段45號",
          fat: "越南",
          carbs: "中文、英文、越南語",
          protein: "衛生醫療、社會福利",
          sodium: "通譯人才巴拉巴拉巴拉相關認證",
          calcium: "14%",
          iron: "1%",
        },
      ],
      value: new Date().toISOString().substr(0, 10),
      label: "Date",
      options: {
        tabDateTitle: "日期",
        tabTimeTitle: "時間",
        locale: "zh-cn",
        format: "YYYY-MM-DD",

        backgroundColor: "blue",
        closeOnDateClick: false,
        useSeconds: false,
      },
      noteItem: {},
      notes: {
        note1: {
          title: "依照地方政府辦理非營利組織陪同外國人接受詢問作業要點規定",
          contentArray: [
            "以通知通譯人員到場之約定時間或實際開始通譯時間起至實際結束通譯時間。",
            "第三小時起，未滿三十分鐘者，以半小時計；三十分鐘以上未滿一小時者，以一小時計。",
            "每次通譯時間以四小時為限。但經通譯人員同意者，可延長至八小時。",
            "連續通譯四小時，經通譯人員同意者，得暫停翻譯並休息，休息時間不計入時數。但案件有連續性或緊急性者，得另行調配其休息時間。",
          ],
        },
        note2: {
          title: "依照地方政府辦理非營利組織陪同外國人接受詢問作業要點規定",
          contentArray: [
            "日間通譯費用：每案次前二小時內補助六百元，第三小時起，每一小時補助三百元。",
            "夜間通譯費用：執行通譯時間為夜間時段（二十二時至翌日六時）者，每案次前二小時內補助一千二百元，第三小時起，每一小時補助六百元。",
            "每案次前二小時跨日間及夜間時段，採夜間通譯費用計算。第三小時起若跨日間及夜間時段，則該跨越時段之費用，以夜間通譯費用計算，其餘依各時段通譯費用計算。",
            "通譯人員之交通費用，比照第六點陪同人員之規定覈實補助。",
          ],
        },
      },
    };
  },
  methods: {
    timeSoltObject() {
      var vm = this;
      vm.startTimeHours = vm.timeSoltArrayMap[vm.timeSolt];
    },
    parentDialog() {
      this.dialog = false;
      this.dialogNote = false;
    },
    submitObject() {
      var vm = this;

      vm.submitConfirmUtil().then(function (result) {
        if (result == true) {
          console.log("SUCCESS!!!!!!! ");
        } else if (result == "cancel") {
          console.log(" CANCEL!!!!!!!!!!!! ");
        }
      });
    },
    changeFlag() {
      var vm = this;
      console.log("3!!!!!!!!!!!!!! " + vm.sheetFlag1);
      vm.sheetFlag1 = !vm.sheetFlag1;
      console.log("3!!!!!!!!!!!!!! " + vm.sheetFlag1);
      // setTimeout(function() {
      //   console.log("2!!!!!!!!!!!!!!");
      //   vm.sheetFlag1 = !vm.sheetFlag1;
      // }, 1000);
    },
    showAlert() {
      setTimeout(function () {
        try {
          this.submitConfirmUtil();
        } catch (err) {
          console.log("X");
        }
      }, 10000);
      console.log("222222!!!!!!!!!!!!!!");
      // console.log("SSS  " + this.submitConfirmUtil());
    },
    topObject() {
      console.log("topObject!!!!!!!!!!!!!!");
      document.getElementsByClassName("v-dialog--active")[0].scrollTop = 0;
    },
  },
  mounted: function () {
    var vm = this;
    vm.timeSoltObject();
  },
};
</script>
