<template>
  <div>
    <most-info
      title="最新消息"
      :update-time="new Date('2021-10-17')"
      content-text="<ul>
<li>本年度因受疫情影響，為確保各位老師能在最安全的環境下與會，改採線上會議形式舉辦，還請各位老師體諒。</li>
<li>本次會議預計採用Google Meet作為視訊軟體，請各位發表教師事前先行測試視訊設備，以利發表過程之進行。</li>
<li>為讓各位發表教師皆能順利完成成果發表，議程時間或有變動，請各位發表教師留意最新議程檔案。</li>
<li>因會議將至，會議議程即將定稿付梓，若發表教師有需調整報告時段，請於10/20前以email通知，謝謝。</li>
</ul>
"
    />

    <most-info
      title="成果發表會議注意事項"
      :update-time="new Date('2021-10-04')"
      content-text="(一) 報告人請於110年10月20日（週三）晚上12點前上網繳交報告，俾利後續會議之籌備進行。除共同主持人外不得代為報告，並須全程參與，出席狀況列為下年度計畫補助參考。
<br>
(二) 請於簡報（ppt檔）末頁呈現本計畫已發表、已接受、或擬發表之應用科學教育學門第一至第三級期刊論文、期刊名、頁碼等資訊（與本計畫無關之論文勿列）。本項資料及期刊發表績效列為下年度計畫補助主要依據。
<br>
(三) 非最後一年之多年期計畫須將執行期間之成果製作成一頁PDF成果報告(依循往年海報發表形式，Size:A0（約84cmx120cm）)與計畫成果摘要，須於110年10月20日（週三）晚上12點前上網繳交。從今年開始計畫延期超過三個月者仍須製作海報送審，請申請計畫延期者亦比照前述說明辦理。
<br>
(四) 若不克參加本次成果發表會議，請敘明不可抗拒之原因，填具請假單向科技部及承辦單位請假。請假單填具後請寄至：pj0071@gm.nutc.edu.tw
<br>
(五) 口頭報告架構宜符合徵求重點（敘明原計畫書所選之重點代號）、自選主題者應具科教內涵，報告時宜強調計畫緣起、研究方法、研究結果及社會貢獻，並於10分鐘之內結束報告。
<br>
(六) 計畫成果上傳網址為 http://most.nutc.edu.tw/most/upload"
    />
  </div>
</template>

<script>
import './news.css';
import {reactive, computed} from 'vue';

import MostInfo from './Info';

export default {
  name: 'MostNews',

  components: {
    MostInfo,
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
      classes: computed(() => ({
        'most-tab': true,
        'most-tab--selected': props.selected,
        'most-tab--normal': !props.selected,
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
