<template>
  <div id="app">
    <nav class="navbar navbar-default">
    	<div class="container">
    		<div class="navbar-header">
    			<button type="button" class="navbar-toggle collapsed" data-toggle='collapsed'>
    				<span class="sr-only">Toggle navigation</span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    			</button>
    			<a href="#" class="navbar-brand">用户管理系统</a>
    		</div>
    		<div id="navbar" class="collapse navbar-collapse">
    			<ul class="nav navbar-nav">
    				<li><router-link to='/'>主页</router-link></li>
    				<li><router-link to='/AboutUs'>关于我们</router-link></li>
    			</ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to='/Add'>添加用户</router-link></li>
                </ul>
    		</div>
    	</div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
