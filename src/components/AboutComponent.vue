<script setup>
import { onMounted, ref } from 'vue';
import image2 from '../assets/image2.png'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const container = ref(null)
const animasiTwo = ref(null)
const textOne = ref(null)
const textTwo = ref(null)

onMounted(() => {
    // gsap.from(animasiTwo.value, {
    //     xPercent: -110,

    //     scrollTrigger: {
    //         trigger: container.value,
    //         start: 'top 30%',
    //         end: 'bottom 30%',
    //         toggleActions: "play reverse play reverse",
    //         //scrub: true,
    //          // // // //markers: true,
    //         //pin: container.value
    //     },
    // });

    //new 
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
             // // //markers: true,
            start: 'top 10%',
            end: 'bottom 91%',
            //pin: container.value
        }
    });
    tl.fromTo(textOne.value,{
        opacity: 0
    },{
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.7
    })
    tl.fromTo(animasiTwo.value,{
        xPercent: -110,
        opacity: 0
    }, {
        xPercent: 0,
        duration: 0.7, 
        opacity: 1
    })
    tl.fromTo(textTwo.value,{
        opacity: 0, yPercent: -20
    }, {opacity: 1, duration: 1, yPercent: 0})
});

</script>
<template>
    <div id="about" ref="container"
        class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-1/2 w-full bg-[url('../assets/gray-bg2.jpg')] bg-cover">
        <div class=" flex flex-col justify-center items-center gap-y-12 pt-12 text-2xl font-semibold text-gray-700">
            <p ref="textOne" class="lora-italic ">Apa itu Ruang DKV Klaten ?</p>
            <img ref="animasiTwo" :src="image2" alt="Image 2" class="h-60 md:h-100">
        </div>
        <div ref="textTwo" class="py-12 px-12 text-sm md:text-lg text-gray-700 lora-custom ">
            <p class="py-4">Salah satu bagian dari ekosistem Ekonomi Kreatif (Ekraf) di Klaten, khususnya pada subsektor
                Desain
                Komunikasi Visual (DKV). </p>
            <p>Desain Komunikasi Visual merupakan salah satu komponen penting dalam pengembangan produk ekonomi kreatif.
                Di Klaten, Dinas terkait aktif dalam :</p>
            <ul class="list-disc pl-10 indent-10">
                <li>Pengembangan SDM Ekraf
                    Mengadakan pelatihan dan pengembangan kompetensi bagi pelaku ekraf, termasuk di
                    bidang grafic design, untuk meningkatkan kualitas produk dan pemasaran melalui konten digital.</li>
                <li>
                    Inkubasi dan Pendampingan Usaha
                    Menyediakan program inkubasi dan pendampingan bagi pelaku usaha kreatif, termasuk yang bergerak di
                    bidang desain komunikasi visual, untuk membantu mereka mengembangkan bisnis dan meningkatkan
                    daya saing.</li>
                <li>
                    Kolaborasi dengan Industri Kreatif
                    Mendorong kolaborasi antara pelaku ekraf, termasuk desainer komunikasi visual, dengan industri
                    kreatif lainnya untuk menciptakan produk yang inovatif dan menarik.
                </li>
            </ul>
        </div>
    </div>

</template>