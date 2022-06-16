
<template>
    <div>
        <div class="flex  justify-start mt-24 mb-3">
            <h1 class="bg-cyan-800 text-white p-1 font-semibold text-lg">{{ data.header }}</h1>
        </div>
        <div class="flex justify-start mb-6">
            <h1>
                {{ data.subHeader_1 }}
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    mounted() {
        console.log('dynamic Input.', this.data)

    }
}
</script>
<!--
    {
        label: 'something'
        paragraph: 'test'
        type: 'text | number | email | password'
        style ?
    }

 -->
