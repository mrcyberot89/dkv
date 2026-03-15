<script setup>
import imageHeader from '../assets/Frame21.png'
import imageBackground from '../assets/gray-bg.jpg'
import AboutComponent from './AboutComponent.vue';
</script>
<template>
    <div class="w-full h-screen relative z-1 bg-[url('../assets/gray-bg.jpg')] bg-cover bg-center px-20">
        <div class="grid grid-cols-2 h-full w-full container mx-auto">
            <div class="flex flex-col justify-center items-start gap-12">
                <h1 class="text-4xl text-gray-700 poller">Mari Bertumbuh Bersama <br>Ruang DKV Klaten</h1>
                <p class=" font-normal text-2xl">Desain Komunikasi Visual (DKV) adalah cabang ilmu desain yang memadukan seni dan strategi komunikasi untuk menyampaikan pesan secara efektif melalui media visual.</p>
                <button class="btn-join poller">Join Comunity</button>  
            </div>
            <div class="flex justify-end items-center">
                <img :src="imageHeader" alt="Image Header" class="">
            </div>
        </div>
    </div>
</template>
<style>
.poller {
    font-family: 'Poller One'
}
</style>