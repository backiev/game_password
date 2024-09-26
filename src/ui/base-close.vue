<script lang='ts' setup>

</script>

<template>
    <div class="close">
        <div class="close-line first"></div>
        <div class="close-line second"></div>
    </div>
</template>

<style lang='scss' scoped>
    .close {
        width: 20px;
        height: 20px;
        position: relative;
        .close-line {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 5px;
            background-color: $color-white;
            border: 2px solid $color-blue-light;
            transition: background-color .2s ease-in-out;
            border-radius: 50px;
            &.first {
                transform: rotate(45deg);
            }
            &.second {
                transform: rotate(-45deg);
            }
        }
        &:hover {
            cursor: pointer;
            .close-line {
                background-color: $color-blue-light;
            }
        }
    }
</style>