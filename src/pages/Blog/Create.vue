<template>
  <section class="container">
    <article class="row">
      <!--edit-->
      <div class="col-lg-6">
        <h4>Edit</h4>
        <div class="custom-editor">
          <jodit-vue
            id="blog-editor-01"
            ref="joditEl"
            v-model="rawHtml"
          />
        </div>
      </div>
      <!--review-->
      <div class="col-lg-6">
        <h4>Review</h4>
        <section class="review">
          <layout>
            <template v-slot:aside>
              <blog-aside></blog-aside>
            </template>
            <template v-slot:main>
              <BlogContent :blog="resultBlog"></BlogContent>
            </template>
          </layout>
        </section>
      </div>
    </article>
    <div class="handlers">
      <button class="btn btn-outline-primary" @click="review(rawHtml)">Review</button>
      <button class="btn btn-outline-secondary"
              @click="post(rawHtml)">Post
      </button>
    </div>

    <!-- Modal -->
    <!--dummy button-->
    <button data-toggle="modal" data-target="#create-blog-modal-01" id="trigger-modal-button"
            style="display: none"></button>

    <div class="modal fade" id="create-blog-modal-01" tabindex="-1" role="dialog"
         aria-labelledby="create-blog-modal-01-label"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="create-blog-modal-01-label">Awesome</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            Would you like to visit new post ?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary"
                    data-dismiss="modal"
                    @click="redirectTo"
            >Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import 'jodit/build/jodit.min.css';
  import JoditVue from 'jodit-vue';
  import Layout from '@/components/blog/Layout.vue';
  import BlogContent from '@/components/blog/BlogContent.vue';
  import BlogAside from '@/components/blog/BlogAside.vue';

  export default {
    name: 'Create',
    components: {
      JoditVue,
      layout: Layout,
      BlogContent,
      BlogAside,
    },
    data() {
      return {
        result: '',
        resultBlog: null,
        rawHtml: '',
        blogTitle: 'unknown',
      };
    },
    methods: {
      review(raw) {
        this.resultBlog = {
          title: this.blogTitle,
          content: raw || '',
          authorName: 'unknown',
          created_at: 'a week ago',
        };
      },
      post(raw) {
        // upload the data to server
        document.getElementById('trigger-modal-button')
          .click();
      },
      redirectTo() {
        console.log('redirect');
        this.$router.push({
          name: 'blog',
          params: { id: 'fkajhsdkfha;dhs;fah' },
        });
      },
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
  }

  .custom-editor {
    & /deep/ .jodit_wysiwyg {
      min-height: 415px !important;
      max-height: 600px !important;
    }
  }

  .handlers {
    margin-top: 10px;

    & > * {
      margin-right: 10px;
    }
  }

</style>
