<template>
  <div id="registration_form">
    <h3>Seminar Registration</h3>
    <b-container>
      <b-form id="form">
        <b-form-row>
          <b-col cols="3"> 
            <label id="firstname" label-for="f_name">First Name:</label>
          </b-col>
          <b-col cols="9">
            <b-input id="f_name" type="text" v-model="form.first_name"/>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="3"> 
            <label id="lastname" label-for="l_name">Last Name:</label>
          </b-col>
          <b-col cols="9">
            <b-input id="l_name" type="text" v-model="form.last_name"/>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="3"> 
            <label id="seminar" label-for="seminars">Seminar Selection:</label>
          </b-col>
          <b-col cols="9">
            <b-form-select id="seminars" v-model="form.selected" :options="options"/>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="3"> 
            <label id="label_date" label-for="date">Date:</label>
          </b-col>
          <b-col cols="9">
            <b-input id="date" type="date" v-model="form.date"/>
          </b-col>
        </b-form-row>
      <div id="output">
        <b-row>
          <b-col cols="3"></b-col>
          <b-col cols="9">
            <p>{{result}}</p>
          </b-col>
        </b-row>
      </div>
        <b-form-row>
          <b-col cols="3"></b-col>
          <b-col cols="9">
            <b-button type="submit" variant="primary" id="submit" v-on:click="display(); addData();">Submit</b-button>
          </b-col>
        </b-form-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { SeminarOptions } from "../const.js"

function getData(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default {
  name: "Form",
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        selected: null,
        date: ""
      },
      result: "",
      options: SeminarOptions.options
    };
  },
  methods: {
    display: function() {
      this.result =
        this.form.first_name +
        " " +
        this.form.last_name +
        " registered at the seminar " +
        this.form.selected +
        " on " +
        this.form.date +
        " .";
    },
    addData: function() {
      var existingEntries = getData("allEntries");
      if (existingEntries == null) existingEntries = [];

      var form_item = {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        selected: this.form.selected,
        date: this.form.date
      };

      saveData("formData", form_item);
      existingEntries.push(form_item);
      saveData("allEntries", existingEntries);

      this.form = { first_name: "", last_name: "", selected: null, date: "" };
    }
  }
};
</script>

<style>
#registration_form {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#output {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 25px;
  text-align: left;
}
#form {
  text-align: left;
  margin-top: 60px;
}
#submit {
  text-align: left;
  margin-top: 15px;
  background-color: #0e4094;
  border-color: #0e4094;
}
#firstname, #lastname, #seminar, #label_date {
  font-weight: bold;
}
</style>