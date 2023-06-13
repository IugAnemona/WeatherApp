<script setup>
import { onBeforeMount, ref } from "vue";
const emits = defineEmits(["dadosRecebidos"]);

const key = "c00312569905dbd2b055e77b0421fed7";

const dados = ref(0);
const hasData = ref(false);

async function findCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  dados.value = {
    city: data.name,
    temp: data.main.temp,
    weather: data.weather[0].description,
    humidity: data.main.humidity,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
  };
  hasData.value = true;
}

const city = ref("");
</script>

<template>
  <div class="flex justify-center font-Ubuntu">
    <input
      v-model="city"
      placeholder="Digite o nome da cidade"
      class="border border-input outline-none rounded-[30px] p-2 text-xl font-light text-gray-200 bg-input min-w-[250px]"
    />
    <button
      @click="() => findCity(city)"
      class="border border-input bg-input outline-none p-3 h-11 w-11 rounded-full cursor-pointer ml-[15px] text-xl text-gray-400 flex items-center"
    >
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
  <div class="text-center mt-7 flex font-Ubuntu">
    <div class="mx-auto">
      <h2
        @click="() => console.log(dadosRecebidos)"
        class="text-gray-100 text-5xl font-light my-10"
      >
        {{ hasData ? "Tempo em " + dados.city : "Tempo em Belo Horizonte" }}
      </h2>

      <p class="text-5xl text-gray-100 my-10">
        {{ hasData ? Math.floor(dados.temp) + "°C" : "21°C" }}
      </p>

      <div class="flex items-center justify-center my-[70px] text-3xl">
        <img
          class="img-preview"
          :src="
            hasData ? dados.icon : 'https://openweathermap.org/img/wn/04n.png'
          "
          alt="icone-info-tempo"
        />
        <p class="text-gray-100 capitalize">
          {{ hasData ? dados.weather : "Nublado" }}
        </p>
      </div>
      <p class="text-gray-100 text-3xl my-10">
        Umidade: {{ hasData ? dados.humidity : "74" }}%
      </p>
    </div>
  </div>
</template>
