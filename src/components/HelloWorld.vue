<template>
  <v-form v-model="valid" style="font-family:Microsoft JhengHei;">
    <v-container>
      <v-row dense>
        <v-col cols="12" md="4" offset-md="1">
          <v-select :items="selectOption" label="語言別" dense></v-select>
        </v-col>

        <v-col cols="12" md="4" offset-md="2">
          <v-select :items="selectOption" label="案件類型" dense></v-select>
        </v-col>

        <v-col cols="12" md="4" offset-md="1">
          <v-select :items="selectOption" label="服務地點" dense></v-select>
        </v-col>

        <v-col cols="12" md="4" offset-md="2">
          <v-select :items="selectOption" label="服務地區" dense></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4" offset-md="1">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="date" label="日期" readonly v-on="on" dense></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu = false"
              locale="zh-cn"
              style="font-family:Microsoft JhengHei;"
              color="red"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" md="4" offset-md="2">
          <v-select
            :items="getCommonArrayUtil('timeSolt')"
            label="時段"
            item-text="text"
            item-value="value"
            dense
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="10">
          <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            hide-default-footer
          >
            <template v-slot:default="props">
              <v-row>
                <v-col v-for="(item,i) in props.items" :key="i" cols="12" sm="5" md="5" lg="6">
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
                      <v-btn @click="dialog = !dialog;targetItem = item;" class="ma-1">
                        <v-icon>mdi-account-search</v-icon>
                      </v-btn>
                      <v-btn @click="selectedArrayPushObject(item);addAlertUtil();" class="ma-1">
                        <v-icon>mdi-account-plus</v-icon>
                      </v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <!-- <v-list-item>
                        <v-list-item-content>address:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.address }}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Fat:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.fat }}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Carbs:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.carbs }}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Protein:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.protein }}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Sodium:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.sodium }}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Calcium:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.calcium }}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Iron:</v-list-item-content>
                        <v-list-item-content class="align-end">{{ item.iron }}</v-list-item-content>
                      </v-list-item>-->

                      <v-list-item>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-list-item-content class="align-end" v-on="on">{{ item.address }}</v-list-item-content>
                          </template>
                          <span>地址</span>
                        </v-tooltip>
                      </v-list-item>
                      <v-list-item>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-list-item-content class="align-end" v-on="on">{{ item.fat }}</v-list-item-content>
                          </template>
                          <span>國籍</span>
                        </v-tooltip>
                      </v-list-item>
                      <v-list-item>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-list-item-content class="align-end" v-on="on">{{ item.carbs }}</v-list-item-content>
                          </template>
                          <span>地址</span>
                        </v-tooltip>
                      </v-list-item>
                      <v-list-item>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-list-item-content class="align-end" v-on="on">{{ item.protein }}</v-list-item-content>
                          </template>
                          <span>熟悉語言</span>
                        </v-tooltip>
                      </v-list-item>
                      <v-list-item>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-list-item-content class="align-end" v-on="on">{{ item.sodium }}</v-list-item-content>
                          </template>
                          <span>服務類型</span>
                        </v-tooltip>
                      </v-list-item>
                      <v-list-item>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-list-item-content class="align-end" v-on="on">{{ item.calcium }}</v-list-item-content>
                          </template>
                          <span>相關認證</span>
                        </v-tooltip>
                      </v-list-item>
                      <v-list-item>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-list-item-content class="align-end" v-on="on">{{ item.iron }}</v-list-item-content>
                          </template>
                          <span>地址</span>
                        </v-tooltip>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </template>
            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center">
                <span class="red--text">每頁筆數</span>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn dark text color="red" class="ml-2" v-on="on">
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

                <v-spacer></v-spacer>

                <span class="mr-4 red--text">Page {{ page }} / {{ numberOfPages }}</span>
                <v-btn fab dark color="red darken-3" class="mr-1" @click="formerPage">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab dark color="red darken-3" class="ml-1" @click="nextPage">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-col>
        <v-col cols="12" md="2">
          <v-card v-show="selectedArray.length != 0">
            <v-card-title>
              <h1>已選擇：{{selectedArray.length}}</h1>
            </v-card-title>
            <v-card-text v-for="(selectedItem,j) in selectedArray" :key="j">
              <h3>
                {{selectedItem.name}}
                <v-btn fab x-small @click="selectedArray.splice(j,1)">
                  <v-icon>mdi-account-remove</v-icon>
                </v-btn>
              </h3>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" block @click="submitObject">
                <font style="color:white">預約洽詢</font>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" width="800px" v-if="dialog">
      <InterpreterDetail :targetItem="targetItem" v-on:childDialog="parentDialog"></InterpreterDetail>
    </v-dialog>
  </v-form>
