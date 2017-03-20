# 按钮

基础组件，用于触发业务逻辑。使用样式 `button` 将元素转化为按钮

---

::: demo 色调样式|色调样式包括白、浅色、深色和黑色。通过设置样式 `is-white` `is-light` `is-dark` 或 `is-black` 来设定。

```html
<template>
  <div>
    <button class="button is-white">White</button>
    <button class="button is-light">Light</button>
    <button class="button is-dark">Dark</button>
    <button class="button is-black">Black</button>
  </div>
</template>
```
:::

::: demo 功能类型|除了基本按钮 `button` 按钮外，功能类型还包括主要按钮、信息按钮、成功按钮、警告按钮、危险按钮和链接按钮。通过设置样式 `is-primary` `is-info` `is-success` `is-warning` `is-danger` `is-link` 来设定。

```html
<template>
  <div>
    <button class="button">Button</button>
    <button class="button is-primary">Primary</button>
    <button class="button is-info">Info</button>
    <button class="button is-success">Success</button>
    <button class="button is-warning">Warning</button>
    <button class="button is-danger">Danger</button>
    <button class="button is-link">Link</button>
  </div>
</template>
```
:::

::: demo 尺寸|除了普通尺寸外，按钮尺寸目前还包括 `is-small` 小、 `is-medium` 中等和 `is-large` 大。

```html
<template>
  <div>
    <button class="button is-small">Small</button>
    <button class="button">Default</button>
    <button class="button is-medium">Medium</button>
    <button class="button is-large">Large</button>
  </div>
</template>
```
:::

