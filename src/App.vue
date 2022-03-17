
<template>
  <!--Config Provider被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。 -->
  <el-config-provider :locale="localLanguage">
    <el-scrollbar height="100vh" ref="scroll">
      <router-view></router-view>
    </el-scrollbar>
  </el-config-provider>
</template>


<script setup>


import { onMounted, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import i18n from '@/locales';
const locale = i18n.global.locale;

const store = useStore();


const localLanguage = computed(() => {
  return i18n.global.messages[locale];
});
const scroll = ref(null);
const router = useRouter();
onMounted(() => {
  changeBodyWidth();
  window.addEventListener('resize', changeResize);
});

watch(
  () => router.currentRoute.value,
  () => {
    scroll.value.setScrollTop(0);
  }
);
const changeBodyWidth = () => {
  const flag = document.body.getBoundingClientRect().width - 1 < 992;
  store.dispatch('setting/changeMobile', flag);
};

const changeResize = () => {
  changeBodyWidth();
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: $base-font-size-default;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
