<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { onMounted } from 'vue'

import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
const usersStore = useUsersStore()

const { usersList } = storeToRefs(usersStore)
const { loadUsersList } = usersStore

onMounted(() => {
  loadUsersList()
})

import UserItem from './UserItem.vue'
</script>

<template>
  <main-master-page>
    <div>
      <table v-if="usersList?.length">
        <tr>
          <th>email користувача</th>
          <th v-for="(rule, ruleId) in usersList[0].permissions" :key="ruleId">
            {{ ruleId }}
          </th>
        </tr>

        <user-item v-for="user in usersList" :key="user.id" :user="user" />
      </table>
      <div v-else>No users</div>
    </div>
  </main-master-page>
</template>

<style lang="scss" scoped></style>
