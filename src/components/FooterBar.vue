<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p class="social">
          <a :href="'https://github.com/'">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </a>
          <a href="https://twitter.com/_fundon">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.footer {  
  background-color: white;
  padding: 1.5rem;

  .social a {
    margin-right: 0.75rem;
  }
}
</style>
