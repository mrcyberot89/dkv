<script setup>
import logo from '../assets/logo.png'
import { computed, onMounted, ref } from 'vue';
import gsap from 'gsap';
import sideMenu from '@/assets/menu.png'
import crossMenu from '@/assets/cross.png'

const menuNavbar = ref(null);
const hamburgerSatu = ref(null);
const hamburgerDua = ref(null);


const menuOpen = () => {
    gsap.fromTo(menuNavbar.value, {
        yPercent: -100
    },
        {
            yPercent: 0,
        },


    ),
        gsap.to(hamburgerSatu.value, {
            display: 'none',
            opacity: 0,
            duration: 0.5
        })
    gsap.to(hamburgerDua.value, {
        display: 'block',
        opacity: 1,
        duration: 0.5
    })
}
const menuClose = () => {
    gsap.to(menuNavbar.value, ({
        yPercent: -100
    })
    ),
        gsap.to(hamburgerSatu.value, {
            display: "block",
            duration: 0.1,
            opacity: 1
        }),
        gsap.to(hamburgerDua.value, {
            display: 'none',
            opacity: 0
        })
}

onMounted(() => {
    gsap.fromTo(menuNavbar.value, {
        yPercent: 0
    },
        {
            yPercent: -100,
            duration: 0.2,
        }
    ),
        gsap.to(hamburgerSatu.value, {
            display: 'block'
        });
},



)


const navBar = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'ContactUs',
        link: '#joinkami'
    }
]


</script>
<template>
    <!--mobile view-->
    <div class="fixed top-0 z-10 w-full  md:hidden lg:hidden">
        <div>
            <img ref="hamburgerSatu" :src="sideMenu" @click="menuOpen" alt=""
                class="h-10 lg:hidden md:hidden hidden absolute z-10">
            <img ref="hamburgerDua" :src="crossMenu" @click="menuClose" alt=""
                class="h-10 lg:hidden md:hidden absolute z-10 hidden">
        </div>
        <div ref="menuNavbar" class="w-full p-6 bg-white shadow shadow-gray-500 md:hidden lg:hidden rounded-2xl ">
            <div class=" md:h-16 w-full md:flex md:justify-between md:items-center h-auto px-3">
                <div class="flex justify-center">
                    <img :src="logo" alt="">
                </div>
                <div
                    class="md:flex md:justify-end md:text-lg md:gap-5 flex flex-col justify-center items-center gap-y-6 font-bold py-6">
                    <p v-for="item in navBar" :key="item.name">
                        <a :href="item.link">{{ item.name }}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!--desktop-->
    <div>
        <div class="w-full p-6 hidden md:block ">
            <div class=" md:h-16 w-full md:flex md:justify-between md:items-center h-auto px-0">
                <div class="flex justify-center">
                    <img :src="logo" alt="">
                </div>
                <div class="md:flex md:justify-end md:text-lg md:gap-5 lg:flex flex  gap-y-6 font-bold py-6">
                    <p v-for="item in navBar" :key="item.name">
                        <a :href="item.link">{{ item.name }}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>