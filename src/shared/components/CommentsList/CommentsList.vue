<template>
  <div class="comment_list_container">
    <p class="comment_list_title">{{ $t("POSTS_PAGE.COMMENTS") }}:</p>
    <template v-for="comment in comments">
      <comment-item :comment="comment" :key="comment.id" />
    </template>
  </div>
</template>

<script src="./CommentsList.js" />
<style lang="scss" src="./CommentsList.scss" scoped />
