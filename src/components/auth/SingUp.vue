<script setup>
import {reactive} from "vue";
import {setToken, setUser} from "../../composable/auth/index.js";
import {useRouter} from "vue-router";
import {useAuth} from "../../store/useAuth.js";
import makeRequest from "../../api/makeRequest.js";
import showToast from "../toast/index.js";

const router = useRouter()
const authStore = useAuth()

const form = reactive({
  username: null,
  email: null,
  password: null,
  password2: null
})

const signUp = async () => {

  const response = await makeRequest('/v1/accounts/register', 'POST', form)

  if (response.status === 'success') {
    const response_refresh = await makeRequest('/token/refresh', 'POST', {refresh: response.tokens.refresh })
    setToken(response_refresh.access)
    // setUser(response.user)
    authStore.success()
    await router.push('/')
    location.reload()
  }

  if (response.status === 'error') {
    console.log(response)
    showToast(response.detail[0], 'red')
  }

}
</script>

<template>
    <header class="main-header">
        <router-link to="/" ><img class=" mt-[44px] ml-[46px]" src="/src/assets/img/maki_arrow.png" alt=""></router-link>
        <!-- контейнер с картинкой и полем ввода данных  -->
        
        <div class="flex justify-center mt-24 gap-[350px]">
            <img src="/src/assets/img/moon.png" class="object-contain mt-[70px]" alt="">
            <div
                class="k h-[600px] w-[413px] bg-[#181818] rounded-[55px] mt-[20px] shadow-[1px_1px_5px_2px_rgba(0,0,0,0.5)]">
                <h1 class="main-header__title text-[40px] font-bold mt-[30px] mb-[10px] text-white flex justify-center">
                    Welcome!
                </h1>
                <div class="flex flex-col w-[400px] text-[20px] text-[#A0A0A0] ">
                    <span class="text-center ">Luna is a dynamic space for</span>
                    <span class=" text-center">connecting, sharing, and discovering</span>
                    <span class="text-center" >new interests.</span>
                </div>
                <!-- поля для ввода информации  -->
                <fieldset class="flex flex-col items-center mt-[26px]">
                    <input
                        v-model="form.username"
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Username">
                    <input
                        v-model="form.email"
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Email">
                    <input
                        v-model="form.password"
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Password">
                    <input
                        v-model="form.password2"
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Password">
                </fieldset>
                  <div class="form-container flex items-center justify-between ml-[35px] gap-[10px] ">
                    <input class=""  type="radio" id="radio1" name="customRadio">
                    <label for="radio1" class="custom-radio mt-[10px]"></label>
                    <p class=" text-[#A0A0A0] text-[16px] mb-[10px]">I agree to the <span class="text-[rgb(115,155,185)]"> terms of service</span> and <span class="text-[rgb(115,155,185)]">privacy policy</span></p>
              </div>
                <button
                    @click="signUp"
                    class="flex justify-center  text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px]"
                >
                  Log In
                </button>
            </div>
        </div>
      
        <!-- ссылки на следующие страницы -->
        <div class="text-container flex justify-center text-center mt-1 mt-[23px] ml-[730px]">
            <p class="main-header__text__forgot-password font-inter text-base text-[#FFFFFF] gap-5">
                Already have an account? <a class="main-header__link text-[rgb(115,155,185)]" href="">Sign Up!</a>
            </p>
        </div>

 
    </header>
</template>
