<template>
    <header class="main-header  ">
        <button class=" mt-46 ml-44"><img src="../../public/img/maki_arrow.png"alt="" ></button>
        <!-- контейнер с картинкой и полем ввода данных  -->
        <div class="main-header__container flex justify-center mt-200  gap-350">
            <img src="../../public/img/moon.png" alt="">
            <div class="main-header__window-comeback h-[463px] w-[413px] bg-[#181818] rounded-[55px] mt-[-50px] shadow-[1px_1px_5px_2px_rgba(0,0,0,0.5)]">
                <h1 class="main-header__title text-[40px] font-bold mt-[5px] mb-[20px] text-white flex justify-center pt-[25px]">
                    Welcome back!
                </h1>
                <p class="main-header__text w-[346px] text-[16px] text-[#A0A0A0] text-justify ml-[33px] mt-[-1px]">
            Ready to immerse yourself in a diverse world <span class="main-header__span w-[346px] text-[16px] text-[#A0A0A0] pl-[120px]">of hype again?</span>
                </p>
                <!-- поля для ввода информации  -->
                <fieldset class="main-header__fieldset ">
                    <div class="container flex flex-col items-center ">
                        <input class="main-header__input " type="text" placeholder="Username">
                        <input class="main-header__input" type="email" placeholder="Email">
                        <input class="main-header__input" type="password" placeholder="Password">
                    </div>
                </fieldset>
                <button class="main-header__button button-blue flex justify-center text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px] " href="">Log In</button>
            </div>
        </div>
        <!-- сылки на следующие страници -->
        <div class="text-container text-center ml-[740px]">
            <p class="main-header__text2 font-inter text-[16px] font-normal leading-[19.36px] text-white pt-[10px] gap-[5px] pb-[8px]"> You don’t have an account? <a class="main-header__link text-[rgb(115,155,185)]" href="">Sign up! </a>
            </p>
            <a href="" class="main-header__text3 font-inter text-[16px] font-normal leading-[19.36px] text-[#8C8C8C]">Forgot password?</a>
        </div>


    </header>
  </template>
  
