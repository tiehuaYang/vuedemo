<template>
	<div class="footer">
		<div class="footer-container">
			<img :src="playingCoverImgUrl" alt="">
			<div class="song-des">
	    		<span class="song-name">理想三旬</span>
	    		<span class="singer">谢春花</span>
	    	</div>
			<div class="play">
	    		<i class="iconfont icon-iconset0481"></i>
	    	</div>
	    	<div class="play-list">
	    		<i class="iconfont icon-zhankaicaidan"></i>
	    	</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {
				playingCoverImgUrl: this.staticSrc+'/images/xiechunhua.jpg'
			}
		}
	}
</script>
<style lang="scss">
	.footer {
		position: fixed;
		width: 100%;
		bottom: 0px;
		text-align: center;
		.footer-container {
			background: #fff;
			height: 40px;
			border-top: 1px solid #ccc;
			/*padding: 8px;*/
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			img {
				width: 40px;
				height: 100%;
				padding-left: 1px;
			}
		}
		h2 {
			font-size: 14px;
			color:#fff;
		}
		.play i,.play-list i {
			font-size: 20px;
			color: #444;
		}
		.song-des {
			flex-grow: 1;
			padding: 0 10px;
			span {
				display: block;
			}
			.song-name {
				font-size: 14px;
				color: #444;
				position: absolute;
				top: 4px;
				left: 50px;
			}
			.singer {
				font-size: 14px;
				color: #ccc;
				position: absolute;
				top: 20px;
				left: 50px;
			}
		}
		.play, .play-list {
			width: 50px;
			height: 30px;
			text-align: center;
			overflow: hidden;
			i {
				font-size: 30px;
			}
		}
	}
</style>