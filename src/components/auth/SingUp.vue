<template>
    <header class="main-header">
        <a href="" ><img class=" mt-[44px] ml-[46px]" src="/luna-frontend/public/img/maki_arrow.png" alt=""></a>
        <!-- контейнер с картинкой и полем ввода данных  -->
        
        <div class="flex justify-center mt-24 gap-[350px]">
            <img src="/luna-frontend/public/img/moon.png" class="object-contain mt-[70px]" alt="">
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
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Username">
                    <input
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Email">
                    <input
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Password">
                    <input
                        class="bg-black w-[346px] h-[45px] mb-[16px] rounded-[10px] text-customGray placeholder-customGray outline-none pl-[10px]"
                        type="text" placeholder="Password">
                </fieldset>
                  <div class="form-container flex items-center justify-between ml-[35px] gap-[10px] "> 
                    <input class=""  type="radio" id="radio1" name="customRadio"> 
                    <label for="radio1" class="custom-radio mt-[10px]"></label> 
                    <p class=" text-[#A0A0A0] text-[16px] mb-[10px]">I agree to the <span class="text-[rgb(115,155,185)]"> terms of service</span> and <span class="text-[rgb(115,155,185)]">privacy policy</span></p>
        </div>
                <button
                    class="flex justify-center  text-white pt-[10px] w-[346px] h-[45px] rounded-[10px] bg-[#23415B] ml-[33px] mt-[5px]">Log
                    In</button>
            </div>
        </div>
      
        <!-- ссылки на следующие страницы -->
        <div class="text-container flex justify-center text-center mt-1 mt-[23px] ml-[730px]">
            <p class="main-header__text__forgot-password font-inter text-base text-[#FFFFFF] gap-5">
                Already have an account? <a class="main-header__link text-[rgb(115,155,185)]" href="">Log In!</a>
            </p>
        </div>

 
    </header>
</template>
