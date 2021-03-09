<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h1>Student</h1>
		<h1>name: {{ th.name }}</h1>
		<h1>age: {{ th.age }}</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Student {
	name: string;
	age: number;
	list?: number[];
}

export default defineComponent({
	name: "HelloWorld",
	props: {
		msg: String
	},
	setup() {
		const hello = ref<string>("hello");
		const th: Student = { name: "th", age: 11 };
		return {
			hello,
			th
		};
	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
	font-size: 30px;
}
h3 {
	margin: 40px 0 0;
}
</style>
