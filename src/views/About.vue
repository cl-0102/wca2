<template></template>

<script>
export default {
  data () {
    return {
      cdTargetTime: '2021/8/25 16:20:00',
      cdsec: 0,
      timesec: 0
    };
  },
  methods: {
    downsec: function () {
      const end = Date.parse(new Date(this.cdTargetTime))
      const now = Date.parse(new Date())
      this.cdsec = end - now
      this.cdsec - 1000
      console.log('123', this.cdsec)
      if (this.cdsec < 0) {
        this.downsecClear()
        console.log('over');
        return
      }
    },
    secInterval: function () {
      this.timesec = setInterval(() => {
        this.downsec()
      }, 1000)
    },
    downsecClear: function () {
      clearInterval(this.timesec)
    }
  },
  mounted () {
    // this.secInterval()
  }
};
</script>

<style scoped>
.mdia /deep/ .el-dialog {
  height: 84.867vw;
  background: #2c3419;
  border-radius: 1.333vw;
}
.mdia /deep/ .el-dialog .el-dialog__headerbtn .el-dialog__close {
  width: 7.2vw;
  height: 7.2vw;
  border-radius: 50%;
  background-color: #caff50;
  color: #121310;
}
.mdia /deep/ .el-dialog .el-icon {
  font-size: 4.4vw;
  line-height: 1.7em;
  font-weight: bold;
}
.mdia-img {
  margin-top: -12.133vw;
}
.mdia-btn {
  display: flex;
  justify-content: space-between;
  margin-top: 5.333vw;
}
.mbtn1 {
  width: 36.133vw;
  height: 9.6vw;
  line-height: 9.6vw;
  text-align: center;
  background: #caff50;
  font-size: 3.2vw;
  font-family: PingFang SC;
  font-weight: 500;
  color: #121310;
}
.mbtn2 {
  width: 33.333vw;
  height: 9.6vw;
  line-height: 9.6vw;
  background: #caff50;
  text-align: center;
  background: #caff50;
  font-size: 3.2vw;
  font-family: PingFang SC;
  font-weight: 500;
  color: #121310;
}
</style>