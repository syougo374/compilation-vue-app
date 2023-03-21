<template>
  <div class="header-gray  sm:bg-red-200 md:bg-yellow-200 lg:bg-gray-100"></div>
  <div class="main_container">

    <section class="grid grid-cols-2">
      <article class="mr-8">
        <h2>全国の地域から不動産・住宅を探す</h2>
        <table class="mb-2 text-xs">
          <tbody>
            <tr>
              <td>北海道・東北</td>
              <td>北海道（札幌市）｜青森｜岩手｜宮城（仙台市）｜秋田｜山形｜福島</td>
            </tr>
            <tr>
              <td>関東</td>
              <td>東京（東京23区）｜神奈川（横浜市・川崎市・相模原市）｜埼玉（さいたま市）｜千葉（千葉市）｜茨城｜栃木｜群馬</td>
            </tr>
            <tr>
              <td>北陸・甲信越</td>
              <td>新潟(新潟市）｜富山｜石川｜福井｜山梨｜長野</td>
            </tr>
            <tr>
              <td>東海</td>
              <td>愛知(名古屋市）｜岐阜｜静岡（静岡市・浜松市）｜三重</td>
            </tr>
            <tr>
              <td>近畿</td>
              <td>大阪(堺市・大阪市）｜滋賀｜京都（京都市）｜兵庫（神戸市）｜奈良市｜和歌山</td>
            </tr>
            <tr>
              <td>中国・四国</td>
              <td>鳥取｜島根｜岡山（岡山市）｜広島（広島市）｜山口｜徳島｜香川｜愛媛｜高知</td>
            </tr>
            <tr>
              <td>九州</td>
              <td>福岡(福岡市・北九州市）｜佐賀｜長崎｜熊本（熊本市）｜大分｜宮崎｜鹿児島｜沖縄</td>
            </tr>
          </tbody>
        </table>
        <hr>
        <h2>物件の種類から探す</h2>
        <p class="mb-2 text-xs">賃貸｜賃貸マンション｜アパート｜賃貸一戸建｜新築マンション｜中古マンション｜新築一戸建｜中古一戸建｜土地｜貸土地｜月極駐車場｜貸店舗｜店舗｜貸事務所｜事務所｜貸倉庫｜貸工場｜倉庫｜工場｜その他（賃貸）｜その他｜マンスリーマンション</p>
      </article>
      <article>
        <h2>LIFULL HOME'Sのサービス</h2>
        <p class="mb-2 text-xs">不動産・住宅｜マンション｜一戸建て｜注文住宅｜リノベーション｜不動産売却査定｜不動産投資｜アドバイザー｜住まいの窓口｜住宅ローン｜住宅インデックス｜プライスマップ｜不動産アーカイブ｜空き家バンク｜家賃相場｜不動産会社｜まちむすび｜LIFELIST｜不動用語集｜住まいのお役立ち情報｜LIFULL HOME’SPRESS｜新生活サポート｜アプリ</p>
        <hr>
        <h2>LIFULLのサービス</h2>
        <p class="mb-2 text-xs">不動産・住宅｜引越し｜トランクルーム｜レンタルスペース｜老人ホーム｜地方創生｜花の定期便｜ママの就労支援｜不動産クラウドファンディング</p>
      </article>
    </section>
    <h2 class="font-bold bg-gray-100 h-12 text-center flex justify-center items-center">LIFULL HOME'Sは安心・安全のための取り組みを行なっています</h2>
    <div class="grid grid-cols-2">
      <div class="flex">
        <img class="h-16 w-16 boject-contain" src="@/assets/images/fudousanSimbole.png" alt="page icon">
        <div class="mini_title">
          <h3 class="font-bold">信頼できる物件情報サイトNo.1を目指して</h3>
          <p class="text-xs">このサイトは「不動産情報サイト事業者連絡協議会」が定める情報公開の自主規制ルールにの取った則ったサイトそして承認されています。</p>
        </div>
      </div>
      <div class="flex">
        <img class="h-16 w-40 boject-contain" src="@/assets/images/lisenceLogo.png" alt="icon anab">
        <div class="mini_title">
          <h3 class="font-bold">全ての情報を適切に取り扱うために</h3>
          <p class="text-xs">株式会社LIFULLは、情報セキュリティマネジメントシステムの国際規格「ISO/IEC27001」および国内規格「JISQ27001」の承認を取得しています。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CommonHeader from '@/components/molecules/CommonHeader.vue';

export default {
  components: {
    // CommonHeader,
  }
}
</script>

<style lang="scss">
.main_container {
  margin: 0 5%;
}
  article {
    & > p {
      font-size: 2px;
    }
  }
  h2 {
    margin: 10px 0;
  }
  .header-gray {
    height: 120px;
  }

  .sublinks{
    & > div {
      margin-right: 20px;
    }
    & > div > p{
      display: block;
      font-size: 12px;
      color: gray;
    }
  }
</style>