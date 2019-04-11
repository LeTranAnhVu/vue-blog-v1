<template>
  <section class="review">
    <div class="overlay">
      <i class="fa fa-arrows-alt trigger-fullscreen" aria-hidden="true" @click="fullscreen"></i>
    </div>
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
    data() {
      return {
        fullscreenBlog: null,
      };
    },
    components: {
      Layout,
      BlogContent,
    },
    methods: {
      fullscreen() {
        // fullscreen
        this.fullscreenBlog = this.$el.cloneNode(true);
        this.fullscreenBlog.classList.replace('review', 'fullscreen');
        this.fullscreenBlog.querySelector('.trigger-fullscreen')
          .addEventListener('click', () => {
            document.body.removeChild(this.fullscreenBlog);
          });

        // make the fullheight
        const dummyDiv = document.createElement('DIV');
        this.fullscreenBlog.style.display = 'flex';
        this.fullscreenBlog.style.flexDirection = 'column';
        dummyDiv.style.flexGrow = '1';
        this.fullscreenBlog.appendChild(dummyDiv);
        document.body.appendChild(this.fullscreenBlog);

      },
    },
  };
</script>

<style lang="scss" scoped>


</style>
