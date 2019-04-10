<template>
  <section>
    <!--title-->
    <article class="mb-5">
      <div class="custom-editor__title">
        <label for="edit-title">Title:</label>
        <textarea
          id="edit-title"
          type="text"
          :value="title"
          @input="$emit('update:title', $event.target.value)"
        ></textarea>
      </div>
    </article>
    <!--content-->
    <article>
      <div class="custom-editor__content">
        <label for="blog-editor-01">Content:</label>
        <jodit-vue
          id="blog-editor-01"
          v-model="innerContent"
          :extra-buttons="extraButtons"
          :config="joditConfig"
        />
      </div>
    </article>
  </section>
</template>

<script>
  import 'jodit/build/jodit.min.css';
  import JoditVue from 'jodit-vue';

  // utils
  import { extraButtons } from '@/utils/jodit';

  const sanitizeHtml = require('sanitize-html');

  const {
 h1, h2, h3, h4, h5, h6, p,
} = extraButtons;

  export default {
    name: 'Edit',
    props: ['title', 'content'],
    data() {
      return {
        innerContent: '',
        extraButtons: [h1, h2, h3, h4, h5, h6, p],
        joditConfig: {
          enter: 'DIV',
        },
      };
    },
    mounted() {
      this.innerContent = this.content;
    },
    watch: {
      innerContent(val) {
        console.log('in watch edit:', val);
        const filtedEl = sanitizeHtml(val, {
          allowedTags: [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
            'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
            'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe'],
          exclusiveFilter(frame) {
            return frame.tag === 'div' && !frame.text.trim();
          },
        });
        // using .sync modifiers
        this.$emit('update:content', filtedEl);
      },
    },
    components: {
      JoditVue,
    },
  };
</script>

<style lang="scss" scoped>
  .custom-editor__title {
    textarea {
      width: 100%;
      border-radius: 5px;
      padding: 10px;
      font-weight: 500;
    }
  }

  .custom-editor__content {
    & /deep/ .jodit_wysiwyg {
      min-height: 415px !important;
      max-height: 600px !important;
    }
  }

</style>
