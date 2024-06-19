<template>
  
        <main class="main bg-[#1F1F1F] " >
            <div class="grid">
                <div class="h-[360px] w-[1430px] bg-white"></div>
                <div class="container flex gap-[40px] ml-[170px] mt-[-60px] ">
                    <div id="circle"
                        class="h-[221px] w-[221px] rounded-full bg-[#D9D9D9] flex items-center justify-center cursor-pointer text-white">
                        <input type="file" id="file-input" class="hidden">
                        <label class="font-inter font-normal text-3xl leading-[43.57px] text-black"
                            for="file-input">PFP</label>
                    </div>
                    <h1 class="font-inter font-bold text-6xl leading-[32px] text-white mt-[100px]">JacksonCap</h1>
                    <p
                        class="text-center font-inter font-bold text-[24px]  mt-[155px] ml-[-370px] text-left leading-[29.05px] text-[#656565]">
                        @JacksonCap</p>
                </div>

                <div class="button-container ml-[1100px] flex items-center gap-[40px] mt-[-180px]">
                    <button class="cursor-pointer"><img class="w-[43px] h-[43px]" src="../assets/img/more.webp"
                            alt=""></button>
                    <button
                        class="w-[140px] h-[43px] bg-[#4B79A1] rounded-[45px] text-white font-inter font-bold text-base cursor-pointer leading-[19.36px]">Follow</button>

                </div>
                <div class="flex justify-center  mr-[25px]  text-[24px] sm: md:  lg:  xl: ">
                    <p class="font-Inter text-[24px] text-left text-[#818181] w-[850px]  sm: md: lg: xl:">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisl libero. Duis tincidunt ac
                        nisi quis gravida.
                        Donec non laoreet mauris. Mauris viverra blandit tellus a faucibus. Vivamus sagittis, augue nec
                        aliquam...
                        <span style="color: #4B79A1;">view more</span>
                    </p>
                </div>
                <div class="folowers-and-folowings flex justify-center gap-[53px] mr-[555px] mt-[20px]">
                    <p class="font-inter text-[24px] font-normal leading-[29.05px] text-[#FFFFFF]">123 <span
                            style="color: #818181;">following</span></p>
                    <p class="font-inter text-[24px] font-normal leading-[29.05px] text-[#FFFFFF]">14k <span
                            style="color: #818181;">followers</span></p>
                </div>
                <div class=" mt-[65px] ml-[290px] ">
                    <ul class="list-elements flex  gap-[60px] mr-[600px] ">
                        <li class="posts cursor-pointer px-2 py-2 rounded-lg transition-colors duration-400 ease-in-out text-[28px] font-semibold"
                            :class="{ 'text-[#656565]': activeTab !== 'posts', 'text-white': activeTab === 'posts', 'active-tab': activeTab === 'posts' }"
                            @click="showTab('posts')">Posts</li>
                        <li class="replies cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out text-[28px] font-semibold"
                            :class="{ 'text-[#656565]': activeTab !== 'replies', 'text-white': activeTab === 'replies', 'active-tab': activeTab === 'replies' }"
                            @click="showTab('replies')">Replies</li>
                        <li class="high cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out text-[28px] font-semibold"
                            :class="{ 'text-[#656565]': activeTab !== 'highlights', 'text-white': activeTab === 'highlights', 'active-tab': activeTab === 'highlights' }"
                            @click="showTab('highlights')">Highlights</li>
                        <li class="media cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out text-[28px] font-semibold"
                            :class="{ 'text-[#656565]': activeTab !== 'media', 'text-white': activeTab === 'media', 'active-tab': activeTab === 'media' }"
                            @click="showTab('media')">Media</li>
                        <li class="reposts cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out text-[28px] font-semibold"
                            :class="{ 'text-[#656565]': activeTab !== 'reposts', 'text-white': activeTab === 'reposts', 'active-tab': activeTab === 'reposts' }"
                            @click="showTab('reposts')">Reposts</li>
                    </ul>
                </div>

                <div
                    class="w-[1283px] h-[10px] gap-0 border-t border-[#363636] opacity-100 rotate-0 ml-[160px] mt-[10px]">
                </div>

                <div v-show="activeTab === 'posts'" class="tab-content mt-4 ml-[200px]">
                    <p>Posts content...</p>
                    <!-- Ваши посты здесь -->
                </div>
                <div v-show="activeTab === 'replies'" class="tab-content mt-4 ml-[200px]">
                    <p>Replies content...</p>
                    <!-- Ваши ответы здесь -->
                </div>
                <div v-show="activeTab === 'highlights'" class="tab-content mt-4 ml-[200px]">
                    <p>Highlights content...</p>
                    <!-- Ваши основные моменты здесь -->
                </div>
                <div v-show="activeTab === 'media'" class="tab-content mt-[35px] ml-[300px] justify-center ">
                    <div class="blockss flex gap-[10px] ">
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                    </div>
                    <div class="blockss flex gap-[10px] pt-[25px]">
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                        <div class="w-[234px] h-[234px] bg-[#D9D9D9] "></div>
                    </div>
                </div>
                <div v-show="activeTab === 'reposts'" class="tab-content mt-4 ml-[200px]">
                    <p>Reposts content...</p>
                    <!-- Ваши репосты здесь -->
                </div>
            </div>


            <div class="flex justify-center pt-[165px]">
                <div class="w-[341px] rounded-[28px] bg-[#353535] pl-[35px] pt-[23px] custom-scrollbar max-height ">
                    <h2 class="font-inter text-[20px] font-bold leading-6 text-white">You might also like</h2>

                    <div class="users flex items-center pt-[25px]">
                        <div class="flex items-center space-x-2">
                            <div class="w-[40px] h-[40px] bg-white rounded-full"></div>
                            <div class="flex flex-col">
                                <p class="font-inter font-semibold leading-[19.36px] text-[16px] text-white">Анатолий
                                </p>
                                <span
                                    class="font-inter font-semibold leading-[14.52px] text-[12px] text-[#707070]">@Anotoly1</span>
                            </div>
                        </div>
                        <button
                            class="w-[90px] h-[28px] bg-[#4B79A1] rounded-[45px] text-white font-inter font-bold cursor-pointer leading-[19.36px] text-[12px] ml-[60px]">Follow</button>
                    </div>

                    <div class="users flex items-center pt-[25px]">
                        <div class="flex items-center space-x-2">
                            <div class="w-[40px] h-[40px] bg-white rounded-full"></div>
                            <div class="flex flex-col">
                                <p class="font-inter font-semibold leading-[19.36px] text-[16px] text-white">Анатолий
                                </p>
                                <span
                                    class="font-inter font-semibold leading-[14.52px] text-[12px] text-[#707070]">@Anotoly1</span>
                            </div>
                        </div>
                        <button
                            class="w-[90px] h-[28px] bg-[#4B79A1] rounded-[45px] text-white font-inter font-bold cursor-pointer leading-[19.36px] text-[12px] ml-[60px]">Follow</button>
                    </div>

                    <!-- Repeat the .users block as necessary -->

                </div>
            </div>
        </main>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'posts' // Начальная активная вкладка
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
.hidden {
    display: none;
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

.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #ffffff #707070;
   
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    height: 40px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #707070;
    border-radius: 10px;
}

.max-height {
    max-height: 382px;
    overflow-y: auto;
}

.main {
    display: grid;
    grid-template-columns: 75% 25%;
 
}
</style>
