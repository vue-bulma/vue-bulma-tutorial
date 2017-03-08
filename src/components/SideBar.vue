<template>
  <article class="menu manual-sidebar">
    <!-- <p class="menu-label">
      {{menuHeader}}
    </p> -->
    <p class="menu-label">
      Manul
    </p>
    <ul class="menu-list">
      <li v-for="(item, index) in items">
        <router-link :to="`/${current.lang}${item.path}`" :exact="true"  v-if="item.path">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{item.meta.label}}
        </router-link>
        <a :aria-expanded="true" v-else @click="toggle(index, item)">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>

        <expanding v-if="item.children && item.children.length">
          <ul v-show="true">
            <li v-for="subItem in item.children" v-if="subItem.path">
              <router-link :to="subItem.path">
                {{ subItem.meta && subItem.meta.label || subItem.name }}
              </router-link>
            </li>
          </ul>
        </expanding>
      </li>
    </ul>
  </article>
</template>

<script>
import Expanding from 'vue-bulma-expanding'
import { mapGetters } from 'vuex'

export default {
  components: {
    Expanding
  },

  props: {
    items: {
      type: Array,
      default: []
    },
    show: Boolean
  },

  data () {
    return {
      isReady: false
    }
  },

  methods: {
    toggle (index, item) {
      console.log('toggle')
    }
  },

  mounted () {
    let route = this.$route
    if (route.name) {
      this.isReady = true
    }
  },

  computed: {
    ...mapGetters({
      current: 'current'
    })
    // menuHeader () {
    //   return this.$route.path.split('/')[3]
    // }
  },

  watch: {
    $route (route) {
      this.isReady = true
    }
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';
$primary: #772b90;

.manual-sidebar {
  width: 20%;
  min-width: 10rem;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;

  @include mobile() {
    transform: translate3d(-180px, 0, 0);
  }

  .icon {
    vertical-align: baseline;
    &.is-angle {
      transition: transform .377s ease;
    }
  }

  .menu-label {
    padding: 10px 15px;
    margin: 0px;
  }

  .menu-list {
    li a {
      &[aria-expanded="true"] {
        .is-angle {
          transform: rotate(180deg);
        }
      }
    }

    a.is-active {
      background-color: #cca3da;
      border-left: 0.3rem $primary solid;
      color: #fff;
    }

    li a + ul {
      margin: 0 10px 0 15px;
    }
  }

}
</style>
