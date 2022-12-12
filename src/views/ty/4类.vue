<template>
  <div>类</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld4',
  setup() {
    class Greeter {
      greeting: string
      constructor(message: string) {
        this.greeting = message
      }
      greet() {
        return 'Hello, ' + this.greeting
      }
    }

    let greeter = new Greeter('world')
    console.log(greeter)

    console.log('-------')
    console.log('继承')

    class Dog extends Greeter {
      constructor(str: string) {
        super(str)
      }
      bark() {
        console.log('Woof!Woof!')
      }
    }
    const dog = new Dog('dog')

    console.log(dog)
    console.log(dog.greet())
    dog.bark()

    class Animal {
      private name: string
      constructor(theName: string) {
        this.name = theName
      }
      move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
      }
    }

    class Snake extends Animal {
      constructor(name: string) {
        super(name)
      }
      move(distanceInMeters = 5) {
        console.log('重写继承的move Snake...')
        super.move(distanceInMeters)
      }
    }

    class Horse extends Animal {
      constructor(name: string) {
        super(name)
      }
      move(distanceInMeters = 45) {
        console.log('重写继承的move Horse...')
        super.move(distanceInMeters)
      }
    }

    let sam = new Snake('fjf_sam')
    let tom: Animal = new Horse('fjf_tom')
    sam.move()
    tom.move(34)

    console.log(sam)
    console.log(tom)

    console.log('private↓↓↓')

    class Animal2 {
      private name: string
      constructor(theName: string) {
        this.name = theName
      }
    }

    class Rhino extends Animal2 {
      constructor() {
        super('Rhino')
      }
    }

    class Employee {
      private name: string
      constructor(theName: string) {
        this.name = theName
      }
    }

    let animal = new Animal2('Goat')
    let rhino = new Rhino()
    let employee = new Employee('Boy')

    animal = rhino //因为他们共享同一个name，所以兼容
    //animal=employee//虽然同样都有一个私有成员name，但它明显不是Animal里面那个

    console.table([animal, rhino, employee])

    console.log('--------')
    console.log('理解protected，可以在派生类中继续访问protected')
    console.log('getElevatorPitch()中可以访问name')

    class Person {
      protected name: string
      constructor(name: string) {
        this.name = name
      }
    }
    class Person_six extends Person {
      private department: string
      constructor(name: string, department: string) {
        super(name)
        this.department = department
      }
      getElevatorPitch() {
        return `Hello,${this.name} ${this.department}`
      }
    }
    let howard = new Person_six('fjf', 'good')
    console.log(howard)
    console.log(howard.getElevatorPitch())

    console.log('------')
    console.log('只读属性')

    //定义并初始化一个成员
    class Octopus {
      //readonly name: string
      readonly numberOfLegs: number = 8
      constructor(
        readonly name: string //theName
      ) {
        //this.name = theName
      }
    }

    let dad = new Octopus('8.Length')
    console.log(dad)

    console.log('------')
    console.log('存取器')

    let passcode = 'passcode'
    class Cq {
      private _fullName = 'fjf'

      get fullName(): string {
        return this._fullName
      }

      set fullName(newName: string) {
        if (passcode && passcode == 'passcode') {
          this._fullName = newName
        } else {
          console.log('Error')
        }
      }
    }
    let cq = new Cq()
    cq.fullName = 'ha'
    console.log(cq)

    console.log('------')
    console.log('静态属性')

    class Grid {
      static origin = { x: 0, y: 0 }
      calculateDistanceFromOrigin(point: { x: number; y: number }) {
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y

        //平方根
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
      }
      constructor(public scale: number) {}
    }

    let grid1 = new Grid(1.0)
    let grid2 = new Grid(5.0)
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }))
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }))

    console.log('-----')
    console.log('抽象类')

    abstract class a {
      abstract makeSound(): void
      move(): void {
        console.log('roaming...')
        //人生第一次参加生日会，首先感谢公司和同事能给我成长和学习的机会
        //在这里能学习到很多东西，了解到公司是一个集体
        //最后祝各位寿星生日快乐，祝公司越来越好，谢谢')
      }
    }

    abstract class Department {
      constructor(public name: string) {}
      printName(): void {
        console.log('name:' + this.name)
      }
      abstract printMeeting(): void
    }

    class AccountingDepartment extends Department {
      constructor() {
        super('派生类中必须调用super()')
      }
      printMeeting(): void {
        console.log('printMeeting()执行')
      }
      generateReports(): void {
        console.log('generateReports()执行')
      }
    }

    let department: Department
    //department = new Department() //错误，不能创建一个抽象类型的引用
    department = new AccountingDepartment()
    department.printName()
    department.printMeeting()
    //department.generateReports() //方法在声明的抽象类中不存在

    console.log('--------')
    console.log('高级技巧-构造函数')

    class Greeter2 {
      greeting: string
      constructor(message: string) {
        this.greeting = message
      }
      greet() {
        return 'hello ' + this.greeting
      }
    }
    let greeter2: Greeter2
    greeter2 = new Greeter2('world')
    console.log(greeter2.greet())

    class Greeter3 {
      static standardGreeting = 'woshifjf'

      greeting: any

      greet() {
        if (this.greeting) {
          return 'hello , ' + this.greeting
        } else {
          return Greeter3.standardGreeting
        }
      }
    }

    let greeter3: Greeter3
    greeter3 = new Greeter3()
    console.log(greeter3.greet())
    console.log(greeter3)

    let greeterMaker: typeof Greeter3 = Greeter3
    greeterMaker.standardGreeting = 'fjf there'

    let greeterTwo: Greeter3 = new greeterMaker()
    console.log(greeterTwo.greet())
    console.log(greeterTwo)

    class Point {
      x: any
      y: any
    }

    interface Point3d extends Point {
      z: number
    }

    let point3d: Point3d = {
      x: 1,
      y: 2,
      z: 3
    }

    console.log(point3d)

    return {}
  }
})
</script>

<style lang="scss" scoped></style>
