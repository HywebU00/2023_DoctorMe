<template>
  <v-card style="font-family:Microsoft JhengHei;">
    <v-card-title class="indigo darken-1" dark>
      <h2>
        <font style="color:white">Note</font>
      </h2>
    </v-card-title>
    <v-container>
      <v-card-title>
        <h3>{{noteItem.title}}</h3>
      </v-card-title>
      <v-card-text>
        <div align="left">
          <ol>
            <li
              v-for="(contentResult , contentResultIndex) in noteItem.contentArray"
              :key="contentResultIndex"
            >{{contentResult}}</li>
          </ol>
        </div>
      </v-card-text>
    </v-container>
  </v-card>
</template>

        <!--<v-row dense
          v-for="(contentResult , contentResultIndex) in noteItem.contentArray"
          :key="contentResultIndex">
          <v-col col="12">
              contentResultIndex+1 .  contentResult
          </v-col>
        </v-row>-->
<script>
export default {
  name: "note-view",
  props: {
    noteItem: {}
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      //   console.log("1");
      this.$emit("childDialog");
    }
  }
};
</script>
