<template>
  <div>枚举</div>
</template>

<script setup lang="ts">
// 数字枚举
// Up使用初始化为1
// 其余的成员会从1开始自动增长
// Direction.Up的值为1
// Down=2
// Left=3
// Right=4
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// Up=0,Down=1,...
enum Direction2 {
  Up,
  Down,
  Left,
  Right
}

enum Response1 {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: Response1): void {
  console.log('声明类型void、any的时候可以不用return')
  console.log(recipient, message)
}
respond('映射value:', Response1['Yes'])
console.log(`反向映射:${Response1[1]}`)

// 字符串枚举
enum Direction3 {
  Up = 'UP',
  DOwn = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// 异构枚举
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES'
}

// 计算的和常量成员
enum E {
  X
}
enum E1 {
  X,
  Y,
  Z
}
enum E2 {
  A = 1,
  B,
  C
}
</script>

<style lang="scss" scoped></style>
