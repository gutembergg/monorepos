<template>
  <div>
    <header class="shadow-sm bg-white p-2">
      <button>
        <NuxtLink to="/">Index page</NuxtLink>
      </button>
    </header>

    <div>
      <slot />
    </div>

    <footer>
      <button>
        <NuxtLink :to="{ name: 'home' }">Home page</NuxtLink>
      </button>
      <button>
        <NuxtLink :to="{ name: 'contact' }">Contact page</NuxtLink>
      </button>
      <button>
        <NuxtLink to="/users/guto">Users page</NuxtLink>
      </button>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
