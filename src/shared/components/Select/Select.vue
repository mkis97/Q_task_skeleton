<template>
  <div class="select_container">
    <div v-if="label" class="select_label">
      <label :for="inputId" class="font-sm">
        {{ label }}
      </label>
    </div>
    <div class="select_inner_container">
      <select
        :value="value"
        :ref="inputId"
        :id="inputId"
        class="select_element"
        @input="handleInput"
      >
        <option :value="null" v-if="!requiredValue">-</option>
        <option v-for="option in options" :key="option.key" :value="option.id">
          {{ option.name }}
        </option>
      </select>
      <p class="select_error_message font-xs">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script src="./Select.js" />
<style lang="scss" src="./Select.scss" scoped />
