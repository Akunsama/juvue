<template>
	<div>
		<mt-header title="头部">
				<mt-button icon="back" slot="left" @click="btn"></mt-button>
			<mt-button class="iconfont icon-add" slot="right" @click="add"></mt-button>
		</mt-header>
		
		<router-view></router-view>
		
		<mt-popup
		  v-model="popupVisible"
		  position="left">
		  <me-nu></me-nu>
		</mt-popup>

		<mt-tabbar v-model="selected">
			<mt-tab-item id="/mainPage">
					<img slot="icon" src="http://placehold.it/20x20"> 首页
			</mt-tab-item>
			<mt-tab-item id="/workPage">
					<img slot="icon" src="http://placehold.it/20x20"> 任务处理
			</mt-tab-item>
			<mt-tab-item id="/setting">
					<img slot="icon" src="http://placehold.it/20x20"> 设置
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
			add(){
				this.$router.push({
					path:'/add'
				})
			},
			btn() {
				this.popupVisible = true
			},
		},
		watch:{
			selected(val){
				this.$router.push({
					path:val
				})
			}
		}
	}
</script>
<style>
	.mint-header{
		
	}
</style>