<template>
  <section>
    <layout>
      <template v-slot:main>
        <blog-content></blog-content>
      </template>
    </layout>
  </section>
</template>

<script>
import Layout from '../components/blog/Layout.vue';
import BlogContent from '../components/blog/BlogContent.vue';

export default {
  name: 'Blog',
  components: {
    layout: Layout,
    BlogContent,
  },
};
</script>

<style scoped>

</style>
