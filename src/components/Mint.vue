<template>
<div></div>
<div v-if="!isOn"  @click.prevent="approve">approve</div>
<div v-if="isOn"  @click.prevent="mintByuser">mint</div>
</template>

<script>
import { ElMessage } from "element-plus";
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      wca:"0xC07DB0F91798A72B133E683d28a5E3a757E9519f",
      amount: 1,
      dialogVisible: false,
      loading: false,
      recload: false,
      disabled: true,
      cdTargetTime: "2021/9/26 16:00:00",
      cdsec: 0,
      timesec: 0,
    };
  },
  computed: {
    ...mapGetters(["web3", "claimablePower", "contractsAted", "isDisabled","isOn"]),
    juraTokenClaimable: function () {
      if (!this.contractsAted) return 0;
      return this.web3.utils.fromWei(`${this.claimablePower}`);
    },
  },
  methods: {
    approve: async function () {
      await this.$store.dispatch("wCupApe/approve",{wca:this.wca},{root: true})
      console.log("1111111");
    },
    mintByuser: async function () {
      await this.$store.dispatch("wCupApe/mintByUser",{ amount: this.amount }, { root: true })
      console.log("22222222");
    },
    mint: async function () {
      if (!this.contractsAted) {
        ElMessage.info("Please Connect Wallet");
        return;
      }
      this.loading = true;

      this.$log.info("mint");
      console.log("loading", this.loading);
      await this.$store
        .dispatch("worldcup/mint", { amount: this.amount }, { root: true })
        .then((info) => {
          this.$log.info(info);
          this.loading = false;
          ElMessage.success("success");
          this.dialogVisible = true;
          console.log("dialog", this.dialogVisible);
          // this.$store.dispatch("worldcup/getBalanceOfJuranft");
        })
        .catch((e) => {
          this.loading = false;
          // console.log('err loading', this.loading)
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
  },
  mounted () {
  },
};
</script>