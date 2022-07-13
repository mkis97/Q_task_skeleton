<template>
  <div id="pagination_container">
    <template v-for="page in pages">
      <div
        @click="handleClick(page)"
        :key="`page-${page}`"
        class="pagination_item"
        :class="page === value ? 'pagination_active' : 'pagination_inactive'"
      >
        {{ page }}
      </div>
    </template>
  </div>
</template>

<script src="./Pagination.js" />
<style lang="scss" src="./Pagination.scss" scoped />
