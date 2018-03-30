<!-- 九宫格布局的歌单类型组件 -->
<!-- 接受一个对象数组类型的参数：sheetList -->
<template>
	<div class="songSheet-wrapper">
		<div class="left-anchor">
			<!-- 模块的标题导航，需要手动定义并插入到sheetItem的第一项 -->
			<span>{{sheetList[0].type}}</span>
			<i class="iconfont icon-qianjin"></i>
		</div>
		<div class="song-sheet">
			<div class="song-item" v-for="item in sheetList" :key="item.id">
				<div class="song-item-img" v-bind:style="{backgroundImage: 'url('+item.src+')'}">
					<span class="corner-num">{{item.num}}万</span>
				</div>
				<p class="song-title text-ellipsis2">{{item.title}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['sheetList']
	}
</script>
<style lang="scss">
	
</style>
