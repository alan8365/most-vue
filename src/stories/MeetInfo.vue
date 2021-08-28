<template>
  <div>
    <most-info
      title="會議室連結"
      content-text="時間：2015年11月14、15日(星期六、日)
地點：國立臺中科技大學 中商大樓二樓
報名網址：http://2015most.nutc.edu.tw/signup.php"
    >
      <template #bottom>
        <div
          class="container px-5"
          style="margin-bottom: 27px"
        >
          <div class="row gx-5">
            <div class="col">
              <most-meet-button
                :label="'會議室A'"
                :profssors="'(ＸＸＸ教授、ＸＸＸ教授、ＸＸＸ教授)'"
                :background-color="'#FFD8D8'"
                :font-color="'#F27373'"
              />
            </div>
            <div class="col">
              <most-meet-button
                :label="'會議室B'"
                :profssors="'(ＸＸＸ教授、ＸＸＸ教授、ＸＸＸ教授)'"
                :background-color="'#FFF9D1'"
                :font-color="'#F4D159'"
              />
            </div>
            <div class="col">
              <most-meet-button
                :label="'會議室C'"
                :profssors="'(ＸＸＸ教授、ＸＸＸ教授、ＸＸＸ教授)'"
                :background-color="'#D1FFF1'"
                :font-color="'#67CB8D'"
              />
            </div>
          </div>
        </div>
      </template>
    </most-info>

    <most-info
      title="重要時程"
      content-text="報名時間：至 2015年10月20日(二) 截止
報告上傳時間：至 2015年10月20日(二) 截止"
    />

    <most-info
      title="報告通知"
      content-text="口頭發表
請主持人出席會議報告，除共同主持人外，不得代為報告。需全程參與，出席狀況列為下年度計畫補助參考。
1.請務必於2015年10月20日(二)前上傳(1)摘要、(2)10頁內精簡報告、(3)簡報PPT至大會網站上，俾利製作大會手冊。(報告格式無硬性規定，建議以科技部成果報告格式撰寫)
2.請將所有檔案請打包成壓縮檔上傳(可接受的格式有*.zip、*.rar、*.7z，點此進入上傳頁面)，檔名命名請以各主持人場次之議程編號為命名。(命名範例：A01.zip、A01.rar、A01.7z)
3.請於簡報(PPT檔)結尾頁呈現此次計畫之已發表、已接受、或擬發表之科教處第一至第三級期刊論文、期刊名、頁碼等資訊(與本次計畫無關之論文勿列)。本項資料及期刊發表績效列為下年度計畫補助主要依據。
4.口頭報告架構，宜符合徵求重點(敘明原計畫書所選之重點代號，共四碼)，自選主題者應具科教內涵(有關技專校院課程、教學、學習、師質培育、評量及評鑑等範疇)，應分三部分說明，計畫緣起(為何做)、研究方法(如何做)及計畫結果(研究發現)，過程及執行細節則免，俾於10分鐘內結束報告。
5.報告時間限定：報告10分鐘，討論5分鐘(共15分鐘)，請報告者注意時間。(報告順序另行公告)

海報發表
1.非最後一年之多年期及產學型計畫者，請務必於2015年10月20日(二)前繳交摘要，俾利製作大會手冊。
2.請將所有檔案請打包成壓縮檔上傳(可接受的格式有*.zip、*.rar、*.7z，點此進入上傳頁面)，檔名命名請以各主持人場次之議程編號為命名。(命名範例：(多年期)P01.zip、P01.rar、P01.7z，(產學型)I01.zip、I01.rar、I01.7z)
3.會場將會準備A0直式壁報(約84cm x 120cm )，請將執行期間之成果製作成海報於會場張貼，並於指定發表時間(11月14日15:30~16:00)進行口頭報告。
"
    />

    <most-info
      title="行政要點"
      content-text="請假事宜
1。需全程參與，出席狀況會作為未來計畫申請審查之重要參考。若不克參加本次成果發表會議，請敘明不可抗拒之原因，以郵
寄或傳真向大會提出請假申請。"
    />
  </div>
</template>

<script>
import './meetInfo.css';
import {reactive, computed} from 'vue';

import MostInfo from './Info';
import MostMeetButton from './MeetButton';

export default {
  name: 'MostMeetInfo',

  components: {
    MostInfo,
    MostMeetButton,
  },

  props: {
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
  },

  emits: ['click'],

  setup(props, {emit}) {
    props = reactive(props);
    return {
      verticelCenter: computed(() => ({
        'd-flex flex-column align-items-center justify-content-center': true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
      backToTop() {
        window.scrollTo(0, 0);
      },
    };
  },
};
</script>
