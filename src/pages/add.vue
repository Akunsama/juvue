<template>
	<div class="main-page">
		<div class="addTitle">
			请编辑您的代办事项
		</div>
		<div class="addCotent">
			<mt-field label="标题" placeholder="请输入标题" :state="rule.title" v-model.trim="subData.title" 
				@change="rule.title=subData.title?'success':'error'"></mt-field>
	
			<mt-field label="内容" placeholder="" :state="rule.content" type="textarea" rows="8" v-model="subData.content"
				@change="rule.content=subData.content?'success':'error'"></mt-field>	
				
			<mt-cell title="图片"><input type="file" name="" id="" value="" /></mt-cell>
		</div>

		<div class="addBtn">
			<mt-button type="primary" class="submitBtn" @click="submitBtn">提 交</mt-button>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				subData:{
					title:'',
					content:''
				},
				rule:{
					title:'',
					content:''
				}
			}
		},
		created() {
			
		},
		computed: {
			
		},
		components: {
			
		},
		methods: {
			submitBtn(){
				this.$router.push({path:'/'})
			}
		},
	}	
</script>

<style lang="less" scoped>
	.main-page{
		height: 100vh;
		overflow: auto;
	}
	.addTitle{
		height: 8vh;
	    background-color: #eee;
	    text-align: center;
	    line-height: 8vh;
	    font-size: 3vh;
	}
	.addCotent{
		margin-top: 5vh;
	}
	.addBtn{
		margin-top: 5vh;
		text-align: center;
		.submitBtn{
			width: 80%;
		}
	}
	
	
</style>