<template>
    <header class="main-header">
        <button class="mt-4 ml-4"><img src="/luna-frontend/public/img/maki_arrow.png" alt=""></button>
        <!-- контейнер с картинкой и полем ввода данных  -->
        <div class="flex justify-center mt-24 gap-[350px]">
            <img src="/luna-frontend/public/img/moon.png" class="mt-[70px]"alt="">
            <div class="k h-[453px] w-[413px] bg-[#181818] rounded-[55px] mt-[20px] shadow-[1px_1px_5px_2px_rgba(0,0,0,0.5)]">
                <h1 class="main-header__title text-[40px] font-bold mt-[25px] mb-[10px] text-white flex justify-center">
                    Welcome back!
                </h1>
                <p class="w-[346px] text-[16px] text-[#A0A0A0]  ml-[46px] ">
                    Ready to immerse yourself in a diverse world <span class="pl-[110px]" >of hype again?</span>
                </p>
                <!-- поля для ввода информации  -->
                <fieldset class="flex flex-col items-center mt-[26px]">
                    <input class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]" type="text" placeholder="Username">
                    <input class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]" type="text" placeholder="Email">
                    <input class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]" type="text" placeholder="Password">

                </fieldset>
                <button class="flex justify-center text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px]">Log In</button>
            </div>
        </div>
        <!-- ссылки на следующие страницы -->
        <div class="text-container flex justify-center text-center mt-1 ml-[730px]">
            <p class="main-header__text__forgot-password font-inter text-base text-[#FFFFFF] gap-5">
                You don’t have an account? <a class="main-header__link text-[rgb(115,155,185)]" href="">Sign up!</a>
            </p>
        </div>

        <p class="main-header__text__forgot-password text-container flex justify-center text-center mt-[4px] ml-[730px] font-inter text-base text-[#8C8C8C] gap-5 ">
            Forgot password?
            </p>
    </header>
</template>
