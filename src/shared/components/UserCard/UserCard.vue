<template>
  <div id="user_profile_card">
    <h2 id="card_title">{{ $t("USER_PROFILE_PAGE.USER_INFO") }}</h2>
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

    <l-map
      style="height: 300px"
      :zoom="zoom"
      :center="[user.address.geo.lat, user.address.geo.lng]"
      v-if="user && user.address && user.address.geo"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        :lat-lng="[user.address.geo.lat, user.address.geo.lng]"
      ></l-marker>
    </l-map>
  </div>
</template>

<script src="./UserCard.js" />
<style lang="scss" src="./UserCard.scss" scoped />
