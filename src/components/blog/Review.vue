<template>
  <section class="review">
    <layout class="smaller">
      <template v-slot:aside>
        <!--<blog-aside></blog-aside>-->
      </template>
      <template v-slot:main>
        <BlogContent :blog="result"/>
      </template>
    </layout>
  </section>
</template>

<script>
  import Layout from '@/components/blog/Layout.vue';
  import BlogContent from '@/components/blog/BlogContent.vue';

  export default {
    name: 'Review',
    props: ['result'],
    components: {
      Layout,
      BlogContent,
    },
  };
</script>

<style lang="scss" scoped>
  .review {
    border-radius: 10px;
    border: #555 1px solid;
    min-height: 500px;
    max-height: 700px !important;
    overflow: scroll;

  .smaller {
    font-size: 0.3rem;
  }
  }


</style>
