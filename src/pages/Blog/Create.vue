<template>
  <section class="container">
    <article class="row">
      <!--edit-->
      <div class="col-lg-6">
        <h4>Edit</h4>
        <edit
          :title.sync="rawTitle"
          :content.sync="rawContent"
        />
      </div>
      <!--review-->
      <div class="col-lg-6">
        <h4>Review</h4>
        <review
          :result="resultBlog"
        />
      </div>
    </article>
    <div class="handlers">
      <button class="btn btn-outline-primary" @click="review">Review</button>
      <button class="btn btn-outline-secondary"
              @click="post">Post
      </button>
    </div>

    <!-- Modal -->
    <modal
      :title="':))))'"
      :body="'Would you like to do that bro?'"
      :trigger="isShowModal"
      @yes="redirectTo"
    />


  </section>

</template>

<script>
  import Edit from '../../components/blog/Edit.vue';
  import Review from '../../components/blog/Review.vue';
  import Modal from '../../components/shared/modal.vue';

  export default {
    name: 'Create',
    components: {
      Edit,
      Review,
      Modal,
    },
    data() {
      return {
        resultBlog: null,
        rawContent: 'add some content',
        rawTitle: 'Title',
        isShowModal: false,
      };
    },
    mounted() {
      this.review();
    },
    methods: {
      review() {
        console.log('create', this.rawContent);
        this.resultBlog = {
          title: this.rawTitle,
          content: this.rawContent || '',
          authorName: 'unknown',
          created_at: 'a week ago',
        };
      },
      post() {
        // upload the data to server
        this.isShowModal = true;
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
  .handlers {
    margin-top: 10px;

    & > * {
      margin-right: 10px;
    }
  }

</style>
