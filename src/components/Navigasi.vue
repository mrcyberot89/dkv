<script setup>
import logo from '../assets/logo.png'
import { ref } from 'vue';

const navBar = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'Visi Misi',
        link: '#'
    },
    {
        name: 'ContactUs',
        link: '#'
    }
]


</script>
<template>
    <div class=" h-16 w-full md:flex justify-between items-center px-3 hidden">
        <div class="">
            <img :src="logo" alt="">
        </div>
        <div class="flex justify-end text-lg gap-5 font-bold">
            <p v-for="item in navBar" :key="item.name">
                <a :href="item.link">{{ item.name }}</a>
            </p>
        </div>
    </div>
</template>