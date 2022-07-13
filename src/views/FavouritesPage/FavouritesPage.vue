<template>
  <div class="posts-page-container">
    <template v-if="isHydrated">
      <div v-if="likedPosts.length" class="posts-pages-content">
        <template v-for="post in likedPosts">
          <post-item :key="post.id" :post="post" :users-array="users" />
        </template>
      </div>
      <div v-else class="posts-page-no-content">
        <span class="font-2xl">{{ $t("POSTS_PAGE.NO_DATA") }}.</span>
      </div>
    </template>
  </div>
</template>

<script src="./FavouritesPage.js" />
<style lang="scss" src="./FavouritesPage.scss" scoped />
