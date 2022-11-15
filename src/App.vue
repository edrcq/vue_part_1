<script setup lang="ts">
import HorlogeDigitale from './components/HorlogeDigitale.vue';
import { autoLogin } from './composables/autoLogin';

autoLogin()
</script>

<template>
  <div class="container mx-auto">
    <HorlogeDigitale />
    <RouterView />
  </div>
</template>
