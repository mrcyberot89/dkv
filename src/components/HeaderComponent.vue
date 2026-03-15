<script setup>
import imageHeader from '../assets/Frame21.png'
import imageBackground from '../assets/gray-bg.jpg'
import AboutComponent from './AboutComponent.vue';
</script>
<template>
    <div class="w-full h-screen relative z-1 bg-[url('../assets/gray-bg.jpg')] bg-cover bg-center md:px-20 py-24">
        <div class="grid grid-cols-1 md:grid-cols-2 h-full w-full container mx-0 px-0 md:px-12">
            <div class="flex flex-col justify-center items-start md:items-start mx-12 gap-12">
                <h1 class="lg:text-4xl md:text-md text-gray-700 poller-custom text-lg">Mari Bertumbuh Bersama <br>Ruang DKV Klaten</h1>
                <p class=" font-normal text-sm text-gray-700 lora-custom md:text-md">Desain Komunikasi Visual (DKV) adalah cabang ilmu desain yang memadukan
                    seni dan strategi komunikasi untuk menyampaikan pesan secara efektif melalui media visual.</p>
                <button class="btn-join md:text-md text-sm poller-custom ">Join Comunity</button>
            </div>
            <div class="flex justify-center md:justify-end items-center  ">
                <img :src="imageHeader" alt="Image Header" class="h-70  ">
            </div>
        </div>
    </div>
</template>
