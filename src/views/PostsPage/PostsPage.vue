<template>
  <div class="posts-page-container">
    <div class="posts-page-actions-container">
      <Select
        v-model="localParams._sort"
        :options="sortOptions"
        required-value
        input-id="list-sore-select"
        :label="$t('POSTS_PAGE.SORT_BY')"
      />
      <Select
        v-model="localParams._order"
        :options="orderOptions"
        required-value
        input-id="list-order-select"
        :label="$t('POSTS_PAGE.ORDER')"
      />
      <Select
        v-model="localParams.userId"
        :options="users"
        input-id="list-user-select"
        :label="$t('POSTS_PAGE.USER')"
      />
      <Input
        v-model="localParams.q"
        input-id="list-search-input"
        :label="$t('POSTS_PAGE.SEARCH')"
      />
    </div>

    <template v-if="isHydrated">
      <div v-if="posts.length" class="posts-pages-content">
        <template v-for="post in posts">
          <post-item
            :key="post.id"
            :post="post"
            :users-array="users"
            clickable
          />
        </template>
      </div>
      <div v-else class="posts-page-no-content">
        <span class="font-2xl">{{ $t("POSTS_PAGE.NO_DATA") }}.</span>
      </div>

      <pagination
        v-if="posts.length && showPagination"
        v-model="localParams._page"
      />
    </template>
    <div class="loader_indicator_container" v-else>
      <loader-indicator />
    </div>
  </div>
</template>

<script src="./PostsPage.js" />
<style lang="scss" src="./PostsPage.scss" scoped />
