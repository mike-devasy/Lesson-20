<template>
  <tr>
    <td>{{ user.email }}</td>
    <td v-for="(rule, ruleId) in editablePermissionsList()" :key="ruleId">
      <input v-model="userObj.permissions[ruleId]" type="checkbox" />
    </td>
  </tr>
</template>

<script setup>
import { onMounted, reactive, watch } from 'vue'
import { useUsersStore } from '@/stores/users'
const userStore = useUsersStore()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const userObj = reactive({ ...props.user })

const editablePermissions = ['read', 'create', 'update', 'delete']

function editablePermissionsList() {
  const obj = {}
  for (const ruleId of editablePermissions) {
    obj[ruleId] = userObj.permissions[ruleId]
  }
  return obj
}

watch(userObj, (newUserObj) => {
  userStore.updateUser({
    id: newUserObj.id,
    data: {
      email: newUserObj.email,
      permissions: newUserObj.permissions
    }
  })
})

onMounted(() => {
  console.log('Mounted users')
})
</script>

<style lang="scss" scoped></style>
