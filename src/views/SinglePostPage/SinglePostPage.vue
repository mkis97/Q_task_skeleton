<template>
  <div id="single_post_container">
    <post-item v-if="isHydrated" :post="post" :users-array="users">
      <template #append>
        <comments-list />
      </template>
    </post-item>
    <loader-indicator v-else />
  </div>
</template>

<script src="./SinglePostPage.js" />
<style lang="scss" src="./SinglePostPage.scss" scoped />
