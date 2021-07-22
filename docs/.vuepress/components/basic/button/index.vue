<template>
  <div>
    <main>
      <h3>基础用法</h3>
      <div class="block">
        <div class="source">
          <GupoButton>默认按钮</GupoButton>
          <GupoButton type="primary">主要按钮</GupoButton>
          <GupoButton type="success">成功按钮</GupoButton>
          <GupoButton type="warning">警告按钮</GupoButton>
          <GupoButton type="info">信息按钮</GupoButton>
          <GupoButton type="error">失败按钮</GupoButton>
        </div>
        <div class="source">
          <GupoButton round>圆角按钮</GupoButton>
          <GupoButton round type="primary">主要按钮</GupoButton>
          <GupoButton round type="success">成功按钮</GupoButton>
          <GupoButton round type="warning">警告按钮</GupoButton>
          <GupoButton round type="info">信息按钮</GupoButton>
          <GupoButton round type="error">失败按钮</GupoButton>
        </div>
        <CodeBar title="使用 type、round 和 circle 属性来定义 Button 的样式。" :code="code1"></CodeBar>
      </div>
    </main>
    <footer><Attr /></footer>
  </div>
</template>

<script>
import GupoButton from "../../../../../src/components/Basic/Button";
import CodeBar from "../../utils/CodeBar";
import Attr from './attr'

export default {
  name: 'ButtonExample',
  components: {CodeBar, GupoButton, Attr},
  data() {
    return {
      code1: `
        <div>
          <GupoButton>默认按钮</GupoButton>
          <GupoButton type="primary">主要按钮</GupoButton>
          <GupoButton type="success">成功按钮</GupoButton>
          <GupoButton type="warning">警告按钮</GupoButton>
          <GupoButton type="info">信息按钮</GupoButton>
          <GupoButton type="error">失败按钮</GupoButton>
        </div>
        <div>
          <GupoButton round>圆角按钮</GupoButton>
          <GupoButton round type="primary">主要按钮</GupoButton>
          <GupoButton round type="success">成功按钮</GupoButton>
          <GupoButton round type="warning">警告按钮</GupoButton>
          <GupoButton round type="info">信息按钮</GupoButton>
          <GupoButton round type="error">失败按钮</GupoButton>
        </div>
      `.replace(/^ {8}/gm, '').trim(),
    }
  },
}
</script>