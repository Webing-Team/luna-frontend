<template>
    <main class="pt-[200px] bg-[#1F1F1F]">
        <div class="flex justify-center">
            <div class="w-[850px] h-[165px] rounded-[28px] bg-[#353535] flex items-center gap-[35px] justify-center"
                style="box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);">
                <div id="circle"
                    class="h-[111px] w-[111px] rounded-full bg-[#D9D9D9] flex items-center justify-center cursor-pointer text-white">
                    <input type="file" id="file-input" class="hidden">
                    <label class="font-inter font-normal text-[14px] leading-[43.57px] text-black"
                        for="file-input">PFP</label>
                </div>

                <input
                    class="w-[600px] h-[66px] bg-[#353535] border-[2px] border-[#5F5F5F] rounded-[22px] focus:outline-none custom-focus placeholder-custom font-sans text-[24px] font-normal leading-[16.94px] text-white pl-[25px]"
                    type="text" placeholder="What’s new, JacksonCap?">
            </div>
        </div>

        <div class="pt-[85px] ">
            <ul class="flex gap-[80px] justify-center mr-[340px]">
                <li class="All cursor-pointer px-2 py-2 rounded-lg transition-colors duration-400 ease-in-out text-[28px] font-semibold"
                    :class="{ 'text-[#656565]': activeTab !== 'All', 'text-white': activeTab === 'All', 'active-tab': activeTab === 'All' }"
                    @click="showTab('All')">All</li>
                <li class="Followed cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out text-[28px] font-semibold"
                    :class="{ 'text-[#656565]': activeTab !== 'Followed', 'text-white': activeTab === 'Followed', 'active-tab': activeTab === 'Followed' }"
                    @click="showTab('Followed')">Followed</li>
                <li class="Popular cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out text-[28px] font-semibold"
                    :class="{ 'text-[#656565]': activeTab !== 'Popular', 'text-white': activeTab === 'Popular', 'active-tab': activeTab === 'Popular' }"
                    @click="showTab('Popular')">Popular</li>

            </ul>
            <div class="flex justify-center">
                <div class="w-[1140px] h-[10px] gap-0 border-t border-[#363636] opacity-100 rotate-0  mt-[10px]">
                </div>
            </div>

        </div>
        <div class=" flex justify-center ml-[350px]  ">
            <div v-show="activeTab === 'All'" class="tab-content mt-4  ">
                <div class="pt-[145px] px-[20px] grid grid-cols-1">
                    <div class="flex items-center gap-[20px]">
                        <div class="w-[70px] h-[66px] bg-white rounded-full "></div>

                    </div>
                    <div class="vertical-line-489 absolute"> </div>
                </div>
                <div class="ml-[115px]  ">
                    <div class="flex flex-col ">
                        <h1 class="font-golos-text text-[24px] leading-7 text-white ">
                            Mayor of Capybaria
                            <span class="font-golos-text text-[24px] font-normal leading-7 text-[#4F4F4F] ml-auto">
                                posted • 6 hours ago
                            </span>
                        </h1>
                        <p class="font-golos-text text-[20px] font-normal text-[#4F4F4F]">
                            @RealCapybariaMayor
                        </p>
                    </div>
                    <p class=" font-inter text-[20px] text-white flex ">
                        На Гавайях

                    </p>
                    <span class="  font-inter text-[20px] text-white">
                        Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                        Aenean aliquet tellus at ullamcorper porta. Ut aliquet est vitae justo <span
                            class="font-inter text-[20px] leading-6 text-[#5891C3]">
                            ...read more
                        </span>
                    </span>
                    <div class="">
                        <div class="w-[775px] h-[221px] rounded-[28px] bg-white">
                        </div>
                        <div class="flex pt-[16px] gap-[25px]">
                            <div class="w-[241px] h-[99px] rounded-[28px] bg-white">
                            </div>
                            <div class="w-[241px] h-[99px] rounded-[28px] bg-white">
                            </div>
                            <div class="w-[241px] h-[99px] rounded-[28px] bg-white flex justify-center ">
                                <button class="font-inter text-[48px] text-black ">+</button>
                            </div>
                        </div>
                        <div>
                            <ul class="flex space-x-4 text-[15px] text-[#4F4F4F] gap-[30px] font-inter pt-[16px]">
                                <li class="flex items-center space-x-2">
                                    <img src="../assets/img/heart.svg" alt="Heart">
                                    <span>43.4k</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <img src="../assets/img/comments.svg" alt="Comments">
                                    <span>871</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <img src="../assets/img/nzbrane.png" alt="Nzbrane">
                                    <span>12.2k</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <img src="../assets/img/repost.svg" alt="Repost">
                                    <span>6.5k</span>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <img src="../assets/img/yeas.png" alt="Yeas">
                                    <span>185.3k</span>
                                </li>
                            </ul>
                        </div>
                        <div class="pt-[30px]">
                            <div
                                class="w-[775px] h-[10px] gap-0 border-t border-[#363636] opacity-100 rotate-0  mt-[10px]">
                            </div>
                            <div
                                class="w-[850px] h-[165px] rounded-[28px]  flex items-center gap-[35px] justify-center">
                                <div id="circle"
                                    class="h-[111px] w-[111px] rounded-full bg-[#D9D9D9] flex items-center justify-center cursor-pointer text-white">
                                    <input type="file" id="file-input" class="hidden">
                                    <label class="font-inter font-normal text-[14px] leading-[43.57px] text-black"
                                        for="file-input">PFP</label>
                                </div>

                                <input
                                    class="w-[600px] h-[66px] bg-[#1F1F1F] focus:outline-none custom-focus placeholder-custom font-sans text-[25px] font-normal leading-[16.94px] text-white pl-[25px]"
                                    type="text" placeholder="What’s new, JacksonCap?">
                            </div>
                        </div>
                        <div class="w-[775px] h-[10px] gap-0 border-t border-[#363636] opacity-100 rotate-0  mt-[10px]">
                        </div>
                    </div>
                    <div class="">
                        <div class="flex items-center gap-[10px]">
                            <div class="flex justify-center ">
                                <div class="w-[40px] h-[40px] bg-white rounded-full "></div>
                                <div class=" mt-[40px] vertical-line-40">
                                    <button><img src="../assets/img/кривая-линия.svg" alt=""></button>
                                </div>

                            </div>

                            <div class="flex flex-col  ">
                                <h1 class="font-golos-text text-[14px] leading-7 text-white ">
                                    Ольга Хайпова
                                    <span
                                        class="font-golos-text text-[14px] font-normal leading-7 text-[#4F4F4F] ml-auto">
                                        • 4 hours ago
                                    </span>
                                </h1>
                                <p class="font-golos-text text-[12px] font-normal text-[#4F4F4F]">
                                    @XX_oLgA_XX
                                </p>
                                <p class="font-inter text-[12px] text-white">воровал деньги у народа и сидит отдыхает!
                                    Вор!
                                </p>
                                <ul class="flex space-x-4 text-[15px] text-[#4F4F4F] gap-[30px] font-inter pt-[16px]">
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/heart.svg" alt="Heart">
                                        <span>43.4k</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/седце-росколотое.svg" alt="Comments">
                                        <span>871</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/comments.svg" alt="Nzbrane">
                                        <span>Reply</span>
                                    </li>
                                    <li>
                                        <button><img src="../assets/img/b" alt="">sfsdf</button>
                                    </li>
                                </ul>

                            </div>






                        </div>

                        <div class="flex items-center gap-[10px] ml-[40px]">
                            <div class="flex justify-center ">
                                <div class="w-[40px] h-[40px] bg-white rounded-full "></div>
                                <div class=" mt-[40px] vertical-line-40">
                                    <button><img src="../assets/img/кривая-линия.svg" alt=""></button>

                                </div>
                            </div>
                            <div class="flex flex-col  ">
                                <h1 class="font-golos-text text-[14px] leading-7 text-white ">
                                    Капибар Скуфович
                                    <span
                                        class="font-golos-text text-[14px] font-normal leading-7 text-[#4F4F4F] ml-auto">
                                        • 4 hours ago
                                    </span>
                                </h1>
                                <p class="font-golos-text text-[12px] font-normal text-[#4F4F4F]">
                                    @SkufCapibar
                                </p>
                                <p class="font-inter text-[12px] text-white">А чего вы хотели? Это все американцы такие
                                </p>
                                <ul class="flex space-x-4 text-[15px] text-[#4F4F4F] gap-[30px] font-inter pt-[16px]">
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/heart.svg" alt="Heart">
                                        <span>2.4k</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/седце-росколотое.svg" alt="Comments">
                                        <span>283</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/comments.svg" alt="Nzbrane">
                                        <span>Reply</span>
                                    </li>
                                    <li>
                                        <button><img src="../assets/img/b" alt="">sfsdf</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] ml-[80px] ">
                            <div class="flex justify-center ">
                                <div class="w-[40px] h-[40px] bg-white rounded-full "></div>
                                <div class=" mt-[40px] vertical-line-40">
                                    <button><img src="../assets/img/кривая-линия.svg" alt=""></button>
                                </div>
                            </div>

                            <div class="flex flex-col  ">

                                <h1 class="font-golos-text text-[14px] leading-7 text-white ">
                                    Oulasdjdsai
                                    <span
                                        class="font-golos-text text-[14px] font-normal leading-7 text-[#4F4F4F] ml-auto">
                                        • 4 hours ago
                                    </span>
                                </h1>
                                <p class="font-golos-text text-[12px] font-normal text-[#4F4F4F]">
                                    @CoolUsername12345
                                </p>
                                <p class="font-inter text-[12px] text-white">вы абсолютно ПРАВЫ!!! Я СТАВЛЮ ВАМ
                                    КЛАСС👍🏻👍🏻👍🏻👍🏻👍🏻👍🏻👍🏻
                                </p>
                                <ul class="flex space-x-4 text-[15px] text-[#4F4F4F] gap-[30px] font-inter pt-[16px]">
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/heart.svg" alt="Heart">
                                        <span>945</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/седце-росколотое.svg" alt="Comments">
                                        <span>12</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <img src="../assets/img/comments.svg" alt="Nzbrane">
                                        <span>Reply</span>
                                    </li>
                                    <li>
                                        <button><img src="../assets/img/b" alt="">sfsdf</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div v-show="activeTab === 'Followed'" class="tab-content mt-4 ml-[200px]">
                <p>Followed content...</p>
                <!-- Ваши ответы здесь -->
            </div>

            <div v-show="activeTab === 'Popular'" class="tab-content mt-4 ml-[200px]">
                <p>Popular content...</p>
                <!-- Ваши основные моменты здесь -->
            </div>
        </div>

    </main>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'All' // Установите активную вкладку по умолчанию
        };
    },
    methods: {
        showTab(tab) {
            this.activeTab = tab;
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400&display=swap');

.font-golos-text {
    font-family: 'Golos Text', sans-serif;
}

.custom-focus:focus {
    outline: none;
    border-color: #5F5F5F;
}

.placeholder-custom::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 16.94px;

    color: #5F5F5F;
}

.active-tab {
    position: relative;
}

.active-tab::after {
    content: "";
    position: absolute;
    margin-top: 59px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #5891C3;
}

.vertical-line {
    border-left: 2px solid #4F4F4F;
    height: 1108px;

    left: 50%;

}

.vertical-line-489 {
    border-left: 2px solid #4F4F4F;
    height: 1108px;
    margin-left: 35px;
    margin-top: 66px;
}

.vertical-line-40 {
    border-left: 1.7px solid #4F4F4F;
    height: 40px;
    position: absolute;

}
</style>
