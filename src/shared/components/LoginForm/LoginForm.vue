<template>
  <div id="login_container" class="pulse">
    <p id="login_title" class="font-2xl">{{ $t("LOGIN.FORM_ACTION") }}</p>
    <Input
      v-model.trim="form.username"
      :label="$t('LOGIN.USERNAME')"
      input-id="username"
      :error-msg="error.username"
    />
    <Input
      v-model="form.password"
      :label="$t('LOGIN.PASSWORD')"
      input-id="password"
      type="password"
      class="mt-2"
      :error-msg="error.password"
    />
    <Button
      :value="$t('LOGIN.FORM_ACTION')"
      full-width
      class="mt-4"
      @clicked="emitLogin"
    />
  </div>
</template>

<script src="./LoginForm.js" />
<style lang="scss" src="./LoginForm.scss" scoped />
