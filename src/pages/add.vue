<template>
	<div class="">
		<div class="addTitle">
			请编辑您的代办事项
		</div>
		<div class="addCotent">
			<mt-field label="标题" placeholder="请输入标题" :state="rule.title" v-model.trim="subData.title" 
				@change="rule.title=subData.title?'success':'error'"></mt-field>
	
			<mt-field label="内容" placeholder="" :state="rule.content" type="textarea" rows="6" v-model="subData.content"
				@change="rule.content=subData.content?'success':'error'"></mt-field>	
				
			<div class="imgBox">
				<h3>请选择背景图片</h3>
				<div id="showImg">
					<img :src="subData.imgsrc"/>
				</div>
				<input class="imgBtn" type="file" name="" id="" value="" @change="showImg"/>
			</div>	
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
					content:'',
					imgsrc:'',
					time:'',
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
				if(this.subData.title && this.subData.content){
					this.subData.time = String(new Date())
					this.$store.commit("SET_TODOLIST",this.subData)
					this.$router.push({path:'/'})
				}
			},
			showImg(e){
				let fileTarget = e.currentTarget,
				file = fileTarget.files[0];
				let reader = new FileReader();
				reader.readAsDataURL(file)
				reader.onload = ()=>{
					this.subData.imgsrc = reader.result;
				}
			}
		},
	}	
</script>

<style lang="less" scoped>
	.addTitle{
		height: 8vh;
	    background-color: #eee;
	    text-align: center;
	    line-height: 8vh;
	    font-size: 3vh;
	}
	.addCotent{
		margin-top: 2vh;
		.imgBox{
			position:relative;
			text-align:center;
			#showImg{
				position: absolute;
			    background-color: black;
			    width: 90vw;
			    height: 30vh;
			    margin: auto;
			    left: 5vw;
			    opacity: 0.8;
			    img{
			    	width: 100%;
			    	height: 100%;
			    }
			}
			.imgBtn{
				position: absolute;
			    width: 90vw;
			    height: 30vh;
			    left: 5vw;
			    opacity: 0;
			}
		}
	}
	.addBtn{
		margin-top: 40vh;
		text-align: center;
		.submitBtn{
			width: 80%;
		}
	}
	
	
</style>