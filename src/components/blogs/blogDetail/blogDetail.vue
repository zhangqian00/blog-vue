<template>
	<div id="blogDetail" class="clearfix">
		<div class="left fl">
			<div class="top">
				<h3 class="title">{{detailData.title}}</h3>
				<div class="info">
					<div class="touxiang">
						<img src="../../../assets/img/home/tx.jpg" alt="">
					</div>
					<div class="author">
						<p class="name">{{detailData.author}}</p>
						<p class="meta"><i>{{detailData.createdate|timeFormat}}</i><i>字数 0</i><i>阅读 0</i><i>评论 0</i><i>喜欢 0</i></p>
					</div>
					<div class="tagDiv">
						<el-tag size="mini" type="success" v-for='(item,index) in detailData.blogtags' :key='index'>{{item}}</el-tag>
					</div>
				</div>
				<div class="content markdown-body" v-html='detailData.content'></div>
			</div>

		</div>
		<div class="right fr">
			<ul>
				<li v-for='(item,index) in 10' :key='index'>
					<a class="tocLink" href="javascript:;">目录目录</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import SimpleMDE from 'simplemde';
	export default {
		data(){
			return {
				detailData: {}
			}
		},
		mounted(){
			this.getDetail();
		},
		methods: {
			getDetail(){
				let params = {
					keyid: this.$route.query.blogId
				};
				this.$ajax.post(this.$httpConfig.blogDetail,params).then((res)=>{
					if(res.data.ErrorCode.Code == 0){
						this.detailData = res.data.DataContext||{};
						this.detailData.blogtags?
						this.detailData.blogtags = this.detailData.blogtags.split(','):
						[];
						this.detailData.content = SimpleMDE.prototype.markdown(this.detailData.content);
					}
				});
			}
		}
	}
</script>

<style scoped lang='less'>
	.left {
		width: 75%;
		.top {
			overflow: hidden;
			.title {
				font-size: 30px;
				font-weight: 700;
				line-height: 40px;
				margin-top: 40px;
			}
			.info {
				margin: 30px 0 40px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				position: relative;
				.touxiang {
					width: 48px;
					height: 48px;
					border-radius: 50%;
					overflow: hidden;
					img {
						width: 100%;
					}
				}
				.author {
					margin-left: 8px;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					.name {
						width: 100%;
						font-size: 16px;
						color: #2c3e50;
					}
					.meta {
						margin-top: 10px;
						font-size: 12px;
						color: #969696;
						i {
							margin-right: 8px;
						}
					}
				}
				.tagDiv {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
	}
	.right {
		width: 23%;
		margin-top: 213px;
		border-left: 1px solid #eee;
		ul {
			padding-left: 40px;
		}
		ul,li {
			list-style-type: disc;
		}
		.tocLink {
			font-size: 16px;
			line-height: 20px;
			color: #2799ff;
		}
		.tocLink:hover {
			color: #ff8003;
		}
	}
</style>

<style>
	.content p {
		line-height: 30px;
	}
</style>