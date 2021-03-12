<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h1>Student</h1>
		<h1>name: {{ student.name }}</h1>
		<h1>age: {{ student.age }}</h1>
		<h1>score: {{ score }}</h1>
		<van-button van-button type="success" @click="updateScore"
			>加分</van-button
		>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { Button } from 'vant';

interface Student {
	name: string;
	age: number;
	score?: number;
	list?: number[];
}

export default defineComponent({
	name: 'HelloWorld',

	props: {
		msg: String
	},

	components: {
		vanButton: Button
	},

	setup() {
		const hello = ref<string>('hello');
		const student: Student = { name: 'th', age: 11 };
		const store = useStore();
		const score = computed(() => store.state.score);
		const updateScore = () => {
			store.dispatch('updateScore', score.value);
		};

		return {
			hello,
			student,
			score,
			updateScore
		};
	}
});
</script>

<style scoped lang="scss">
h1 {
	font-size: 30px;
}
h3 {
	margin: 40px 0 0;
}
</style>
