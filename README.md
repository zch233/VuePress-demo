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

### 替代 markdown 内容

> 由于用 markdown 写页面非常麻烦，所以我们采用在 `markdown` 中引入 `.vue` 文件的方式来写页面
> 🌰：在 docs/vuepress/components 下增加 `.vue` 文件
> 之后在 markdown 引入即可，如下，需要用 `ClientOnly` 包裹组件，组件名称为 **文件的路径**

 
```
<ClientOnly>
  <basic-button-index></basic-button-index>
</ClientOnly>
```
