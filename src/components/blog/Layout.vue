<template>
  <section class="container-fluid">
    <div class="row">
      <aside class="col-md-3">
        <slot name="aside"></slot>
      </aside>
      <main class="col-md-6">
        <slot name="main"></slot>
      </main>
    </div>
  </section>

</template>

<script>

export default {
  name: 'Layout',
};
</script>

<style scoped>
  main {
    border-left: 1px #ddd solid;
  }

</style>
