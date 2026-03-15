<script setup>
import illustrasi from '../assets/illus.png'
import web from '../assets/web.png'
import sosmed from '../assets/sosmed.png'
</script>

<template>
    <div class="py-12 h-auto w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-y-12">
            <div class="flex flex-col justify-center items-center gap-y-10">
                <p class="text-2xl text-gray-700 font-semibold lora-custom">Illustrasi</p>
                <img :src="illustrasi" alt="" class="w-100 h-70">
                <p class="text-gray-600 text-center mx-12 mt-4 text-sm md:text-lg">Fokus pada pembuatan ilustrasi vektor, ikon, logo, dan elemen
                visual lainnya menggunakan tools seperti Adobe Illustrator. Hasil karya digunakan untuk branding, konten
                digital, atau media cetak. </p>
            </div>
            <div class="flex flex-col justify-center items-center gap-y-10 lora-custom">
                <p class="text-2xl text-gray-700 font-semibold">Web</p>
                <img :src="web" alt="" class="w-100 h-60 bg-cover">
                <p class="text-gray-600 text-center text-sm md:text-lg mx-12 mt-4">Fokus pada pengembangan website dan aplikasi web dengan teknologi
                terkini. Membuat solusi digital yang responsif dan user-friendly.</p>
            </div>
            <div class="flex flex-col justify-center items-center gap-y-10 lora-custom">
                <p class="text-2xl text-gray-700 font-semibold">Sosial Media</p>
                <img :src="sosmed" alt="" class="w-100">
                <p class="text-gray-600 text-center mx-12 mt-4 text-sm md:text-lg">Fokus pada strategi dan manajemen konten di berbagai platform
                sosial media. Meningkatkan engagement dan reach brand melalui content creation dan community management.
            </p>
            </div>
        </div>
    </div>

</template>