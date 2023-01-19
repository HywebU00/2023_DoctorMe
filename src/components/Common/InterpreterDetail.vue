<template>
  <v-card style="font-family:Microsoft JhengHei;">
    <v-card-title class="red" dark>
      <h2>
        <font style="color:white">詳細資訊</font>
      </h2>
    </v-card-title>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="12">
          <v-card-title>
            <h3>
              <font style>{{memberItem.name}}</font>
            </h3>
            <h4>({{memberItem.gender=='M'?'男':'女'}}) 案件數：{{memberItem.caseCount}}</h4>
            <v-spacer />
            <v-rating
              readonly
              v-model="memberItem.score"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
            ></v-rating>
          </v-card-title>
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.nationality" readonly label="原屬國籍" dense filled />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="memberItem.qualificationInTaiwan"
            readonly
            label="在臺資格與取得證件"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field
            :value="convertDBDateToString(memberItem.birthday)"
            readonly
            label="出生日期"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            :value="convertDBDateToString(memberItem.serviceStartDate)"
            readonly
            label="開始從事通譯服務時間"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.educationLevel" readonly label="教育程度" dense filled />
        </v-col>

        <v-col cols="12" md="10" offset-md="1">
          <v-text-field v-model="memberItem.serviceType" readonly label="服務類型" dense filled />
        </v-col>
        <v-col cols="12" md="10" offset-md="1">
          <v-text-field v-model="memberItem.serviceLanguage" readonly label="熟悉語言" dense filled />
        </v-col>

        <v-col cols="20" md="5" offset-md="1">
          <v-textarea
            v-model="memberItem.serviceCity"
            readonly
            label="可服務地區"
            :rows="10"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="5">
          <v-textarea
            :value="convertServiceTimeToWord(memberItem.serviceTime)"
            readonly
            label="可服務時間"
            :rows="10"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="10" offset-md="1">
          <v-textarea
            :value="memberItem.note"
            readonly
            label="個人註記及通譯服務經歷"
            :rows="5"
            dense
            filled
          />
        </v-col>

        <v-col
          cols="12"
          md="5"
          offset-md="1"
          v-if="caseItem!=null && caseItem.status!='C01' && caseItem.status!='C09' && detailItem.status!='I06' && detailItem.status!='I00'  "
        >
          <v-text-field v-model="memberItem.contactHomeTel" readonly label="住家電話" dense filled />
        </v-col>
        <v-col
          cols="12"
          md="5"
          v-if="caseItem!=null && caseItem.status!='C01' && caseItem.status!='C09' && detailItem.status!='I06' && detailItem.status!='I00'"
        >
          <v-text-field v-model="memberItem.contactMobileTel" readonly label="手機號碼" dense filled />
        </v-col>
        <v-col
          cols="12"
          md="5"
          offset-md="1"
          v-if="caseItem!=null && caseItem.status!='C01' && caseItem.status!='C09' && detailItem.status!='I06' && detailItem.status!='I00'"
        >
          <v-text-field v-model="memberItem.email" readonly label="電子信箱" dense filled />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="10" offset-md="1" v-for="(caseItem,j) in memberItem.set" :key="j">
          <v-card>
            <v-card-title>
              <v-col cols="12" md="4">
                <h2>{{caseItem.a}}</h2>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="caseItem.f" readonly label="案件類型" dense />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field :value="convertDateToString(caseItem.b)" label="案件時間" readonly dense />
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field v-model="caseItem.c" readonly label="評價" dense />
              </v-col>
              <v-col cols="12" md="6">
                <v-label>整體評價</v-label>
                <v-rating
                  readonly
                  v-model="caseItem.d1"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  small
                ></v-rating>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>通譯倫理</v-label>
                <v-rating
                  readonly
                  v-model="caseItem.d2"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  small
                ></v-rating>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>專業素養</v-label>
                <v-rating
                  readonly
                  v-model="caseItem.d3"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  small
                ></v-rating>
              </v-col>
              <v-col cols="12" md="6">
                <v-label>服務態度</v-label>
                <v-rating
                  readonly
                  v-model="caseItem.d4"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  small
                ></v-rating>
              </v-col>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>
<script>
// document.getElementsByClassName("v-dialog--active")[0].scrollTop = 0;
export default {
  name: "detail-view",
  props: {
    memberItem: {},
    caseItem: null,
    detailItem: null
  },
  data() {
    return {};
  },
  methods: {
    handleDialog() {
      // document.getElementsByClassName("v-dialog--active")[0].scrollTop = 0;
      this.$emit("childDialog");
    }
  },
  beforeCreate: function() {
    // document.getElementsByClassName("v-dialog--active")[0].scrollTop = 0;
    // console.log("beforeCreate");
  },
  created: function() {
    // document.getElementsByClassName("v-dialog--active")[0].scrollTop = 0;
    // console.log("created");
  },
  mounted: function() {
    // document.getElementsByClassName("v-dialog--active")[0].scrollTop = 0;
    // console.log("mounted");
    let vm = this;
    //console.log("AAAA \n" + JSON.stringify(vm.caseItem));
    if ( vm.caseItem != null && vm.caseItem != undefined )
    vm.detailItem = vm.caseItem.interpreterCaseDetails.find(element => {
      return element.memberId == vm.memberItem.uuid;
    });
  },
  beforeDestroy: function() {
    // document.getElementsByClassName("v-dialog--active")[0].scrollTop = 0;
    // console.log("beforeDestroy");
  }
};
</script>