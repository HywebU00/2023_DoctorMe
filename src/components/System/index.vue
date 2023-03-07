<template>
  <div class="index_bg" width="100%">
    <div class="index_container">
      <div class="index_title">
        <h3 class="text-center"><img src="~@/assets/Logo.svg" alt="" /><span>DoctorMe</span></h3>
        <v-btn><a href="https://github.com/HywebU00/2023_DoctorMe">檔案下載</a></v-btn>
      </div>
      <div class="d-flex justify-content-center ">
        <v-card width="75%">
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
                  <th class="text-left">
                    備註
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
                  <td>{{ item.note }}</td>
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
          name: '1.登入頁',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/login',
          note: '',
        },
        {
          name: '1.登入頁＿確認預約資訊',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/Login_changePassword',
          note: '',
        },
        {
          name: '1.登入頁＿驗證信',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/Login_epaper',
          note: '預覽用 實際為檔案中 html檔為主',
        },
        {
          name: '2-1.預約管理',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/C01',
          note: '',
        },
        {
          name: '2-1.預約名單',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/C02',
          note: '',
        },
        {
          name: '2-1.新增預約與確認資訊',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/C03',
          note: '',
        },
        {
          name: '2-4.新增預約與確認資訊',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/C04',
          note: '',
        },
        {
          name: '3-1.門診時間維護',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B0301',
          note: '',
        },
        {
          name: '3-2,3-3 門診時間維護',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B0302',
          note: '',
        },
        {
          name: '3-4 門診表',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B0304',
          note: '',
        },
        {
          name: '3-4 門診表 表格',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B030402',
          note: '',
        },
        {
          name: '3-5 預約規則維護',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B0305',
          note: '',
        },
        {
          name: '4-1 會員管理-會員名單',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B0401',
          note: '',
        },
        {
          name: '8.LINE串接設定',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B08',
          note: '',
        },
        {
          name: '9.帳戶設定＋引導流程（系統管理員）',
          link: 'https://hywebu00.github.io/2023_DoctorMe/#/B09',
          note: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.index_bg {
  background: #e9ecef;
}
.index_container {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.index_title {
  width: 75%;
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
      white-space: nowrap;
    }
  }
  tbody {
    tr > td {
      &:nth-child(2) {
        min-width: 250px;
      }
    }
  }
}
</style>
