<template>
  <div class="edit container">
    <alert v-if='alert' v-bind:message='alert'></alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit='UpdateCustomer'>
    	<div class="well">
    		<h4>用户信息</h4>
    		<div class="form-group">
    			<label>姓名</label>
    			<input type="text" class="form-control" placeholder="请输入姓名" v-model='customer.name'>
    		</div>
    		<div class="form-group">
    			<label>电话</label>
    			<input type="text" class="form-control" placeholder="请输入电话" v-model='customer.phone'>
    		</div>
    		<div class="form-group">
    			<label>邮箱</label>
    			<input type="text" class="form-control" placeholder="请输入邮箱" v-model='customer.email'>
    		</div>
    		<div class="form-group">
    			<label>学历</label>
    			<input type="text" class="form-control" placeholder="请输入学历" v-model='customer.education'>
    		</div>
    		<div class="form-group">
    			<label>毕业学校</label>
    			<input type="text" class="form-control" placeholder="请输入毕业学校" v-model='customer.graduationschool'>
    		</div>
    		<div class="form-group">
    			<label>职业</label>
    			<input type="text" class="form-control" placeholder="请输入职业" v-model='customer.profession'>
    		</div>
    		<div class="form-group">
    			<label>个人简介</label>
    			<textarea class="form-control" rows="10" v-model='customer.profile'></textarea>
    		</div>
    		<button type="submit" class="btn btn-primary">确认</button>
    	</div>

    </form>
  </div>
</template>

<script>
import Alert from '@/components/Alert'

export default {
  name: 'edit',
  data () {
    return {
      customer:{},
      alert:''
    }
  },
  components:{
    Alert
  },
  methods:{
    fetchCustomer:function(id){
      this.$http.get('http://localhost:3000/users/'+id).then(function(data){
        this.customer = data.body;
      })
    },
  	UpdateCustomer:function(e){
  		if(!this.customer.name||!this.customer.phone||!this.customer.email){
  			this.alert = '请填写对应信息';
  		}else{
  			var newUpdateCustomer = {
  				name:this.customer.name,
  				phone:this.customer.phone,
  				email:this.customer.email,
  				education:this.customer.education,
  				graduationschool:this.customer.graduationschool,
  				profession:this.customer.profession,
  				profile:this.customer.profile
  			}
  			this.$http.put('http://localhost:3000/users/'+this.$route.params.id,newUpdateCustomer).then(function(data){
  				this.$router.push({path:'/',query:{alert:'用户信息更新成功!'}});
  			});
  			e.preventDefault();
  		}
      e.preventDefault();
  	}
  },
  created:function(){
    this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
