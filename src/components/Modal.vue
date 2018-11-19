<template>
    <div id="modal_window">
        <b-modal id="window" size="lg" title="Edit Table Entry">
          <b-container>
            <b-form id="form">
              <b-form-row>
                <b-col cols="3"> 
                  <label id="firstname" label-for="f_name">First Name:</label>
                </b-col>
                <b-col cols="9">
                  <b-input id="f_name" type="text" :value="rowEntry[0]" />
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col cols="3"> 
                  <label id="lastname" label-for="l_name">Last Name:</label>
                </b-col>
                <b-col cols="9">
                  <b-input id="l_name" type="text" :value="rowEntry[1]" />
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col cols="3"> 
                  <label id="seminar" label-for="seminars">Seminar Selection:</label>
                </b-col>
                <b-col cols="9">
                  <b-form-select id="seminars" :value="rowEntry[2]" />
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col cols="3"> 
                  <label id="label_date" label-for="date">Date:</label>
                </b-col>
                <b-col cols="9">
                  <b-input id="date" type="date" :value="rowEntry[3]" />
                </b-col>
              </b-form-row>
            </b-form>
          </b-container>
        </b-modal>
    </div>
</template>

<script>
export default {
  name: "Modal",
  template: "<Modal></Modal>",
  props: ["rowEntry"]
};
</script>

<style>
#modal_window {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>