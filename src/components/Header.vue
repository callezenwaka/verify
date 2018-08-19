<template>
  <header>
    <ul class="nav_menu">
      <li class="nav_item"><router-link class="nav_link" to="/"><strong>&#8945; &#8944;</strong></router-link></li>
      <li class="nav_item"><router-link class="nav_link" to="/">Home</router-link></li>
      <li class="nav_item"><router-link class="nav_link" to="/create">Add a Clich</router-link></li>
      <li class="nav_item clich"><router-link class="nav_link" to="/cliches">Clich <span><i class="fa fa-angle-down down"></i></span></router-link>
        <ul class="cliches">
           <li class="nav_item"><router-link class="nav_link" to="/item1">Item1</router-link></li>
           <li class="nav_item"><router-link class="nav_link" to="/item2">Item2</router-link></li>
           <li class="nav_item"><router-link class="nav_link" to="/item3">Item3</router-link></li>
        </ul>
      </li>
    </ul>
    <div class="search_form" id="search_form" v-if="searching">
      <form method="POST" action="/" class="search" id="search">   
        <i class="fa fa-search" style="color:#80C18F;margin-right:5px;" aria-hidden="true" @click.prevent="searching = searching"></i>
        <input class="" placeholder="Search Here"/>
        <input type="hidden" name="submit">
      </form>
    </div>
    <div class="search_icon" id="search_icon" v-if="!isSearching" @click.prevent="searching = !searching">
      <i class="fa fa-search" style="" aria-hidden="true" ></i>
    </div>
  </header>
</template>

<script>
// import appData from '@/data'
export default {
  name: 'Header',
  props: {
  },
  data () {
    return {
      cliches: [],
      searching: false,
      searchIcon: true,
      loading: false,
      status: 'No post yet'
    }
  },
  computed: {
    isSearching () {
      if (!this.searching){
        return false
      }
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  -->
<style >
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #00400E;
}
.nav_menu, .nav_item, .nav_link, ul{
  margin: 0;
  padding: 0;
}
.nav_menu {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}
.nav_menu>.nav_item {
  margin: 0 10px;
}
.nav_item {
  display: block;
  list-style-type: none;
  color: #80C18F;
}
.nav_link {
  color: #80C18F;
  text-decoration: none;
  display: block;
}
.clich {
  position: relative;
}
.cliches>.nav_item {
  padding: 10px 5px;
}
.clich>.cliches {
  display: none;
  position: absolute;
  vertical-align: middle;
  padding-top: 12px;
}
.clich:hover, .clich:hover>.cliches {
  display: block;
  background-color: #00400E;
  color: #80C18F;
 /*background-color: rgba(51, 51, 51, 0.08);*/
}
.clich:hover>.cliches>.nav_item:hover {
  display: block;
  background-color: #2B803E;
}
.search_form {
  padding: 10px;
}
.search_icon {
  color: #80C18F;
  padding: 10px;
  cursor: pointer;
}
input:not([type]),
input:focus,
select:focus,
textarea:focus,
button:focus {
  padding: 0;
  margin: 0;
  outline: none;
  border-bottom: 2px solid #2B803E;
}
</style>
