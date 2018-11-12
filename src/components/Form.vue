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
export default { 
  name: 'Form',
  data () { 
    return {
      form: {
        first_name: '',
        last_name: '',
        selected: null,
        date: ''
      },
      result: '',
      options: [
        { value: null, text: 'Please select a seminar...' },
        { value: 'Introductory Event', text: 'Introductory Event' },
        { value: 'Excel Basics', text: 'Excel Basics' },
        { value: 'SAP Basics', text: 'SAP Basics' },
        { value: 'PowerPoint Basics', text: 'PowerPoint Basics' },
        { value: 'Hardcopy Configuration', text: 'Hardcopy Configuration' }
      ],
    }
  },
  methods: {
    display: function () {
      this.result = this.form.first_name + " " + this.form.last_name + " registered at the seminar "  + this.form.selected + " on " + this.form.date + " .";
    },
    addData: function () {
      var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];

      var form_item = {first_name: this.form.first_name, last_name: this.form.last_name, selected: this.form.selected, date: this.form.date};

      localStorage.setItem("formData", JSON.stringify(form_item));
      existingEntries.push(form_item);
      localStorage.setItem("allEntries", JSON.stringify(existingEntries));
      
      this.form = { first_name: '', last_name: '', selected: null, date: '' };
    }
  }
}
</script>

<style>
#registration_form {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#output {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  background-color:#0e4094;
  border-color:#0e4094;
}
#link {
  display: inline-block;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 15px;
  color: #0e4094;
}
</style>