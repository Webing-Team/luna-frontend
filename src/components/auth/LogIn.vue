<script setup>
import '../../assets/auth.css'
</script>

<template>
    <header class="main-header">
        <button class=" mt-46 ml-44"><img src="../../../public/img/maki_arrow.png" alt="" ></button>
        <!-- контейнер с картинкой и полем ввода данных  -->
        <div class="main-header__container flex justify-center mt-200  gap-350">
            <img src="../../../public/img/moon.png" alt="">
            <div class="main-header__window-comeback">
                <h1 class="main-header__title">
                    Welcome back!
                </h1>
                <p class="main-header__text">
                    Ready to immerse yourself in a diverse world of <span class="main-header__span">hype again?</span>
                </p>
                <!-- поля для ввода информации  -->
                <fieldset class="main-header__fieldset ">
                    <div class="container ">
                        <input class="main-header__input " type="text" placeholder="Username">
                        <input class="main-header__input" type="email" placeholder="Email">
                        <input class="main-header__input" type="password" placeholder="Password">
                    </div>
                </fieldset>
                <button class="main-header__button button-blue flex justify-center  " href="">Log In</button>
            </div>
        </div>
        <!-- сылки на следующие страници -->
        <div class="text-container">
            <p class="main-header__text2"> You don’t have an account? <a class="main-header__link" href="">Sign up! </a>
            </p>
            <a href="" class="main-header__text3">Forgot password?</a>
        </div>


    </header>
  </template>
  
