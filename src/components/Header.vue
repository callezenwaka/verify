<template>
  <div>
    <ul class="nav">
      <li class="logo"><a class="" href="/"><h3>&#8945;&#8944;</h3></a></li>
      <li><router-link class="nav_link" to="/">Home</router-link></li>
      <li class="clich"><router-link class="nav_link" to="/clich">Clich</router-link> <span> &#65088;</span>
          <ul class="drop">
             <li><router-link class="nav_link" to="/item1">Item1</router-link></li>
             <li><router-link class="nav_link" to="/item2">Item2</router-link></li>
             <li><router-link class="nav_link" to="/item3">Item3</router-link></li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 0;
}
.nav {
  display: inline-block;
  /* flex-direction: row; */
  background-color: #00400E;
  padding: 15px 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 0;
  margin: 0 10px;
}
a {
  color: #80C18F;
  text-decoration: none;
}
.nav_link {
    /*background: green;*/
}
.clich {
  position: relative;
}
.drop {
  display: block;
  position: absolute;
}
.clich:hover {
  background-color: blueviolet;
  display: none;
}
</style>
