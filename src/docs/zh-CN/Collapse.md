## 折叠组件

折叠组件用于在页面内容较多时，隐藏部分不重要数据，仅显示标题或重点信息，指引用户自行点击查阅。需要从`vue-bulma-collapse`中引入组件 `Collapse` 和 `Item`
本示例中将 `Item` 引入并重新命名为 `CollapseItem`

<script>
import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

export default {
  components: {
    Collapse,
    CollapseItem
  }
}
</script>

---

::: demo 内嵌折叠|在 `item` 标签中再次使用 `collapse` 可以进行内嵌折叠。示例中

```html
<template>
  <collapse>
    <collapse-item title="Components">
      Components content
    </collapse-item>
    <collapse-item title="Elements">
      Elements content
    </collapse-item>
    <collapse-item title="Nests">
      <collapse>
        <collapse-item title="Nest Child">
          Nest content
        </collapse-item>
      </collapse>
    </collapse-item>
  </collapse>
</template>
```
:::

## Collapse Item 属性

| 名称 | 类型 | 说明 |
|------|----|--------|
| selected | Boolean | 折叠面板是否展开<br>默认值：`false` |
| title | String | 折叠面板的标题，必填 |
