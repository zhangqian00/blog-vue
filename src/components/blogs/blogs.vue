<template>
	<div id="blogs">
		<div class="left">
			<ul class="list" v-loading="loading">
				<li v-for ='(item,index) in blogData' :key='index' @click='linkDetail(item)'>
					<div class="leftItem">
						<h3 class='title'>{{item.title}}</h3>
						<p class="abstract">{{item.describe}}</p>
						<div class="meta">
							<span>查看 0</span>
							<span>评论 0</span>
							<span>赞 0</span>
							<span>{{item.createdate|dateFormat}}</span>
						</div>
					</div>
					<div class="rightItem">
						<img :src="item.coversrc?item.coversrc:fmSrc" alt="">
					</div>
				</li>
				<div class="zanwu" v-if='!blogTotal'>暂无数据</div>
			</ul>
			<el-pagination
				v-if='blogTotal>0'
			    background
			    @current-change='getBlogList'
			    layout="prev,pager,next,total"
			    :page-size='5'
			    :total="blogTotal">
			</el-pagination>
		</div>
		<div class="right">
			<div class="item">
				<img class="tx" src="@/assets/img/home/tx.jpg" alt="">
				<p class="name">前端很忙</p>
			</div>
			<div class="item tags">
				<p class="title">标签</p>
				<el-tag size="small">JavaScript</el-tag>
				<el-tag size="small">Vue</el-tag>
				<el-tag size="small">Vuex</el-tag>
				<el-tag size="small">随笔</el-tag>
				<el-tag size="small">Node.js</el-tag>
				<el-tag size="small">Echarts</el-tag>
				<el-tag size="small">总结</el-tag>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				loading: false,
				blogData: [], // 博客列表
				blogTotal: 0, // 博客总数
				fmSrc: require('@/assets/img/home/tx.jpg'), // 默认封面
			}
		},
		created(){
			this.getBlogList(1);
		},
		methods: {
			getBlogList(page){ // 获取文章列表
				this.loading = true;
				var params = {
					pagesize: 5,
					pageindex: page
				};
				this.$ajax.post(this.$httpConfig.blogList,params).then((res)=>{
					if(res.data.ErrorCode.Code == 0){
						this.blogData = res.data.DataContext.result||[];
						this.blogTotal = res.data.DataContext.total||0;
						this.loading = false;
					}else {
						this.loading = false;
						this.$message.error(res.data.ErrorCode.Message);
					}
				}).catch((err)=>{this.loading = false;;this.$message.error(err);});
			},
			linkDetail(item){ // 跳转博客详情
				this.$router.push({path:'/blogDetail',query:{blogId:item.id}});
			}
		}
	}
</script>

<style scoped lang='less'>
	#blogs {
		display: flex;
		justify-content: space-between;
		.left {
			width: 830px;
			padding-right: 20px;
			.list {
				li {
					min-height: 100px;
					padding: 15px 0;
					cursor: pointer;
					border-bottom: 1px solid #f0f0f0;
					display: flex;
					justify-content: space-between;
					.leftItem {
						width: 680px;
						.title {
							font-weight: 700;
							margin: 7px 0 4px;
							line-height: 1.5;
							color: #333;
						}
						.abstract {
							min-height: 30px;
							line-height: 24px;
							margin-bottom: 8px;
							font-size: 13px;
							color: #555;
						}
						.meta {
							font-size: 12px;
							line-height: 20px;
							span {
								margin-right: 6px;
								color: #666;
							}
						}
					}
					.rightItem {
						width: 150px;
						display: flex;
						justify-content: flex-end;
						align-items: center;
						img {
							max-width: 150px;
							max-height: 100px;
						}
					}
				}
				.zanwu {
					height: 200px;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #aaa;
				}
			}
		}
		.right {
			width: 350px;
			.item {
				border-bottom: 1px solid #eee;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				align-items: center;
				.tx {
					width: 130px;
					height: 130px;
					margin-top: 50px;
					border-radius: 50%;
					animation: myLogo 3s;
					animation-iteration-count: infinite;
				}
				.name {
					width: 100%;
					text-align: center;
					font-size: 25px;
					font-weight: 700;
					padding: 15px 0 25px;
				}
			}
			.tags {
				flex-wrap: wrap;
				padding-bottom: 20px;
				.title {
					width: 100%;
					text-align: center;
					font-size: 16px;
					font-weight: 700;
					line-height: 50px;
					color: #969696;
				}
				.el-tag {
					cursor: pointer;
					margin: 5px;
				}
				.el-tag:hover {
					background-color: #409eff;
    				color: #fff;
				}
			}
		}
	}
	@keyframes myLogo {
		0% {
			transform: rotate(0deg) scale(0.8,0.8);
			opacity: 1;
		}
		25% {
			transform: rotate(0deg) scale(1,1);
			opacity: 0.8;
		}
		100% {
			transform: rotate(0deg) scale(0.8,0.8);
			opacity: 1;
		}
	}
</style>

<style>
	#blogs .el-pagination {
		text-align: center;
		margin: 40px;
	}
</style>