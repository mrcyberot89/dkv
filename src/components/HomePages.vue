<script setup>
import Navigasi from './Navigasi.vue';
import HeaderComponent from './HeaderComponent.vue';
import AboutComponent from './AboutComponent.vue';
import JoinComponent from './JoinComponent.vue';
import TeamProfile from './TeamProfile.vue';
import FooterComponent from './FooterComponent.vue';
import DivisiComponent2 from './DivisiComponent2.vue';
</script>

<template>
    <div class="relative">
        <div class="absolute z-10 w-full pl-8 pr-12">
            <Navigasi />
        </div>
        <HeaderComponent/>
        <AboutComponent/>
        <DivisiComponent2/>
        <FooterComponent/>

    </div>
    
</template>