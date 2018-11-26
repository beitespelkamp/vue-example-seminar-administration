<template>
    <div id="modal_window">
        <b-modal ref="myModal" id="window" size="lg" title="Edit Table Entry">
          <b-container>
            <b-form id="form">
              <b-form-row>
                <b-col cols="3"> 
                  <label id="firstname" label-for="f_name">First Name:</label>
                </b-col>
                <b-col cols="9">
                  <b-input id="f_name" type="text" v-model="rowEntry.first_name"  />
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col cols="3"> 
                  <label id="lastname" label-for="l_name">Last Name:</label>
                </b-col>
                <b-col cols="9">
                  <b-input id="l_name" type="text" v-model="rowEntry.last_name" />
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col cols="3"> 
                  <label id="seminar" label-for="seminars">Seminar Selection:</label>
                </b-col>
                <b-col cols="9">
                  <b-form-select id="seminars" v-model="rowEntry.selected" :options="options"/>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col cols="3"> 
                  <label id="label_date" label-for="date">Date:</label>
                </b-col>
                <b-col cols="9">
                  <b-input id="date" type="date" v-model="rowEntry.date"/>
                </b-col>
              </b-form-row>
            </b-form>
          </b-container>
          <div slot="modal-footer" id="modal_footer">
            <button type="button" class="btn btn-secondary" v-on:click="hideModal">Cancel</button>
            <button type="button" class="btn btn-primary" v-on:click="editObject(objectId)">Save</button>
          </div>
          <p>{{rowEntry}}</p>
        </b-modal>
    </div>
</template>

<script>
import { SeminarOptions } from "../const.js";

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
  name: "Modal",
  template: "<Modal></Modal>",
  props: ["rowEntry", "objectId"],
  data() {
    return {
      options: SeminarOptions.options,
      rowEntry: {
        first_name: "",
        last_name: "",
        selected: null,
        date: ""
      }
    };
  },
  methods: {
    editObject: function(objectId) {
      var objects = getData("allEntries");
      objects[objectId] = this.rowEntry;
      saveData("allEntries", objects);
      this.hideModal();
    },
    hideModal() {
      this.$refs.myModal.hide();
    }
  }
};
</script>

<style>
#modal_window {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>