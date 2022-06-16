
<template>
    <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="id">
            {{ data.label }}
        </label>
        <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            :id="id" :type="data.type" v-model="data.model">
        <p class="text-red-500 text-xs italic">{{ data.model }}</p>
    </div>
</template>

<script>
export default {
    props: ['data', 'id'],
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
