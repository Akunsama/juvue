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
			<mt-cell v-for="item in todoList" :key="item.title" :label="item.time" :title="item.title" />  
		    
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				todoList:[],
			}
		},
		created() {
			
		},
		mounted(){
			console.log(this.$store	)
			this.todoList = this.$store.getters.todoList
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
	.main-page-swipe{
		height: 200px;
	}
	.mint-swipe-item{
		text-align: center;
		background-color: rgb(205,205,205);
	}
</style>