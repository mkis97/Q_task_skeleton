<template>
  <div class="input_container">
    <div v-if="label" class="input_label">
      <label :for="inputId" class="font-sm">
        {{ label }}
      </label>
    </div>
    <div class="input_inner_container">
      <input
        :value="value"
        :ref="inputId"
        :id="inputId"
        :type="type"
        class="input_element font-sm"
        @input="handleInput"
      />
    </div>
    <p class="input_error_message font-xs">{{ errorMsg }}</p>
  </div>
</template>

<script src="./Input.js" />
<style lang="scss" src="./Input.scss" scoped />
