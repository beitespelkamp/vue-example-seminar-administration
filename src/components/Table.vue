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
            <tr v-for="item in show" :key="item.first_name">
              <td>{{item.first_name}}</td>
              <td>{{item.last_name}}</td>
              <td>{{item.selected}}</td>
              <td>{{item.date}}</td>
              <td>
              <!-- functionality will be added -->
                <b-button id="btn1" size="sm" >Edit</b-button>
                <b-button id="btn2" size="sm" >Delete</b-button>
              </td>
            </tr>
          </tbody>
        </table>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Table',
        data () {
            return {
              data: '' 
            }
        },
        computed: {
          show: function () {
            return this.data = JSON.parse(localStorage.getItem("allEntries"));
          }
        }
    }
</script>

<style>
#table {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#table2 {
    margin-top: 60px;
}
</style>