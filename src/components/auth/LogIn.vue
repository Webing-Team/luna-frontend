<script setup lang="ts">
import {onMounted, reactive} from "vue";
import makeRequest from "../../api/makeRequest";
import {setToken} from "../../composable/auth";
import {useAuth} from "../../store/useAuth.js";
import {useRouter} from "vue-router";

const form = reactive({
  email: null,
  password: null
})
const authStore = useAuth()
const router = useRouter()

const logIn = async () => {
  try {
    const response = await makeRequest('/v1/accounts/login', 'POST', form)

    if (response.status === 'success') {
      const response_refresh = await makeRequest('/token/refresh', 'POST', {refresh: response.tokens.refresh })
      setToken(response_refresh.access)
      authStore.success()

      await router.push('/')
      location.reload()
    }
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {

})
</script>


<template>
    <header class="main-header">
      <router-link to="/" ><img class=" mt-[44px] ml-[46px]" src="/src/assets/img/maki_arrow.png" alt=""></router-link>
        <!-- контейнер с картинкой и полем ввода данных  -->
        <div class="flex justify-center mt-24 gap-[350px]">
            <img src="/src/assets/img/moon.png" class="mt-[70px]" alt="">
            <div class="k h-[453px] w-[413px] bg-[#181818] rounded-[55px] mt-[20px] shadow-[1px_1px_5px_2px_rgba(0,0,0,0.5)]">
                <h1 class="main-header__title text-[40px] font-bold mt-[25px] mb-[10px] text-white flex justify-center">
                    Welcome back!
                </h1>
                <p class="w-[346px] text-[16px] text-[#A0A0A0]  ml-[46px] ">
                    Ready to immerse yourself in a diverse world <span class="pl-[110px]" >of hype again?</span>
                </p>
                <!-- поля для ввода информации  -->
                <fieldset class="flex flex-col items-center mt-[26px]">
                    <input class="input_login" v-model="form.email" placeholder="Email">
                    <input class="input_login" v-model="form.password" placeholder="Password">
                </fieldset>
                <button class="btn_submit" @click="logIn()">Log In</button>
            </div>
        </div>
        <!-- ссылки на следующие страницы -->
        <div class="text-container flex justify-center text-center mt-1 ml-[730px]">
            <p class="main-header__text__forgot-password font-inter text-base text-[#FFFFFF] gap-5">
                You don’t have an account? <a class="main-header__link text-[rgb(115,155,185)]" href="">Log In!</a>
            </p>
        </div>

        <p class="main-header__text__forgot-password text-container flex justify-center text-center mt-[4px] ml-[730px] font-inter text-base text-[#8C8C8C] gap-5 ">
            Forgot password?
            </p>
    </header>
</template>

<style scoped>
.input_login {
  @apply bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]
}

.btn_submit {
  @apply flex justify-center text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px]
}
</style>