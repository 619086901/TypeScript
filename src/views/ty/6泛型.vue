<template>
  <div>泛型</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld6',
  setup() {
    function identity<T>(arg: T): T {
      return arg
    }

    console.log(identity(1))
    console.log(identity('1'))
    let output = identity<string>('myString')
    let output2 = identity<number>(123)
    console.log(output)
    console.log(output2)
    function loggingIdentity<T>(arg: T[]): T[] {
      console.log(arg.length)
      return arg
    }
    function loggingIdentity2<T>(arg: Array<T>): Array<T> {
      console.log(arg.length)
      return arg
    }
    let output3 = loggingIdentity<number>([1, 2])
    console.log(output3)

    console.log('-----泛型类型-----')
    function identity2<T>(arg: T): T {
      return arg
    }
    let myIdentity: <T>(arg: T) => T = identity2
    let myIdentity2: { <T>(arg: T): T } = identity2
    // 接口
    interface Gen {
      <T>(arg: T): T
    }
    let myIdentity3: Gen = identity2
    interface Genfn<T> {
      (arg: T): T
    }
    let myIdentity4: Genfn<number> = identity2
    // 泛型类
    class GenClass<T> {
      zeroValue: T | undefined
      add: ((x: T, y: T) => T) | undefined
    }
    let myGen = new GenClass<number>()
    myGen.zeroValue = 0
    myGen.add = (x, y) => x + y

    console.log(myGen.add(1, 2))

    let myGen2 = new GenClass<string>()
    myGen2.zeroValue = ''
    myGen2.add = (x, y) => x + y

    console.log(myGen2.add(myGen2.zeroValue, 'text'))

    // 泛型约束
    interface Lengthwise {
      length: number
    }
    // 声明类型既不是“void”也不是“any”的函数必须返回一个值。
    function loggingIdentity3<T extends Lengthwise>(arg: T): T {
      console.log(arg.length)
      return arg
    }
    loggingIdentity3({ length: 10, value: 3 })

    // 在泛型约束中使用类型参数

    function getproperty(obj: any, key: string) {
      return obj[key]
    }
    let x = { a: 1, b: 2, c: 3, d: 4 }
    console.log(getproperty(x, 'a'))
    console.log(getproperty(x, 'm'))

    // 在泛型里使用类类型
    function create<T>(c: { new (): T }): T {
      return new c()
    }

    class BeeKeeper {
      hasMask: boolean = false
    }
    class ZooKeeper {
      nametag: string = 'nametag'
    }
    class Animal {
      numLegs: number = 123
    }
    class Bee extends Animal {
      keeper: BeeKeeper = new BeeKeeper()
    }
    class Lion extends Animal {
      keeper: ZooKeeper = new ZooKeeper()
    }
    function createInstance<A extends Animal>(c: new () => A): A {
      return new c()
    }
    console.log(createInstance(Lion))
    console.log(createInstance(Bee))

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
