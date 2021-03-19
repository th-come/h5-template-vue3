<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/img/head-logo.png" />
		<HelloWorld msg="Vue3 + TypeScript + cdn wnl-App" />
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
	components: {
		HelloWorld
	},

	setup() {
		console.log('初始化');
		onMounted(() => {
			console.log('components mounted');
		});
	}
});
</script>
