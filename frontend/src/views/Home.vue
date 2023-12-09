<template>
  <div
    class="flex h-screen items-center justify-center bg-white dark:bg-gray-800"
  >
    <button
      class="py-4 px-6 w-96 font-bold font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600"
      @click="fetchUsers()"
    >
      Fetch users
    </button>
  </div>
</template>

<script setup lang="ts">
import { axios } from "@/libs/axios";

const fetchUsers = async (): Promise<void> => {
  try {
    const { data } = await axios.get("/users");
    console.log(data);
  } catch {
    alert("Something went wrong.");
  }
};
</script>

<style scoped></style>
