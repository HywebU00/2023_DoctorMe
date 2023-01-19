<template>
  <v-form v-model="valid">
    <v-banner class="gradient-bg rounded-banner" dark>
      <h3>凌網診所台北總院</h3> </v-banner
    ><br />
    <v-row dense
      ><v-col cols="12" sm="6" md="2" offset-md="1">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="日期"
              prepend-icon="contacts"
              readonly
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menu2 = false"
            locale="zh-cn"
            color="primary darken-1"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="12" sm="2" md="2">
        <p class="font-weight-black text-right" style="font-size: 20px">
          診間列表
        </p>
        <!-- <v-text-field readonly value="診間列表"></v-text-field> -->
      </v-col>
      <v-col cols="12" sm="2" md="2">
        <v-autocomplete
          v-model="item1"
          :items="items1"
          dense
          label="科別"
          solo
          item-text="text"
          no-data-text="查無資料"
        ></v-autocomplete
      ></v-col>
      <v-col cols="12" sm="2" md="4">
        <v-autocomplete
          v-model="item2"
          :items="items2"
          dense
          small-chips
          label="時段"
          multiple
          solo
          item-text="text"
          no-data-text="查無資料"
          :rules="requiredRules"
        ></v-autocomplete></v-col
    ></v-row>
    <v-col cols="12" md="3" offset-md="1"
      ><h4>{{ item1 }}</h4></v-col
    >
    <!-- <div v-show="item2.indexOf('上午診') != -1"> -->
    <div v-for="(menu, i) in item2" :key="i">
      <v-sheet
        class="mx-auto"
        elevation="0"
        width="1000px"
        color="grey lighten-4"
      >
        <v-col cols="12" md="2" offset-md="1"
          ><h4>{{ menu }}</h4></v-col
        >

        <v-slide-group v-model="model" show-arrows center-active>
          <v-slide-item
            v-for="(item, i) in items"
            :key="i"
            v-slot="{ active, toggle }"
          >
            <v-card
              class="ma-4"
              height="300"
              width="180"
              :elevation="active ? 10 : 0"
            >
              <v-card-title class="justify-center">
                <h4>
                  {{ item.room }}
                </h4>
              </v-card-title>
              <v-card-text class="text-center">
                <h4>{{ item.doctor }}醫生</h4>
                <br />
                <h1>{{ item.standby }}號</h1>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" block @click="toggle"> 預約資料 </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn color="blue lighten-4 " block> 叫號管理 </v-btn>
              </v-card-actions>

              <!-- <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="60"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition> -->
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" md="11">
            <v-expand-transition>
              <v-sheet v-if="model != null" height="200" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <h3 class="text-h6">Selected {{ items[model].doctor }}</h3>
                </v-row>
              </v-sheet>
            </v-expand-transition></v-col
          ></v-row
        ></v-sheet
      >
      <br />
    </div>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      model: null,
      valid: null,
      items: [
        { room: "診間一", doctor: "林子凱", standby: "10" },
        { room: "診間二", doctor: "林黴因", standby: "5" },
        { room: "診間三", doctor: "林黴因", standby: "7" },
        { room: "診間四", doctor: "琦君", standby: "30" },
        { room: "診間五", doctor: "琦君", standby: "31" },
        { room: "診間四", doctor: "琦君", standby: "30" },
        { room: "診間五", doctor: "琦君", standby: "31" },
        { room: "診間四", doctor: "琦君", standby: "30" },
        { room: "診間五", doctor: "琦君", standby: "31" },
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      items1: [
        { text: "家醫科" },
        { text: "牙科" },
        { text: "胸腔科" },
        { text: "內科" },
      ],
      item1: "家醫科",
      items2: [{ text: "上午診" }, { text: "下午診" }, { text: "晚上診" }],
      item2: ["上午診"],
      requiredRules: [(v) => !!v || "此欄位是必填"],
    };
  },
};
</script>
<style>
.rounded-banner {
  border-bottom-left-radius: 15px;
}
.gradient-bg {
  background-image: linear-gradient(to right, #0054b6, #60c0d6);
}
</style>

