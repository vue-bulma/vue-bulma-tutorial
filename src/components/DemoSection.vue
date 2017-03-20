<template>
  <section :id="demoId" class="demo-section">
    <div class="card">
      <div class="card-content">
        <slot name="demo"></slot>
      </div>
      <h2 class="demo-title">
        <a class="demo-anchor">{{title}}</a>
      </h2>
      <slot name="description"></slot>
      <header class="card-header" @click="showCode = !showCode">
        <p class="card-header-title">
          查看代码
        </p>
        <a class="card-header-icon" :aria-expanded="showCode">
          <span class="icon is-angle">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </header>
      <expanding>
        <div class="content" v-show="showCode">
          <slot name="code"></slot>
        </div>
      </expanding>
    </div>
  </section>
</template>

<script>
import Expanding from 'vue-bulma-expanding'
import { slugify } from 'transliteration'

export default {
  data () {
    return {
      showCode: false
    }
  },
  props: {
    jsfiddle: Object,
    anchor: String,
    title: String
  },
  components: {
    Expanding
  },
  computed: {
    demoId () {
      return slugify(this.title)
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../styles/code-md.css';

.demo-section {
  margin-top: 2rem;
  margin-bottom: 2rem;

  .demo-title {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: rgba(10, 10, 10, 0.1);
      position: absolute;
      top: 10px;
      left: 0;
    }

    a {
      background: #fff;
      padding: 0 0.5rem 0 1rem;
      position: relative;
      margin-left: 30px;
    }
  }

  .description {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .card-header {
    border-top: rgba(10, 10, 10, 0.1) 1px solid
  }

  header.card-header {
    cursor: pointer;
    a.card-header-icon {
      .is-angle {
        transition: transform .377s ease;
      }

      &[aria-expanded="true"] {
        .is-angle {
          transform: rotate(180deg);
        }
      }
    }
    p.card-header-title {
      font-weight: 500;
      padding-left: 1.5rem;
    }
  }
}

</style>

<style>
.demo-section pre {
  border-top: rgba(10, 10, 10, 0.1) 1px solid;
  background-color: white;
}
</style>
