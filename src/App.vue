<script>
import GupoButton from "./components/Basic/Button";
export default {
  name: 'App',
  components: {
    GupoButton,
  },
  render() {
    return <div id="app">
      <GupoButton>组件调试</GupoButton>
    </div>
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
