<template>
	<div class="">
		<mt-header title="头部">
			<mt-button icon="back" slot="left" @click="back"></mt-button>
		</mt-header>
		<div class="main-page">
			<img :src="data.imgsrc"/>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				data:{}
			}
		},
		created() {
			console.log(this.$store.getters.todoDetail)
			this.data = this.$store.getters.todoDetail
		},
		computed: {
			
		},
		components: {
			
		},
		methods: {
			back(){
				this.$router.push({
					path:'/'
				})
			}
		},
	}	
</script>

<style lang="less" scoped>
	img{
		width: 100vw;
    	opacity: 0.5;
	}
</style>