<script setup>
import image2 from '../assets/image2.png'
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-1/2 w-full bg-[url('../assets/gray-bg2.jpg')] bg-cover">
        <div class=" flex flex-col justify-center items-center gap-y-12 pt-12 text-2xl font-semibold text-gray-700">
            <p class="lora-italic ">Apa itu Ruang DKV Klaten ?</p>
            <img :src="image2" alt="Image 2" class="h-60 md:h-100">
        </div>
        <div class="py-12 px-12 text-sm md:text-lg text-gray-700 lora-custom">
            <p class="py-4">Salah satu bagian dari ekosistem Ekonomi Kreatif (Ekraf) di Klaten, khususnya pada subsektor
                Desain
                Komunikasi Visual (DKV). </p>
            <p>Desain Komunikasi Visual merupakan salah satu komponen penting dalam pengembangan produk ekonomi kreatif.
                Di Klaten, Dinas terkait aktif dalam :</p>
            <ul class="list-disc pl-10 indent-10">
                <li >Pengembangan SDM Ekraf
                    Mengadakan pelatihan dan pengembangan kompetensi bagi pelaku ekraf, termasuk di
                    bidang grafic design, untuk meningkatkan kualitas produk dan pemasaran melalui konten digital.</li>
                <li>
                    Inkubasi dan Pendampingan Usaha
                    Menyediakan program inkubasi dan pendampingan bagi pelaku usaha kreatif, termasuk yang bergerak di
                    bidang desain komunikasi visual, untuk membantu mereka mengembangkan bisnis dan meningkatkan
                    daya saing.</li>
                <li>
                    Kolaborasi dengan Industri Kreatif
                    Mendorong kolaborasi antara pelaku ekraf, termasuk desainer komunikasi visual, dengan industri kreatif lainnya untuk menciptakan produk yang inovatif dan menarik.
                </li>
            </ul>
        </div>
    </div>

</template>