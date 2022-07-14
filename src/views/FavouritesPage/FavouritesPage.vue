<template>
  <div id="favourites_page_container">
    <template v-if="isHydrated">
      <div v-if="likedPosts.length" id="favourites_pages_content">
        <template v-for="post in likedPosts">
          <post-item :key="post.id" :post="post" :users-array="users" />
        </template>
      </div>
      <div v-else id="favourites_pages_no_content">
        <span class="font-2xl">{{ $t("POSTS_PAGE.NO_DATA") }}.</span>
      </div>
    </template>
  </div>
</template>

<script src="./FavouritesPage.js" />
<style lang="scss" src="./FavouritesPage.scss" scoped />
