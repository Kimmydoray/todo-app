<template>
	<v-container :class="`task ${task.done ? 'is-complete' : ''}`">
		
		<v-row class="align-center adjust-top">
			<v-col cols="12" md="5" class="content">
				{{ task.content }}
			</v-col>
			<v-col cols="12" md="3">
				<v-btn rounded type="button" color="success" @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</v-btn>
			</v-col>
			<v-col cols="12" md="4">
				<v-btn rounded type="button" color="red" @click="deleteTask">Delete</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: ['task'],
	methods: {
		toggleDone() {
			this.$store.commit('TOGGLE_TASK', this.task);
		},
		deleteTask() {
			this.$store.commit('DELETE_TASK', this.task);
		}
	}
}
</script>

<style>
	.task.is-complete .content {
		text-decoration: line-through;
	}
</style>