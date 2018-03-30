//index.vue
<template>
    <div class="radioPage">
    	<div class="swiper-box">
		    <mt-swipe>
			  <mt-swipe-item v-for="(img,index) in imgs" :key="index">
			  	<img :src="img" alt="">
			  </mt-swipe-item>
			</mt-swipe>
			<span class="voiceBook">有声书</span>
		</div>
		<div class="radiosList">
			<div class="radiosClassify">
				<p><i class="iconfont icon-tubiaolunkuo-"></i></p>
				<span>电台分类</span>
			</div>
			<div class="radiosRank">
				<p><i class="iconfont icon-paixing"></i></p>
				<span>电台排行</span>
			</div>
		</div>
		<div class="payThing">
			<p>付费精品</p>
		</div>
		<div class="storyList">
			<ul class="storyUl">
				<li v-for="(story,index) in storys">
					<div class="storytelMan">
						<img :src="story.url" alt="">
					</div>
					<div class="storytelStory">
						<p>{{ story.title }}</p>
			    		<span>{{ story.decs }}</span>
			    		<span>{{ story.VIPs }}</span>
					</div>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
var storys = [];
var decss = ['白茫茫的大地真干净','结业快乐：来自焦老师的结业寄语','欢迎来我家做客'];
var imgUrls = ['static/images/hlm.jpg','static/images/xtq.jpg','static/images/kt.jpg'];
var titles = ['蒋勋新说红楼梦','焦享乐','陈立客厅'];
var vipss = ['','SVIP:￥199','']
for(var i = 0; i < imgUrls.length;i++) {
	var storyDecs = {url:imgUrls[i],title:titles[i],decs:decss[i],VIPs:vipss[i]};
	storys[i] = storyDecs;
}

export default {
  name: 'indexP',
  data () {
  	return {
		imgs: [
		    this.staticSrc+'/images/me1.jpg',
		    this.staticSrc+'/images/zuoxiaozuzong.jpg',
		    this.staticSrc+'/images/songdongye.jpg'
		],
		storys: storys
	}
  },
  methods:{
  }
}
</script>
<style lang="scss">
	.swiper-box,.swiper-box img {
		height: 160px;
		width: 100%;
	}
	.swiper-box {
		position: relative;
	}
	.voiceBook {
		position: absolute;
		right: -10px;
		bottom: 4px;
		font-size: 13px;
		color: #FFF;
		width: 40px;
		background-color: darkred;
		padding: 4px;
		padding-left: 15px !important;
		padding-right: 16px !important;
		border-radius: 20px;
	}
	.radiosList {
		width: 100%;
		height: 70px;
		background-color: rgba(0,0,0,.02);
		border-bottom: 1px solid rgba(0,0,0,.05);
		clear: both;
		content: '';
		/*margin-top: -16px;*/
	}
	.radiosClassify, .radiosRank {
		width: 50%;
		text-align: center;
		position: relative;
	}
	.radiosClassify {
	    float: left;
	}
	.radiosRank {
		float: right;
	}
	.radiosClassify i, .radiosRank i {
		padding-right: 80px;
		color: darkred;
		font-size: 40px;
	}
	.radiosClassify span, .radiosRank span {
		position: absolute;
		top: 25px;
		left: 80px;
	}
	.payThing {
		background-color: rgba(0,0,0,.02);
	}
	.payThing p {
		margin: 0;
		padding: 25px 0px 10px 10px;
		border-bottom: 1px solid rgba(0,0,0,.05);
	}
	.storyList {
		background-color: rgba(0,0,0,.02);
		padding-bottom: 20px;
	}
	.storyList li {
		list-style: none;
		clear: both;
		margin-top: -16px;
		border-bottom: 1px solid rgba(0,0,0,.05);
	}
	ul .storytelMan {
		width: 35%;
		float: left;
		margin-left: -30px;
	}
	.storytelMan img {
		width: 100%;
		height: 120px;
	}
	ul .storytelStory {
		width: 65%;
		float: right;
		margin-top: -5px;
	}
	.storytelStory p, .storytelStory span {
		/*margin-left: 10px;*/
		margin-left: -10px;
	}
	.storytelStory span {
		float: left;
		font-size: 14px;
		margin-top: -10px;
		color: rgba(0,0,0,.5);
		font-weight: 550;
		line-height: 35px;
	}
</style>
