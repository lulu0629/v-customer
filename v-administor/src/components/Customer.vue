<template>
  <div class="customer container">
    <alert v-if='alert' v-bind:message='alert'></alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model='fillterInput'>
    <table class="table table-striped">
    	<thead>
    		<tr>
    			<th>姓名</th>
    			<th>电话</th>
    			<th>邮箱</th>
    			<th></th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr v-for='customer in fillterBy(customers,fillterInput)'>
    			<td>{{customer.name}}</td>
    			<td>{{customer.phone}}</td>
    			<td>{{customer.email}}</td>
    			<td><router-link v-bind:to="'/customer/'+customer.id" class='btn btn-default'>详情</router-link></td>
    		</tr>
    	</tbody>
    </table>
  </div>
</template>

<script>
import Alert from '@/components/Alert'

export default {
  name: 'customer',
  data () {
    return {
      customers:[],
      alert:'',
      fillterInput:''
    }
  },
  methods:{
  	fetchCustomer:function(){
  		this.$http.get('http://localhost:3000/users').then(function(data){
  			this.customers = data.body;
  		});
  	},
    fillterBy:function(customers,value){
      return customers.filter(function(customer){
        return customer.name.match(value);
      });
    }
  },
  created:function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
  	this.fetchCustomer();
  },
  updated:function(){
    this.fetchCustomer();
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
