<template>
  <div id="main_layout">
    <div id="app_bar">
      <span class="font-2xl" @click="openHomePage">{{
        $t("APP.SIMPLE_APP")
      }}</span>
      <div class="app_bar_actions_container">
        <router-link
          class="navigation_router"
          :to="{ name: postsNavigation }"
          >{{ $t("APP.POSTS") }}</router-link
        >
        <router-link
          class="navigation_router"
          :to="{ name: favouritesNavigation }"
          >{{ $t("APP.FAVOURITES") }}</router-link
        >
        <router-link
          class="navigation_router"
          :to="{ name: analyticsNavigation }"
          >{{ $t("APP.ANALYTICS") }}</router-link
        >
        <Button
          :value="$t('APP.LOG_OUT')"
          @clicked="logOut"
          id="log_out_button"
        />
      </div>
    </div>
    <div id="content">
      <slot />
      <div class="floating_action">
        <span
          @click="loadLocaleAsync('en')"
          class="font-xs clickable"
          :class="{ active_locale: i18n.locale === 'en' }"
          >EN</span
        >
        <span class="inactive"> | </span>
        <span
          @click="loadLocaleAsync('hr')"
          class="font-xs clickable"
          :class="{ active_locale: i18n.locale === 'hr' }"
          >HR</span
        >
      </div>
      <div id="help_button" v-if="isPostsPage" @click="startTour">
        <span> ? </span>
      </div>
    </div>

    <v-tour
      name="help"
      :steps="steps"
      :options="{ labels: tourButtonLabels }"
    ></v-tour>
  </div>
</template>

<script src="./Layout.js" />
<style lang="scss" src="./Layout.scss" scoped />
