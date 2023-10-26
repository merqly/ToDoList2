<template>
<div>
    <Navbar></Navbar>
    <div id="divSetter">
        <div id="divSetter1">
            <input class="setContent" id="input1" v-model="input1" type="text" placeholder="Enter Name">
            <input class="setContent" id="input2" v-model="input2" type="text" placeholder="Enter Text">
            <button id="btn" @click="createNewTask">Add Task</button>
        </div>
    </div>
    <div id="div" v-for="(div, index) in divList" :key="index">
        <div class="card" id="">
            <p class="contentName">{{ div.value1 }}</p>
            <p class="content">{{ div.value2 }}</p>
        </div>
        <button class="deleteBtn" @click="deleteDiv(index)">Delete</button>
    </div>
</div>
</template>
  
  <script>
import {useCreateDiv} from '~/components/useCreateDiv'
import Navbar from '~/components/Navbar.vue'
import { ref } from 'vue';
export default {
    setup(){
        const {divList, createDiv, deleteDiv} = useCreateDiv();
        const input1 = ref('')
        const input2 = ref('')

        function createNewTask(){

            createDiv(input1.value, input2.value)
            input1.value = ref('')
            input2.value = ref('')
        }
        return{divList, input1, input2, createNewTask, deleteDiv}
    },
    components: {
        Navbar
    }
}
</script>
  
<style>
body{
    background-color: rgb(29, 31, 51);
}
#div {


background-color: rgb(24,27,43);
box-shadow: 0 10px 50px -20px rgb(0, 0, 0);
min-height: 120px;
border-radius: 15px;
margin: 20px;
word-wrap: break-word;
overflow: auto;
}

.content {
    margin: 15px;
    border-radius: 8px;
    padding: 5px;
    color: rgba(158, 172, 255, 0.575);
    font-family: 'Calibri';
    font-size: 20px;
}
.contentName {
    margin: 15px;
    border-radius: 8px;
    padding: 5px;
    color: rgb(158, 172, 255, 0.575);
    font-family: 'Calibri';
    font-size: 25px;
    font-weight: bold;
}
.deleteBtn {
margin: 20px;
color: rgb(148, 0, 0);
background-color: rgb(24,27,43);
font-size: 18px;
font-family: 'Calibri';
font-weight: bold;
width: 65px;
height: 35px;
border: 2px solid rgb(148, 0, 0);
border-radius: 5px;
}
.deleteBtn:hover {
    background-color: rgba(114, 0, 0, 0.753);
}
#divSetter {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#divSetter1 {
display: block;
background-color: rgb(24,27,43);
width: 1000px;
min-width: 500px;
box-shadow: 0 10px 50px -20px rgb(0, 0, 0);
min-height: 120px;
border-radius: 15px;
margin: 20px;
word-wrap: break-word;
overflow: auto;
}
.setContent {
    display: block;
    margin: 15px;
    width: 965px;
    background-color: transparent;
    border: 0;
    font-family: 'Calibri';
    font-size: 20px;
    color: rgba(158, 172, 255, 0.575);
}
#input1 {
    font-size: 25px;
    font-weight: bold;
}
.setContent::placeholder {
    color: rgba(158, 173, 255, 0.200);
}
#btn {
    margin-top: 5px;
    margin-left: 15px;
    margin-bottom: 15px;
    width: 90px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    color: rgb(24,27,43);
    font-family: 'Calibri';
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(117, 127, 189, 0.575);
}
#btn:hover {
    background-color: rgb(158, 172, 255, 0.575);
}
</style>