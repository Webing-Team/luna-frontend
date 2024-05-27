<template>
    <header class="main-header  ">
        <button class=" mt-46 ml-44"> <img src="../../public/img/maki_arrow.png" alt=""></button>
        <!-- контейнер с картинкой и полем ввода данных  -->
        <div class="main-header__container flex justify-center mt-200  gap-350">
            <img src="../../public/img/moon.png" alt="">
            <div
                class="main-header__window-comeback__forgot_password h-[256px] w-[413px] bg-[#181818] rounded-[55px] shadow-[1px 1px 5px 2px rgba(0,0,0,0.5)] ">
                <h1
                    class="main-header__title  text-[40px] font-bold mt-[5px] mb-[20px] text-white flex justify-center pt-[25px]">
                    Forgot Password
                </h1>

                <!-- поля для ввода информации  -->
                <fieldset class="main-header__fieldset ">
                    <div class="container ">
                        <input class="main-header__input" type="password" placeholder="Password">
                    </div>
                </fieldset>
                <button
                    class="main-header__button button-blue2 flex justify-center text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px]  "
                    href="">Request New Password</button>
            </div>
        </div>
        <!-- сылки на следующие страници -->
  
            <div class="text-container  flex justify-center text-center ml-[740px] mt-[-150px] ">
                <p class="main-header__text__forgot-password font-inter text-base text-[#8C8C8C] gap-5  "> Remember the
                    password? <a class="main-header__link text-[rgb(115,155,185)]" href=""> Log In! </a></p>
            </div>

    </header>
</template>
