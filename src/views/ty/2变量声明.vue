<template>
  <div>变量声明</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld2',
  setup() {
    console.log('2变量声明')
    function f({ a, b = 0 } = { a: '' }): void {
      console.log('a=', a)
      console.log('b=', b)
      // ...
    }
    f({ a: 'yes' }) // ok, default b = 0
    f() // ok, default to {a: ""}, which then defaults b = 0
    //f({}) // error, 'a' is required if you supply an argument
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
