<script setup>
import { ref } from "vue";
import Search from "../components/Search.vue";

defineProps({
  msg: String,
});
</script>

<template>
  <div
    class="container bg-black opacity-80 mx-auto rounded-[50px] md:h-[70vh] max-w-[768px] p-5 m-10"
  >
    <Search />
  </div>
</template>
