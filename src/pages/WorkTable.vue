<template>
  <div class="p-3">
    <!-- 勤務表の上部 -->
    <table class="table">
      <tr>
        <th style="width: 5%">
          <input class="form-control text-center" type="text" value="2021" />
        </th>
        <th style="width: 1%" class="align-middle">年</th>
        <th style="width: 3%">
          <input class="form-control text-center" type="text" value="8" />
        </th>
        <th style="width: 1%" class="align-middle">月</th>
        <th style="width: 90%" class="text-end align-middle">田中 太郎</th>
      </tr>
    </table>

    <!-- 勤務表の下部 -->
    <table class="table table-bordered table-secondary">
      <tr class="table-dark">
        <th style="width: 2%">日</th>
        <th style="width: 4%">曜日</th>
        <th style="width: 10%">開始時刻</th>
        <th style="width: 10%">終了時刻</th>
        <th style="width: 74%">メモ</th>
      </tr>
      <tr>
        <td>1</td>
        <td>月</td>
        <td>09:00</td>
        <td>18:00</td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td>火</td>
        <td>09:00</td>
        <td>18:00</td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>水</td>
        <td>09:00</td>
        <td>18:00</td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td>木</td>
        <td>09:00</td>
        <td>18:00</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
