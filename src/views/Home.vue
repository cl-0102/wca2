<template>
  <div class="App hidden md:block">
    <div class="ape-bg w-full overflow-hidden h-[870px]">
      <div
        class="w-full mt-[15px] max-w-[1200px] mx-auto h-[51px] leading-[51px] flex overflow-hidden"
      >
        <div>
          <img class="mt-[13px]" src="../assets/pc/logo.png" alt />
        </div>
        <div class="flex t text-white text-[12px] w-[340px] ml-[45px] justify-between mr-auto">
          <div>About</div>
          <div>Story</div>
          <div>Roadmap</div>
          <div>Vision</div>
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
        <div
          class="text-white mr-[20px] cursor-pointer"
          @click="changeLang"
        >{{ state ? "EN" : "中文" }}</div>
        <div
          v-if="!contractsAted"
          class="wallet w-[111px] h-[51px] text-white text-xs leading-[51px] text-center"
          @click="getProvider"
        >connect</div>
        <div
          v-if="contractsAted"
          class="wallet w-[111px] h-[51px] text-white text-xs leading-[51px] text-center"
        >{{ walletAddress }}</div>
      </div>
      <div>
        <img class="mx-auto mt-[111px]" src="../assets/pc/world.png" alt />
      </div>
      <div
        class="t1 text-[14px] mt-[35px] text-center text-[#BAB9B9]"
      >The World Cup is not just for human beings, join APE's World Cup together and get unprecedented</div>
      <div class="t1 mt-[10px] text-[14px] text-center text-[#BAB9B9]">NFT incentives!</div>
      <router-link to="/mint">
        <div
          class="mint mx-auto cursor-pointer mt-[70px] w-[191px] h-[73px] text-center leading-[73px] text-[12px] t text-black"
        >COMING SOON</div>
      </router-link>
    </div>

    <div class="about-bg w-full overflow-hidden h-[804px]">
      <div class="w-full mx-auto max-w-[1200px]">
        <div>
          <img class="ml-[646px] mt-[185px]" src="../assets/pc/about-title.png" alt />
        </div>
        <div class="flex mt-[70px]">
          <img class="ml-[635px]" src="../assets/pc/about-line.png" alt />
          <div class="text-[14px] t1 text-[#BAB9B9] leading-6 ml-[17px]">
            <div>his year is 2022, the year of the World Cup. The world Cup APE is a colle-ction of World Cup-themed NFTs, including 1,000 football players. Each NFT is composed of many elements. There are differences in appearance and rarity. Therefore, each NFT is unique, and Unable to copy.</div>
            <div
              class="mt-[40px]"
            >These simian players are built for fans to become owners on the blockchain, as they also experience priceless athlete engagement experiences that together create the future of football culture. Hats off to everyone who loves football and those players!</div>
            <div
              class="mt-[40px]"
            >Holding the World Cup APE NFT will not only be a collectible, but also a membership certificate. In the future, we will connect various fields such as the Metaverse, sports, and entertainment. Continue to expand the possibility and value attributes of holding World Cup APE NFTs.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="story-bg w-full overflow-hidden h-[994px]">
      <div class="w-full mx-auto max-w-[1200px]">
        <div class="flex">
          <div>
            <img class="ml-[50px] mt-[151px]" src="../assets/pc/store.png" alt />
            <div class="flex ml-[44px] mt-[47px]">
              <img src="../assets/pc/story-line.png" alt />
              <div class="text-[#BAB9B9] ml-[10px] w-[581px] t1 text-[14px] leading-6">
                <div>In a world of apes, every ape lives a simple life, playing and having fun all day long.</div>
                <div
                  class="mt-[30px]"
                >Until one day, football appeared, they quickly fell in love with this sport, and it became a habit of the entire ethnic group, which has gradually followed to this day. Today, they have integrated football into their lives, and almost every ape loves football, especially those football players, who have become the idols of all apes.</div>
                <div
                  class="mt-[30px]"
                >The soccer tournament in the monkey world, the World Cup, has become the highest honor. They are crazy about the World Cup, they are raving about it, and they expect these players to bring them thrilling football matches on the green field.</div>
              </div>
            </div>
            <div class="flex ml-[47px] mt-[54px]">
              <pcslide />
            </div>
          </div>
          <div class="mt-[251px] ml-[146px]">
            <img src="../assets/pc/messi.png" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="roadmap-bg w-full overflow-hidden h-[1190px]">
      <div class="max-w-[1200px] w-full mx-auto">
        <img class="mx-auto mt-[36px]" src="../assets/pc/roadmap-title.png" alt />
        <div class="flex">
          <div>
            <div
              class="t1 mt-[108px] ml-[56px] text-[14px] text-right pr-[55px] text-white leading-[54px] rounded-bl-[40px] border-[#00FFFF] border border-solid bg-[#000D0D] w-[450px] h-[54px]"
            >World Cup APE launch project preparation plan</div>
            <div
              class="t1 ml-[56px] mt-[188px] text-[14px] text-right pr-[55px] text-white leading-[54px] rounded-bl-[40px] border-[#00FFFF] border border-solid bg-[#000D0D] w-[450px] h-[54px]"
            >NFT issuance and airdrop</div>
            <div
              class="t1 ml-[56px] mt-[179px] text-[14px] text-right pr-[55px] text-white overflow-hidden rounded-bl-[52px] border-[#00FFFF] border border-solid bg-[#000D0D] w-[450px] h-[78px]"
            >
              <div class="mt-[15px]">Launch the second limited edition NFT with a total of</div>
              <div class="mt-[3px]">5,000 pieces</div>
            </div>
          </div>
          <div class="text-[18px] text-white t ml-[52px] mt-[106px]">
            <div>2022.04</div>
            <div class="mt-[114px]">2022.05</div>
            <div class="mt-[92px]">2022.06</div>
            <div class="mt-[94px]">2022.07</div>
            <div class="mt-[94px]">2022.08</div>
            <div class="mt-[94px]">2022.09</div>
          </div>
          <div class="mt-[232px]">
            <div
              class="t1 ml-[56px] text-[14px] pl-[56px] text-white leading-[54px] rounded-br-[40px] border-[#00FFFF] border border-solid bg-[#000D0D] w-[450px] h-[54px]"
            >World Cup APE website established</div>
            <div
              class="t1 mt-[188px] ml-[56px] text-[14px] pl-[56px] text-white leading-[54px] rounded-br-[40px] border-[#00FFFF] border border-solid bg-[#000D0D] w-[450px] h-[54px]"
            >Log in to the trading platform and start trading</div>
            <div
              class="t1 ml-[56px] mt-[173px] text-[14px] pl-[56px] text-white overflow-hidden rounded-bl-[52px] border-[#00FFFF] border border-solid bg-[#000D0D] w-[450px] h-[78px]"
            >
              <div class="mt-[15px]">Realize interaction with the real football market and</div>
              <div class="mt-[3px]">promote community self-government voting</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vision-bg w-full overflow-hidden h-[536px]">
      <img class="mx-auto" src="../assets/pc/valuevision.png" alt />
      <div class="flex mt-[67px] w-full max-w-[1100px] justify-between mx-auto">
        <div
          class="w-[341px] h-[317px] bg-[#000D0D] hover:border-[#00FFFF] hover:border hover:border-solid text-white hover:text-[#00FFFF] leading-7"
        >
          <div class="t1 text-center text-[16px] font-bold mt-[60px]">Community first</div>
          <div class="t1 text-center text-[14px] mt-[20px]">Communities are at the heart of our cul-</div>
          <div class="t1 text-center text-[14px]">ture and we are committed to empowering</div>
          <div class="t1 text-center text-[14px]">them in everything we do. They will always</div>
          <div class="t1 text-center text-[14px]">be our number one priority.</div>
        </div>
        <div
          class="w-[341px] h-[317px] bg-[#000D0D] hover:border-[#00FFFF] hover:border hover:border-solid text-white hover:text-[#00FFFF] leading-7"
        >
          <div class="t1 text-center text-[16px] font-bold mt-[60px]">Raise the standard</div>
          <div
            class="t1 text-center text-[14px] mt-[20px]"
          >We believe that there is always something</div>
          <div class="t1 text-center text-[14px]">to gain from great content produced. We</div>
          <div class="t1 text-center text-[14px]">are eager to raise the bar and build a</div>
          <div class="t1 text-center text-[14px]">metaverse world. We are fully committed</div>
          <div class="t1 text-center text-[14px]">to providing a great experience for all.</div>
        </div>
        <div
          class="w-[341px] h-[317px] bg-[#000D0D] hover:border-[#00FFFF] hover:border hover:border-solid text-white hover:text-[#00FFFF] leading-7"
        >
          <div class="t1 text-center text-[16px] font-bold mt-[60px]">About the long term value</div>
          <div class="t1 text-center text-[14px] mt-[20px]">There are no shortcuts to greatness. We</div>
          <div class="t1 text-center text-[14px]">believe in building the right foundation to</div>
          <div class="t1 text-center text-[14px]">perpetuate our beliefs and values.</div>
        </div>
      </div>
    </div>

    <div class="w-full overflow-hidden h-[96px] bg-[#000000]">
      <div class="mx-auto max-w-[1200px] h-[96px]">
        <div class="flex overflow-hidden">
          <div class="flex w-[77px] mt-[39px] justify-between">
            <a href="https://twitter.com/worldcupape" target="_blank">
              <img class="cursor-pointer" src="../assets/pc/b-twi.png" alt />
            </a>
            <a href="https://t.co/19yg4bf0Nw" target="_blank">
              <img class="cursor-pointer" src="../assets/pc/b-dis.png" alt />
            </a>
          </div>
          <div
            class="flex-1 max-w-[400px] mt-[45px] mx-auto justify-between flex t text-[12px] text-white"
          >
            <div>About</div>
            <div>Story</div>
            <div>Roadmap</div>
            <div>Vision</div>
          </div>
          <div class="t1 mt-[45px] text-[12px] text-[#666666]">Copyright © 2022</div>
        </div>
      </div>
    </div>
  </div>

  <div class="md:hidden">
    <div class="mape w-[100vw] h-[175.6vw] overflow-hidden">
      <div class="flex">
        <img
          class="w-[34.133vw] h-[6.533vw] mt-[5.467vw] ml-[5.2vw] mr-auto"
          src="../assets/pc/logo.png"
          alt
        />
        <div
          class="w-[25.6vw] h-[10.533vw] leading-[10.533vw] pt-[2px] text-center wallet mr-[5.333vw] mt-[4.333vw] text-[2.2vw] text-white"
        >{{ walletAddress }}</div>
      </div>
      <div>
        <img
          class="mt-[17.6vw] w-[45.467vw] h-[10.133vw] mx-auto"
          src="../assets/mobile/world-title.png"
          alt
        />
      </div>
      <div
        class="text-center mt-[12vw] text-[3.2vw] text-[#BAB9B9]"
      >The World Cup is not just for human beings, join</div>
      <div
        class="text-center text-[3.2vw] text-[#BAB9B9]"
      >APE's World Cup together and get unprecedented</div>
      <div class="text-center text-[3.2vw] text-[#BAB9B9]">NFT incentives!</div>
      <router-link to="/mint">
        <div
          class="t w-[34.533vw] h-[12.4vw] leading-[12.4vw] mt-[19.667vw] text-[3.2vw] text-center mint mx-auto"
        >MINT</div>
      </router-link>
    </div>

    <div class="mabout w-[100vw] h-[222.4vw] overflow-hidden">
      <img
        class="w-[18.667vw] h-[9.467vw] mt-[10.267vw] mx-auto"
        src="../assets/mobile/about-title.png"
        alt
      />
      <div class="flex mt-[11.733vw] ml-[3.6vw]">
        <div>
          <img class="w-[6.267vw] h-[95.467vw]" src="../assets/mobile/about-line.png" alt />
        </div>
        <div class="w-[82vw] h-[91.867vw] ml-[3.067vw] text-[3.2vw] leading-[4.9vw] text-[#BAB9B9]">
          <div>This year is 2022, the year of the World Cup. The world Cup APE is a collection of World Cup-themed NFTs, including 1,000 football players. Each NFT is composed of many elements. There are differences in appearance and rarity. Therefore, each NFT is unique, and Unable to copy.</div>
          <div
            class="mt-[4.333vw]"
          >These simian players are built for fans to become owners on the blockchain, as they also experience priceless athlete engagement experiences that together create the future of football culture. Hats off to everyone who loves football and those players!</div>
          <div
            class="mt-[4.333vw]"
          >Holding the World Cup APE NFT will not only be a collectible, but also a membership certificate. In the future, we will connect various fields such as the Metaverse, sports, and entertainment. Continue to expand the possibility and value attributes of holding World Cup APE NFTs.</div>
        </div>
      </div>
    </div>

    <div class="mstory w-[100vw] h-[241.733vw] overflow-hidden">
      <img
        class="w-[17.067vw] h-[10.4vw] mx-auto mt-[9.6vw]"
        src="../assets/mobile/story-title.png"
        alt
      />
      <div class="flex mt-[12vw] ml-[7.333vw]">
        <div class="w-[76.8vw] h-[77.067vw] text-[#BAB9B9] text-[3.2vw] leading-[4.9vw]">
          <div>In a world of apes, every ape lives a simple life, playing and having fun all day long.</div>
          <div
            class="mt-[3.8vw]"
          >Until one day, football appeared, they quickly fell in love with this sport, and it became a habit of the entire ethnic group, which has gradually followed to this day. Today, they have integrated football into their lives, and almost every ape loves football, especially those football players, who have become the idols of all apes.</div>
          <div
            class="mt-[3.8vw]"
          >The soccer tournament in the monkey world, the World Cup, has become the highest honor. They are crazy about the World Cup, they are raving about it, and they expect these players to bring them thrilling football matches on the green field.</div>
        </div>
        <div>
          <img
            class="w-[5.467vw] h-[83.067vw] ml-[3.2vw]"
            src="../assets/mobile/story-line.png"
            alt
          />
        </div>
      </div>
      <div>
        <img class="w-[89.333vw] h-[46.4vw] mx-auto" src="../assets/mobile/th.png" alt />
      </div>
      <mslide />
    </div>

    <div class="map w-[100vw] h-[176.533vw] overflow-hidden">
      <div>
        <img
          class="mx-auto w-[29.867vw] mt-[3.333vw] h-[10.133vw]"
          src="../assets/mobile/roadmap-title.png"
          alt
        />
      </div>

      <div class="flex mt-[20.133vw]">
        <div class="t text-white text-[3.2vw] ml-[8.4vw]">
          <div>2022.04</div>
          <div class="mt-[17.4vw]">2022.05</div>
          <div class="mt-[16.4vw]">2022.06</div>
          <div class="mt-[16.4vw]">2022.07</div>
          <div class="mt-[16.4vw]">2022.09</div>
          <div class="mt-[16.4vw]">2022.11</div>
        </div>
        <div class="text-[3.2vw] text-white ml-[3.067vw]">
          <div
            class="w-[68.96vw] h-[12.653vw] border-[#00FFFF] border border-solid bg-[#000D0D] rounded-br-[5.333vw]"
          >
            <div class="pt-[1.267vw] ml-[2.667vw]">World Cup APE launch project preparation</div>
            <div class="ml-[2.667vw]">plan</div>
          </div>
          <div
            class="w-[68.96vw] mt-[10vw] h-[7.333vw] leading-[7.333vw] border-[#00FFFF] border border-solid bg-[#000D0D] rounded-br-[5.333vw]"
          >
            <div class="ml-[2.667vw]">World Cup APE website established</div>
          </div>
          <div
            class="w-[68.96vw] mt-[14vw] h-[7.333vw] leading-[7.333vw] border-[#00FFFF] border border-solid bg-[#000D0D] rounded-br-[5.333vw]"
          >
            <div class="ml-[2.667vw]">NFT issuance and airdrop</div>
          </div>
          <div
            class="w-[68.96vw] mt-[14vw] h-[12.653vw] border-[#00FFFF] border border-solid bg-[#000D0D] rounded-br-[5.333vw]"
          >
            <div class="pt-[1.267vw] ml-[2.667vw]">Log in to the trading platform and start</div>
            <div class="ml-[2.667vw]">trading</div>
          </div>
          <div
            class="w-[68.96vw] mt-[9vw] h-[12.653vw] border-[#00FFFF] border border-solid bg-[#000D0D] rounded-br-[5.333vw]"
          >
            <div class="pt-[1.267vw] ml-[2.667vw]">Launch the second limited edition NFT</div>
            <div class="ml-[2.667vw]">with a total of 5,000 pieces</div>
          </div>
          <div
            class="w-[68.96vw] mt-[8vw] h-[17.467vw] border-[#00FFFF] border border-solid bg-[#000D0D] rounded-br-[5.333vw]"
          >
            <div class="pt-[1.267vw] ml-[2.667vw]">Realize interaction with the real football</div>
            <div class="ml-[2.667vw]">market and promote community self-</div>
            <div class="ml-[2.667vw]">government voting</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mvalue w-[100vw] h-[199.467vw] overflow-hidden">
      <div>
        <img
          class="w-[38.933vw] h-[9.6vw] mt-[11.2vw] mx-auto"
          src="../assets/mobile/vison-title.png"
          alt
        />
      </div>

      <div
        class="w-[87.6vw] h-[41.2vw] mt-[12vw] mx-auto overflow-hidden border border-solid border-[#00FFFF] bg-[#000D0D]"
      >
        <div class="text-[#00FFFF] text-[3.6vw] mt-[6vw] ml-[5.333vw]">Community first</div>
        <div
          class="w-[76.4vw] mt-[4vw] ml-[5.333vw] text-[3.2vw] text-[#E9E9E9]"
        >Communities are at the heart of our culture and we are committed to empowering them in every-thing we do. They will always be our number one priority.</div>
      </div>

      <div
        class="w-[87.6vw] h-[46.133vw] mt-[4.133vw] mx-auto overflow-hidden border border-solid border-[#00FFFF] bg-[#000D0D]"
      >
        <div class="text-[#00FFFF] text-[3.6vw] mt-[6vw] ml-[5.333vw]">Raise the standard</div>
        <div
          class="w-[76.4vw] mt-[4vw] ml-[5.333vw] text-[3.2vw] text-[#E9E9E9]"
        >We believe that there is always something to gain from great content produced. We are eager to raise the bar and build a metaverse world. We are fully committed to providing a great experience for all.</div>
      </div>

      <div
        class="w-[87.6vw] h-[36.133vw] mt-[4.133vw] mx-auto overflow-hidden border border-solid border-[#00FFFF] bg-[#000D0D]"
      >
        <div class="text-[#00FFFF] text-[3.6vw] mt-[6vw] ml-[5.333vw]">About the long term value</div>
        <div
          class="w-[76.4vw] mt-[4vw] ml-[5.333vw] text-[3.2vw] text-[#E9E9E9]"
        >There are no shortcuts to greatness. We believe in building the right foundation to perpetuate our beliefs and values.</div>
      </div>
      <div class="flex mt-[21.333vw] ml-[7.067vw]">
        <div class="flex mr-auto">
          <a href="https://twitter.com/worldcupape">
            <img class="w-[7.467vw] h-[6.133vw]" src="../assets/mobile/twi.png" alt />
          </a>
          <a href="https://t.co/19yg4bf0Nw">
            <img class="w-[7.467vw] h-[5.6vw] ml-[6.4vw]" src="../assets/mobile/dis.png" alt />
          </a>
        </div>
        <div class="text-[#666666] text-[3.2vw] mr-[5.867vw]">Copyright © 2022</div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import { mapGetters } from "vuex";
