<template>
  <div class="hidden md:block get w-full overflow-hidden h-[1080px]">
    <div
      class="w-full mt-[15px] max-w-[1200px] mx-auto h-[51px] leading-[51px] flex overflow-hidden"
    >
      <div>
        <img class="mt-[13px]" src="../assets/pc/logo.png" alt />
      </div>
      <div class="flex t text-white text-[12px] w-[340px] ml-[45px] justify-between mr-auto">
        <div>{{ $t("a1") }}</div>
        <div>{{ $t("a2") }}</div>
        <div>{{ $t("a3") }}</div>
        <div>{{ $t("a4") }}</div>
      </div>
      <a href="https://twitter.com/worldcupape" target="_blank">
        <div class="cursor-pointer mt-[19px] mr-[28px]">
          <img src="../assets/pc/twitter.png" alt />
        </div>
      </a>
      <a href="https://t.co/19yg4bf0Nw" target="_blank">
        <div class="cursor-pointer mt-[19px] mr-[28px]">
          <img src="../assets/pc/discord.png" alt />
        </div>
      </a>
      <div class="text-white mr-[20px] cursor-pointer" @click="changeLang">{{ state ? "EN" : "中文" }}</div>
      <div
        v-if="!contractsAted"
        class="wallet w-[111px] h-[51px] text-white text-xs leading-[51px] text-center"
        @click="getProvider"
      >{{ $t("a37") }}</div>
      <div
        v-if="contractsAted"
        class="wallet w-[111px] h-[51px] text-white text-xs leading-[51px] text-center"
      >{{ walletAddress }}</div>
    </div>

    <div class="w-full max-w-[1200px] mx-auto mt-[131px]">
      <img src="../assets/pc/get-title.png" alt />
      <div class="flex mt-[76px]">
        <div>
          <img src="../assets/pc/get-line.png" alt />
        </div>
        <div class="ml-[45px]">
          <div class="text-[#BAB9B9] text-sm">hYou can join adventure to metaverse by only 0.05</div>
          <div class="text-sm mt-[18px]">
            <span class="text-[#BAB9B9]">Remaining</span>
            <span class="text-[#00FFFF]">1,000/1,000</span>
          </div>
          <div class="text-[16px] mt-[62px] text-[#00FFFF]">Sep 10 08:00 (UTC)</div>
          <div class="number-bg w-[527px] h-[77px] overflow-hidden mt-[20px]">
            <div class="flex mt-[10px] ml-[14px]">
              <div
                class="w-[70px] h-[57px] leading-[57px] cursor-pointer text-center text-[#00FFFF] bg-white"
                @click.prevent="sAmount(3)"
              >3</div>
              <div
                class="w-[70px] h-[57px] leading-[57px] cursor-pointer text-center text-[#00FFFF] bg-white"
                @click.prevent="sAmount(5)"
              >5</div>
              <div
                class="w-[70px] h-[57px] leading-[57px] cursor-pointer text-center text-[#00FFFF] bg-white"
                @click.prevent="sAmount(10)"
              >10</div>
              <div
                class="w-[70px] h-[57px] leading-[57px] cursor-pointer text-center text-[#00FFFF] bg-white"
                @click.prevent="sAmount(15)"
              >15</div>
              <div
                class="w-[70px] h-[57px] leading-[57px] cursor-pointer text-center text-[#00FFFF] bg-white"
                @click.prevent="sAmount(20)"
              >20</div>
              <input
                v-model="amount"
                class="w-[128px] h-[57px] ml-[23px] text-center"
                placeholder="Enter quantity"
              />
            </div>
          </div>
          <div class="flex mt-[115px]">
            <div
              v-if="!isOn"
              @click.prevent="approve"
              class="buy-bg text-[14px] cursor-pointer w-[225px] h-[83px] leading-[83px] text-center"
            >APPROVE</div>
            <!-- <div
              v-if="isOn"
              @click.prevent="mintByuser"
              class="buy-bg text-[14px] cursor-pointer w-[225px] h-[83px] leading-[83px] text-center" 
            >BUY</div>-->
            <div
              v-if="isOn"
              class="buy-bg text-[14px] cursor-pointer w-[225px] h-[83px] leading-[83px] text-center"
            >
              <el-button @click.prevent="mintByuser" :loading="loading">BUY</el-button>
            </div>

            <div
              class="opensea-bg cursor-pointer w-[225px] h-[83px] text-[#00FFFF] text-center leading-[83px]"
            >Opensea</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="block md:hidden">
    <div class="w-[100vw] h-[221.867vw] mget">
      <div>
        <img class="w-[72.533vw] h-[11.333vw] mx-auto" src="../assets/pc/get-title.png" alt />
      </div>

      <div
        class="text-[#BAB9B9] text-[3.2vw] text-center mt-[9.333vw]"
      >hYou can join adventure to metaverse byonly 0.05</div>
      <div class="text-[3.2vw] text-center mt-[3.333vw]">
        <span class="text-[#BAB9B9]">Remaining</span>
        <span class="text-[#00FFFF]">1,000/1,000</span>
      </div>

      <div class="w-[86.8vw] h-[12.667vw] mnumber-bg mx-auto mt-[6.667vw] overflow-hidden">
        <div class="flex mt-[1.6vw] ml-[2.4vw]">
          <div
            class="w-[11.52vw] h-[9.373vw] leading-[9.373vw] text-center bg-white text-[#00FFFF]"
            @click.prevent="sAmount(3)"
          >3</div>
          <div
            class="w-[11.52vw] h-[9.373vw] leading-[9.373vw] text-center bg-white text-[#00FFFF]"
            @click.prevent="sAmount(5)"
          >5</div>
          <div
            class="w-[11.52vw] h-[9.373vw] leading-[9.373vw] text-center bg-white text-[#00FFFF]"
            @click.prevent="sAmount(10)"
          >10</div>
          <div
            class="w-[11.52vw] h-[9.373vw] leading-[9.373vw] text-center bg-white text-[#00FFFF]"
            @click.prevent="sAmount(15)"
          >15</div>
          <div
            class="w-[11.52vw] h-[9.373vw] leading-[9.373vw] text-center bg-white text-[#00FFFF]"
            @click.prevent="sAmount(20)"
          >20</div>
          <input
            v-model="amount"
            type="text"
            class="w-[21.067vw] h-[9.373vw] text-center text-[2.267vw] ml-[3.733vw]"
            placeholder="Enter quantity"
          />
        </div>
      </div>

      <div class="text-center text-[#00FFFF] text-[3.2vw] mt-[1.867vw]">Sep 10 08:00 (UTC)</div>

      <div class="flex mt-[16vw]">
        <div
          v-if="!isOn"
          @click.prevent="approve"
          class="mbuy ml-[8.533vw] w-[40.533vw] h-[14.4vw] leading-[14.4vw] text-[3.2vw] text-center"
        >APPROVE</div>
        <div
          v-if="isOn"
          @click.prevent="mintByuser"
          class="mbuy ml-[8.533vw] w-[40.533vw] h-[14.4vw] leading-[14.4vw] text-[3.2vw] text-center"
        >BUY</div>
        <div
          class="mopen ml-[1.867vw] text-[3.2vw] text-center text-[#00FFFF] leading-[14.4vw] w-[40.8vw] h-[14.4vw]"
        >Opensea</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ElMessage } from "element-plus";
