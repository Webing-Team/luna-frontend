<script setup>
import '../../assets/auth.css'
</script>

<template>
        <header class="main-header  ">
            <button class=" mt-46 ml-44"><img src="../../../public/img/maki_arrow.png" alt=""></button>
            <!-- контейнер с картинкой и полем ввода данных  -->

            <div class="main-header__container flex justify-center mt-200  gap-350">
                <img src="../../../public/img/moon.png" alt="">
                <div class="main-header__window-comeback__for-sing-up">
                    <h1 class="main-header__title">
                        Welcome!
                    </h1>
                    <p class="main-header__text__singup">
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
                    <div class="form-container">
                        <input type="radio" id="radio1" name="customRadio">
                        <label for="radio1" class="custom-radio"></label>
                        <p class="main-header__text__rivaci-polic">
                            I agree to the <a class="link" href="terms_of_service_link">terms of service</a> and <a
                                class="link" href="privacy_policy_link">privacy policy</a>
                        </p>

                    </div>
                    <button class="main-header__button button-blue2 flex justify-center  " href="">Sign Up</button>
                </div>
            </div>
            <!-- сылки на следующие страници -->
            <div class="text-container-2">
                <p class="main-header__text__for-sing-up"> Already have an account? Log In! <a class="main-header__link"
                        href="">
                        Log In! </a></p>
            </div>
        </header>
</template>
