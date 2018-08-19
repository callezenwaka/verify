<template>
  <div class="">
    <Header />
    <div class="container">
      <div class="">
        <div class="page_head"><h2 class="page_header">Publish Clich</h2><hr class="scotch-rule"></div>
        <form @submit.prevent="onCreateClich">
          <div class="form-field">
            <label for="title">Title: <span class="page_form_input_required">*</span></label>
            <input type="text" name="title" v-model="clich.title" placeholder="Enter blog title" style="" class="page_form" id="title" aria-required="true" aria-invalid="false" required autofocus />
          </div>
          <br>
          <div class="button_container">
            <button class="form_button" v-bind:class="{ page_button: formIsFilled }" :disabled="!formIsFilled">Create Clich</button>
          </div>
            <span class="page_message" v-if="loading">{{ loading }} </span>
            <span class="page_message">{{ status }}</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Create',
  components: {
    Header
  },
  data () {
    return {
      clich: {
        title: ''
      },
      loading: '',
      status: ''
    }
  },
  computed: {
    formIsFilled () {
      return this.clich.title !== ''
    }
  },
  methods: {
    async onCreateClich () {
      if (!this.formIsFilled) {
        this.loading = 'The title is required'
      } else {
        this.loading = 'Sending clich, please wait . . .'
        return console.log(this.clich)
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
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0;
  padding: 0 20px;
}
.page_form {
  width: 100%;
  margin-top: 5px;
}
.form_button {
  width: 100%;
  padding: 5px;
  margin: 5px auto;
  color: #80C18F;
  cursor: pointer;
}
.page_button {
  background-color: #2B803E;
}
.button_container {
  margin-bottom: 5px;
}
.page_message {
  background-color: #2B803E;
  color: #80C18F;
}
</style>
