<!--about.vue-->
<template style="background-color: rgba(0,0,0,.05);">
    <div class="videoPage">
    	<ul>
    		<li v-for="(img,index) in imgs">
    			<div>
    				<img :src="img.src" alt="">
    			</div>
	    		<div>
	    			<span class="centerBtn"><i class="iconfont icon-bofang"></i></span>
	    			<span class="left-top"><i></i>{{ img.a }}</span>
	    			<span class="left-bottom"><i class="iconfont icon-bofang"></i>{{ img.b }}</span>
	    			<span class="right-top">{{ img.c }}</span>
	    			<span class="rigth-bottom"><i class="iconfont icon-paixingbang"></i>{{ img.d }}</span>
	    		</div>
	    		<div>
	    			<h4 class="musicDes">{{ img.e }}</h4>
	    		</div>
    		</li>
    	</ul>
    </div>
</template>
<script>
	//把需要循环的表单定义成方法写在外面
	function videoSheet() {
		var imgs = ['static/images/qiwei.jpeg','static/images/xuezhiqian.jpeg','static/images/wanglihong.jpeg'];
		var name = ['dxs董小尚','硬地音乐','广东雨神','带你去旅行'];
		var num  = ['20万','1万','3245','4800'];
		var liveT = ['音乐现场','音乐','音乐现场','音乐'];
		var playTime = ['4:30','2:34','1:20','2:45'];
		var musicDes = ['戚薇 《Lucky Lucky》','薛之谦 《动物世界》','王力宏 《依然爱你》']
		for(var i=0,j=[];i < imgs.length;i++) {    
			var x = {};
			var nameIn = Math.floor(Math.random()*3)+1;
			x.src = imgs[i];
			x.a = name[nameIn];
			x.b = num[i];
			x.c = liveT[i];
			x.d = playTime[i];
			x.e = musicDes[i]
			j.push(x);
		}
		return j;
	}
	export default {
		data() {
			return {
				imgs:videoSheet()
			}
		}
	}
</script>
<style>
	.videoPage {
		letter-spacing: 1px;
		margin-top: -8px;
	}
	ul, ul img {
		width:100%;
		height: 200px;
	}
	ul {
		list-style: none;
		padding: 0;
		margin-bottom: 200px;
	}
	ul li {
		margin-bottom: 50px;
		position: relative;
	}
	ul li:last-child {
		margin-bottom: 80px;
	}
	.left-top {
		position: absolute;
		left: 10px;
		top: 10px;
	}
	.left-bottom {
		position: absolute;
		left: 10px;
		bottom : 10px;
	}
	.right-top {
		position: absolute;
		right: 10px;
		top: 10px;
		padding: 5px;
		border: 1px solid rgba(255,255,255,.4);
		background-color: rgba(0,0,0,.2);
		border-radius: 12px;
		-webkit-border-radius: 12px;
		-moz-border-radius: 12px;
		-o-border-radius: 12px;
	}
	.rigth-bottom {
		position: absolute;
		right: 10px;
		bottom: 10px;
	}
	.rigth-bottom i {
		color: rgba(255,255,255,.7);
	}
	.left-top, .left-bottom, .right-top, .rigth-bottom {
		font-size: 12px;
		color: #FFFFFF;
	}
	.centerBtn {
		margin: auto;  
        position: absolute;  
        top: 0; 
        left: 0; 
        bottom: 0; 
        right: 0;  
		width: 50px;
		height: 50px;
		background-color: rgba(0,0,0,.5);
		border: 1px solid rgba(255,255,255,.6);
		border-radius: 50px;
		-webkit-border-radius: 50px;
		-moz-border-radius: 50px;
		-o-border-radius: 50px;
		color: #FFF;
	}
	.centerBtn .icon-bofang {
		position: absolute;
		left: 14px;
		top: 8px;
		font-size: 30px;
		color: rgba(255,255,255,.9);
	}
	.musicDes {
		position: absolute;
		bottom: -40px;
		left: 10px;
		font-size: 14px;
		color: #444;
	}
</style>