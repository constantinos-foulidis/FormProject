/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('app-component', require('./components/appContainerComponent.vue').default);
Vue.component('formContainer-component', require('./components/containers/formContainerComponent.vue').default);
Vue.component('dynamicButton-component', require('./components/shared/dynamicButton/dynamicButtonComponent.vue').default);
Vue.component('form-component', require('./components/form/formComponent.vue').default);
Vue.component('dynamicForm-component', require('./components/dynamicForms/dynamicFormComponent.vue').default);
Vue.component('dynamicInput-component', require('./components/shared/dynamicInput/dynamicInputComponent.vue').default);
Vue.component('dynamicOption-component', require('./components/shared/dynamicOption/dynamicOptionComponent.vue').default);
Vue.component('headerForm-component', require('./components/shared/headerForm/headerFormComponent.vue').default);




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
