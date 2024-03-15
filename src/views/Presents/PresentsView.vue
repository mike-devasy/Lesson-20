<template>
	<main-master-page>
		<div class="container">
    <h3 style="font-size: 25px;margin-bottom: 10px;">Список подарунків:</h3>
    <ol>
      <li v-for="{ title, id } in getPresentsList" :key="id" class="present">
        <div class="present-content">
          <span>{{ title }} </span>
          <button v-if="getCurrentUserPermissions.delete" @click="onDelete(id)">Видалити</button>
        </div>
      </li>
    </ol>
    <div class="new-present">
      <label>
        Новий подарунок
        <input v-model="newPresent.title" type="text" />
      </label>
      <button @click="onAdd(newPresent)">Додати</button>
    </div>
  </div>

	</main-master-page>

</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import { reactive, onMounted, computed} from 'vue'
import { usePresentsStore } from '@/stores/presents'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
const { getCurrentUserPermissions } = storeToRefs(useUsersStore())
const presentStore = usePresentsStore()
const { deleteItem, addItem, 	loadItemsList } = presentStore
const getPresentsList = computed(() => presentStore.getItemsList ?? [])
let newPresent = reactive({})
onMounted (() => {
	loadItemsList()
})
function onDelete(id) {
  deleteItem(id)
}
function onAdd(item) {
  addItem(item)
  newPresent = {}
	loadItemsList()
}
</script>

<style lang="scss" scoped>
.container{
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.present {
  width: 200px;
  font-size: 20px;
  text-align: left;
  margin: 0 auto;
}
.present-content {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.new-friend {
}
button {
  cursor: pointer;
  width: 150px;
  font-size: 20px;
  padding: 5px 10px;
}
label {
  margin-right: 20px;
  font-size: 25px;
}
input {
  font-size: 20px;
  width: 200px;
  height: 30px;
}
</style>
