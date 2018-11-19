<template>
    <div id="table">
      <h3>Received Registrations</h3>
      <b-container>
        <table class="table" id="table2">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Seminar</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="item.id">
              <td>{{item.first_name}}</td>
              <td>{{item.last_name}}</td>
              <td>{{item.selected}}</td>
              <td>{{item.date}}</td>
              <td>
              <!-- Edit Function is not completed yet -->
                <b-button id="btn1" size="sm" v-on:click="editRow(index)" v-b-modal.window>Edit</b-button>
                <b-button type="button" id="btn2" size="sm" v-on:click="deleteRow(index)">Delete</b-button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Modal Component -->
        <div>
          <Modal :rowEntry=form_object></Modal>
        </div>
      </b-container>
    </div>
</template>

<script>
function getData(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

import Modal from "./Modal";

export default {
  name: "Table",
  data() {
    return {
      data: getData("allEntries"),
      form_object: {
        first_name: "",
        last_name: "",
        selected: "",
        date: ""
      }
    };
  },
  methods: {
    editRow: function(index) {
      var selectedRow = getData("allEntries");
      this.form_object = selectedRow[index];
      this.form_object[0] = this.form_object.first_name;
      this.form_object[1] = this.form_object.last_name;
      this.form_object[2] = this.form_object.selected;
      this.form_object[3] = this.form_object.date;
    },
    deleteRow: function(index) {
      var storedData = getData("allEntries");
      storedData.splice(index, 1);
      saveData("allEntries", storedData);
      this.data = getData("allEntries");
    }
  },
  components: { Modal }
};
</script>

<style>
#table {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#table2 {
  margin-top: 60px;
}
</style>