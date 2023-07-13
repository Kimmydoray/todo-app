<template> 
    <v-container>
      <v-col class="d-flex justify-center">
        <v-card class="mx-5 my-5 pb-5 p-3" max-width="374">
          <v-card-title class="justify-center"> Vue ToDo List </v-card-title>
          <hr>
          <v-container class="tasks">
            <Task
              v-for="(task, i) in $store.state.tasks"
              :key="i"
              :task="task" />
          </v-container>
          <v-form>
            <v-alert
              :value="alert"
              color="warning"
              title="Alert title"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."
            >Please fill input field  </v-alert>
            <v-row class="align-center adjust-top p-5">
              <v-col cols="12" md="6">
                <v-flex>
                  <v-text-field 
                    class="pl-5"
                    type="text" 
                    v-model="newTask" 
                    placeholder="Add a new task" 
                    @keypress.enter="addTask" />
                </v-flex>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn rounded type="button" color="primary" @click="addTask" >Add item</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-container>
</template>

<script>
export default {
  data (){
    return {
      newTask: '',
      alert: false,
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      } else {
        this.hide_alert();
      }
    },
    hide_alert: function (event) {
      this.alert = true;
      window.setInterval(() => {
        this.alert = false;
      }, 3000)    
    }
  }
}
</script>
