<template>
  <article class="menu app-sidebar">
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
        <a aria-expanded="isExpanded(item)" v-else @click="item.expanded = !item.expanded">
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
    category: String,
    show: Boolean
  },

  data () {
    return {
      isReady: false,
      menuItems: this.items
    }
  },

  methods: {
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

.app-sidebar {
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
</style>
