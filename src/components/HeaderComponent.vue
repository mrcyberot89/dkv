<script setup>
import { onMounted, ref } from 'vue';
import imageHeader from '../assets/Frame21.png';
import logo from '@/assets/logo3.png';
import gsap from 'gsap';

//ref untuk animasi
const textOne = ref(null);
const textTwo = ref(null);
const buttonOne = ref(null);
const vektorOne = ref(null);

onMounted(() => {
    const tl = gsap.timeline();
    tl.fromTo(textOne.value, {
        opacity: 0,
    }, {
        opacity: 1, duration: 0.5, ease: 'power3.in'
    });
    tl.fromTo(textTwo.value, {
        opacity: 0
    }, {
        opacity: 1, duration: 0.5
    });
    tl.fromTo(buttonOne.value, {
        opacity: 0,
    }, {
        opacity: 1, duration: 0.7, ease: 'power1.inOut'
    });
    tl.fromTo(vektorOne.value, {
        opacity: 0, scale: 0
    }, {
        opacity: 1, scale: 1, ease: 'power1.inOut', duration: 1
    });
})



</script>
<template>
    <div class="w-full h-screen relative z-1 bg-[url('../assets/gray-bg.jpg')] bg-cover bg-center md:px-20 py-24">
        <div class="absolute top-0 right-0 md:hidden lg:hidden">
            <img :src="logo" alt="" class="object-cover h-14">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 h-full md:h-[90%] w-full container mx-0 px-0 md:px-0   ">
            <div class="flex flex-col justify-center items-start md:items-start mx-12 md:mx-0 gap-12 md:px-0">
                <h1 ref="textOne" class="lg:text-4xl md:text-2xl text-gray-700 lora-custom text-xl font-bold ">Mari
                    Bertumbuh
                    Bersama <br>Ruang DKV Klaten</h1>
                <p ref="textTwo" class=" font-normal text-sm text-gray-700 lora-custom md:text-2xl">Desain Komunikasi
                    Visual
                    (DKV) adalah cabang ilmu desain yang memadukan
                    seni dan strategi komunikasi untuk menyampaikan pesan secara efektif melalui media visual.</p>
                <button ref="buttonOne" class="btn-join md:text-md text-sm poller-custom ">Join Comunity</button>
            </div>
            <div class="flex justify-center md:justify-end items-center  ">
                <img ref="vektorOne" :src="imageHeader" alt="Image Header" class="h-70 md:h-100">
            </div>
        </div>
    </div>
</template>
