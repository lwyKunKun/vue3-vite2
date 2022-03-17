<template>
  <ErrorPage
    type="401"
    :title="t('errorPages.401.desc')"
    :msg="t('errorPages.401.remark')"
  />
</template>

<script setup>
import ErrorPage from '@/components/ErrorPage/index.vue';
import { useI18n } from 'vue-i18n/index';
const { t } = useI18n();
</script>
