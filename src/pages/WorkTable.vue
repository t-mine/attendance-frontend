<template>
  <div class="p-3">
    <!-- 勤務表の上部 -->
    <table class="table">
      <tr>
        <th style="width: 120px">
          <select style="width: 100px" v-model="yearSelected" class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option v-for="year in yearList" :key="year" :value="year">{{ year }}年</option>
          </select>
        </th>
        <th style="width: 70px">
          <select v-model="monthSelected" class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option v-for="month in monthList" :key="month" :value="month">{{ month }}月</option>
          </select>
        </th>
        <th class="text-end align-middle">田中 太郎</th>
      </tr>
    </table>

    <!-- 勤務表の下部 -->
    <table class="table table-bordered table-secondary">
      <tr class="table-dark">
        <th style="width: 35px">日</th>
        <th style="width: 70px">曜日</th>
        <th style="width: 140px">開始時刻</th>
        <th style="width: 140px">終了時刻</th>
        <th>メモ</th>
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
export default {
  data() {
    return {
      yearList: [],
      monthList: [],
      yearSelected: '',
      monthSelected: '',
    };
  },
  created: function () {
    const today = new Date();

    let year = today.getFullYear();
    this.yearSelected = year;
    for (let i = 0; i < 10; i++) {
      this.yearList.push(year--);
    }

    let month = today.getMonth() + 1;
    this.monthSelected = month;
    for (let i = 1; i <= 12; i++) {
      this.monthList.push(i);
    }
  },
};
</script>

<style scoped></style>
