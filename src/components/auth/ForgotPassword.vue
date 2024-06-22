<template>
  <header class="main-header">
    <router-link to="/"><img class="mt-[44px] ml-[46px]" src="/src/assets/img/maki_arrow.png" alt=""></router-link>
    <div class="flex justify-center mt-24 gap-[350px]">
      <img src="/src/assets/img/moon.png" class="object-contain mt-[70px]" alt="">
      <div class="k h-[250px] w-[413px] bg-[#181818] rounded-[55px] mt-[100px] shadow-[1px_1px_5px_2px_rgba(0,0,0,0.5)]">
        <h1 class="main-header__title text-[40px] font-bold mt-[30px] mb-[10px] text-white flex justify-center">
          Forgot Password
        </h1>

        <form @submit.prevent="requestNewPassword" class="flex flex-col items-center">
          <fieldset class="flex flex-col items-center">
            <input v-model="form.email"
                   class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                   type="email" placeholder="Email" required>
          </fieldset>

          <button type="submit"
                  class="flex justify-center text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B]  mt-[5px]">
            Request New Password
          </button>
        </form>
      </div>
    </div>

    <div v-if="error" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white rounded-lg p-8 max-w-sm">
        <p class="text-red-500">{{ error }}</p>
        <button @click="error = null" class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Close</button>
      </div>
    </div>

    <div class="text-container flex justify-center text-center ml-[730px] mt-[-110px]">
      <p class="main-header__text__forgot-password font-inter text-base text-[#8C8C8C] gap-5">
        Remembered the password? <router-link class="main-header__link text-[rgb(115,155,185)]" to="/login">Log In!</router-link>
      </p>
    </div>
  </header>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { setToken, setUser } from "../../composable/auth/index.js";
import makeRequest from "../../api/makeRequest.js";



const router = useRouter();
const form = reactive({
  email: "",
});

const error = ref(null);

const requestNewPassword = async () => {
  try {
      const response = await makeRequest({
          method: "POST",
          url: "/auth/forgot-password",
          data: {
              email: form.email,
          },
      });
      if (response.status === 200) {
          setToken(response.data.token);
          setUser(response.data.user);
          router.push("/login");
      }
  } catch (e) {
      error.value = e.response?.data?.message || "Произошла ошибка. Пожалуйста, попробуйте позже.";
  }
}



</script>