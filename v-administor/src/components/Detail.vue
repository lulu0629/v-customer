<template>
  <div class="detail container">
  	<router-link to='/' class='btn btn-default'>返回</router-link>
    <h1 class="page-header">
	    {{customer.name}}

	    <span class="pull-right">
	    	<router-link class='btn btn-primary' v-bind:to="'/edit/'+customer.id">编辑</router-link>
	    	<button class='btn btn-danger' v-on:click='deleteCustomer(customer.id)'>删除</button>
	    </span>
	</h1>
    <ul class="list-group">
    	<li class="list-group-item"><span class="glyphicon glyphicon-asterisk"> {{customer.phone}}</span></li>
    	<li class="list-group-item"><span class="glyphicon glyphicon-plus"> {{customer.email}}</span></li>
    </ul>
    <ul class="list-group">
    	<li class="list-group-item"><span class="glyphicon glyphicon-asterisk"> {{customer.education}}</span></li>
    	<li class="list-group-item"><span class="glyphicon glyphicon-plus"> {{customer.graduationschool}}</span></li>
    	<li class="list-group-item"><span class="glyphicon glyphicon-asterisk"> {{customer.profession}}</span></li>
    	<li class="list-group-item"><span class="glyphicon glyphicon-plus"> {{customer.profile}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      customer:''
    }
  },
  methods:{
  	fetchCustomer:function(id){
  		this.$http.get('http://localhost:3000/users/'+id).then(function(data){
  			this.customer = data.body;
  		});
  	},
  	deleteCustomer:function(id){
  		this.$http.delete('http://localhost:3000/users/'+id).then(function(){
  			this.$router.push({path:'/',query:{alert:'用户信息已删除'}});
  		});
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
