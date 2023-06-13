<script setup>
import { ref } from "vue";

const isOpen = ref(true);

let menuClass = ref(
  "md:flex justify-end items-center bg-gray-950 fixed top-[72px] -right-0 md:static transition-transform duration-500 md:translate-x-0 translate-x-full"
);
function toggleMenu() {
  isOpen.value
    ? (menuClass.value =
        "md:flex justify-end items-center bg-gray-950 fixed top-[72px] -right-0 md:static transition-transform duration-500 md:translate-x-0")
    : (menuClass.value =
        "md:flex justify-end items-center bg-gray-950 fixed top-[72px] -right-0 md:static transition-transform duration-500 md:translate-x-0 translate-x-full");
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="w-full bg-gray-950 text-gray-100 px-3 py-2 z-30">
    <div class="container w-full mx-auto flex justify-between z-30 relative">
      <div>
        <a href="https://github.com/IugAnemona" target="_blank"
          ><img src="../assets/icon.png" class="h-14 rounded-full" alt=""
        /></a>
      </div>
      <div
        class="text-4xl flex items-center cursor-pointer md:hidden"
        @click="toggleMenu"
      >
        <i class="fa-solid fa-bars"></i>
      </div>
      <div :class="menuClass">
        <nav class="flex-1 h-[60vh] md:h-auto w-[55vw] md:w-auto">
          <ul
            class="h-full p-10 md:p-2 flex flex-col justify-around md:justify-center md:flex-row w-auto text-lg font-bold font-Ubuntu"
          >
            <li class="md:ml-8">
              <a
                href="https://master--unrivaled-cajeta-5f5093.netlify.app"
                target="_blank"
                >Portfolio</a
              >
            </li>
            <li class="md:ml-8">
              <a
                href="https://www.linkedin.com/in/guilherme-alves-25109624a/"
                target="_blank"
                >LinkedIn</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