import { addressShorter } from "../utils/address_util";
export default {
  data() {
    return {
      wca: "0xC07DB0F91798A72B133E683d28a5E3a757E9519f",
      amount: 1,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["web3", "contractsAted", "addressOfEth", "isDisabled", "isOn"]),
    walletAddress() {
      console.log(addressShorter)
      return addressShorter(this.addressOfEth);
    },
  },
  methods: {
    approve: async function () {
      await this.$store.dispatch("wCupApe/approve", { wca: this.wca }, { root: true })
      console.log("had approve");
    },
    mintByuser: async function () {
      if (!this.contractsAted) {
        ElMessage.info("Please Connect Wallet");
        return;
      }
      this.loading = true;
      await this.$store.dispatch("wCupApe/mintByUser", { amount: this.amount }, { root: true })
        .then((info) => {
          this.$log.info(info);
          this.loading = false;
          ElMessage.success("success");
        })
        .catch((e) => {
          this.loading = false;
          this.$log.info(e);
          if (!!e.code) {
            if (e.code == 4001) {
              ElMessage.info("you rejected");
              return;
            }
          } else {
            if (
              typeof e == "string" &&
              e.startsWith("you had no enough coin")
            ) {
              ElMessage.warning(e);
              return;
            } else if (typeof e == "string" && e.startsWith("had finish")) {
              ElMessage.warning(e);
              return;
            }
          }
          ElMessage.warning("transaction is not successful");
        });
    },
    sAmount: function (a) {
      this.amount = a;
    },
    changeLang() {
      this.state = !this.state;
      this.$i18n.locale = this.$i18n.locale === "zh" ? "en" : "zh";
      localStorage.setItem("lang", this.$i18n.locale);
    },
    async getProvider() {
      this.$store.dispatch("web3s/init");
    },
  },
  mounted() {
    const localLang = localStorage.getItem("lang");
    if (localLang) {
      this.state = localLang === "en" ? true : false;
      this.$i18n.locale = localLang;
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: Krungthep;
  src: url("../assets/font/Krungthep.ttf");
}
.t {
  font-family: Krungthep;
}
.get {
  background-image: url("../assets/pc/get.png");
  background-position: center center;
}
.number-bg {
  background-image: url("../assets/pc/number-bg.png");
}
.buy-bg {
  background-image: url("../assets/pc/buy.png");
}
.opensea-bg {
  background-image: url("../assets/pc/opensea.png");
}
.mget {
  background-image: url("../assets/mobile/get.png");
  background-size: cover;
}
.mnumber-bg {
  background-image: url("../assets/mobile/number.png");
  background-size: cover;
}
.mbuy {
  background-image: url("../assets/pc/buy.png");
  background-size: cover;
}
.mopen {
  background-image: url("../assets/pc/opensea.png");
  background-size: cover;
}
.wallet {
  background-image: url("../assets/pc/wallet.png");
  background-size: cover;
}
.buy-bg >>> .el-button {
  font-size: 14px;
  font-weight: 600;
  color: #0c1104;
  width: 225px;
  height: 83px;
  background: transparent;
  border: none;
}
.buy-bg >>> .el-button.is-loading:before {
  background-color: transparent;
}
</style>