<!--music.vue-->
<template>
	<div class="musicPage">
		<div class="swiper-box">
		    <mt-swipe>
			  <mt-swipe-item v-for="(img,index) in imgs" :key="index">
			  	<img :src="img" alt="">
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="circle-nav-list">
			<div class="circle-item">
				<i class="iconfont icon-shouyinji01"></i>
				<span>私人FM</span>
			</div>
			<div class="circle-item">
				<i class="iconfont icon-rili"></i>
				<span>今日推荐</span>
			</div>
			<div class="circle-item">
				<i class="iconfont icon-swticonyinle2"></i>
				<span>分享歌单</span>
			</div>
			<div class="circle-item">
				<i class="iconfont icon-paixingbang"></i>
				<span>排行榜单</span>
			</div>
		</div>
		
		<!--模拟歌单-->
		<song-sheet v-bind:sheetList="songSheet"></song-sheet>
	</div>
</template>
<script>
	import SongSheet from '../components/songSheet.vue'
	
	export default {
		data() {               //数据
			return {
				imgs: [
				    this.staticSrc+'/images/beijingas.jpg',
				    this.staticSrc+'/images/zhihu.jpg',
				    this.staticSrc+'/images/xinyinyue.jpg'
				],
				songSheet:this.initSongSheet()
			}
			
		},
		methods: {             //方法
			/*imgInit() {
				for(var i = 2, imgs = []; i <= 10; i++) {
					var name = {id: i, src:'../src/assets/images/yinyue'+i+'.jpeg'}
					imgs.push(name);
				};
				return imgs;
			},*/
			initSongSheet() {
			    /*生成模拟歌单数据*/
				var imgSrc = ['girls.jpeg','LUHAN.jpeg','xuanya.jpeg','wuyuetian.jpeg','zhaolei.jpeg','wangxinlin.jpeg'];
				var titles = ['恋爱系Melody，不知觉已陷入暗恋之心','【纯音】余梦幻想舞·枫花雪蝉歌','唯美和风｜但盼风雨来，留你在心中','「日系纯音」温柔又美好'];
				for(var i = 0, imgs = []; i <= imgSrc.length-1; i++) {
					var num = Math.random()*1000;
					num = parseInt(num, 10);  //随机数取整
					var index = parseInt(Math.random()*4);
					var name = {
						id: i,
						src: this.staticSrc+'/images/'+imgSrc[i], //图片路径
						num: num,
						title: titles[index]
					}
					if(i == 0) {
						name.type = '推荐歌单';
					}
					imgs.push(name);
				};
				return imgs;
			}
		},
		components: {
			SongSheet
		}
	}
</script>
<style lang="scss">
	.swiper-box,.swiper-box img {
		height: 160px;
		width: 100%;
	}
	.circle-nav-list {
		margin-top: 30px;
		text-align: center;
		padding-bottom: 15px;
	}
	.circle-nav-list .circle-item {
		display: inline-block;
	}
	.circle-item {
		padding: 10px;	
		position: relative;
	}
	.circle-item span {
		position: absolute;
		left: 13px;
		bottom: -28px;
	}
	.circle-item span:nth-child(2) {
		position: absolute;
	}
	.circle-item span {
		font-size: 12px;
	}
	.circle-item i {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		padding: 15px;
		font-size: 25px;
		color: darkred;
		border: 1px solid darkred;
		border-radius: 50%;
	}
	.music-list {
		width: 100%;
		height: 400px;
		/*background-color: indianred;*/
		margin-top: 25px;
		border-top: 1px solid rgba(0,0,0,.1);
		p {
			margin-left: 10px;
			font-size: 15px;
			font-weight: 550;
			color: rgba(0,0,0,.7);
		}
	}
</style>