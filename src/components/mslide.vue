<template>
  <div class="box2">
    <ul :style="'width:' + list.length * 36 * 2 + 'vw'">
      <li v-for="item in list" :key="item.icon">
        <img :src="item.icon" alt />
      </li>
      <li v-for="item in list" :key="item.url">
        <img :src="item.icon" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import s1 from "../assets/pc/s1.png"
import s2 from "../assets/pc/s2.png"
import s3 from "../assets/pc/s3.png"
import s4 from "../assets/pc/s4.png"
import s5 from "../assets/pc/s5.png"
import s6 from "../assets/pc/s6.png"
import s7 from "../assets/pc/s7.png"
export default {
  data() {
    return {
      list: [{
        url: "",
        icon: s1,
      },
      {
        url: "",
        icon: s2
      }, {
        url: "",
        icon: s3
      }, {
        url: "",
        icon: s4
      }, {
        url: "",
        icon: s5
      }, {
        url: "",
        icon: s6
      }, {
        url: "",
        icon: s7
      },]
    }
  }
}
</script>


<style scoped>
.box2 {
  width: 100%;
  height: 36vw;
  position: relative;
  overflow: hidden;
  margin-top: 7.2vw;
}
ul {
  height: 36vw;
  margin: 0;
  list-style: none;
  position: absolute;
  left: 0;
  animation: move 20s infinite linear;
}

li {
  float: left;
  margin-left: 2.667vw;
  transition: transform 1s;
}
li img {
  width: 35.867vw;
  height: 100%;
}
@keyframes move {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>