import { ref } from 'vue';
const divList = ref([]);
export function useCreateDiv() {
  function createDiv(value1, value2) {
    divList.value.push({ value1, value2 });
  }

  function deleteTask(index){
    divList.value.splice(index, 1);
  }

  return { divList, createDiv, deleteTask: deleteTask };
}
