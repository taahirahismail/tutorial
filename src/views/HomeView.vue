<template>
  <div class="home">
    <Form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form-comp.vue'

export default {
  name: 'HomeView',
  components: {
    Form
  }
}
</script>
