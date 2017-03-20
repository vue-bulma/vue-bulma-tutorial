<template>
  <div class="menu">
    <span class="menu-toggle is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
      <a class="icon is-angle" :menu-toggle="sidebar.opened">
        <i class="fa fa-yelp"></i>
      </a>
    </span>
    <article class="menu-sidebar animated" :class="{ slideInLeft: device.isMobile && sidebar.opened, slideOutLeft: device.isMobile && !sidebar.opened }">
      <!-- <p class="menu-label">
        {{menuHeader}}
      </p> -->
      <ul class="menu-list">
        <li v-for="(item, index) in menuItems">
          <router-link :aria-expanded="isExpanded(item) ? 'true' : 'false'"
            :to="`/${category}/${current.lang}/${item.name.toLowerCase()}`" :exact="true"  v-if="!item.lableOnly">
            <span class="icon is-small"><i :class="['fa', item.icon]"></i></span>
            {{ getItemLabel(item) }}
          </router-link>
          <a :aria-expanded="isExpanded(item)" v-else @click="item.expanded = !item.expanded">
            <span class="icon is-small"><i :class="['fa', item.icon]"></i></span>
            {{ getItemLabel(item) }}
            <span class="icon is-small is-angle" v-if="item.children && item.children.length">
              <i class="fa fa-angle-down"></i>
            </span>
          </a>

          <expanding v-if="item.children && item.children.length">
            <ul v-show="isExpanded(item)">
              <li v-for="subItem in item.children" v-if="!subItem.lableOnly">
                <router-link :to="`/${category}/${current.lang}/${subItem.name.toLowerCase()}`">
                  {{ getItemLabel(subItem) }}
                </router-link>
              </li>
            </ul>
          </expanding>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import Expanding from 'vue-bulma-expanding'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Expanding
  },

  props: {
    items: {
      type: Array,
      default: []
    },
    category: String
  },

  data () {
    return {
      isReady: false,
      menuItems: this.items
    }
  },

  methods: {
    ...mapActions([
      'toggleSidebar'
    ]),
    isExpanded (item) {
      return item.expanded
    },
    getItemLabel (item) {
      return this.$t(this.category + '.' + item.name.toLowerCase())
    },
    expandMatchItem (route) {
      let matchedName = route.name.replace('-' + this.current.lang, '')

      this.menuItems.forEach((menuItem) => {
        if (menuItem.children) {
          menuItem.children.forEach((item) => {
            if (item.name === matchedName) menuItem.expanded = true
          })
        }
      })
    }
  },

  mounted () {
    let route = this.$route
    if (route.name) {
      this.isReady = true
      this.expandMatchItem(route)
    }
  },

  computed: {
    ...mapGetters({
      current: 'current',
      device: 'device',
      sidebar: 'sidebar'
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

.menu {

  .icon {
    vertical-align: baseline;
    &.is-angle {
      transition: transform .377s ease;
    }
  }

  .menu-sidebar {
    width: 20%;
    min-width: 10rem;
    background: #FFF;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;

    @include mobile() {
      position: fixed;
      z-index: 1023;
      top: 6rem;
      left: 0;
      height: 80%;
      transform: translate3d(-180px,0,0);
    }

    .menu-label {
      padding: 10px 15px;
      margin: 0px;
    }

    .menu-list {
      padding-top: 1rem;

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

  .menu-toggle {
    z-index: 1025;
    position: fixed;
    top: 50%;
    cursor: pointer;
    left: -0.8rem;
    padding: 0.6rem 0.5rem 0.5rem 0.9rem;
    background-color: white;
    border-radius: 0 1.5rem 1.5rem 0;
    box-shadow: 1px 1px 2px rgba(10, 10, 10, 0.1), 1px 0 0 1px rgba(10, 10, 10, 0.1);

    span a {
      &[menu-toggle="true"] {
        transform: rotate(180deg);
      }
    }
  }
}


</style>
