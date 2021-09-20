<template>
  <div class="container mt-3 mb-3">
    <!-- 勤務表の上部 -->
    <table class="table">
      <tr>
        <th style="width: 120px">
          <select
            v-bind:disabled="isEditing"
            style="width: 100px"
            v-model="yearSelected"
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option v-for="year in yearList" :key="year" :value="year">{{ year }}年</option>
          </select>
        </th>
        <th style="width: 70px">
          <select
            v-bind:disabled="isEditing"
            v-model="monthSelected"
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option v-for="month in monthList" :key="month" :value="month">{{ month }}月</option>
          </select>
        </th>
        <th class="text-end align-middle">{{ this.$store.state.name }}</th>
      </tr>
    </table>
    <!-- 勤務表の下部 -->
    <table class="table table-bordered" v-on:click="startEdit">
      <thead class="table-secondary">
        <tr>
          <th style="width: 35px">日</th>
          <th style="width: 70px">曜日</th>
          <th style="width: 140px">開始時刻</th>
          <th style="width: 140px">終了時刻</th>
          <th>メモ</th>
        </tr>
      </thead>
      <tbody v-if="!isEditing">
        <tr v-for="item in workTable" :key="item.day">
          <td>{{ item.day }}</td>
          <td>{{ item.dayOfWeek }}</td>
          <td>{{ item.startTime }}</td>
          <td>{{ item.endTime }}</td>
          <td class="text-start memo-label">{{ item.memo }}</td>
        </tr>
      </tbody>
      <tbody v-if="isEditing">
        <tr v-for="item in editWorkTable" :key="item.day">
          <td>{{ item.day }}</td>
          <td>{{ item.dayOfWeek }}</td>
          <td><input type="text" v-model="item.startTime" class="time-text form-control" /></td>
          <td><input type="text" v-model="item.endTime" class="time-text form-control" /></td>
          <td><input type="text" v-model="item.memo" class="memo-text form-control" /></td>
        </tr>
      </tbody>
    </table>
    <div v-if="!isEditing && workTableCreated" class="text-end">
      <button class="w-10 btn btn-primary" v-on:click="startEdit">編集</button>
    </div>
    <div v-if="isEditing" class="text-end">
      <button class="w-10 btn btn-danger cancel-btn" v-on:click="cancelEdit">キャンセル</button>
      <button class="w-10 btn btn-success" v-on:click="updateWorkTable">勤務表を更新</button>
    </div>
  </div>
</template>

<script>
import axios from '@/axios';
import _ from 'lodash';
export default {
  data() {
    return {
      yearList: [],
      monthList: [],
      yearSelected: '',
      monthSelected: '',
      workTable: [],
      editWorkTable: [],
      isEditing: false,
      workTableCreated: false,
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
    // 年セレクトボックスを変更時に勤務表取得
    yearSelected: function () {
      this.getWorkTable();
    },

    // 月セレクトボックスを変更時に勤務表取得
    monthSelected: function () {
      this.getWorkTable();
    },

    // 編集完了時に画面上部にスクロールする
    isEditing: function (newIsEditing) {
      if (!newIsEditing) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
  },

  methods: {
    // 勤務表データ取得
    getWorkTable() {
      if (!this.yearSelected || !this.monthSelected) {
        return;
      }
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
          this.workTableCreated = true;
        })
        .catch((error) => {
          console.log(error);
          this.workTable = this.getEmptyWorkTable();
          this.workTableCreated = true;
        });
    },

    // 空の勤務表データ取得
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

    // 勤務表データ更新
    updateWorkTable() {
      axios
        .put('work-table', this.editWorkTable)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            this.workTable = this.editWorkTable;
            this.isEditing = false;
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 編集開始
    startEdit() {
      this.editWorkTable = _.cloneDeep(this.workTable);
      this.isEditing = true;
    },

    // 編集キャンセル
    cancelEdit() {
      if (window.confirm('編集内容が失われますが、よろしいですか？')) {
        this.editWorkTable = _.cloneDeep(this.workTable);
        this.isEditing = false;
      }
    },
  },
};
</script>

<style scoped>
.table td,
.table th {
  vertical-align: middle;
  text-align: center;
}
.table td {
  height: 52px;
}
.time-text {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 35px;
}
.memo-text {
  width: 100%;
  height: 35px;
}
.memo-label {
  padding-left: 20px;
}
.cancel-btn {
  margin-right: 10px;
}
</style>