import { addressShorter } from "../utils/address_util";
import pcslide from "@/components/pcslide";
import mslide from "@/components/mslide";
import { ElMessage } from "element-plus";
export default {
  components: {
    pcslide,
    mslide
  },
  data() {
    return {
      state: true,
      ethAddress: "",
      activeName: "1",
      activeName2: "1",
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      isMintStart: false,
      cdInterval: 0,
      cdTime: 100,
      cdMsec: 0,
      cdTargetTime: "2021/8/26 16:00:00",
    };
  },
  computed: {
    ...mapGetters([
      "isMintable",
      "addressOfEth",
      "contractsAted",
      "connectStatusId",
      "totalSupply",
      "maxSupply"
    ]),
    walletAddress() {
      // console.log(addressShorter)
      return addressShorter(this.addressOfEth);
    },
    remainSupply() {
      if (!this.isMintStart) {
        return '2,000'
      }
      let t = this.totalSupply
      if (typeof this.totalSupply == 'string') {
        t = parseInt(t)
      }
      let remain = 2000 - t
      remain = remain < 0 ? 0 : remain
      if (remain < 1000) {
        return remain
      }
      let o = remain % 1000
      let k = (remain - o) / 1000

      if (o < 10) return `${k},00${o}`
      if (o < 100) return `${k},0${o}`
      return `${k},${o}`
    },
  },
  watch: {
    connectStatusId: function (newV, oldV) {
      this.$log.info("newV=", newV, "oldV=", oldV);
      if (newV == 5) {
        ElMessage.warning(this.$t("changeNetwork"));
      }
    },
  },
  methods: {
    changeLang() {
      this.state = !this.state;
      // this.$i18n.locale = this.$i18n.locale === "en" ? "zh" : "en";
      this.$i18n.locale = this.$i18n.locale === "zh" ? "en" : "zh";
      localStorage.setItem("lang", this.$i18n.locale);
    },
    async getProvider() {
      this.$store.dispatch("web3s/init");
    },
    init: function () {
      if (!this.isMintStart) {
        this.countdownInterval();
      }
    },
    countdown: function () {
      this.cdMsec = this.cdMsec - 1000;
      // console.log('do interval', this.cdMsec)
      if (this.cdMsec < 0) {
        this.countdownClear();
        this.isMintStart = true;
        return;
      }
      const msec = this.cdMsec;
      let day = parseInt(msec / 1000 / 60 / 60 / 24) * 24;
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      hr = day + hr;
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
    },
    countdownInterval: function () {
      const end = Date.parse(new Date(this.cdTargetTime));
      const now = Date.parse(new Date());
      this.cdMsec = end - now;
      if (this.cdMsec < 0) {
        this.isMintStart = true;
        return;
      }
      this.cdInterval = setInterval(() => {
        // console.log('count down', this.cdTime--)
        this.countdown();
      }, 1000);
    },
    countdownClear: function () {
      clearInterval(this.cdInterval);
    },
  },
  mounted() {
    // this.getProvider()
    // load lang from localStorage
    const localLang = localStorage.getItem("lang");
    if (localLang) {
      this.state = localLang === "en" ? true : false;
      this.$i18n.locale = localLang;
    }
    this.init();
  },
};
</script>

