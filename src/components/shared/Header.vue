<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blogs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  .navbar-nav {
    .nav-item{
      padding: 0px 10px;
      &.active{
        .nav-link{
          text-decoration: none;
          font-weight: 700;
          transform: scale(1.1);
          color: #fff
        }
      }
      .nav-link {
        color: #ddd;
        transition: all 0.1s ease-in ;
        &:hover{
          text-decoration: none;
          font-weight: 700;
          transform: scale(1.1);
          color: #fff
        }
      }
    }

  }
</style>
