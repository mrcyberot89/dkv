<script setup>
import Facebook from '@/assets/facebook.png'
import Instagram from '@/assets/instagram.png'
import Tiktok from '@/assets/tiktok.png'

</script>

<template>
    <div class="xl:h-80 lg:h-80 w-full flex justify-center my-12">
        <div class="bg-[url('../assets/gray-bg3.jpg')] bg-cover rounded-3xl  w-[80%] h-full  lg:py-12 lg:px-12 xl:py-12 xl:px-12">
            <div class="grid grid-rows-3 rounded-3xl justify-center items-center gap-y-12 h-full">
                <div>
                    <h2 class="text-3xl lg:text-2xl text-gray-700 poller text-center">Ikuti Kami di Media Sosial</h2>
                    <p class="text-lg text-gray-600 text-center">Dapatkan update terbaru, inspirasi desain, dan
                        informasi acara menarik dari Ruang DKV Klaten dengan mengikuti kami di media sosial.</p>
                </div>
                <div class="flex justify-center items-center">
                    <button class="btn-join poller text-lg">Join Comunity</button>
                </div>
                <div class="flex justify-center items-center gap-x-6">
                    <p class=""><img :src="Facebook" alt="dsds"></p>
                    <p class=""><img :src="Instagram" alt="dsds"></p>
                    <p class=""><img :src="Tiktok" alt="dsds"></p>
                </div>
            </div>
        </div>
    </div>
    <div class=" bg-gray-300 bottom-0   h-auto  p-4 w-full">
        <p class="text-center">DKV_klaten©2026</p>
    </div>

</template>
<style>
.poller {
    font-family: 'Poller One'
}
</style>