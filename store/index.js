export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false}, ...state.tasks];
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  },
  DELETE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  }
}