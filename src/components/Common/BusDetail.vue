<template>
  <v-card style="font-family:Microsoft JhengHei;">
    <v-card-title class="green darken-2" dark>
      <h2>
        <font style="color:white">Information</font>
      </h2>
    </v-card-title>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="12">
          <v-card-title>
            <h3>
              <font style>License Plate Number : {{memberItem.plate}}</font>
            </h3>

            <v-spacer />
          </v-card-title>
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.driverName" readonly label="Driver Name" dense filled />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field v-model="memberItem.type" readonly label="Type" dense filled />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.nextStop" readonly label="Next Stop" dense filled />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field v-model="memberItem.destination" readonly label="Destination" dense filled />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.speed" readonly label="Speed" dense filled />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            :value="convertDBDateTimeToString(memberItem.modifierDate)"
            readonly
            label="Update Time"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.classOfCar" readonly label="Class of Car" dense filled />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field v-model="memberItem.color" readonly label="Color" dense filled />
        </v-col>
        <v-col cols="12" md="10" offset-md="1">
          <v-text-field
            v-model="memberItem.commercialDescription"
            readonly
            label="Commercial Description"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.makeAndType" readonly label="Make" dense filled />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field v-model="memberItem.passengerCap" readonly label="Capacity" dense filled />
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <v-text-field v-model="memberItem.yearOfCar" readonly label="Year of Car" dense filled />
        </v-col>
        <v-col cols="12" md="10" offset-md="1">
          <gmap-map :center="memberItem.history[0]" :zoom="15" style="width: 800px; height: 500px">
            <!-- <gmap-marker :position="memberItem" :clickable="true" @click="center=memberItem"></gmap-marker> -->
            <gmap-marker
              v-for="(postion,index) in memberItem.history"
              :key="index"
              :position="postion"
              :clickable="true"
              @click="center=postion"
              :label="String(index+1)"
            ></gmap-marker>
            <gmap-polyline
              v-bind:path.sync="memberItem.history"
              v-bind:options="{ strokeColor:'#008000'}"
            ></gmap-polyline>
          </gmap-map>
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
    if (vm.caseItem != null && vm.caseItem != undefined)
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