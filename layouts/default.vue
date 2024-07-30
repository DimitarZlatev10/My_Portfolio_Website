<template>
  <div class="min-h-screen flex flex-col">

    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>
