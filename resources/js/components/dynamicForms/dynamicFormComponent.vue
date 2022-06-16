<!-- change id -->
<template>
    <form class="w-full  shadow-2xl p-12">
        <template v-for="row in rows">
            <div class="flex flex-wrap -mx-3 mb-6">
                <template v-for="col in row.cols ">
                    <div class="w-full px-3 mb-6 md:mb-0" :class="['md:w-1/' + row.cols.length]"
                        v-if="col.data.body === 'input'">
                        <dynamicInput-component :data="col.data" :id="Math.random()"></dynamicInput-component>
                    </div>
                    <div class="w-full px-3 mb-6 md:mb-0" :class="['md:w-1/' + row.cols.length]" v-else>
                        <dynamicOption-component :data="col.data" :id="Math.random()"></dynamicOption-component>
                    </div>
                </template>
            </div>
        </template>
    </form>
</template>

<script>
export default {
    props: ['rows'],

    mounted() {
        console.log('Dynamic forms')
        console.log(this.rows);

    }
}
</script>
<!-- {

} -->
