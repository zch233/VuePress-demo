# gupo 前端组件库

## 使用说明
1. 首先在 src 中增加组件
2. 增加页面，直接在 docs/ 下增加 README.md 文件即可创建，🌰：/docs/components/basic/button/README.md
3. 增加路由，在 .vuepress/config.js 中 修改/新增 sidebar 属性即可，

   🌰1：
   ```
   { title: '开始', path: '/components/introduce/' }
   ```
   🌰2（嵌套路由）：
   ```
   {
    title: '通用',
    collapsable: false,
    children: [
        { title: 'Button 按钮', path: '/components/basic/button/' },
    ]
   }
   ```
4. done

### markdown 编写示例

> 可以直接在 markdown 里面写 vue 的模版内容，并会自动当作示例

```
::: demo
` ` `vue
<template>
  ...
</template>
<script>
   ...
</script>
` ` `
:::
```

> 也可以在 enhanceApp.js 里可以引入全局组件

### 更加自定义的 markdown 内容

> 由于直接在 markdown 里面写，会默认显示所有内容，但是又想隐藏一部分代码，所以我们采用在 `markdown` 中引入 `.vue` 文件的方式来写页面
> 🌰：在 docs/vuepress/components 下增加 `.vue` 文件
> 之后在 markdown 引入即可，如下，需要用 `ClientOnly` 包裹组件，组件名称为 **文件的路径**

 
```
<ClientOnly>
  <basic-button-index></basic-button-index>
</ClientOnly>
```
