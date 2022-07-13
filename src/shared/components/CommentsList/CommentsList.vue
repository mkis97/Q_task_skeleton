<template>
  <div class="comment-list-container">
    <p class="comment-list-title">{{ $t("POSTS_PAGE.COMMENTS") }}:</p>
    <template v-for="comment in comments">
      <comment-item :comment="comment" :key="comment.id" />
    </template>
  </div>
</template>

<script src="./CommentsList.js" />
<style lang="scss" src="./CommentsList.scss" scoped />
