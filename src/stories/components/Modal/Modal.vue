<template>
    <div class="modal-container">
        <div class="modal-contain">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>{{title}}</h2>
                    <button @click="$emit('closeModal')">fechar</button>
                </div>
                <div class="container-content">
                    <ul>
                        <li v-for="character in list" :key="character.id">{{character.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './Modal.scss';
export default {
    name: 'ModalList',
    emits: ['closeModal'],
    props:{
        title: String,
        list: Array
    }
}
</script>