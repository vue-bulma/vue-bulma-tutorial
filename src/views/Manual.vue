<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <sidebar :show="sidebar.opened && !sidebar.hidden" :items="menuItems" v-show="!device.isMobile"></sidebar>
      <article class="card">
        <router-view></router-view>
      </article>
    </div>
  </div>
</template>

<script>
import Sidebar from 'components/SideBar'
import { mapGetters, mapActions } from 'vuex'
import { manulRoutes } from 'src/router'

export default {
  components: {
    Sidebar
  },

  methods: {
    reRenderAnchor() {
      const anchors = document.querySelectorAll('.header-anchor')
      const basePath = window.location.href.split('#').splice(0, 2).join('#')

      anchors.forEach((a) => {
        const href = a.getAttribute('href')
        a.href = basePath + href;
      })
    },
    goAnchor() {
      if (window.location.href.match(/#/g).length > 1) {
        const anchor = window.location.href.match(/#[^#]+$/g)
        if (!anchor) return
        const elm = document.querySelector(anchor[0])
        if (!elm) return
        setTimeout(() => {
          document.documentElement.scrollTop = document.body.scrollTop = elm.offsetTop + 30
        }, 50)
      }
    }
  },

  computed: {
    ...mapGetters({
      device: 'device',
      sidebar: 'sidebar',
      current: 'current'
    }),
    menuItems () {
      console.log(this.current.lang, manulRoutes)
      return manulRoutes[this.current.lang]
    }
  },

  created() {
    window.addEventListener('hashchange', () => {
      if (window.location.href.match(/#/g).length < 2) {
        document.documentElement.scrollTop = document.body.scrollTop = 0
        this.reRenderAnchor()
      } else {
        this.goAnchor()
      }
    })
  },

  mounted() {
    this.reRenderAnchor()
    this.goAnchor()
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

    section > h1 {
      font-size: 2rem; 
    }
  }
}

</style>
