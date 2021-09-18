<template>
  <div class="container">
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
    <table class="table table-bordered">
      <thead class="table-secondary">
        <tr>
          <th style="width: 35px">日</th>
          <th style="width: 70px">曜日</th>
          <th style="width: 140px">開始時刻</th>
          <th style="width: 140px">終了時刻</th>
          <th>メモ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in workTable" :key="item.day">
          <td>{{ item.day }}</td>
          <td>{{ item.dayOfWeek }}</td>
          <td>{{ item.startTime }}</td>
          <td>{{ item.endTime }}</td>
          <td>{{ item.memo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from '@/axios';
export default {
  data() {
    return {
      yearList: [],
      monthList: [],
      yearSelected: '',
      monthSelected: '',
      workTable: [],
    };
  },
  created: function () {
    const today = new Date();
    // 年セレクトボックスのデータ作成
    let year = today.getFullYear();
    this.yearSelected = year;
    for (let i = 0; i < 10; i++) {
      this.yearList.push(year--);
    }
    // 月セレクトボックスのデータ作成
    let month = today.getMonth() + 1;
    this.monthSelected = month;
    for (let i = 1; i <= 12; i++) {
      this.monthList.push(i);
    }
  },
  watch: {
    yearSelected: function () {
      if (this.yearSelected && this.monthSelected) {
        this.getWorkTable();
      }
    },
    monthSelected: function () {
      if (this.yearSelected && this.monthSelected) {
        this.getWorkTable();
      }
    },
  },
  methods: {
    getWorkTable() {
      axios
        .get('work-table', {
          params: {
            email: this.$store.state.email,
            year: this.yearSelected,
            month: this.monthSelected,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            this.workTable = response.data;
          } else {
            console.log(response);
            this.workTable = this.getEmptyWorkTable();
          }
        })
        .catch((error) => {
          console.log(error);
          this.workTable = this.getEmptyWorkTable();
        });
    },
    getEmptyWorkTable() {
      const workTable = [];
      const lastDay = new Date(this.yearSelected, this.monthSelected, 0);
      // 1日から月の末日までループ
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const row = {};
        row.day = day;
        const dayOfWeek = new Date(this.yearSelected, this.monthSelected, day).getDay();
        row.dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
        if (![0, 6].includes(dayOfWeek)) {
          row.startTime = '9:00';
          row.endTime = '18:00';
        }
        workTable.push(row);
      }
      return workTable;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.table td,
.table th {
  padding: 3px;
}
</style>
