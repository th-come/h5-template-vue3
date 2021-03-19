<template>
	<div class="about btntop">
		<h1>This is an about page</h1>
		<counter :counterObj="counterObj" @counterAdd="counterAdd"></counter>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Counter from '@/components/Counter'; // @ is an alias to /src
interface CounterObj {
	msg: string;
	num: number;
}

export default defineComponent({
	components: {
		Counter
	},
	setup() {
		const counterObj = reactive<CounterObj>({
			msg: 'hello tsx',
			num: 0
		});

		const counterAdd = (tip: string) => {
			console.log('提示', tip);
			counterObj.num++;
		};

		return {
			counterObj,
			counterAdd
		};
	}
});
</script>
<style lang="scss" scoped>
.about {
	background: #fff;
}
</style>
