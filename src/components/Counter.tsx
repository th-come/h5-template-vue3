import { defineComponent, reactive, PropType, toRefs } from "vue";
import "./Counter.scss";
import { Button } from "vant";

interface CounterObj {
	msg: string;
	num: number;
}

const Counter = defineComponent({
	props: {
		counterObj: {
			type: Object as PropType<CounterObj>,
			default: () => {
				return {
					msg: "",
					num: 0
				};
			}
		}
	},
	components: {
		vanButton: Button
	},
	setup(props, content) {
		const state = reactive({ count: 0 });
		const handleClick = () => state.count++;
		const { msg, num } = toRefs(props.counterObj);
		const addNum = () => {
			content.emit("counterAdd", "增加");
		};
		return () => (
			<div>
				<van-button type="success" onClick={handleClick}>
					count: {state.count}
				</van-button>
				<div class="btntop">
					<van-button type="success" onClick={addNum}>
						num：{num.value}
					</van-button>
				</div>
				<h1>msg: {msg.value}</h1>
				<h1>num: {num.value}</h1>
			</div>
		);
	}
});

export default Counter;
