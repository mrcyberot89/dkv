<script setup>
import Profile1 from '../assets/pp1.png'
import Footer from '../assets/footer.png'
</script>

<template>
    <div class="h-auto w-full bg-[#dfecf3] relative pb-12 rounded-4xl">
        <div class="text-2xl flex m-6">
            <p>Team profile</p>
        </div>
        <div class="grid grid-cols-4 grid-rows-5 m-12  gap-12">
            <div class="row-start-2 col-start-1 row-span-2  flex justify-center items-center">
                <img :src="Profile1" alt="11" srcset="">
            </div>
            <div class="col-start-2 row-start-1 row-span-2  flex justify-center items-center">
                <img :src="Profile1" alt="">
            </div>
            <div class="row-start-2 col-start-3 row-span-2  flex justify-center items-center">
                <img :src="Profile1" alt="">
            </div>
            <div class=" row-start-1 col-start-4 row-span-2  flex justify-center items-center">
                <img :src="Profile1" alt="">
            </div>
            <div class=" col-start-1 row-start-4 row-span-2  flex justify-center items-center">
                <img :src="Profile1" alt="">
            </div>
            <div class="col-start-2 row-start-3 row-span-2  flex justify-center items-center">
                <img :src="Profile1" alt="">
            </div>
            <div class="col-start-3 row-start-4 row-span-2  flex justify-center items-center ">
                <img :src="Profile1" alt="">
            </div>
            <div class="col-start-4 row-start-3 row-span-2  flex justify-center items-center">
                <img :src="Profile1" alt="">
            </div>
        </div>
    </div>
    

</template>