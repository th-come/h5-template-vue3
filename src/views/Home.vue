<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/img/head-logo.png" />
		<HelloWorld msg="Vue3 + TypeScript + cdn App" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
	components: {
		HelloWorld
	},

	setup() {
		console.log('初始化');
	}
});
</script>
