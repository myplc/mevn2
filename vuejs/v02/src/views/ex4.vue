<template>
  <div>
    <button v-for="p in pages" :key="p" @click="page = p">
      {{ p }}
    </button>
    <div v-for="(g, i) in pages" :key="i">
      <img v-if="g === page" :src="'./sample' + (i + 1) + '.jpg'" alt="사진" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  }
}
</script>
<style>
button {
  scale: 200%;
  background-color: #fff;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
}
button:hover {
  background: #dff444;
}
button:active {
  color: #fff;
  background-color: #380d68;
}
img {
  height: 50%;
  width: 50%;
}
</style>
