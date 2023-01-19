<template>
  <v-card style="font-family:Microsoft JhengHei;">
    <v-container>
      <v-card-text>
        <v-layout>
          <v-flex xs12 md12>
            <v-card-text>
              <v-treeview
                v-model="newItems"
                :active.sync="active"
                :items="nodeData"
                item-id="id"
                item-text="null"
                activatable
                open-on-click
                selectable
                selected-color="red"
              >
                <template v-slot:prepend="{ item }">
                  <a style="font-size:15px;font-family:Microsoft JhengHei;color:black">{{item.name}}</a>
                </template>
              </v-treeview>
            </v-card-text>
          </v-flex>
          <!-- <v-flex xs0 md6>
            <v-card-text>
              <div v-if="newItems.length === 0" key="title" class="text-center">請選擇</div>

              <v-scroll-x-transition group hide-on-leave>
                <v-chip
                  v-for="(selection, i) in newItems"
                  :key="i"
                  color="grey"
                  dark
                  small
                  class="ma-1 font-weight-normal"
                  @click="newItems.splice(i,1)"
                >{{ selection }}</v-chip>
              </v-scroll-x-transition>
            </v-card-text>
          </v-flex>-->
        </v-layout>
      </v-card-text>
      <!-- <v-card-text
        v-for="(contentResult , contentResultIndex) in noteItem.contentArray"
        :key="contentResultIndex"
      >
        <font color="black" size="4">{{contentResultIndex+1}}. {{contentResult}}</font>
      </v-card-text>-->
    </v-container>
    <!-- <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn dark color="red" @click="handleSave">存檔</v-btn>
      <v-btn dark color="red" @click="handleDialog">取消</v-btn>

    </v-card-actions>-->
  </v-card>
</template>

<script>
export default {
  props: {
    selectItem: {}
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    selections: {
      get() {
        const selections = [];

        for (const leaf of this.tree) {
          const node = this.nodeDatas.find(node => node.id === leaf);

          if (!node) continue;

          selections.push(node);
        }

        return selections.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      },
      set(value) {
        console.log("value " + value);
      }
    }
  },
  data() {
    return {
      active: [],
      nodeDatas: [],
      nodeData: this.getCodeDateUtil("district"),

      newItems: this.selectItem
    };
  },
  methods: {
    handleSave() {
      this.$emit("update-text", this.newItems);
      this.$emit("childDialog");
    },
    handleDialog() {
      this.$emit("childDialog");
    }
  },
  beforeDestroy() {
    this.$emit("update-text", this.newItems);
    this.$emit("childDialog");
  }
};
</script>
