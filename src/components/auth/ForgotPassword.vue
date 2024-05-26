<script setup>
import '../../assets/auth.css'
</script>

<template>
        <header class="main-header  ">
            <button class=" mt-46 ml-44"> <img src="../../../public/img/maki_arrow.png" alt=""></button>
            <!-- контейнер с картинкой и полем ввода данных  -->
            <div class="main-header__container flex justify-center mt-200  gap-350">
                <img src="../../../public/img/moon.png" alt="">
                <div class="main-header__window-comeback__forgot_password">
                    <h1 class="main-header__title">
                        Forgot Password
                    </h1>
                   
                    <!-- поля для ввода информации  -->
                    <fieldset class="main-header__fieldset ">
                        <div class="container ">
                            <input class="main-header__input" type="password" placeholder="Password">
                        </div>
                    </fieldset>
                    <button class="main-header__button button-blue2 flex justify-center  " href="">Request New Password</button>
                </div>
            </div>
            <!-- сылки на следующие страници -->
            <div class="text-container">
                <p class="main-header__text__forgot-password"> Remember the password? <a class="main-header__link"
                        href="">
                        Log In! </a></p>

            </div>


        </header>
</template>

