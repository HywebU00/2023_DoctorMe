<template>
  <div class="index_bg " width="100%">
    <div class="index_container">
      <div class="index_title">
        <h3 class="text-center"><img src="~@/assets/Logo.svg" alt="" /><span>DoctorMe</span></h3>
        <v-btn><a href="https://github.com/HywebU00/2023_DoctorMe">檔案下載</a></v-btn>
      </div>
      <div class="d-flex justify-content-center ">
        <v-card width="66%">
          <v-simple-table class="index_table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    編號
                  </th>
                  <th class="text-left">
                    頁面名稱
                  </th>
                  <th class="text-left">
                    連結
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in desserts" :key="item.name">
                  <td>{{ i + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: '2-1.預約管理',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/C01',
        },
        {
          name: '2-1.預約名單',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/C02',
        },
        {
          name: '新增預約與確認資訊',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/C03',
        },
        {
          name: '1.登入頁',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/login',
        },
        {
          name: '1.登入頁＿確認預約資訊',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/Login_changePassword',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.index_bg {
  background: #e9ecef;
  height: 100vh;
}
.index_container {
  padding-top: 5rem;
}
.index_title {
  width: 66%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-weight: 700;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
  button.v-btn {
    background: #045fa9 !important;
    border-radius: 0px;
    width: 8rem;
    a {
      color: #fff;
    }
  }
}
.index_table {
  thead {
    background: #17214c;
    tr > th {
      font-size: 1rem !important;
      color: #fff !important;
    }
  }
}
</style>
