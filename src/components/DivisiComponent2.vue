<script setup>
import illustrasi from '../assets/illus.png';
import web from '../assets/web.png';
import sosmed from '../assets/sosmed.png';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
//varabel 1
const containerDivisione = ref(null);
const divisiOne = ref(null);
const gambarOne = ref(null);
const textOne = ref(null);
//variabel 2 
const containerDivisitwo = ref(null);
const divisiTwo = ref(null);
const gambarTwo = ref(null);
const textTwo = ref(null);
//variabel 3
const containerDivisithree = ref(null);
const divisiThree = ref(null);
const gambarThree = ref(null);
const textThree = ref(null);

onMounted(() => {
    //animasi 1
    const tl = gsap.timeline({
        scrollTrigger: {
            markers: true,
            trigger: containerDivisione.value,
            start: 'top 20%',
            end: 'bottom top'
        }
    });
    tl.fromTo(divisiOne.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3,
    });
    tl.fromTo(gambarOne.value, {
        opacity: 0,
        scale: 0
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
    });
    tl.fromTo(textOne.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3,
    });
    //animasi 2
    const tlTwo = gsap.timeline({
        scrollTrigger: {
            //markers: true,
            trigger: containerDivisitwo.value,
            start: 'top 20%',
            end: 'bottom top'
        }
    });
    tlTwo.fromTo(divisiTwo.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3,
    });
    tlTwo.fromTo(gambarTwo.value, {
        opacity: 0,
        scale: 0
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
    });
    tlTwo.fromTo(textTwo.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3,
    });
    //animasi 3
    const tlThree = gsap.timeline({
        scrollTrigger: {
            //markers: true,
            trigger: containerDivisithree.value,
            start: 'top 20%',
            end: 'bottom top'
        }
    });
    tlThree.fromTo(divisiThree.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3,
    });
    tlThree.fromTo(gambarThree.value, {
        opacity: 0,
        scale: 0
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
    });
    tlThree.fromTo(textThree.value, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3,
    });
});


</script>

<template>
    <div class="py-12 h-auto w-full">
        <div class="flex justify-center items-center mb-20 text-2xl font-semibold lora-custom text-gray-700">
            <p>3 Divisi Ruang DKV</p>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:grid lg:grid lg:grid-cols-3 lg:grid-rows-1  md:justify-center justify-center items-center gap-y-12    ">
            <div ref="containerDivisione" class="flex flex-col justify-center items-center gap-y-10">
                <p ref="divisiOne" class="text-2xl text-gray-700 font-semibold lora-custom">Illustrasi</p>
                <img ref="gambarOne" :src="illustrasi" alt="" class="w-100 h-60">
                <p ref="textOne" class="text-gray-600 text-center mx-12 mt-4 text-sm md:text-lg">Fokus pada pembuatan
                    ilustrasi
                    vektor, ikon, logo, dan elemen
                    visual lainnya menggunakan tools seperti Adobe Illustrator.</p>
            </div>
            <div ref="containerDivisitwo" class="flex flex-col justify-center items-center gap-y-10 lora-custom">
                <p ref="divisiTwo" class="text-2xl text-gray-700 font-semibold">Web</p>
                <img ref="gambarTwo" :src="web" alt="" class="w-100 h-60 bg-cover">
                <p ref="textTwo" class="text-gray-600 text-center text-sm md:text-lg mx-12 mt-4">Fokus pada pengembangan
                    website dan
                    aplikasi web dengan teknologi
                    terkini. Membuat solusi digital yang responsif dan user-friendly.</p>
            </div>
            <div ref="containerDivisithree"
                class="flex flex-col  md:row-start-2  md:px-20 md:col-span-2 md:justify-items-center lg:col-start-3 lg:row-start-1 lg:px-0  items-center gap-y-10 lora-custom">
                <p ref="divisiThree" class="text-2xl text-gray-700 font-semibold">Sosial Media</p>
                <img ref="gambarThree" :src="sosmed" alt="" class="w-100 h-60">
                <p ref="textThree" class="text-gray-600 text-center mx-12 mt-4 text-sm md:text-lg">Fokus pada strategi
                    dan manajemen
                    konten di berbagai platform
                    sosial media. Meningkatkan engagement dan reach brand melalui content.
                </p>
            </div>
        </div>
    </div>


</template>