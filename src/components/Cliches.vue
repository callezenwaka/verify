<template>
  <div class="">
    <div class="container">
      <div class="page_head"><h2 class="page_header">Latest Cliches</h2><hr class="scotch-rule"></div>
      <ul class="cliches">
        <li class="nav_item" v-for="clich in cliches" :key="clich.id"><router-link class="nav_link" to="/clich.url">{{ clich.title }}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Cliches',
  components: {
    Header
  },
  data () {
    return {
      cliches: [
        {
          title: 'Item1',
          id: 1,
          url: 'item1'
        },
        {
          title: 'Item2',
          id: 2,
          url: 'item2'
        },
        {
          title: 'Item3',
          id: 3,
          url: 'item3'
        }
      ],
      loading: '',
      status: ''
    }
  },
  computed: {
  },
  methods: {
    // async onCreateClich () {
    //   if (!this.formIsFilled) {
    //     this.loading = 'The title is required'
    //   } else {
    //     this.loading = 'Sending clich, please wait . . .'
    //     return console.log(this.clich)
        //await PostService.createPost(this.post)
        // console.log('Sent successfully')
        // this.loading = ''
        // this.$router.push({name: 'Posts'})
        // console.log(this.post)
        // this.loading = ''
        // this.post = {}
        // console.log(this.post)
        // console.log('Here')
        // this.$router.push({name: 'Posts'})
  //     }
  //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0;
  padding: 0 20px;
}
.page_message {
  background-color: #2B803E;
  color: #80C18F;
}
.scotch-rule:first-child {
  margin: 0 0 6px;
}
.scotch-rule {
  border-left: none;
  border-right: none;
}
.scotch-rule {
  box-sizing: content-box;
  content: '';
  display: block;
  border-top: 2px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  height: 1px;
  margin: 15px 0;
  background-color: #fff;
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
