<template>
  <div>类</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld5',
  setup() {
    //函数类型
    //为函数定义类型
    function add(x: number, y: number): number {
      return x + y
    }

    let myAdd = function (x: number, y: number): number {
      return x + y
    }
    //书写完整函数类型
    //=>指定返回值类型
    let myAdd2: (x: number, y: number) => number = function (
      x: number,
      y: number
    ): number {
      return x + y
    }

    console.log(myAdd2(1, 2))

    //推断类型
    let myAdd3 = function (x: number, y: number): number {
      return x + y
    }
    let myAdd4: (baseValue: number, increment: number) => number = function (
      x,
      y
    ) {
      return x + y
    }

    //可选参数和默认参数
    function buildName(firstName: string, lastName: string) {
      return firstName + '=' + lastName
    }

    //let result1 = buildName('boy')
    // let result2 = buildName('boy', '', '')
    let result3 = buildName('boy', 'haha')

    console.log(result3)

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
