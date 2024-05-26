<script setup>
import {useNotifications} from "../store/useNotifications.js";

const notifications  = useNotifications()
</script>

<template>
  <div v-if="notifications.isVisible" class="relative">
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
</template>

<style scoped>

</style>