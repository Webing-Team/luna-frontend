<template>
    <header class="main-header  ">
        <button class=" mt-46 ml-44"><img src="../../public/img/maki_arrow.png" alt=""></button>
        <!-- контейнер с картинкой и полем ввода данных  -->

        <div class="main-header__container flex justify-center mt-200  gap-350">
            <img src="../../public/img/moon.png" alt="">
            <div
                class="main-header__window-comeback__for-sing-up h-[600px] w-[413px] bg-[#181818] rounded-[55px] mt-[-130px] shadow-[1px 1px 5px 2px rgba(0,0,0,0.5)]">
                <h1
                    class="main-header__title text-[40px] font-bold mt-[5px] mb-[30px] text-white flex justify-center pt-[25px]">
                    Welcome!
                </h1>
                <p
                    class="main-header__text__singup w-[350px] text-[20px] text-[#A0A0A0] text-center ml-[33px] mt-[-15px]">
                    Luna is a dynamic space for . <span class="main-header__span__singup">connecting, sharing, and
                        discovering</span><span class="main-header__span__singup">new interests.</span>
                </p>
                <!-- поля для ввода информации  -->
                <fieldset class="main-header__fieldset ">
                    <div class="container ">
                        <input class="main-header__input " type="text" placeholder="Username">
                        <input class="main-header__input" type="email" placeholder="Email">
                        <input class="main-header__input" type="password" placeholder="Password">
                        <input class="main-header__input" type="password" placeholder="Password">
                    </div>
                </fieldset>
                <div class="form-container flex items-center justify-between ml-[35px] gap-[10px]">
                    <input type="radio" id="radio1" name="customRadio">
                    <label for="radio1" class="custom-radio"></label>
                    <p
                        class="main-header__text__rivaci-polic font-inter text-[15px] font-normal leading-[18.15px] text-left text-[#A0A0A0] mb-[13px]">
                        I agree to the <a class="link text-[rgb(115,155,185)]" href="terms_of_service_link">terms of
                            service</a> and <a class="link text-[rgb(115,155,185)]" href="privacy_policy_link">privacy
                            policy</a>
                    </p>

                </div>
                <button
                    class="main-header__button flex justify-center text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px] "
                    href="">Sign Up</button>
            </div>
        </div>
        <!-- сылки на следующие страници -->
        <div class="text-container-2 text-center ml-[740px]">
            <p
                class="main-header__text__for-sing-up font-inter text-[16px] font-normal leading-[19.36px] text-white pt-[25px] gap-[5px] pb-[8px] ">
                Already have an account? <a class="main-header__link text-[rgb(115,155,185)]" href="">
                    Log In! </a></p>
        </div>
    </header>
</template>
