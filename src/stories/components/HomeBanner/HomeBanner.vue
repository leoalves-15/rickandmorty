<template>
    <div class="homebanner-container">
        <h1>Rick e Morty {{title}}</h1>
        <div class="homebanner-image">
            <img src="../../assets/hero-image.svg" alt="" width="300" height="300">
        </div>
    </div>
</template>
<script>
import './HomeBanner.scss';
export default {
    name:'HomeBanner',
    props:{
        title: String
    }
}
</script>ri