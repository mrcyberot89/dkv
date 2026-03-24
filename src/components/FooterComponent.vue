<script setup>
import Facebook from '@/assets/facebook.png'
import Instagram from '@/assets/instagram.png'
import Tiktok from '@/assets/tiktok.png'

</script>

<template>
    <div class="xl:h-80 lg:h-80 w-full flex justify-center md:my-12 my-20  ">
        <div
            class="bg-[url('../assets/gray-bg3.jpg')] bg-cover rounded-3xl w-full h-full md:w-[80%] md:h-full   px-12 py-0 lg:py-12 lg:px-12 xl:py-12 xl:px-12">
            <div class="grid grid-rows-4 rounded-3xl justify-center items-center  h-full md:gap-y-12">
                <div class="flex flex-col justify-center">
                    <h2 class="text-xl lg:text-2xl text-gray-700 lora-italic font-bold text-center">Ikuti Kami di Media
                        Sosial</h2>
                </div>
                <div>
                    <p class="text-sm md:text-lg text-gray-600 text-center lora-custom">Dapatkan update terbaru,
                        inspirasi desain,
                        dan
                        informasi acara menarik dari Ruang DKV Klaten dengan mengikuti kami di media sosial.</p>

                </div>
                <div class="flex justify-center items-center">
                    <a href="https://chat.whatsapp.com/CGesZ4Ja00z0cdzpg4Vm7g?mode=wwt">
                        <button class="btn-join  font-semibold text-sm md:text-lg poller-custom">Join Comunity</button>
                    </a>
                </div>
                <div class="flex justify-center items-center gap-x-6">
                    <a href="https://www.facebook.com/share/1DK7sPV2UF/">
                        <p class=""><img :src="Facebook" alt="dsds"></p>
                    </a>
                    <a href="https://www.instagram.com/ruangdkv_klaten?igsh=OWJ2NGE0N2N3Nnh1">
                        <p class=""><img :src="Instagram" alt="dsds"></p>
                    </a>
                    <a href="https://www.tiktok.com/@ruangdkv_klaten?_r=1&_t=ZS-94wm2tpAMc8">
                        <p class=""><img :src="Tiktok" alt="dsds"></p>
                    </a>
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