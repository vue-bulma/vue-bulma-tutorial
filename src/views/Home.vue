<template>
  <div class="tile is-parent is-vertical">
    <article class="tile is-child has-text-centered home-brief">
      <h3 class="title is-2">
        <strong>{{$t('home.brief[0]')}}</strong>{{$t('home.brief[1]')}}
      </h3>
      <p><img width="200" src="~assets/logo.png"></p>
      <p>{{$t('home.brief[2]')}}</p>
      <p class="subtitle is-4">
        <a class="vuejs" href="https://vuejs.org">Vuejs</a> & <a class="bulma" href="http://bulma.io">Bulma</a>
      </p>
      <p>{{$t('home.brief[3]')}}</p>
      <div class="column has-text-centered">
        <span class="icon is-large" style="margin-right: -15px;">
          <i class="fa fa-mobile"></i>
        </span>
        <span class="icon is-large">
          <i class="fa fa-tablet"></i>
        </span>
        <span class="icon is-large" style="margin-right: 10px;">
          <i class="fa fa-desktop"></i>
        </span>
        <p class="title is-4"><strong>{{$t('home.brief[4]')}}</strong></p>
        <p class="subtitle">{{$t('home.brief[5]')}}</p>
      </div>
      <p class="hero-buttons">
        <a class="button is-large hvr-buzz" href="https://github.com/jgthms/bulma/archive/0.3.2.zip">
          <span class="icon">
            <i class="fa fa-television"></i>
          </span>
          <span>{{$t('home.brief[6]')}}</span>
        </a>
        <a class="button is-large hvr-buzz" href="/documentation/overview/start/">
          <span class="icon">
            <i class="fa fa-book"></i>
          </span>
          <span>{{$t('home.brief[7]')}}</span>
        </a>
      </p>
    </article>
    <hr>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/variables';
@import '~hover.css/scss/hover.scss';
$primary: #772b90;

.home-brief {
  color: $primary;

  a.button {
    color: $primary;

    &:hover,
    &:hover span {
      color: $primary;
    }
  }

  .hvr-buzz {
    display: flex;
  }
}

div.is-parent {
  margin: auto;
  max-width: 90rem;
}

.vuejs {
  color: #4fc08d;
}

.bulma {
  color: #00d1b2;
}

</style>
