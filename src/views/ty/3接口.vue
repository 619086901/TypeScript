<template>
  <div>接口</div>
  <div>mySquare:{{ mySquare }}</div>
</template>

<script lang="ts">
import { defineComponent, readonly } from 'vue'

export default defineComponent({
  name: 'HelloWorld3',
  setup() {
    console.log('3接口')
    function printLabel(labelledobj: { label: string }) {
      console.log(labelledobj)
    }

    let myObj = { size: 10, label: 'Size 10 Object' }
    printLabel(myObj)

    console.log('----------')

    //重写上面的例子
    //用接口来表示
    interface LabelledValue {
      label: string
    }
    function printLabel2(labelledobj2: LabelledValue) {
      console.log(labelledobj2.label)
    }
    let myObj2 = { size: 10, label: 'Size 10 Object' }
    printLabel2(myObj2)

    console.log('-------')
    console.log('可选属性')
    //可选属性
    interface SquareConfig {
      color?: string
      width?: number
    }
    function createSquare(config: SquareConfig): {
      color: string
      area: number
    } {
      let newSquare = { color: 'white', area: 100 }

      if (config.color) {
        newSquare.color = config.color
      }
      if (config.width) {
        newSquare.area = config.width * config.width
      }
      return newSquare
    }

    let mySquare = createSquare({ color: 'block' })
    console.log(mySquare)

    console.log('-------')
    console.log('只读属性')

    interface Point {
      readonly x: number
      readonly y: number
    }

    let p1: Point = { x: 10, y: 20 }
    //p1.x = 5 //error

    let a: number[] = [1, 2, 3, 4]
    //只读数组
    let ro: ReadonlyArray<number> = a
    //ro[0] = 12 //error
    //ro.push(5) //error
    //类型泛型写法Array<number>   number[]普通写法
    a = ro as Array<number>

    console.log('额外的属性检查')
    //额外的属性检查
    //想让opacity不报错，先使用类型断言
    let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)
    console.log(mySquare2)

    interface SquareConfig2 {
      color?: string
      width?: number
      //SquareConfig可以有任意数量的属性,并且只要它们不是color和width,那么就无所谓它们的类型是什么。
      [propName: string]: any
    }

    let squareOptions = { colorur: 'red', width: 100 }
    function createSquare2(config: SquareConfig2): {
      color: string
      area: number
    } {
      let newSquare = { color: 'white', area: 100 }

      if (config.color) {
        newSquare.color = config.color
      }
      if (config.width) {
        newSquare.area = config.width * config.width
      }
      return newSquare
    }
    let mySquare3 = createSquare2(squareOptions)
    console.log(mySquare3)

    console.log('------')
    console.log('函数类型')

    interface SearchFunc {
      (source: string, subString: string): boolean
    }

    let mySearch: SearchFunc
    //已经检查过了，所以可以缩写 并且不用指定类型了
    mySearch = function (src, sub) {
      let result = src.search(sub)
      return result > -1
    }

    console.log('------')
    console.log('可索引的类型')
    interface StringArray {
      [index: number]: string
    }
    let myArray: StringArray
    myArray = ['Boy', 'Fred']

    let myStr: string = myArray[0]

    console.log('readonly只读索引')
    interface ReadonlyStringArray {
      readonly [index: number]: string
    }
    let myArray2: ReadonlyStringArray = ['Alice', 'Bob']

    //myArray2[2] = 'Mallory' // error!

    console.log('------')
    console.log('类类型')

    interface Clockinterface {
      tick(): void
    }

    interface ClockConstructor {
      new (hour: number, minute: number): Clockinterface
    }

    function createClock(
      ctor: ClockConstructor,
      hour: number,
      minute: number
    ): Clockinterface {
      return new ctor(hour, minute)
    }

    class DigitalClock implements Clockinterface {
      constructor(h: number, m: number) {}
      tick() {
        console.log('DigitalClock:tick()')
      }
    }

    class AnalogClock implements Clockinterface {
      constructor(h: number, m: number) {}
      tick() {
        console.log('AnalogClock:tick()')
      }
    }

    let digital = createClock(DigitalClock, 12, 17)
    let analog = createClock(AnalogClock, 7, 32)

    console.log(digital)
    console.log(analog)

    console.log('---------')
    console.log('接口继承')

    interface Shape {
      color: string
    }

    interface Square extends Shape {
      sideLength: number
    }

    let Square = <Square>{}
    Square.color = 'blue'
    Square.sideLength = 10

    console.log(Square)

    console.log('-------')
    console.log('混合类型')

    interface Counter {
      (state: number): string
      interval: number
      reset(): void
    }

    function getCounter(): Counter {
      let counter = <Counter>function (state: number) {}

      counter.interval = 123
      counter.reset = function () {
        console.log('我是reset')
      }
      return counter
    }

    let c = getCounter()
    c(10)
    c.reset()
    c.interval = 5.0
    console.log(c.prototype)

    console.log('-------')
    console.log('接口继承类')
    class Control {
      private State: any
    }

    interface SelectableControl extends Control {
      select(): void
    }

    class Button extends Control implements SelectableControl {
      select() {}
    }

    class TextBox extends Control {
      select() {}
    }

    // class Image implements SelectableControl {
    //   select() {}
    // }

    return {
      mySquare
    }
  }
})
</script>

<style lang="scss" scoped></style>
