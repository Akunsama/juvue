<template>
	<div>
		<mt-header title="头部">
			<router-link to="/menu" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<mt-popup
		  v-model="popupVisible"
		  position="left">
		  <me-nu></me-nu>
		</mt-popup>

		<mt-tabbar v-model="selected">
			<mt-tab-item id="外卖" >
				<img slot="icon" src="http://placehold.it/100x100" @click="btn"> 外卖
			</mt-tab-item>
			<mt-tab-item id="订单">
				<img slot="icon" src="http://placehold.it/100x100"> 订单
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" src="http://placehold.it/100x100"> 发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img slot="icon" src="http://placehold.it/100x100"> 我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import meNu from '@/pages/menu.vue'
	export default {
		data() {
			return {
				selected: '',
				popupVisible:false
			}
		},
		created() {

		},
		computed: {

		},
		components: {
			meNu
		},
		methods: {
			async initData() {

			},
			tableRowClassName() {

			},
			btn() {
				console.log("点击了")
				this.popupVisible = true
			}
		},
	}
</script>
<style>

</style>