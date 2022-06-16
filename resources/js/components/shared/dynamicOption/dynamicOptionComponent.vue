
<template>
    <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="id">
            {{ data.label }}
        </label>
        <select v-model="data.model"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="option in data.options" :value="option.value">
                {{ option.text }}
            </option>
        </select>
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
