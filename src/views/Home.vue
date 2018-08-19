<template>
  <div class="">
    <Header/>
    <div>    	
    <Cliches/>
    </div>
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Cliches from '@/components/Cliches.vue'
export default {
  name: 'home',
  components: {
    Header,
    Cliches
  }
}
</script>
