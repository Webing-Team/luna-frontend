<script setup>
import NotificationList from "./NotificationList.vue";
import {useNotifications} from "../store/useNotifications.js";

const notifications = useNotifications()

</script>


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

      <div  class="flex justify-between items-center mr-[300px]">
        <div class="relative"  @mouseleave="notifications.closeList()">
          <button
              @mouseover="notifications.openList()"

              class="hover:bg-[#555555] w-[51px] h-[51px] rounded-3xl mr-[35px] "
          >
            <div>
              <svg
                  :class="{ 'fill-white': notifications.isVisible }"
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
          <div class="absolute -top-[-20px] right-[10px]">
            <NotificationList />
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
