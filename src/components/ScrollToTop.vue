<template>
  <div>
		<button  id="scroll-to-top" class="gotoTop"  @click="gotoTop()">
		<i class="el-icon-caret-top"></i>
		</button>
  </div>
</template>

<script>
export default {
	props:['scrollElement'],
	mounted() {
		this.scrollElement.addEventListener('scroll', this.scrollToTop);
	},
	methods: {
		scrollToTop() {
			let topBtn = document.getElementById('scroll-to-top');
			let scrollTop = this.scrollElement.pageYOffset || this.scrollElement.scrollTop || this.scrollElement.scrollTop;
			let browserHeight = this.scrollElement.offsetHeight - 80;
			if (scrollTop > browserHeight) {
				topBtn.style.display = 'block';
			} else {
				topBtn.style.display = 'none';
			}
		},
		gotoTop() {
			window.timer=setInterval(()=>{
				var scrollTop=this.scrollElement.scrollTop;
				var ispeed=Math.floor(-scrollTop/2);
				if(scrollTop==0){
					clearInterval(window.timer);
				}
				this.scrollElement.scrollTop = scrollTop+ispeed;
			},30);
		}
	},
	beforeDestroy () {
		this.scrollElement.removeEventListener('scroll', this.scrollToTop);
	}
};
</script>

<style lang="scss" scoped>
.gotoTop {
  position: fixed;
  bottom: 80px;
  right: 80px;
  display: none;
  font-size: 32px;
  background-color: #409eff;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
