
export default {

    install(Vue) {

        Vue.prototype.getCodeDateUtil = function (type) {
            var commonArray
            if (type == "yn") {
                commonArray = [{ text: "是", value: "Y" }, { text: "否", value: "N" }];
                return commonArray;
            }
            else if (type == "caseStatus") {
                commonArray = [
                    //此狀態暫時不用 { text: "待通譯回覆", value: "C00" },
                    { text: "媒合中", value: "C01" },
                    { text: "待通譯確認", value: "C02" },
                    { text: "已成立", value: "C03" },
                    { text: "已結案", value: "C04" },
                    { text: "單位取消", value: "C05" },
                    { text: "通譯取消", value: "C06" },
                    { text: "現場報到", value: "C07" },
                    { text: "開始服務", value: "C08" },
                    { text: "未成立", value: "C09" },
                ];
                return commonArray;
            }
            else if (type == "caseStatusForInterpreter") {
                commonArray = [
                    //此狀態暫時不用 { text: "待通譯回覆", value: "C00" },
                    { text: "媒合中", value: "C01" },
                    { text: "待通譯確認", value: "C02" },
                    { text: "已有人選", value: "I06" },
                    { text: "已成立", value: "C03" },
                    { text: "已結案", value: "C04" },
                    { text: "單位取消", value: "C05" },
                    { text: "通譯取消", value: "C06" },
                    { text: "現場報到", value: "C07" },
                    { text: "開始服務", value: "C08" },
                    { text: "未成立", value: "C09" },
                ];
                return commonArray;
            }
            else if (type == "interpreterStatus") {
                commonArray = [
                    { text: "待通譯回覆", value: "I00" },
                    { text: "可服務", value: "I01" },
                    { text: "無法服務", value: "I02" },
                    { text: "待通譯確認", value: "I03" },
                    { text: "確認可服務", value: "I04" },
                    { text: "取消案件", value: "I05" },
                    { text: "已有人選", value: "I06" },
                    { text: "現場報到", value: "I07" },
                    { text: "開始服務", value: "I08" },
                    { text: "結束服務", value: "I09" },
                    { text: "已評論單位", value: "I10" },
                ];
                return commonArray;
            }
            else if (type == "score") {
                commonArray = [
                    { text: "全部", value: 0 },
                    { text: "5顆星", value: 5 },
                    { text: "4顆星", value: 4 },
                    { text: "3顆星", value: 3 },
                    { text: "2顆星", value: 2 },
                    { text: "1顆星", value: 1 },
                ];
                return commonArray;
            } else if (type == 'reportColumn') {
                commonArray = [
                    { text: "原屬國籍", value: "原屬國籍" },
                    { text: "教育程度", value: "教育程度" }];
                return commonArray;
            } else if (type == 'reportRow') {
                commonArray = [
                    { text: "性別", value: "性別" },
                    { text: "年齡", value: "年齡" }];
                return commonArray;
            }
            else if (type == 'accountStatus') {
                commonArray = [
                    { text: "待審核", value: "W" },
                    { text: "啟用", value: "Y" },
                    { text: "停用", value: "N" }];
                return commonArray;
            } else if (type == 'accountType') {
                commonArray = [
                    { text: "需求單位", value: "AAA" },
                    { text: "培訓單位", value: "BBB" },
                    { text: "通譯人員", value: "CCC" }];
                return commonArray;
            } else if (type == 'accountType2') {
                commonArray = [
                    { text: "需求單位", value: "AAA" },
                    { text: "培訓單位", value: "BBB" }];
                return commonArray;
            } else if (type == 'ugrpGroup') {
                commonArray = [
                    { text: "需求單位", value: "demand_role_id" },
                    { text: "培訓單位", value: "training_role_id" },
                    { text: "通譯人員", value: "interpreter_role_id" },
                    { text: "系統管理員", value: "sysadmin_role_id" }];
                return commonArray;
            } else if (type == 'articleStatus') {
                commonArray = [
                    { text: "公開", value: "Y" },
                    { text: "不公開", value: "N" }];
                return commonArray;
            } else if (type == 'articleType') {
                commonArray = [
                    { text: "最新消息", value: "A" },
                    { text: "培訓課程", value: "B" },
                    { text: "通譯須知", value: "C" },
                    { text: "常見問答", value: "D" },
                    { text: "關於本站", value: "E" },
                    { text: "下載APP", value: "F" }];
                return commonArray;
            } else if (type == 'ReportInterpreter') {
                commonArray = [
                    { text: "通譯人才統計報表", value: "A" },
                    { text: "通譯人才多維度分析報表", value: "B" },
                    { text: "通譯人才個人評價紀錄報表", value: "C" }];
                return commonArray;
            } else if (type == 'ReportSystem') {
                commonArray = [
                    { text: "系統使用者資料報表", value: "A" },
                    { text: "案件統計報表", value: "B" },
                    { text: "需求單位查詢次數統計表", value: "C" }];
                return commonArray;
            } else if (type == 'languageType') {
                commonArray = [
                    { text: "中文", value: "C" },
                    { text: "英文", value: "E" }];
                return commonArray;
            } else if (type == 'lang') {
                commonArray = [
                    { text: "越語", value: "越語" },
                    { text: "印尼語", value: "印尼語" },
                    { text: "泰語", value: "泰語" },
                    { text: "柬埔寨語", value: "柬埔寨語" },
                    { text: "緬甸語", value: "緬甸語" },
                    { text: "英語", value: "英語" },
                    { text: "菲律賓語", value: "菲律賓語" },
                    { text: "寮國", value: "寮國" },
                    { text: "日語", value: "日語" },
                    { text: "韓語", value: "韓語" },
                    { text: "馬來西亞", value: "馬來西亞" },
                    { text: "法語", value: "法語" },
                    { text: "阿拉伯", value: "阿拉伯" },
                    { text: "德語", value: "德語" },
                    { text: "俄語", value: "俄語" },
                    { text: "孟加拉", value: "孟加拉" },
                    { text: "巴基斯坦", value: "巴基斯坦" },
                    { text: "西班牙語", value: "西班牙語" },
                    { text: "印地語", value: "印地語" },
                    { text: "烏爾都語", value: "烏爾都語" },

                    { text: "手語", value: "手語" },
                    { text: "廣東話", value: "廣東話" },
                    { text: "潮州話", value: "潮州話" },
                    { text: "客語", value: "客語" },
                    { text: "臺語", value: "臺語" },
                    { text: "阿美語", value: "阿美語" },
                    { text: "泰雅語", value: "泰雅語" },
                    { text: "布農語", value: "布農語" },
                    { text: "太魯閣語", value: "太魯閣語" },
                    { text: "排灣語", value: "排灣語" },
                    { text: "卑南語", value: "卑南語" },


                ];
                return commonArray;
            } else if (type == 'serveType') {
                commonArray = [
                    { text: "綜合社會福利", value: "綜合社會福利" },
                    { text: "衛生醫療", value: "衛生醫療" },
                    { text: "就業輔導", value: "就業輔導" },
                    { text: "陪同偵訊", value: "陪同偵訊" },
                    { text: "陪同出庭", value: "陪同出庭" },
                    { text: "家庭暴力案件", value: "家庭暴力案件" },
                    { text: "性侵害案件", value: "性侵害案件" },
                    { text: "關懷訪視", value: "關懷訪視" },
                    { text: "移民輔導", value: "移民輔導" },
                    { text: "警政服務", value: "警政服務" },
                    { text: "工作訓練", value: "工作訓練" },
                    { text: "其他", value: "其他" },
                ]
                return commonArray;
            } else if (type == 'eduLevel') {
                commonArray = [

                    { text: "不詳", value: "不詳" },
                    { text: "博士", value: "博士" },
                    { text: "碩士", value: "碩士" },
                    { text: "大學", value: "大學" },
                    { text: "三專", value: "三專" },
                    { text: "五專", value: "五專" },
                    { text: "高中", value: "高中" },
                    { text: "國中", value: "國中" },
                    { text: "國小", value: "國小" },
                    { text: "無", value: "無" }]
                return commonArray;
            } else if (type == 'jobType') {
                commonArray = [
                    { text: "不詳", value: "不詳" },
                    { text: "學生", value: "學生" },
                    { text: "服務業", value: "服務業" },
                    { text: "專門職業", value: "專門職業" },
                    { text: "農林漁牧", value: "農林漁牧" },
                    { text: "工礦業", value: "工礦業" },
                    { text: "商業", value: "商業" },
                    { text: "公教軍警", value: "公教軍警" },
                    { text: "家庭管理", value: "家庭管理" },
                    { text: "退休", value: "退休" },
                    { text: "其他", value: "其他" },
                    { text: "無工作", value: "無工作" }
                ]
                return commonArray;
            }
            else if (type == 'dayType') {
                commonArray = [
                    { text: 1, value: "a" },
                    { text: 2, value: "b" },
                    { text: 3, value: "c" },
                    { text: 4, value: "d" },
                    { text: 5, value: "e" },
                    { text: 6, value: "f" },
                    { text: 0, value: "g" },
                ]
                return commonArray;
            }
            else if (type == 'timeType') {
                commonArray = [
                    { text: "11", value: "a1" },
                    { text: "12", value: "a2" },
                    { text: "13", value: "a3" },
                    { text: "14", value: "a4" },
                    { text: "21", value: "b1" },
                    { text: "22", value: "b2" },
                    { text: "23", value: "b3" },
                    { text: "24", value: "b4" },
                    { text: "31", value: "c1" },
                    { text: "32", value: "c2" },
                    { text: "33", value: "c3" },
                    { text: "34", value: "c4" },
                    { text: "41", value: "d1" },
                    { text: "42", value: "d2" },
                    { text: "43", value: "d3" },
                    { text: "44", value: "d4" },
                    { text: "51", value: "e1" },
                    { text: "52", value: "e2" },
                    { text: "53", value: "e3" },
                    { text: "54", value: "e4" },
                    { text: "61", value: "f1" },
                    { text: "62", value: "f2" },
                    { text: "63", value: "f3" },
                    { text: "64", value: "f4" },
                    { text: "01", value: "g1" },
                    { text: "02", value: "g2" },
                    { text: "03", value: "g3" },
                    { text: "04", value: "g4" },
                ]
                return commonArray;
            } else if (type == 'nation') {
                commonArray = [
                    { text: "不詳", value: "不詳" },
                    { text: "其他", value: "其他" },
                    { text: "無國籍", value: "無國籍" },
                    { text: "阿富汗Afghanistan", value: "阿富汗Afghanistan" },
                    { text: "阿爾巴尼亞Albania", value: "阿爾巴尼亞Albania" },
                    { text: "阿爾及利亞Algeria", value: "阿爾及利亞Algeria" },
                    { text: "安道爾Andorra", value: "安道爾Andorra" },
                    { text: "安哥拉Angola", value: "安哥拉Angola" },
                    { text: "安地卡及巴布達Antigua and Barbuda", value: "安地卡及巴布達Antigua and Barbuda" },
                    { text: "阿根廷Argentina", value: "阿根廷Argentina" },
                    { text: "亞美尼亞Armenia", value: "亞美尼亞Armenia" },
                    { text: "澳洲Australia", value: "澳洲Australia" },
                    { text: "奧地利Austria", value: "奧地利Austria" },
                    { text: "亞塞拜然Azerbaijan", value: "亞塞拜然Azerbaijan" },
                    { text: "巴哈馬Bahamas", value: "巴哈馬Bahamas" },
                    { text: "巴林Bahrain", value: "巴林Bahrain" },
                    { text: "孟加拉國Bangladesh", value: "孟加拉國Bangladesh" },
                    { text: "巴貝多Barbados", value: "巴貝多Barbados" },
                    { text: "白俄羅斯Belarus", value: "白俄羅斯Belarus" },
                    { text: "比利時Belgium", value: "比利時Belgium" },
                    { text: "貝里斯Belize", value: "貝里斯Belize" },
                    { text: "貝南Benin", value: "貝南Benin" },
                    { text: "不丹Bhutan", value: "不丹Bhutan" },
                    { text: "玻利維亞Bolivia", value: "玻利維亞Bolivia" },
                    { text: "波士尼亞與赫塞哥維納Bosnia and Herzegovina", value: "波士尼亞與赫塞哥維納Bosnia and Herzegovina" },
                    { text: "波札那Botswana", value: "波札那Botswana" },
                    { text: "巴西Brazil", value: "巴西Brazil" },
                    { text: "汶萊Brunei", value: "汶萊Brunei" },
                    { text: "保加利亞Bulgaria", value: "保加利亞Bulgaria" },
                    { text: "布吉納法索Burkina Faso", value: "布吉納法索Burkina Faso" },
                    { text: "蒲隆地Burundi", value: "蒲隆地Burundi" },
                    { text: "百慕達Bermuda", value: "百慕達Bermuda" },
                    { text: "柬埔寨Cambodia", value: "柬埔寨Cambodia" },
                    { text: "喀麥隆Cameroon", value: "喀麥隆Cameroon" },
                    { text: "加拿大Canada", value: "加拿大Canada" },
                    { text: "維德角Cape Verde", value: "維德角Cape Verde" },
                    { text: "中非Central African Republic", value: "中非Central African Republic" },
                    { text: "查德Chad", value: "查德Chad" },
                    { text: "智利Chile", value: "智利Chile" },
                    { text: "中國大陸China", value: "中國大陸China" },
                    { text: "哥倫比亞Colombia", value: "哥倫比亞Colombia" },
                    { text: "葛摩Comoros", value: "葛摩Comoros" },
                    { text: "剛果Congo (Brazzaville)", value: "剛果Congo (Brazzaville)" },
                    { text: "民主剛果Congo (Kinshasa)", value: "民主剛果Congo (Kinshasa)" },
                    { text: "哥斯大黎加Costa Rica", value: "哥斯大黎加Costa Rica" },
                    { text: "象牙海岸Côte d'Ivoire", value: "象牙海岸Côte d'Ivoire" },
                    { text: "克羅埃西亞Croatia", value: "克羅埃西亞Croatia" },
                    { text: "古巴Cuba", value: "古巴Cuba" },
                    { text: "賽普勒斯Cyprus", value: "賽普勒斯Cyprus" },
                    { text: "捷克Czech Republic", value: "賽普勒斯Cyprus" },
                    { text: "丹麥Denmark", value: "丹麥Denmark" },
                    { text: "吉布地Djibouti", value: "吉布地Djibouti" },
                    { text: "多米尼克Dominica", value: "多米尼克Dominica" },
                    { text: "多明尼加Dominican Republic", value: "多明尼加Dominican Republic" },
                    { text: "厄瓜多Ecuador", value: "厄瓜多Ecuador" },
                    { text: "埃及Egypt", value: "埃及Egypt" },
                    { text: "薩爾瓦多El Salvador", value: "薩爾瓦多El Salvador" },
                    { text: "赤道幾內亞Equatorial Guinea", value: "赤道幾內亞Equatorial Guinea" },
                    { text: "厄利垂亞Eritrea", value: "厄利垂亞Eritrea" },
                    { text: "愛沙尼亞Estonia", value: "愛沙尼亞Estonia" },
                    { text: "史瓦帝尼Eswatini", value: "史瓦帝尼Eswatini" },
                    { text: "衣索比亞Ethiopia", value: "衣索比亞Ethiopia" },                    
                    { text: "斐濟Fiji", value: "斐濟Fiji" },
                    { text: "芬蘭Finland", value: "芬蘭Finland" },
                    { text: "法國France", value: "法國France" },
                    { text: "加彭Gabon", value: "加彭Gabon" },
                    { text: "甘比亞Gambia", value: "甘比亞Gambia" },
                    { text: "喬治亞Georgia", value: "喬治亞Georgia" },
                    { text: "德國Germany", value: "德國Germany" },
                    { text: "加納Ghana", value: "加納Ghana" },
                    { text: "希臘Greece", value: "希臘Greece" },
                    { text: "格瑞那達Grenada", value: "格瑞那達Grenada" },
                    { text: "瓜地馬拉Guatemala", value: "瓜地馬拉Guatemala" },
                    { text: "幾內亞Guinea", value: "幾內亞Guinea" },
                    { text: "幾內亞比索Guinea-Bissau", value: "幾內亞比索Guinea-Bissau" },
                    { text: "蓋亞那Guyana", value: "蓋亞那Guyana" },
                    { text: "關島Guam", value: "關島Guam" },
                    { text: "香港Hong Kong", value: "香港Hong Kong" },
                    { text: "海地Haiti", value: "海地Haiti" },
                    { text: "宏都拉斯Honduras", value: "宏都拉斯Honduras" },
                    { text: "匈牙利Hungary", value: "匈牙利Hungary" },
                    { text: "冰島Iceland", value: "冰島Iceland" },
                    { text: "印度India", value: "印度India" },
                    { text: "印尼Indonesia", value: "印尼Indonesia" },
                    { text: "伊朗Iran", value: "伊朗Iran" },
                    { text: "伊拉克Iraq", value: "伊拉克Iraq" },
                    { text: "愛爾蘭Ireland", value: "愛爾蘭Ireland" },
                    { text: "以色列Israel", value: "以色列Israel" },
                    { text: "義大利Italy", value: "義大利Italy" },
                    { text: "牙買加Jamaica", value: "牙買加Jamaica" },
                    { text: "日本Japan", value: "日本Japan" },
                    { text: "約旦Jordan", value: "約旦Jordan" },
                    { text: "哈薩克Kazakhstan", value: "哈薩克Kazakhstan" },
                    { text: "肯亞Kenya", value: "肯亞Kenya" },
                    { text: "吉里巴斯Kiribati", value: "吉里巴斯Kiribati" },
                    { text: "科威特Kuwait", value: "科威特Kuwait" },
                    { text: "吉爾吉斯Kyrgyzstan", value: "吉爾吉斯Kyrgyzstan" },
                    { text: "寮國Laos", value: "寮國Laos" },
                    { text: "拉脫維亞Latvia", value: "拉脫維亞Latvia" },
                    { text: "黎巴嫩Lebanon", value: "黎巴嫩Lebanon" },
                    { text: "賴索托Lesotho", value: "賴索托Lesotho" },
                    { text: "賴比瑞亞Liberia", value: "賴比瑞亞Liberia" },
                    { text: "利比亞Libya", value: "利比亞Libya" },
                    { text: "列支敦斯登Liechtenstein", value: "列支敦斯登Liechtenstein" },
                    { text: "立陶宛Lithuania", value: "立陶宛Lithuania" },
                    { text: "盧森堡Luxembourg", value: "盧森堡Luxembourg" },
                    { text: "澳門Macau", value: "澳門Macau" },
                    { text: "馬達加斯加Madagascar", value: "馬達加斯加Madagascar" },
                    { text: "馬拉威Malawi", value: "馬拉威Malawi" },
                    { text: "馬來西亞Malaysia", value: "馬來西亞Malaysia" },
                    { text: "馬爾地夫Maldives", value: "馬爾地夫Maldives" },
                    { text: "馬利Mali", value: "馬利Mali" },
                    { text: "馬爾他Malta", value: "馬爾他Malta" },
                    { text: "馬紹爾群島Marshall Islands", value: "馬紹爾群島Marshall Islands" },
                    { text: "茅利塔尼亞Mauritania", value: "茅利塔尼亞Mauritania" },
                    { text: "模里西斯Mauritius", value: "模里西斯Mauritius" },
                    { text: "墨西哥Mexico", value: "墨西哥Mexico" },
                    { text: "密克羅尼西亞聯邦Micronesia", value: "密克羅尼西亞聯邦Micronesia" },
                    { text: "摩爾多瓦Moldova", value: "摩爾多瓦Moldova" },
                    { text: "摩納哥Monaco", value: "摩納哥Monaco" },
                    { text: "蒙古國Mongolia", value: "蒙古國Mongolia" },
                    { text: "蒙特內哥羅Montenegro", value: "蒙特內哥羅Montenegro" },
                    { text: "摩洛哥Morocco", value: "摩洛哥Morocco" },
                    { text: "莫三比克Mozambique", value: "莫三比克Mozambique" },
                    { text: "緬甸Myanmar", value: "緬甸Myanmar" },
                    { text: "菲律賓Philippines", value: "菲律賓Philippines" },
                    { text: "卡達Qatar", value: "卡達Qatar" },
                    { text: "羅馬尼亞Romania", value: "羅馬尼亞Romania" },
                    { text: "俄羅斯Russia", value: "俄羅斯Russia" },
                    { text: "盧安達Rwanda", value: "盧安達Rwanda" },
                    { text: "聖克里斯多福及尼維斯Saint Christopher and Nevis", value: "聖克里斯多福及尼維斯Saint Christopher and Nevis" },
                    { text: "聖露西亞Saint Lucia", value: "聖露西亞Saint Lucia" },
                    { text: "聖文森及格瑞那丁Saint Vincent and the Grenadines", value: "聖文森及格瑞那丁Saint Vincent and the Grenadines" },
                    { text: "薩摩亞Samoa", value: "薩摩亞Samoa" },
                    { text: "聖馬利諾San Marino", value: "聖馬利諾San Marino" },
                    { text: "聖多美普林西比São Tomé and Príncipe", value: "聖多美普林西比São Tomé and Príncipe" },
                    { text: "沙烏地阿拉伯Saudi Arabia", value: "沙烏地阿拉伯Saudi Arabia" },
                    { text: "塞內加爾Senegal", value: "塞內加爾Senegal" },
                    { text: "塞爾維亞Serbia", value: "塞爾維亞Serbia" },
                    { text: "塞席爾Seychelles", value: "塞席爾Seychelles" },
                    { text: "獅子山Sierra Leone", value: "獅子山Sierra Leone" },
                    { text: "新加坡Singapore", value: "新加坡Singapore" },
                    { text: "斯洛伐克Slovakia", value: "斯洛伐克Slovakia" },
                    { text: "斯洛維尼亞Slovenia", value: "斯洛維尼亞Slovenia" },
                    { text: "索羅門群島Solomon Islands", value: "索羅門群島Solomon Islands" },
                    { text: "索馬利亞Somalia", value: "索馬利亞Somalia" },
                    { text: "南非South Africa", value: "南非South Africa" },
                    { text: "韓國South Korea", value: "韓國South Korea" },
                    { text: "南蘇丹South Sudan", value: "南蘇丹South Sudan" },
                    { text: "西班牙Spain", value: "西班牙Spain" },
                    { text: "斯里蘭卡Sri Lanka", value: "斯里蘭卡Sri Lanka" },
                    { text: "蘇丹Sudan", value: "蘇丹Sudan" },
                    { text: "蘇利南Suriname", value: "蘇利南Suriname" },
                    { text: "瑞典Sweden", value: "瑞典Sweden" },
                    { text: "瑞士Switzerland", value: "瑞士Switzerland" },
                    { text: "敘利亞Syria", value: "敘利亞Syria" },
                    { text: "聖馬丁Sint Maarten", value: "聖馬丁Sint Maarten" },
                    { text: "臺灣Taiwan", value: "臺灣Taiwan" },
                    { text: "塔吉克Tajikistan", value: "塔吉克Tajikistan" },
                    { text: "坦尚尼亞Tanzania", value: "坦尚尼亞Tanzania" },
                    { text: "泰國Thailand", value: "泰國Thailand" },
                    { text: "東帝汶Timor-Leste", value: "東帝汶Timor-Leste" },
                    { text: "多哥Togo", value: "多哥Togo" },
                    { text: "東加Tonga", value: "東加Tonga" },
                    { text: "千里達及托巴哥Trinidad and Tobago", value: "千里達及托巴哥Trinidad and Tobago" },
                    { text: "突尼西亞Tunisia", value: "突尼西亞Tunisia" },
                    { text: "土耳其Turkey", value: "土耳其Turkey" },
                    { text: "土庫曼Turkmenistan", value: "土庫曼Turkmenistan" },
                    { text: "吐瓦魯Tuvalu", value: "吐瓦魯Tuvalu" },
                    { text: "烏干達Uganda", value: "烏干達Uganda" },
                    { text: "烏克蘭Ukraine", value: "烏克蘭Ukraine" },
                    { text: "阿拉伯聯合大公國United Arab Emirates", value: "阿拉伯聯合大公國United Arab Emirates" },
                    { text: "英國United Kingdom", value: "英國United Kingdom" },
                    { text: "美國United States", value: "美國United States" },
                    { text: "烏拉圭Uruguay", value: "烏拉圭Uruguay" },
                    { text: "烏茲別克Uzbekistan", value: "烏茲別克Uzbekistan" },
                    { text: "萬那杜Vanuatu", value: "萬那杜Vanuatu" },
                    { text: "梵蒂岡The Holy See(Vatican City)", value: "梵蒂岡The Holy See(Vatican City)" },
                    { text: "委內瑞拉Venezuela", value: "委內瑞拉Venezuela" },
                    { text: "越南Vietnam", value: "越南Vietnam" },
                    { text: "西撒哈拉Western Sahara", value: "西撒哈拉Western Sahara" },
                    { text: "葉門Yemen", value: "葉門Yemen" },
                    { text: "尚比亞Zambia", value: "尚比亞Zambia" },
                    { text: "辛巴威Zimbabwe", value: "辛巴威Zimbabwe" }]

                return commonArray;
            } else if (type == 'district') {
                commonArray = [{
                    id: "臺北市",
                    name: "臺北市",
                    children: [{ id: "臺北市-中正區", name: "中正區" },
                    { id: "臺北市-大同區", name: "大同區" },
                    { id: "臺北市-中山區", name: "中山區" },
                    { id: "臺北市-松山區", name: "松山區" },
                    { id: "臺北市-大安區", name: "大安區" },
                    { id: "臺北市-萬華區", name: "萬華區" },
                    { id: "臺北市-信義區", name: "信義區" },
                    { id: "臺北市-士林區", name: "士林區" },
                    { id: "臺北市-北投區", name: "北投區" },
                    { id: "臺北市-內湖區", name: "內湖區" },
                    { id: "臺北市-南港區", name: "南港區" },
                    { id: "臺北市-文山區", name: "文山區" }]
                }, {
                    id: "基隆市",
                    name: "基隆市",
                    children: [{ id: "基隆市-仁愛區", name: "仁愛區" },
                    { id: "基隆市-信義區", name: "信義區" },
                    { id: "基隆市-中正區", name: "中正區" },
                    { id: "基隆市-中山區", name: "中山區" },
                    { id: "基隆市-安樂區", name: "安樂區" },
                    { id: "基隆市-暖暖區", name: "暖暖區" },
                    { id: "基隆市-七堵區", name: "七堵區" }]
                }, {
                    id: "新北市",
                    name: "新北市",
                    children: [{ id: "新北市-萬里區", name: "萬里區" },
                    { id: "新北市-金山區", name: "金山區" },
                    { id: "新北市-板橋區", name: "板橋區" },
                    { id: "新北市-汐止區", name: "汐止區" },
                    { id: "新北市-深坑區", name: "汐止區" },
                    { id: "新北市-石碇區", name: "石碇區" },
                    { id: "新北市-瑞芳區", name: "瑞芳區" },
                    { id: "新北市-平溪區", name: "平溪區" },
                    { id: "新北市-雙溪區", name: "雙溪區" },
                    { id: "新北市-貢寮區", name: "貢寮區" },
                    { id: "新北市-新店區", name: "新店區" },
                    { id: "新北市-坪林區", name: "坪林區" },
                    { id: "新北市-烏來區", name: "烏來區" },
                    { id: "新北市-永和區", name: "永和區" },
                    { id: "新北市-中和區", name: "中和區" },
                    { id: "新北市-土城區", name: "土城區" },
                    { id: "新北市-三峽區", name: "三峽區" },
                    { id: "新北市-樹林區", name: "樹林區" },
                    { id: "新北市-鶯歌區", name: "鶯歌區" },
                    { id: "新北市-三重區", name: "三重區" },
                    { id: "新北市-新莊區", name: "新莊區" },
                    { id: "新北市-泰山區", name: "泰山區" },
                    { id: "新北市-林口區", name: "林口區" },
                    { id: "新北市-蘆洲區", name: "蘆洲區" },
                    { id: "新北市-五股區", name: "五股區" },
                    { id: "新北市-八里區", name: "八里區" },
                    { id: "新北市-淡水區", name: "淡水區" },
                    { id: "新北市-三芝區", name: "三芝區" },
                    { id: "新北市-石門區", name: "石門區" }
                    ]
                }, {
                    id: "連江縣",
                    name: "連江縣",
                    children: [{ id: "連江縣-南竿鄉", name: "南竿鄉" },
                    { id: "連江縣-北竿鄉", name: "北竿鄉" },
                    { id: "連江縣-莒光鄉", name: "莒光鄉" },
                    { id: "連江縣-東引鄉", name: "東引鄉" }]
                }, {
                    id: "宜蘭縣",
                    name: "宜蘭縣",
                    children: [{ id: "宜蘭縣-宜蘭市", name: "宜蘭市" },
                    { id: "宜蘭縣-頭城鎮", name: "頭城鎮" },
                    { id: "宜蘭縣-礁溪鄉", name: "礁溪鄉" },
                    { id: "宜蘭縣-壯圍鄉", name: "壯圍鄉" },
                    { id: "宜蘭縣-員山鄉", name: "員山鄉" },
                    { id: "宜蘭縣-羅東鎮", name: "羅東鎮" },
                    { id: "宜蘭縣-三星鄉", name: "三星鄉" },
                    { id: "宜蘭縣-大同鄉", name: "大同鄉" },
                    { id: "宜蘭縣-五結鄉", name: "五結鄉" },
                    { id: "宜蘭縣-冬山鄉", name: "冬山鄉" },
                    { id: "宜蘭縣-蘇澳鎮", name: "蘇澳鎮" },
                    { id: "宜蘭縣-南澳鄉", name: "南澳鄉" }]
                }, {
                    id: "新竹市",
                    name: "新竹市",
                    children: [{ id: "新竹市-東區", name: "東區" },
                    { id: "新竹市-北區", name: "北區" },
                    { id: "新竹市-香山區", name: "香山區" }]
                }, {
                    id: "新竹縣",
                    name: "新竹縣",
                    children: [
                        { id: "新竹縣-竹北市", name: "竹北市" },
                        { id: "新竹縣-湖口鄉", name: "湖口鄉" },
                        { id: "新竹縣-新豐鄉", name: "新豐鄉" },
                        { id: "新竹縣-新埔鎮", name: "新埔鎮" },
                        { id: "新竹縣-關西鎮", name: "關西鎮" },
                        { id: "新竹縣-芎林鄉", name: "芎林鄉" },
                        { id: "新竹縣-寶山鄉", name: "寶山鄉" },
                        { id: "新竹縣-竹東鎮", name: "竹東鎮" },
                        { id: "新竹縣-五峰鄉", name: "五峰鄉" },
                        { id: "新竹縣-橫山鄉", name: "橫山鄉" },
                        { id: "新竹縣-尖石鄉", name: "尖石鄉" },
                        { id: "新竹縣-北埔鄉", name: "北埔鄉" },
                        { id: "新竹縣-峨眉鄉", name: "峨眉鄉" }]
                }, {
                    id: "桃園市",
                    name: "桃園市",
                    children: [{ id: "桃園市-中壢區", name: "中壢區" },
                    { id: "桃園市-平鎮區", name: "平鎮區" },
                    { id: "桃園市-龍潭區", name: "龍潭區" },
                    { id: "桃園市-楊梅區", name: "楊梅區" },
                    { id: "桃園市-新屋區", name: "新屋區" },
                    { id: "桃園市-觀音區", name: "觀音區" },
                    { id: "桃園市-桃園區", name: "桃園區" },
                    { id: "桃園市-龜山區", name: "龜山區" },
                    { id: "桃園市-八德區", name: "八德區" },
                    { id: "桃園市-大溪區", name: "大溪區" },
                    { id: "桃園市-復興區", name: "復興區" },
                    { id: "桃園市-大園區", name: "大園區" },
                    { id: "桃園市-蘆竹區", name: "蘆竹區" }
                    ]
                }, {
                    id: "苗栗縣",
                    name: "苗栗縣",
                    children: [{ id: "苗栗縣-竹南鎮", name: "竹南鎮" },
                    { id: "苗栗縣-頭份市", name: "頭份市" },
                    { id: "苗栗縣-三灣鄉", name: "三灣鄉" },
                    { id: "苗栗縣-南庄鄉", name: "南庄鄉" },
                    { id: "苗栗縣-獅潭鄉", name: "獅潭鄉" },
                    { id: "苗栗縣-後龍鎮", name: "後龍鎮" },
                    { id: "苗栗縣-通霄鎮", name: "通霄鎮" },
                    { id: "苗栗縣-苑裡鎮", name: "苑裡鎮" },
                    { id: "苗栗縣-苗栗市", name: "苗栗市" },
                    { id: "苗栗縣-造橋鄉", name: "造橋鄉" },
                    { id: "苗栗縣-頭屋鄉", name: "頭屋鄉" },
                    { id: "苗栗縣-公館鄉", name: "公館鄉" },
                    { id: "苗栗縣-大湖鄉", name: "大湖鄉" },
                    { id: "苗栗縣-泰安鄉", name: "泰安鄉" },
                    { id: "苗栗縣-銅鑼鄉", name: "銅鑼鄉" },
                    { id: "苗栗縣-三義鄉", name: "三義鄉" },
                    { id: "苗栗縣-西湖鄉", name: "西湖鄉" },
                    { id: "苗栗縣-卓蘭鎮", name: "卓蘭鎮" }
                    ]
                }, {
                    id: "臺中市",
                    name: "臺中市",
                    children: [{ id: "臺中市-中區", name: "中區" },
                    { id: "臺中市-東區", name: "東區" },
                    { id: "臺中市-南區", name: "南區" },
                    { id: "臺中市-西區", name: "西區" },
                    { id: "臺中市-北區", name: "北區" },
                    { id: "臺中市-北屯區", name: "北屯區" },
                    { id: "臺中市-西屯區", name: "西屯區" },
                    { id: "臺中市-南屯區", name: "南屯區" },
                    { id: "臺中市-太平區", name: "太平區" },
                    { id: "臺中市-大里區", name: "大里區" },
                    { id: "臺中市-霧峰區", name: "霧峰區" },
                    { id: "臺中市-烏日區", name: "烏日區" },
                    { id: "臺中市-豐原區", name: "豐原區" },
                    { id: "臺中市-后里區", name: "后里區" },
                    { id: "臺中市-石岡區", name: "石岡區" },
                    { id: "臺中市-東勢區", name: "東勢區" },
                    { id: "臺中市-和平區", name: "和平區" },
                    { id: "臺中市-新社區", name: "新社區" },
                    { id: "臺中市-潭子區", name: "潭子區" },
                    { id: "臺中市-大雅區", name: "大雅區" },
                    { id: "臺中市-神岡區", name: "神岡區" },
                    { id: "臺中市-大肚區", name: "大肚區" },
                    { id: "臺中市-沙鹿區", name: "沙鹿區" },
                    { id: "臺中市-龍井區", name: "龍井區" },
                    { id: "臺中市-梧棲區", name: "梧棲區" },
                    { id: "臺中市-清水區", name: "清水區" },
                    { id: "臺中市-大甲區", name: "大甲區" },
                    { id: "臺中市-外埔區", name: "外埔區" },
                    { id: "臺中市-大安區", name: "大安區" }
                    ]
                }, {
                    id: "彰化縣",
                    name: "彰化縣",
                    children: [{ id: "彰化縣-彰化市", name: "彰化市" },
                    { id: "彰化縣-芬園鄉", name: "芬園鄉" },
                    { id: "彰化縣-花壇鄉", name: "花壇鄉" },
                    { id: "彰化縣-秀水鄉", name: "秀水鄉" },
                    { id: "彰化縣-鹿港鎮", name: "鹿港鎮" },
                    { id: "彰化縣-福興鄉", name: "福興鄉" },
                    { id: "彰化縣-線西鄉", name: "線西鄉" },
                    { id: "彰化縣-和美鎮", name: "和美鎮" },
                    { id: "彰化縣-伸港鄉", name: "伸港鄉" },
                    { id: "彰化縣-員林市", name: "員林市" },
                    { id: "彰化縣-社頭鄉", name: "社頭鄉" },
                    { id: "彰化縣-永靖鄉", name: "永靖鄉" },
                    { id: "彰化縣-埔心鄉", name: "埔心鄉" },
                    { id: "彰化縣-溪湖鎮", name: "溪湖鎮" },
                    { id: "彰化縣-大村鄉", name: "大村鄉" },
                    { id: "彰化縣-埔鹽鄉", name: "埔鹽鄉" },
                    { id: "彰化縣-田中鎮", name: "田中鎮" },
                    { id: "彰化縣-北斗鎮", name: "北斗鎮" },
                    { id: "彰化縣-田尾鄉", name: "田尾鄉" },
                    { id: "彰化縣-埤頭鄉", name: "埤頭鄉" },
                    { id: "彰化縣-溪州鄉", name: "溪州鄉" },
                    { id: "彰化縣-竹塘鄉", name: "竹塘鄉" },
                    { id: "彰化縣-二林鎮", name: "二林鎮" },
                    { id: "彰化縣-大城鄉", name: "大城鄉" },
                    { id: "彰化縣-芳苑鄉", name: "芳苑鄉" },
                    { id: "彰化縣-二水鄉", name: "二水鄉" }
                    ]
                }, {
                    id: "南投縣",
                    name: "南投縣",
                    children: [{ id: "南投縣-南投市", name: "南投市" },
                    { id: "南投縣-中寮鄉", name: "中寮鄉" },
                    { id: "南投縣-草屯鎮", name: "草屯鎮" },
                    { id: "南投縣-國姓鄉", name: "國姓鄉" },
                    { id: "南投縣-埔里鎮", name: "埔里鎮" },
                    { id: "南投縣-仁愛鄉", name: "仁愛鄉" },
                    { id: "南投縣-名間鄉", name: "名間鄉" },
                    { id: "南投縣-集集鎮", name: "集集鎮" },
                    { id: "南投縣-水里鄉", name: "水里鄉" },
                    { id: "南投縣-魚池鄉", name: "魚池鄉" },
                    { id: "南投縣-信義鄉", name: "信義鄉" },
                    { id: "南投縣-竹山鎮", name: "竹山鎮" },
                    { id: "南投縣-鹿谷鄉", name: "鹿谷鄉" }
                    ]
                }, {
                    id: "嘉義市",
                    name: "嘉義市",
                    children: [{
                        id: "嘉義市-東區",
                        name: "東區"
                    }, {
                        id: "嘉義市-西區",
                        name: "西區"
                    }]
                }, {
                    id: "嘉義縣",
                    name: "嘉義縣",
                    children: [{ id: "嘉義縣-番路鄉", name: "番路鄉" },
                    { id: "嘉義縣-梅山鄉", name: "梅山鄉" },
                    { id: "嘉義縣-竹崎鄉", name: "竹崎鄉" },
                    { id: "嘉義縣-阿里山鄉", name: "阿里山鄉" },
                    { id: "嘉義縣-中埔鄉", name: "中埔鄉" },
                    { id: "嘉義縣-大埔鄉", name: "大埔鄉" },
                    { id: "嘉義縣-水上鄉", name: "水上鄉" },
                    { id: "嘉義縣-鹿草鄉", name: "鹿草鄉" },
                    { id: "嘉義縣-太保市", name: "太保市" },
                    { id: "嘉義縣-朴子市", name: "朴子市" },
                    { id: "嘉義縣-東石鄉", name: "東石鄉" },
                    { id: "嘉義縣-六腳鄉", name: "六腳鄉" },
                    { id: "嘉義縣-新港鄉", name: "新港鄉" },
                    { id: "嘉義縣-民雄鄉", name: "民雄鄉" },
                    { id: "嘉義縣-大林鎮", name: "大林鎮" },
                    { id: "嘉義縣-溪口鄉", name: "溪口鄉" },
                    { id: "嘉義縣-義竹鄉", name: "義竹鄉" },
                    { id: "嘉義縣-布袋鎮", name: "布袋鎮" }
                    ]
                }, {
                    id: "雲林縣",
                    name: "雲林縣",
                    children: [{ id: "雲林縣-斗南鎮", name: "斗南鎮" },
                    { id: "雲林縣-大埤鄉", name: "大埤鄉" },
                    { id: "雲林縣-虎尾鎮", name: "虎尾鎮" },
                    { id: "雲林縣-土庫鎮", name: "土庫鎮" },
                    { id: "雲林縣-褒忠鄉", name: "褒忠鄉" },
                    { id: "雲林縣-東勢鄉", name: "東勢鄉" },
                    { id: "雲林縣-臺西鄉", name: "臺西鄉" },
                    { id: "雲林縣-崙背鄉", name: "崙背鄉" },
                    { id: "雲林縣-麥寮鄉", name: "麥寮鄉" },
                    { id: "雲林縣-斗六市", name: "斗六市" },
                    { id: "雲林縣-林內鄉", name: "林內鄉" },
                    { id: "雲林縣-古坑鄉", name: "古坑鄉" },
                    { id: "雲林縣-莿桐鄉", name: "莿桐鄉" },
                    { id: "雲林縣-西螺鎮", name: "西螺鎮" },
                    { id: "雲林縣-二崙鄉", name: "二崙鄉" },
                    { id: "雲林縣-北港鎮", name: "北港鎮" },
                    { id: "雲林縣-水林鄉", name: "水林鄉" },
                    { id: "雲林縣-口湖鄉", name: "口湖鄉" },
                    { id: "雲林縣-四湖鄉", name: "四湖鄉" },
                    { id: "雲林縣-元長鄉", name: "元長鄉" }
                    ]
                }, {
                    id: "臺南市",
                    name: "臺南市",
                    children: [{ id: "臺南市-中西區", name: "中西區" },
                    { id: "臺南市-東區", name: "東區" },
                    { id: "臺南市-南區", name: "南區" },
                    { id: "臺南市-北區", name: "北區" },
                    { id: "臺南市-安平區", name: "安平區" },
                    { id: "臺南市-安南區", name: "安南區" },
                    { id: "臺南市-永康區", name: "永康區" },
                    { id: "臺南市-歸仁區", name: "歸仁區" },
                    { id: "臺南市-新化區", name: "新化區" },
                    { id: "臺南市-左鎮區", name: "左鎮區" },
                    { id: "臺南市-玉井區", name: "玉井區" },
                    { id: "臺南市-楠西區", name: "楠西區" },
                    { id: "臺南市-南化區", name: "南化區" },
                    { id: "臺南市-仁德區", name: "仁德區" },
                    { id: "臺南市-關廟區", name: "關廟區" },
                    { id: "臺南市-龍崎區", name: "龍崎區" },
                    { id: "臺南市-官田區", name: "官田區" },
                    { id: "臺南市-麻豆區", name: "麻豆區" },
                    { id: "臺南市-佳里區", name: "佳里區" },
                    { id: "臺南市-西港區", name: "西港區" },
                    { id: "臺南市-七股區", name: "七股區" },
                    { id: "臺南市-將軍區", name: "將軍區" },
                    { id: "臺南市-學甲區", name: "學甲區" },
                    { id: "臺南市-北門區", name: "北門區" },
                    { id: "臺南市-新營區", name: "新營區" },
                    { id: "臺南市-後壁區", name: "後壁區" },
                    { id: "臺南市-白河區", name: "白河區" },
                    { id: "臺南市-東山區", name: "東山區" },
                    { id: "臺南市-六甲區", name: "六甲區" },
                    { id: "臺南市-下營區", name: "下營區" },
                    { id: "臺南市-柳營區", name: "柳營區" },
                    { id: "臺南市-鹽水區", name: "鹽水區" },
                    { id: "臺南市-善化區", name: "善化區" },
                    { id: "臺南市-大內區", name: "大內區" },
                    { id: "臺南市-山上區", name: "山上區" },
                    { id: "臺南市-新市區", name: "新市區" },
                    { id: "臺南市-安定區", name: "安定區" }
                    ]
                }, {
                    id: "高雄市",
                    name: "高雄市",
                    children: [{ id: "高雄市-新興區", name: "新興區" },
                    { id: "高雄市-前金區", name: "前金區" },
                    { id: "高雄市-苓雅區", name: "苓雅區" },
                    { id: "高雄市-鹽埕區", name: "鹽埕區" },
                    { id: "高雄市-鼓山區", name: "鼓山區" },
                    { id: "高雄市-旗津區", name: "旗津區" },
                    { id: "高雄市-前鎮區", name: "前鎮區" },
                    { id: "高雄市-三民區", name: "三民區" },
                    { id: "高雄市-楠梓區", name: "楠梓區" },
                    { id: "高雄市-小港區", name: "小港區" },
                    { id: "高雄市-左營區", name: "左營區" },
                    { id: "高雄市-仁武區", name: "仁武區" },
                    { id: "高雄市-大社區", name: "大社區" },
                    { id: "高雄市-岡山區", name: "岡山區" },
                    { id: "高雄市-路竹區", name: "路竹區" },
                    { id: "高雄市-阿蓮區", name: "阿蓮區" },
                    { id: "高雄市-田寮區", name: "田寮區" },
                    { id: "高雄市-燕巢區", name: "燕巢區" },
                    { id: "高雄市-橋頭區", name: "橋頭區" },
                    { id: "高雄市-梓官區", name: "梓官區" },
                    { id: "高雄市-彌陀區", name: "彌陀區" },
                    { id: "高雄市-永安區", name: "永安區" },
                    { id: "高雄市-湖內區", name: "湖內區" },
                    { id: "高雄市-鳳山區", name: "鳳山區" },
                    { id: "高雄市-大寮區", name: "大寮區" },
                    { id: "高雄市-林園區", name: "林園區" },
                    { id: "高雄市-鳥松區", name: "林園區" },
                    { id: "高雄市-大樹區", name: "大樹區" },
                    { id: "高雄市-旗山區", name: "旗山區" },
                    { id: "高雄市-美濃區", name: "美濃區" },
                    { id: "高雄市-六龜區", name: "六龜區" },
                    { id: "高雄市-內門區", name: "內門區" },
                    { id: "高雄市-杉林區", name: "杉林區" },
                    { id: "高雄市-甲仙區", name: "甲仙區" },
                    { id: "高雄市-桃源區", name: "桃源區" },
                    { id: "高雄市-那瑪夏區", name: "那瑪夏區" },
                    { id: "高雄市-茂林區", name: "茂林區" },
                    { id: "高雄市-茄萣區", name: "茄萣區" }
                    ]
                }, {
                    id: "澎湖縣",
                    name: "澎湖縣",
                    children: [{ id: "澎湖縣-西嶼鄉", name: "西嶼鄉" },
                    { id: "澎湖縣-馬公市", name: "馬公市" },
                    { id: "澎湖縣-望安鄉", name: "望安鄉" },
                    { id: "澎湖縣-七美鄉", name: "七美鄉" },
                    { id: "澎湖縣-白沙鄉", name: "白沙鄉" },
                    { id: "澎湖縣-湖西鄉", name: "湖西鄉" }]
                }, {
                    id: "金門縣",
                    name: "金門縣",
                    children: [{ id: "金門縣-金沙鎮", name: "金沙鎮" },
                    { id: "金門縣-金湖鎮", name: "金湖鎮" },
                    { id: "金門縣-金寧鄉", name: "金寧鄉" },
                    { id: "金門縣-金城鎮", name: "金城鎮" },
                    { id: "金門縣-烈嶼鄉", name: "烈嶼鄉" },
                    { id: "金門縣-烏坵鄉", name: "烏坵鄉" }]
                }, {
                    id: "屏東縣",
                    name: "屏東縣",
                    children: [{ id: "屏東縣-屏東市", name: "屏東市" },
                    { id: "屏東縣-三地門鄉", name: "三地門鄉" },
                    { id: "屏東縣-霧臺鄉", name: "霧臺鄉" },
                    { id: "屏東縣-瑪家鄉", name: "瑪家鄉" },
                    { id: "屏東縣-九如鄉", name: "九如鄉" },
                    { id: "屏東縣-里港鄉", name: "里港鄉" },
                    { id: "屏東縣-高樹鄉", name: "高樹鄉" },
                    { id: "屏東縣-鹽埔鄉", name: "鹽埔鄉" },
                    { id: "屏東縣-長治鄉", name: "長治鄉" },
                    { id: "屏東縣-麟洛鄉", name: "麟洛鄉" },
                    { id: "屏東縣-竹田鄉", name: "竹田鄉" },
                    { id: "屏東縣-內埔鄉", name: "內埔鄉" },
                    { id: "屏東縣-萬丹鄉", name: "萬丹鄉" },
                    { id: "屏東縣-潮州鎮", name: "潮州鎮" },
                    { id: "屏東縣-泰武鄉", name: "泰武鄉" },
                    { id: "屏東縣-來義鄉", name: "來義鄉" },
                    { id: "屏東縣-萬巒鄉", name: "萬巒鄉" },
                    { id: "屏東縣-崁頂鄉", name: "崁頂鄉" },
                    { id: "屏東縣-新埤鄉", name: "新埤鄉" },
                    { id: "屏東縣-南州鄉", name: "南州鄉" },
                    { id: "屏東縣-林邊鄉", name: "林邊鄉" },
                    { id: "屏東縣-東港鎮", name: "東港鎮" },
                    { id: "屏東縣-琉球鄉", name: "琉球鄉" },
                    { id: "屏東縣-佳冬鄉", name: "佳冬鄉" },
                    { id: "屏東縣-新園鄉", name: "新園鄉" },
                    { id: "屏東縣-枋寮鄉", name: "枋寮鄉" },
                    { id: "屏東縣-枋山鄉", name: "枋山鄉" },
                    { id: "屏東縣-春日鄉", name: "春日鄉" },
                    { id: "屏東縣-獅子鄉", name: "獅子鄉" },
                    { id: "屏東縣-車城鄉", name: "車城鄉" },
                    { id: "屏東縣-牡丹鄉", name: "牡丹鄉" },
                    { id: "屏東縣-恆春鎮", name: "恆春鎮" },
                    { id: "屏東縣-滿州鄉", name: "滿州鄉" }
                    ]
                }, {
                    id: "臺東縣",
                    name: "臺東縣",
                    children: [{ id: "臺東縣-臺東市", name: "臺東市" },
                    { id: "臺東縣-綠島鄉", name: "綠島鄉" },
                    { id: "臺東縣-蘭嶼鄉", name: "蘭嶼鄉" },
                    { id: "臺東縣-延平鄉", name: "延平鄉" },
                    { id: "臺東縣-卑南鄉", name: "卑南鄉" },
                    { id: "臺東縣-鹿野鄉", name: "鹿野鄉" },
                    { id: "臺東縣-關山鎮", name: "關山鎮" },
                    { id: "臺東縣-海端鄉", name: "海端鄉" },
                    { id: "臺東縣-池上鄉", name: "池上鄉" },
                    { id: "臺東縣-東河鄉", name: "東河鄉" },
                    { id: "臺東縣-成功鎮", name: "成功鎮" },
                    { id: "臺東縣-長濱鄉", name: "長濱鄉" },
                    { id: "臺東縣-太麻里鄉", name: "太麻里鄉" },
                    { id: "臺東縣-金峰鄉", name: "金峰鄉" },
                    { id: "臺東縣-大武鄉", name: "大武鄉" },
                    { id: "臺東縣-達仁鄉", name: "達仁鄉" }
                    ]
                }, {
                    id: "花蓮縣",
                    name: "花蓮縣",
                    children: [{ id: "花蓮縣-花蓮市", name: "花蓮市" },
                    { id: "花蓮縣-新城鄉", name: "新城鄉" },
                    { id: "花蓮縣-秀林鄉", name: "秀林鄉" },
                    { id: "花蓮縣-吉安鄉", name: "吉安鄉" },
                    { id: "花蓮縣-壽豐鄉", name: "壽豐鄉" },
                    { id: "花蓮縣-鳳林鎮", name: "鳳林鎮" },
                    { id: "花蓮縣-光復鄉", name: "光復鄉" },
                    { id: "花蓮縣-豐濱鄉", name: "豐濱鄉" },
                    { id: "花蓮縣-瑞穗鄉", name: "瑞穗鄉" },
                    { id: "花蓮縣-萬榮鄉", name: "萬榮鄉" },
                    { id: "花蓮縣-玉里鎮", name: "玉里鎮" },
                    { id: "花蓮縣-卓溪鄉", name: "卓溪鄉" },
                    { id: "花蓮縣-富里鄉", name: "富里鄉" }
                    ]
                }]
                return commonArray;
            }
        };





    }
}


