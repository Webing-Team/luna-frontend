
<template>
  <div class="flex w-full">
    <div
      class="flex items-center justify-between w-full h-[111px] bg-[#363636] font-main"
    >
      <a href="#">
        <p class="text-4xl font-semibold text-white ml-4">☾ Luna</p>
      </a>
      <div class="mx-auto relative text-gray-300">
        <img
          class="absolute left-3 top-2"
          src="/public/img/searchIcon.png"
          alt="Search"
        />
        <input
          class="w-[467px] h-12 bg-[#595959] rounded-2xl pl-16 outline-none"
          placeholder="Search..."
          type="text"
        />
      </div>
     
      <div class="flex justify-between items-center mr-[300px]">
        <button
          @click="toggleVisibility"
           
          class="hover:bg-[#555555] w-[51px] h-[51px] rounded-3xl mr-[35px]"
        >
          <div>
            <svg
              v-bind:class="{ 'fill-white': isVisble }"
              style="pointer-events: all"
              class="-mt-3 mx-3"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0621 8.88029C19.0621 6.93366 18.3178 5.06677 16.9928 3.6903C15.6679 2.31382 13.8709 1.54053 11.9972 1.54053C10.1235 1.54053 8.32652 2.31382 7.0016 3.6903C5.67668 5.06677 4.93234 6.93366 4.93234 8.88029C4.93234 17.4434 1.3999 19.8899 1.3999 19.8899H22.5945C22.5945 19.8899 19.0621 17.4434 19.0621 8.88029Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0339 23.3305C13.8269 23.6781 13.5298 23.9666 13.1722 24.1671C12.8148 24.3677 12.4095 24.4733 11.9969 24.4733C11.5843 24.4733 11.179 24.3677 10.8215 24.1671C10.464 23.9666 10.1668 23.6781 9.95984 23.3305"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            
            <img
              class="mx-8 -my-10"
              src="/public/img/notification.png"
              alt=""
            />
          </div>
        </button>
        

        <div v-show="isVisble" class="relative">
          <div 
            
            class="absolute bg-[#1f1f1f] w-[480px] -mx-[509px] mt-[30px] rounded-xl shadow-xl z-20 font-neMain"
          >
            <div class="flex justify-between">
              <p class="flex items-center ml-4 text-white text-2xl h-16">
                Уведомления
              </p>
              <div class="flex justify-between pr-2 pt-1">
                <a
                  class="hover:bg-[#424242] w-[51px] h-[51px] rounded-3xl"
                  href="#"
                >
                  <img
                    class="py-3 px-3"
                    src="/public/img/settings.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              class="border border-t-0 border-r-0 border-l-0 border-b-[#626262]"
            ></div>

            <div class="overflow-y-auto scrollable-content h-auto min-h-[50px] max-h-[800px]">
               <div class="hover:bg-[#474747] pl-3">
                <a class="flex items-center" href="#">
                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification">Чумабой подписался на вас!</p>

                </a>
              </div>
               <div class=" hover:bg-[#595959] pl-3">
                <a class="flex items-center" href="#">
                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification">Сасун подписался на вас!</p>

                </a>
              </div>
              <div class=" hover:bg-[#595959] pl-3">
                <a class="flex items-center" href="#">

                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification" href="#"
                    >Джагджит подписался на вас! Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Natus voluptatem laudantium
                    perspiciatis facere nam mollitia?</p
                  >
                </a>
              </div>
              <div class=" hover:bg-[#595959] pl-3">
                <a class="flex items-center" href="#">
                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification">Умер подписался на вас!</p>

                </a>
              </div>
              <div class=" hover:bg-[#595959] pl-3">
                <a class="flex items-center" href="#">

                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification" href="#"
                    >Аббасали подписался на вас! Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Natus voluptatem laudantium
                    perspiciatis facere nam mollitia?</p
                  >
                </a>
              </div>
              <div class=" hover:bg-[#595959] pl-3">
                <a class="flex items-center" href="#">
                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification">Бахтовар подписался на вас!</p>

                </a>
              </div>
              <div class="flex items-center hover:bg-[#595959] pl-3">
                <img
                  class="w-[51px] h-[51px] rounded-3xl"
                  src="https://randomuser.me/api/portraits/men/59.jpg"
                  alt=""
                />
                <a class="notification" href="#">Чумабой подписался на вас!</a>
              </div>
              <div class=" hover:bg-[#595959] pl-3">
                <a class="flex items-center" href="#">
                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification">Умер подписался на вас!</p>

                </a>
              </div>
              <div class=" hover:bg-[#595959] pl-3">
                <a class="flex items-center" href="#">
                  <img
                    class="w-[51px] h-[51px] rounded-3xl"
                    src="https://randomuser.me/api/portraits/men/59.jpg"
                    alt=""
                  />
                  <p class="notification">Умер подписался на вас!</p>

                </a>
              </div>
            </div>
          </div>
        </div>
        <a class="flex justify-between items-center" href="#">
          <img
            class="w-[51px] h-[51px] rounded-3xl mr-3"
            src="https://randomuser.me/api/portraits/men/59.jpg"
            alt=""
          />
          <p class="text-white size-[18px] font-neMain">JacksonCap</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isVisble: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisble = !this.isVisble; 
    },
    closeList() {
      this.isVisble = false
    },
    
    changeColor(event) {
      if ((this.isVisble = true)) {
        event.target.classList.toggle("fill-white");
      }
    },
  },
};
</script>
