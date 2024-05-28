<template>
    <header class="main-header">
        <button class="mt-4 ml-4"><img src="../../public/img/maki_arrow.png" alt=""></button>
        <!-- контейнер с картинкой и полем ввода данных  -->
        <div class="main-header__container flex justify-center mt-20 gap-20">
            <img src="../../public/img/moon.png" alt="">
            <div class="h-64 w-80 bg-gray-900 rounded-lg shadow-md p-8">
                <h1 class="text-3xl font-bold text-white mb-6 text-center">
                    Forgot Password
                </h1>

                <!-- поля для ввода информации  -->
                <fieldset class="main-header__fieldset">
                    <div class="container">
                        <input class="bg-black w-full h-12 mb-4 rounded-lg text-white outline-none pl-4 text-sm placeholder-gray-600" type="password" placeholder="Password">
                    </div>
                </fieldset>
                <button class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg w-full">Request New Password</button>
            </div>
        </div>
        <!-- ссылки на следующие страницы -->
        <div class="text-container flex justify-center text-center mt-10">
            <p class="text-gray-400 text-sm">
                Remember the password? <a class="text-blue-500" href="#"> Log In! </a>
            </p>
        </div>
    </header>
</template>
