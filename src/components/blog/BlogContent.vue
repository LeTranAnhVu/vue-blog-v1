<template>
  <article>
    <div class="blog-content__title">
      <h1 class="blog-content__title__content">
        {{blog.title}}
      </h1>
      <blog-meta
        class="mt-1"
        :author="blog.authorName"
        :created_at="blog.created_at"
      ></blog-meta>
    </div>
  </article>
</template>

<script>
import BlogMeta from './BlogMeta.vue';

export default {
  name: 'BlogContent',
  components: {
    BlogMeta,
  },
  data() {
    return {
      blog: {
        title: '00__first__blog',
        content: '',
        authorName: 'admin',
        created_at: '2 days ago',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/style/helpers";
  .blog-content__title {
    padding: 50px;
    &__content{
      margin-bottom: 0;
      text-align: left;
      font-size: 2rem;
      color: #555;
    }
    @include breakpoint-up($md){
      &__content {
        font-size: 4rem;
      }
    }
  }
</style>
