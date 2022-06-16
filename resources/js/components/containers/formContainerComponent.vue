<template>
    <div class=" container mt-36">
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_1"></headerForm-component>
            <div class="flex  mb-12">
                <h1 class="mr-3">
                    Sie besitzen bereits ein Kundenkonto? Melden Sie sich hier an und wir hinterlegen automatisch Ihre
                    Daten.
                </h1>
                <button
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded inline-flex items-center">
                    <span class="material-symbols-outlined">
                        lock
                    </span>
                    <span>Kundenanmeldung</span>
                </button>
            </div>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_2"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_3"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_4"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_5"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_6"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_7"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_8"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
        <div class="w-2/3 m-auto border-t-2 black-300 ">
            <headerForm-component :data="header.Schritt_9"></headerForm-component>
            <!-- <div class="flex justify-center mb-12">
                <form-component :user ="user" ></form-component>
            </div> -->
            <div class="flex justify-center mb-12">
                <dynamicForm-component :rows="rows"></dynamicForm-component>
            </div>
        </div>
    </div>
</template>

<script>
import form from '../../utils/form';
import header from '../../utils/header';
export default {
    data: function () {

        return {
            rows: form.Schritt_1.rows,
            header: header,
            user: 'test'
        }
    },
    mounted() {
        console.log('Component mounted.', form.Schritt_1.rows)
    }
}
</script>
