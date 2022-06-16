<!-- TODO CREATE STYLES INPUTS -->
<template>
 <button
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded inline-flex items-center">
                    <span class="material-symbols-outlined" v-if="icon">
                        {{icon}}
                    </span>
                    <span>{{tittle}}</span>
                </button>
</template>

<script>
export default {
    props: ['title','icon'],
    mounted() {
        console.log('dynamic Input.', this.data)

    }
}
</script>
