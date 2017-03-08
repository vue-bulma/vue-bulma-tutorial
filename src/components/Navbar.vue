<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: showHead, slideOutDown: !showHead }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" v-show="current.page === 'manual'" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
          <a class="nav-item hero-brand is-hidden-mobile" href="/#/home">
            <img class="tour-logo" src="~assets/logo.png">
            <div class="tour-title">
              <span class="vue">Vue</span><span class="bulma">Bulma</span>
            </div>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand is-hidden-tablet" href="/#/home">
            <img src="~assets/logo.png">
          </a>
        </div>
        <div class="nav-right is-flex" v-if="device.isMobile">
          <router-link class="nav-item" to="/demo">
            <span class="icon is-small">
              <i class="fa fa-television"></i>
            </span>
          </router-link>
          <router-link class="nav-item" to="/manual">
            <span class="icon is-small">
              <i class="fa fa-book"></i>
            </span>
          </router-link>
          <span class="nav-item tour-drop-down" 
            @mouseenter="showLangs = true" 
            @mouseleave="showLangs = false">
            <a class="icon  is-small">
              <i class="fa fa-language"></i>
            </a>
            <ul class="tour-drop-down-list" v-show="showLangs">
              <li v-for="(text, lang) in langs" class="hvr-shadow-radial">
                 <a href="javascript:void(0);"
                   :class="{ 'is-active': $i18n.locale === lang }"
                   @click="$i18n.locale = lang">{{text}}</a>
              </li>
            </ul>
          </span>
        </div>
        <div class="nav-right is-flex" v-else>
          <router-link class="nav-item hvr-underline-from-center" to="/demo">
            {{$t('header.nav[0]')}}
          </router-link>
          <router-link class="nav-item hvr-underline-from-center" to="/manual">
            {{$t('header.nav[1]')}}
          </router-link>
          <span class="nav-item tour-drop-down" 
            @mouseenter="showLangs = true" 
            @mouseleave="showLangs = false">
            {{$t('header.nav[2]')}}
            <span class="icon">
              <i class="fa fa-caret-down"></i>
            </span>
            <ul class="tour-drop-down-list" v-show="showLangs">
              <li v-for="(text, lang) in langs" class="hvr-shadow-radial">
                 <a href="javascript:void(0);"
                   :class="{ 'is-active': $i18n.locale === lang }"
                   @click="$i18n.locale = lang">{{text}}</a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import langs from 'i18n/langs'

export default {
  data () {
    return {
      showLangs: false,
      langs: langs
    }
  },

  props: {
    showHead: Boolean,
    showBody: Boolean
  },

  computed: mapGetters({
    device: 'device',
    current: 'current'
  }),

  methods: mapActions([
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';
@import '~hover.css/scss/hover.scss';
$primary: #772b90;

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  background-color: white;

  .nav {
    margin: 0 auto;
    max-width: 90rem;
    height: 5rem;

    @include mobile() {
      height: 2rem;
    }
  }

  .nav-right {
    text-transform: Capitalize;
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.hero-brand {
  .tour-logo {
    max-height: 3rem;
  }

  .tour-title {
    font-size: 1.75rem;

    .vue {
      margin-left: 10px;
    }

    .bulma {
      margin-left: 5px;
    }
  }
}

.tour-drop-down {
  cursor: pointer;

  .tour-drop-down-list {
    box-sizing: border-box;
    position: absolute;
    top: 80%;
    right: 0.75rem;
    max-width: 7rem;
    background-color: white;
    padding: 0.75rem 0;
    border: 1px solid #ddd;
    border-bottom-color: #ccc;
    text-align: left;
    border-radius: 4px;
    white-space: nowrap;

    li {
      line-height: 1.8em;
      padding: 0.25rem 1.5rem;
      margin: 0;
      display: block;

      a:hover {
        color: $primary;
      }
    }
  }
}

.hvr-underline-from-center {
  display: flex;

  &:before {
    background: $primary;
  }
}

</style>
