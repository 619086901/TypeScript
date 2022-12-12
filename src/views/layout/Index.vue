<template>
  <a-layout>
    <Sider />
    <a-layout>
      <Header />
      <Content />
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import Footer from './components/Index footer.vue'
import Content from './components/Index content.vue'
import Header from './components/Index header.vue'
import Sider from './components/Index sider.vue'
export default {
  name: 'Layout',
  components: {
    Footer,
    Content,
    Header,
    Sider
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.ant-layout {
  height: 100vh;
}
</style>
