<template>
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="input.css">
</head>

<body>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>luna register </title>
        <link href="dist/tailwind.css" rel="stylesheet"> <!-- Правильное подключение скомпилированного Tailwind CSS -->
        <link rel="stylesheet" href="/cssrc/style.css"> <!-- Ваши пользовательские стили -->
        <link rel="stylesheet" href="input.css"> <!-- Другие стили, если есть -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    </head>

    <body class=" bg-customGray">
        <header class="main-header  ">
            <button class=" mt-46 ml-44"><img src="img/maki_arrow.png" alt=""></button>
            <!-- контейнер с картинкой и полем ввода данных  -->

            <div class="main-header__container flex justify-center mt-200  gap-350">
                <img src="img/☾.png" alt="">
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
                        <p class="main-header__text__rivaci-polic">I agree to
                            the <a class="link"><a href="">terms of service</a> and <a class="link" href="link">privacy
                                    policy</a>
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
    </body>

    </html>
</body>

</html>
  </template>
  
