<template>
	<div class="menu">
		<div class="menu-header">
			<img src="http://placehold.it/80x80"/>
		</div>
		<div class="menu-content">
			<mt-cell
				title="待处理"
				to="//github.com">
			</mt-cell>
			<mt-cell
				title="已处理"
				to="//github.com">
			</mt-cell>
			<mt-cell
				title="已取消"
				to="//github.com">
			</mt-cell>
			<mt-cell
				title="历史记录"
				to="//github.com">
			</mt-cell>
			<br />
			<mt-cell
				title="设置"
				to="//github.com">
			</mt-cell>
		</div>
		<div class="menu-footer">
			made by gzk
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				
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
	.menu{
		width: 70vw;
		height: 100vh;
		background-color:white;
		.menu-header{
			margin: 10vh 0 10vh;
			text-align: center;
		}
		.menu-content{
			text-align: center;
		}
		.menu-footer{
			position: absolute;
			bottom: 10vh;
			text-align: center;
			width: 100%;
		}
	}
</style>