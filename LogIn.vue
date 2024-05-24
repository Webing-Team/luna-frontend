<template>
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
</body>

</html>
  </template>
  
