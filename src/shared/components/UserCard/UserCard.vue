<template>
  <div id="user_profile_card">
    <h2>{{ $t("USER_PROFILE_PAGE.USER_INFO") }}</h2>
    <p>
      <b>{{ $t("USER_PROFILE_PAGE.NAME") }}:</b> {{ user.name }}
    </p>
    <p>
      <b>{{ $t("USER_PROFILE_PAGE.USERNAME") }}:</b> {{ user.username }}
    </p>
    <p>
      <b>{{ $t("USER_PROFILE_PAGE.EMAIL") }}:</b> {{ user.email }}
    </p>
    <p>
      <b>{{ $t("USER_PROFILE_PAGE.PHONE") }}:</b> {{ user.phone }}
    </p>
    <p>
      <b>{{ $t("USER_PROFILE_PAGE.WEBSITE") }}:</b> {{ user.website }}
    </p>
    <p v-if="user.address">
      <b>{{ $t("USER_PROFILE_PAGE.ADDRESS") }}:</b> {{ user.address.suite }},
      {{ user.address.street }},
      {{ user.address.zipcode }}
      {{ user.address.city }}
    </p>
    <p v-if="user.company">
      <b>{{ $t("USER_PROFILE_PAGE.COMPANY") }}:</b> {{ user.company.name }}
    </p>
  </div>
</template>

<script src="./UserCard.js" />
<style lang="scss" src="./UserCard.scss" scoped />
