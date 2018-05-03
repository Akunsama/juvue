<template>
	<div class="main-page">
		<div class="main-page-swipe">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="item in showList" :key="item.title">
					<span>{{item.title}}</span>
					<img :src="item.imgsrc"/>
				</mt-swipe-item>
			</mt-swipe>			
		</div>
		<div class="main-page-content">
			<div class="cellbox" v-for="item in todoList" :key="item.title" @click="detail(item)">
				<div>{{item.title}}</div><span>{{item.time}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showList:[{
					title:"111",
					imgsrc:''
				},{
					title:"222",
					imgsrc:''
				},{
					title:"333",
					imgsrc:''
				}],
				todoList:[],
			}
		},
		created() {
			
		},
		mounted(){
			this.todoList = this.$store.getters.todoList
			let arr = this.todoList.slice(0,3);
			this.showList = [...arr,...this.showList].slice(0,3);
		},
		computed: {
			
		},
		components: {
			
		},
		methods: {
			detail(item){
				this.$store.commit('SET_TODODETAIL',item)
				this.$router.push({
					path:'/detail'
				})
			}
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
		span{
			position: absolute;
			top: 1vh;
			width: 100%;
			text-align: center;
			font-size: 5vw;
		}
		img{
			width: 100%;
			height: 100%;
		}
	}

</style>