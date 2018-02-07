<template>
  <div class="aboutUs container">
    <h1>{{administor.msg}}</h1>
    <p>{{administor.name}}</p>
    <p>{{administor.phone}}</p>
    <p>{{administor.email}}</p>
    <a href="http://www.cnblogs.com/crisis66/">{{administor.blog}}</a>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {
      administor:{
      	name:'陆露',
      	phone:'17377157510',
      	email:'121897894@qq.com',
      	blog:'http://www.cnblogs.com/crisis66/',
      	msg:'Contact with me'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
