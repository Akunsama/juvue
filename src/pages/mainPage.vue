<template>
	<div class="main-page">
		<div class="main-page-swipe">
			<mt-swipe :auto="4000">
				<mt-swipe-item>1</mt-swipe-item>
				<mt-swipe-item>2</mt-swipe-item>
				<mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>			
		</div>
		<div class="main-page-content">
			<mt-cell v-for="n in 20" :key="n" :title="'待处理 ' + n" />  
		    
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected:'外卖'
			}
		},
		created() {
			
		},
		computed: {
			
		},
		components: {
			
		},
		methods: {

		},
	}	
</script>

<style lang="less" scoped>
	.main-page{
		height: 100vh;
		overflow: auto;
		.main-page-swipe{
			height: 200px;
		}
	}
	.mint-swipe-item{
		text-align: center;
		background-color: rgb(205,205,205);
	}
</style>