<template>
  <div class="comment_container">
    <p class="comment_creator font-sm">{{ comment.name | capitalize }}</p>
    <font-awesome-icon
      class="show_more_icon"
      :class="{ rotatedIcon: expanded }"
      icon="fa-solid fa-chevron-down"
      @click="expanded = !expanded"
    />
    <transition name="grow-out">
      <p class="comment_body font-sm" v-show="expanded">
        {{ comment.body | capitalize }}
      </p>
    </transition>
    <div>
      <a class="comment_link font-sm" :href="`mailto:${comment.email}`"
        >{{ $t("POSTS_PAGE.BY") }}: {{ comment.email }}</a
      >
    </div>
  </div>
</template>

<script src="./CommentItem.js" />
<style lang="scss" src="./CommentItem.scss" scoped />
