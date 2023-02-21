
import CommonHeader from '../molecules/CommonHeader.vue';

<template>
  <CommonHeader headerTitle="HOME'S"></CommonHeader>
  <div class="h-20 bg-gray-200"></div>
  <section class="ml-10 mr-10 grid grid-cols-2">
    <article>
      <h2>全国の地域から不動産・住宅を探す</h2>
      <table>
        <tbody>
          <tr>
            <td>北海道・東北</td>
            <td>北海道（札幌市）｜青森｜岩手｜宮城（仙台市）｜秋田｜山形｜福島</td>
          </tr>
          <tr>
            <td>関東</td>
            <td>東京（東京23区）｜神奈川（横浜市・川崎市・相模原市）｜埼玉（さいたま市）｜千葉（千葉市）｜茨城｜栃木｜群馬</td>
          </tr>
        </tbody>
      </table>
    </article>
    <article>
      <h2>LIFULL HOME'Sのサービス</h2>
    </article>
  </section>
</template>

<script>
import CommonHeader from '@/components/molecules/CommonHeader.vue';

export default {
  components: {
    CommonHeader,
  }
}
</script>

<style lang="scss">
  article {
    & > p {
      font-size: 2px;
    }
  }
</style>