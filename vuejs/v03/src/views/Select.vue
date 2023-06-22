<template>
  <div>
    <select name="" id="" v-model="selData">
      <option v-for="city in arr2" :key="city" :value="city.code">
        {{ city.name }}
      </option>
    </select>
    <span>{{ selData }}</span>
    </div><div>
    <select name="" id="" v-model="selData2">
      <option v-for="city in Object.keys(arr1)" :key="city" :value="arr1[city]">
        {{city }}
      </option>
    </select>
    <span>{{ selData2 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selData: '고르세요.',
      selData2: '고르세요2.',
      arr1: {
        부산: '051',
        서울: '02',
        제주: '064',
        창원: '055',
        대구: '053'
      },
      arr2: [
        { name: '부산', code: '051' },
        { name: '서울', code: '02' },
        { name: '제주', code: '064' },
        { name: '창원', code: '055' },
        { name: '대구', code: '053' }
      ]
    }
  }
}
</script>
<style></style>
