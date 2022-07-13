<template>
  <button
    class="action-button"
    :class="fullWidth ? 'fullwidth' : ''"
    @click.stop="action"
  >
    <span>{{ value }}</span>
  </button>
</template>

<script src="./Button.js" />
<style lang="scss" src="./Button.scss" scoped />
