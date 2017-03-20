<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <navbar :showHead="true" :showBody="true"></navbar>
    <section class="main-container">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    </section>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import { Navbar, FooterBar } from 'components/layout'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    FooterBar,
    NprogressContainer
  },

  methods: mapActions([
    'toggleDevice',
    'toggleSidebar'
  ]),

  beforeMount () {
    const { body } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        this.toggleDevice(isMobile ? 'mobile' : 'other')
        this.toggleSidebar(!isMobile)
      }
    }

    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  }
}
</script>

<style lang="scss">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

@import '~bulma';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
$primary: #772b90;

a {
  color: rgba(119, 43, 144, 0.8);

  :hover   {
    color: $primary;
  }
}

.nprogress-container {
  position: fixed !important;
  width: 100%;
  height: 1.5rem;
  z-index: 2048;
  pointer-events: none;

  #nprogress {
    top: 2px;
    $color: #772b90;

    .bar {
      background: $color;
    }
    .peg {
      box-shadow: 0 0 10px $color, 0 0 5px $color;
    }

    .spinner-icon {
      display: none;
    }
  }
}

.main-container {
  padding-top: 6rem;
  padding-bottom: 2rem;
  background-color: whitesmoke;

  @include mobile() {
    padding-top: 4rem;
  }
}
</style>
