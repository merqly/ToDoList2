import { ref } from 'vue';

export function useCreateDiv() {
  const divList = ref([]);

  function createDiv(value1, value2) {
    divList.value.push({ value1, value2 });
  }

  function deleteDiv(index){
    divList.value.splice(index, 1);
  }

  return { divList, createDiv, deleteDiv };
}
