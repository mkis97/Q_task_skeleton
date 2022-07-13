<template>
  <button
    class="action-button"
    :class="fullWidth ? 'fullwidth' : 'padding'"
    @click.stop="action"
  >
    <span>{{ value }}</span>
  </button>
</template>

<script src="./Button.js" />
<style lang="scss" src="./Button.scss" scoped />
