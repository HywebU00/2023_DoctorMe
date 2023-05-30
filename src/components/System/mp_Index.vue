<template>
  <v-app class="mp" ref="scrollContent">
    <!-- header start-->
    <header class="">
      <v-card elevation="0">
        <v-toolbar flat>
          <v-toolbar-title>
            <v-img class="mpLogo" src="~@/assets/mp/doctorme_logo.svg"></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <ul>
            <li color="primaryDark"><a href=""> 首頁</a></li>
            <li color="primaryDark"><a href=""> 功能介紹</a></li>
            <li color="primaryDark"><a href=""> 價格方案</a></li>
            <li color="primaryDark"><a href=""> 聯絡我們</a></li>
            <li><v-btn class="applyBtn" elevation="0">立即免費試用</v-btn></li>
          </ul>
          <v-dialog v-model="dialogMobile" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn elevation="0" class="mobileBtn" v-bind="attrs" v-on="on" @click="expand = !expand">
                <v-icon class="material-icons-round">
                  menu
                </v-icon>
              </v-btn>
            </template>
            <v-card class="dialogMobileCard">
              <v-card-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialogMobile = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <div class="">
                  <v-img lazy-src="~@/assets/indexLogo.svg" src="~@/assets/indexLogo.svg"></v-img>
                </div>
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="">
                      <v-btn color="accent" block>
                        疫苗注射
                      </v-btn>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <v-btn color="secondary" block>
                        立即免費試用
                      </v-btn>
                    </a>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </v-card>
    </header>
    <!-- header end-->
    <main class="mpIndex main">
      <!-- banner start -->
      <section class="banner">
        <div>
          <h1>
            提供Line即時看診預約服務<br />
            讓您的診所成為家庭的健康互動中心
          </h1>
          <span>
            <!-- <v-img src="~@/assets/"></v-img> -->
            <p>專為醫療診所設計的智慧醫療互動平台</p>
          </span>
          <v-btn elevation="0" color="primaryDark" dark>立即免費試用</v-btn>
        </div>
      </section>
      <!-- banner end -->
      <!-- 診所的日常工作中，您是否常遇到. start -->
      <section class="infoSection">
        <div class="">
          <h2>診所的日常工作中，您是否常遇到......</h2>
          <v-container>
            <v-row class="infoContainer">
              <v-col class="item">
                <v-img style="width:200px;" src="~@/assets/mp/img_people_01.png"></v-img>
                <div class="">
                  <h3>診所業者端</h3>
                  <p>診所櫃檯人力負擔大，櫃檯人員除了處理現場掛號、接聽預約電話外，還得注意診間叫號狀況、提醒預約就診者回診.......</p>
                </div></v-col
              >
              <v-col class="item">
                <v-img style="width:200px;" src="~@/assets/mp/img_people_02.png"></v-img>
                <div class="">
                  <h3>診所業者端</h3>
                  <p>診所櫃檯人力負擔大，櫃檯人員除了處理現場掛號、接聽預約電話外，還得注意診間叫號狀況、提醒預約就診者回診.......</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!-- 診所的日常工作中，您是否常遇到. end -->
      <!--身為 就診者 start -->
      <section class="userInfoSection ">
        <div class="">
          <h2>
            身為
            <span>就診者</span>
            ，使用DoctorMe您可以......
          </h2>
          <v-container>
            <v-row>
              <v-col
                ><v-img style="width:200px;" src="~@/assets/mp/function_icon_01.png"></v-img>
                <h3>
                  <span>1</span>
                  免安裝，隨時隨地預約門診不受限
                </h3>
                <p>不用再打電話也無需下載APP，透過Line官方帳號即可隨時預約門診，簡單好上手</p></v-col
              >
              <v-col
                ><v-img style="width:200px;" src="~@/assets/mp/function_icon_02.png"></v-img>
                <h3>
                  <span>2</span>
                  代理預約服務， 一機掌握家人就診狀態
                </h3>
                <p>代理家戶親友進行預約，協助不便使用手機的親友也能使用預約服務，即刻照護親友的預約就診狀況</p></v-col
              >
              <v-col>
                <v-img style="width:200px;" src="~@/assets/mp/function_icon_03.png"></v-img>
                <h3>
                  <span>3</span>
                  診間叫號、門診預約提醒，貼心守護您左右
                </h3>
                <p>診所化身您的貼心助理，讓您隨時查詢看診進度、門診資訊，並透過自動叫號提醒，讓您有效利用等候時間</p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!--身為 就診者 end -->
      <!--身為 診所業者 start -->
      <section class="clinicInfoSection">
        <div class="">
          <h2>
            身為
            <span>診所業者</span>
            使用DoctorMe您可以......
          </h2>
          <v-container>
            <v-row>
              <v-col> <v-img src="~@/assets/mp/img_computer.png"></v-img></v-col>
              <v-col>
                <ul>
                  <li>
                    <h3>
                      <span>1</span>
                      免安裝，隨時隨地預約門診不受限
                    </h3>
                    <p>不用再打電話也無需下載APP，透過Line官方帳號即可隨時預約門診，簡單好上手</p>
                  </li>
                  <li>
                    <h3>
                      <span>2</span>
                      代理預約服務， 一機掌握家人就診狀態
                    </h3>
                    <p>代理家戶親友進行預約，協助不便使用手機的親友也能使用預約服務，即刻照護親友的預約就診狀況</p>
                  </li>
                  <li>
                    <h3>
                      <span>3</span>
                      診間叫號、門診預約提醒，貼心守護您左右
                    </h3>
                    <p>診所化身您的貼心助理，讓您隨時查詢看診進度、門診資訊，並透過自動叫號提醒，讓您有效利用等候時間</p>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!--身為 診所業者 end -->
      <!--就診者端功能  start -->
      <section class="productSection">
        <div class="">
          <div class="">
            <h2>
              就診者端功能
            </h2>
            <span class="subtitle">「自由預約、隨時查看叫號、門診資訊」</span>
            <v-container>
              <v-row>
                <v-col>
                  <v-img src="~@/assets/mp/icon_01.png"></v-img>
                  <span>線上預約</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_02.png"></v-img>
                  <span>親友預約</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_03.png"></v-img>
                  <span>看診進度</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_04.png"></v-img>
                  <span>叫號提醒</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_05.png"></v-img>
                  <span>預約提醒</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_06.png"></v-img>
                  <span>診所資訊</span>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <div class="">
            <h2>
              診所業者端功能
            </h2>
            <span class="subtitle">「預約服務智慧化，輕鬆管理診所業務」</span>
            <v-container>
              <v-row>
                <v-col>
                  <v-img src="~@/assets/mp/icon_07.png"></v-img>
                  <span>預約管理</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_08.png"></v-img>
                  <span>彈性規則</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_09.png"></v-img>
                  <span>診間叫號</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_10.png"></v-img>
                  <span>數據報表</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_11.png"></v-img>
                  <span>會員管理</span>
                </v-col>
                <v-col>
                  <v-img src="~@/assets/mp/icon_12.png"></v-img>
                  <span>線上客服</span>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </section>
      <!--就診者端功能  end -->
      <!--安全且 持續進化 的系統  start -->
      <section class="systemSection">
        <div class="">
          <h2>
            安全且
            <span>持續進化</span>
            的系統
          </h2>
          <v-container>
            <v-row>
              <v-col>
                <v-img src="~@/assets/mp/safe_icon_01.png"></v-img>
                <h3>
                  資料安全機制
                </h3>
                <p>所有資料加密保護 保護個人資料安全</p>
              </v-col>
              <v-col>
                <v-img src="~@/assets/mp/safe_icon_02.png"></v-img>
                <h3>
                  功能持續進化
                </h3>
                <p>持續發展產品功能 認真滿足客戶需求</p>
              </v-col>
              <v-col>
                <v-img src="~@/assets/mp/safe_icon_03.png"></v-img>
                <h3>
                  快速技術支援
                </h3>
                <p>台灣專業軟體業者 提供即時技術支援</p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <section class="priceSection">
        <div class="">
          <h2>
            DoctorMe 方案價格
          </h2>
          <div class="d-flex payCardGroup">
            <v-card class="card payCard">
              <div class="title" color="primaryDark" dark>
                <h6>免費基本版</h6>
                <p>NT$ <span>4,000</span> /月</p>
              </div>
              <ul>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span> 專屬診所LINE官方帳號</span>
                </li>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span> 專屬診所LINE官方帳號</span>
                </li>
                <li>
                  <v-icon color="error">mdi-close</v-icon>
                  <span>方案內容待討論</span>
                </li>
                <li>
                  <v-icon color="error">mdi-close</v-icon>
                  <span>方案內容待討論</span>
                </li>
                <li>
                  <v-icon color="error">mdi-close</v-icon>
                  <span>方案內容待討論</span>
                </li>
                <li>
                  <v-icon color="error">mdi-close</v-icon>
                  <span>方案內容待討論</span>
                </li>
              </ul>
              <div class="footer">
                <v-btn block depressed color="secondary">選擇此方案</v-btn>
              </div>
            </v-card>
            <v-card class="card payCard">
              <div class="title" color="primaryDark" dark>
                <h6>免費基本版</h6>
                <p>NT$ <span>4,000</span> /月</p>
              </div>
              <ul>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span> 專屬診所LINE官方帳號</span>
                </li>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span> 專屬診所LINE官方帳號</span>
                </li>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span>方案內容待討論</span>
                </li>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span>方案內容待討論</span>
                </li>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span>方案內容待討論</span>
                </li>
                <li>
                  <v-icon color="success">mdi-check</v-icon>
                  <span>方案內容待討論</span>
                </li>
              </ul>
              <div class="footer">
                <v-btn block depressed disabled>目前方案</v-btn>
              </div>
            </v-card>
          </div>
        </div>
      </section>
      <!--安全且 持續進化 的系統  end -->
      <!-- 提升診所服務 start -->
      <section class="clinicServeSection">
        <div class="">
          <h2>
            提升診所服務，創造良好的醫病關係從
            <span>DcotorMe智慧醫療服務</span>
            開始
          </h2>
          <v-btn elevation="0" dark>立即免費使用</v-btn>
        </div>
      </section>
      <!-- 提升診所服務 end -->
      <!-- 預約顧問介紹 start -->
      <section class="introduceSection">
        <div class="">
          <h2>預約顧問介紹、諮詢</h2>
          <span>尋找專業顧問嗎？立即預約諮詢，我們將安排專業顧問介紹，提供最適合您診所的智慧解決方案。</span>
          <v-btn elevation="0" dark>與顧問聯繫</v-btn>
        </div>
      </section>
      <!-- 預約顧問介紹 end -->
    </main>
    <footer>
      <div class="footerInfo">
        <div class="">
          <img src="~@/assets/mp/hywebLogo.png" alt="" />
        </div>
        <ul>
          <li>總公司：新竹縣竹北市台元一街8號5樓之6 / TEL：03-5601296</li>
          <li>台北分公司：台北市重慶南路二段51號5樓 / TEL：02-2395-6966</li>
          <li>台中分公司：台中市西屯區臺灣大道三段658號6樓A1 / TEL：04-2706-3968</li>
          <li>高雄分公司：高雄市新興區中正三路55號26樓之5 / TEL：07-2223606</li>
        </ul>
      </div>
      <div><p>Copyright© 2023 Hyweb Technology Inc. All Rights Reserved.</p></div>
    </footer>
  </v-app>
</template>

<script>
import lottie from 'lottie-web';
//scrollbar
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

export default {
  data() {
    return {
      expand: false,
      dialogMobile: false,
      checkbox: null,
    };
  },
  methods: {
    scrollBar() {
      const scrollContent = this.$refs.scrollContent.$el;

      OverlayScrollbars(scrollContent, {
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 500,
        },
      });
    },
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.discussion,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/discussion.json',
    });
    this.scrollBar();
  },
};
</script>
<style lang="scss"></style>