</template>
<script>
import InterpreterDetail from "./Common/InterpreterDetail";

export default {
  components: {
    InterpreterDetail
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    }
  },
  data() {
    return {
      // date: new Date().toISOString().substr(0, 10),
      date: null,
      menu: false,
      dialog: false,
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      rating: 3.5,
      targetItem: {
        rating: 3.5,
        name: "王佳容",
        address: "100臺北市中正區重慶南路二段45號",
        fat: "越南",
        carbs: "中文、英文、越南語",
        protein: "衛生醫療、社會福利",
        sodium: "通譯人才巴拉巴拉巴拉相關認證",
        calcium: "14%",
        iron: "1%",
        a: "臺北市 : 中正區、大同區",
        b: "綜合社會福利、衛生醫療、就業輔導、陪同出庭、陪同偵訊、家庭暴力案件",
        c: "持中華民國身分證",
        d: "河內外語師範大學中文系畢業",
        e: "hyweb123@hyweb.com.tw",
        f: "02 2395 6966",
        g: new Date(),
        set: [
          {
            a: "臺北1OOOOO",
            b: new Date(),
            c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
            d1: 3.5,
            d2: 4.5,
            d3: 2,
            d4: 5
          },
          {
            a: "臺北2OOOOO",
            b: new Date(),
            c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
            d1: 3.5,
            d2: 4.5,
            d3: 2,
            d4: 5
          },
          {
            a: "臺北3OOOOO",
            b: new Date(),
            c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
            d1: 3.5,
            d2: 4.5,
            d3: 2,
            d4: 5
          }
        ]
      },
      selectedArray: [],
      selectOption: ["A", "B"],
      page: 1,
      itemsPerPageArray: [4, 8, 12],
      itemsPerPage: 4,
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
          a:
            "臺北市 : 中正區、大同區、大同區、大同區、大同區\n新竹市\n臺中市\n嘉義縣\n臺南市\n高雄市",
          b:
            "綜合社會福利、衛生醫療、就業輔導、陪同出庭、陪同偵訊、家庭暴力案件",
          c: "持中華民國身分證",
          d: "河內外語師範大學中文系畢業",
          e: "hyweb123@hyweb.com.tw",
          f: "02 2395 6966",
          g: new Date(),
          h:
            "星期一 : 06:00-1200、1200-1800、1800-2400、2400-0600\n星期二 : \n星期三 : \n星期四 : \n星期五 : \n星期六 : \n星期日 :  ",
          set: [
            {
              a: "臺北1OOOOO",
              b: new Date(),
              c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
              f: "陪同偵訊",
              d1: 3.5,
              d2: 4.5,
              d3: 2,
              d4: 5
            },
            {
              a: "臺北2OOOOO",
              b: new Date(),
              c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
              f: "陪同偵訊",
              d1: 3.5,
              d2: 4.5,
              d3: 2,
              d4: 5
            },
            {
              a: "臺北3OOOOO",
              b: new Date(),
              c: "王小姐協助本局與移工通譯，服務態度佳，能在約定時間準時抵達",
              f: "陪同偵訊",
              d1: 3.5,
              d2: 4.5,
              d3: 2,
              d4: 5
            }
          ]
        },
        {
          name: "陳煌明",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          // name: "Eclair",
          // name: this.convertJsonDate(new Date(), "now"),
          name: this.convertDateToString(new Date()),
          address: "100臺北市中正區重慶南路二段45號",
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Cupcake",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          name: "Gingerbread",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          name: "Jelly bean",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          name: "Lollipop",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          name: "Honeycomb",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          name: "Donut",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          name: "KitKat",
          address: "100臺北市中正區重慶南路二段45號",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ]
    };
  },
  methods: {
    submitObject() {
      var vm = this;
      vm.$router.push({
        path: "/HelloWorld2"
      });
    },
    selectedArrayPushObject(item) {
      var vm = this;
      var selectedFlag = false;
      vm.selectedArray.forEach(function(element) {
        if (element.name == item.name) {
          selectedFlag = true;
        }
      });
      if (!selectedFlag) {
        vm.selectedArray.push(item);
      }
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    parentDialog() {
      this.dialog = !this.dialog;
    }
  }
};
</script>




