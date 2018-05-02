<template>
	<div class="main-page">
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">待处理</mt-tab-item>
		  <mt-tab-item id="2">已解决</mt-tab-item>
		  <mt-tab-item id="3">已取消</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <mt-cell v-for="n in 10" :title="'待处理 ' + n" :key="n"/>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <mt-cell v-for="n in 4" :title="'已解决 ' + n" :key="n"/>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <mt-cell v-for="n in 6" :title="'已取消 ' + n" :key="n"/>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected:'1'
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

</style>