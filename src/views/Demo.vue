<template>
  <div class="tile is-ancestor is-vertical">
    <div class="tile is-parent is-vertical">
      <article class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="~assets/vue-admin/logo.svg" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4"><a href="https://admin.vuebulma.com">Vue Admin</a></p>
              <p class="subtitle is-6">{{$t('demo.vueadmin.desc')}}</p>
            </div>
            <a href="https://github.com/vue-bulma/vue-admin">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
          </div>
          <hr>
          <div class="columns is-multiline">
            <div article class="column is-half">
              <article class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{$t('demo.vueadmin.charts')}}
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <img src="~assets/vue-admin/charts.png" alt="Image">
                  </figure>
                </div>
              </article>
            </div>
            <div article class="column is-half">
              <article class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{$t('demo.vueadmin.form')}}
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <img src="~assets/vue-admin/form.png" alt="Image">
                  </figure>
                </div>
              </article>
            </div>
            <div article class="column is-half">
              <article class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{$t('demo.vueadmin.components')}}
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <img src="~assets/vue-admin/components.png" alt="Image">
                  </figure>
                </div>
              </article>
            </div>
            <div article class="column is-half">
              <article class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{$t('demo.vueadmin.tables')}}
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <img src="~assets/vue-admin/tables.png" alt="Image">
                  </figure>
                </div>
              </article>
             </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
div.is-ancestor {
  margin: auto;
  max-width: 90rem;

  .columns .card {
    margin: 0rem;
  }
}
</style>
