<template>
    <div class=" container mt-36">
     <div class="w-2/3 m-auto border-t-2 black-300 ">
            <div class="flex  justify-start mt-24 mb-3">
                <h1 class="bg-cyan-800 text-white p-1 font-semibold text-lg">Schritt 1:  Reiseanmelder</h1>
            </div>
            <div class="flex justify-start mb-6">
                <h1>
                Bitte füllen Sie alle untenstehenden Felder aus. An die hier angegebene Adresse senden wir Ihnen nach erfolgreicher Reisebuchung Ihre schriftliche Reisebestätigung.
                </h1>
            </div>
             <div class="flex  mb-12">
                <h1 class="mr-3">
               Sie besitzen bereits ein Kundenkonto? Melden Sie sich hier an und wir hinterlegen automatisch Ihre Daten.
                </h1>
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded inline-flex items-center">
                    <span class="material-symbols-outlined">
                        lock
                    </span>
                    <span>Kundenanmeldung</span>
                    </button>
            </div>
            <div class="flex justify-center mb-12">
                <form-component></form-component>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
