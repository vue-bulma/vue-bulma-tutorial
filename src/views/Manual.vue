<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <sidebar :items="menuItems" category="manual" ></sidebar>
      <article class="card">
        <transition
          mode="out-in"
          enter-active-class="fadeIn"
          leave-active-class="fadeOut"
          appear>
          <router-view class="animated manual-content"></router-view>
        </transition>
      </article>
    </div>
  </div>
</template>

<script>
import Sidebar from 'components/SideBar'
import { mapGetters, mapActions } from 'vuex'
import manual from 'src/router/manual'

export default {
  components: {
    Sidebar
  },

  computed: {
    ...mapGetters({
      device: 'device',
      sidebar: 'sidebar',
      current: 'current'
    }),
    menuItems () {
      return manual
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';

div.is-ancestor {
  margin: auto;
  max-width: 90rem;
  min-height: 50rem;

  .is-parent > .card {
    width: 100%;
    padding: 1rem 3rem;
    transform: translate3d(0, 0, 0);

    @include mobile() {
      padding: 1rem;
    }
  }
}

</style>

<style lang="scss">
.manual-content {
  > h1 {
    font-size: 1.4rem;
    font-weight: 700;
    padding-bottom: 0.5rem;

    a {
      padding-right: 0.3rem;
    }
  }

  > hr {
    margin: 1rem 0;
  }

  > h2 {
    font-size: 1.2rem;
    padding-bottom: 1rem;

    a {
      padding-right: 0.3rem;
    }
  }

  > p {
    padding-left: 1rem;
  }
}
</style>
