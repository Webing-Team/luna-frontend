<template>
    <header class="main-header">
      <router-link to="/" ><img class=" mt-[44px] ml-[46px]" src="/src/assets/img/maki_arrow.png" alt=""></router-link>
        <!-- контейнер с картинкой и полем ввода данных  -->

        <div class="flex justify-center mt-24 gap-[350px]">
            <img src="/src/assets/img/moon.png" class="object-contain mt-[70px]" alt="">
            <div
                class="k h-[250px] w-[413px] bg-[#181818] rounded-[55px] mt-[100px] shadow-[1px_1px_5px_2px_rgba(0,0,0,0.5)]">
                <h1 class="main-header__title text-[40px] font-bold mt-[30px] mb-[10px] text-white flex justify-center">
                    Forgot Password
                </h1>

                <!-- поля для ввода информации  -->
                <fieldset class="flex flex-col items-center ">
                    <input
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Username">
                    </input>


                </fieldset>

                <button
                    class="flex justify-center  text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px]">Request
                    New Password</button>
            </div>
        </div>

        <!-- ссылки на следующие страницы -->
        <div class="text-container flex justify-center text-center ml-[730px] mt-[-110px]">
            <p class="main-header__text__forgot-password font-inter text-base text-[#8C8C8C] gap-5">
                Remembered the password? <a class="main-header__link text-[rgb(115,155,185)]" href="">Log In!</a>
            </p>
        </div>


    </header>
</template>
<script setup lang="ts">
</script>