import { createStore } from 'vuex';

export default createStore({
	state: {
		score: 30
	},
	mutations: {
		updateScore(state, score) {
			state.score = score;
		}
	},
	actions: {
		async updateScore(context, score) {
			const newScore = await new Promise((resolve, reject) => {
				if (score) {
					const data = score + 1;
					resolve(data);
				} else {
					reject(0);
				}
			});
			context.commit('updateScore', newScore);
		}
	},
	modules: {}
});
