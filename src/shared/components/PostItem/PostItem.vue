<template>
  <div
    class="post_container"
    :class="clickable ? 'post_container_clickable' : 'post_container_default'"
    @click="openSinglePost"
  >
    <div class="post_heading">
      <div class="post_acronym" @click.stop="openUserProfile">
        <user-acronym :acronym="acronym(getUser(usersArray, post.userId))" />
        <span class="font-xs">{{ getUser(usersArray, post.userId) }}</span>
      </div>
      <font-awesome-icon
        class="clickable"
        icon="fa-solid fa-heart"
        :style="{ color: isPostLiked ? 'red' : 'grey' }"
        @click.stop="toggleLike"
      />
    </div>
    <p class="post_title">{{ post.title | capitalize }}</p>
    <p class="post_body font-xs">{{ post.body | capitalize }}</p>
    <slot name="append"></slot>
  </div>
</template>

<script src="./PostItem.js" />
<style lang="scss" src="./PostItem.scss" scoped />