<style scoped>
body,
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: Krungthep;
  src: url("../assets/font/Krungthep.ttf");
}
.t {
  font-family: Krungthep;
}
.t1 {
  font-family: PingFang;
}
.ape-bg {
  background-image: url("../assets/pc/ape.png");
  background-position: center center;
}
.wallet {
  background-image: url("../assets/pc/wallet.png");
  background-size: cover;
}
.mint {
  background-image: url("../assets/pc/mint.png");
  background-size: cover;
}
.about-bg {
  background-image: url("../assets/pc/about.png");
  background-position: center center;
}
.story-bg {
  background-image: url("../assets/pc/story-bg.png");
  background-position: center center;
}
.roadmap-bg {
  background-image: url("../assets/pc/roadmap.png");
  background-position: center center;
}
.vision-bg {
  background-image: url("../assets/pc/vision.png");
  background-position: center center;
}
.mape {
  background-image: url("../assets/mobile/ape.png");
  background-size: cover;
}
.mabout {
  background-image: url("../assets/mobile/about.png");
  background-size: cover;
}
.mstory {
  background-image: url("../assets/mobile/story.png");
  background-size: cover;
}
.map {
  background-image: url("../assets/mobile/roadmap.png");
  background-size: cover;
}
.mvalue {
  background-image: url("../assets/mobile/vision.png");
  background-size: cover;
}
</style>
