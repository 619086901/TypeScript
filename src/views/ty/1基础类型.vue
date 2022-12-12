<template>
<div>基础类型</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld1',
  props: {
    msg: String
  },
  setup(props, context) {
    console.log('1基础类型')
    console.log(props)
    console.log(context)
    let one: number = 1
    let str: string = '范'
    let boo: boolean = true
    //数组
    let list: Array<number> = [1, 2, 3]
    console.log('---数组---')
    console.log(one, str, boo, list)

    //元组
    let x: [string, number] = ['1', 2]
    console.log('---元组---')
    console.log(x)

    //枚举
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4
    }
    let colorName: string = Color[4]
    console.log('---枚举---')
    console.log(colorName) //Blue

    //Any 直接通过编译阶段的检查
    let notSure: any = 4
    console.log('---Any---')
    console.log('notSure', notSure)
    notSure = '我更改了'
    console.log('直接通过编译阶段的检查', notSure)
    let list2: any[] = [1, true, 'free']
    list2[1] = 100
    console.log(list2)

    //Void
    function warnUser(): void {
      console.log('Void只能为undefined，null')
    }
    let unde: void = undefined
    console.log(unde)
    warnUser()
    let unf: undefined = undefined
    let n: null = null

    //Never
    function error(message: string): never {
      throw new Error(message)
    }

    function fail() {
      return error('我是error')
    }

    function infiniteLoop(): never {
      while (true) {}
    }

    //Object
    function create(o: object | null): void {}

    create({ prop: 0 })
    create(null)
    // create(42) // Error
    // create('string') // Error
    // create(false) // Error
    // create(undefined) // Error

    //类型断言
    let someValue: any = 'this is a String'

    let strLength: number = (someValue as string).length

    console.log(strLength)
    return {}
  }
})
</script>

<style scoped lang="scss"></style>
