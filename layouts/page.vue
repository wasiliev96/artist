<template>
  <v-app class="page">
    <v-app-bar
      absolute
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>
        <v-img
          class="level-item"
          :src="page.logo.fields.file.url"
          :alt="page.logo.fields.title"
          :width="page.logo.fields.file.details.image.width"
          :height="page.logo.fields.file.details.image.height"
        />
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        v-for="socialLink in page.headerSocialLinks.fields.socialLink"
        :key="socialLink.id"
        color="accent"
        text
      >
        <img
          class="social-link__image"
          :src="socialLink.fields.icon.fields.file.url"
          :alt="socialLink.fields.icon.fields.title"
          :width="socialLink.fields.icon.fields.file.details.image.width"
          :heigth="socialLink.fields.icon.fields.file.details.image.height"
        >
      </v-btn>

      <v-spacer />
      <v-btn outlined plain class="cta-button">
        Message
      </v-btn>

      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            plain
            v-bind="attrs"
            class="menu-toggler"
            @click="isMenuOpen = !isMenuOpen"
            v-on="on"
          >
            <transition name="fade">
              <img v-if="isMenuOpen" key="open" src="~/assets/icons/menu-open.svg" alt="Open menu">
              <img v-else key="close" src="~/assets/icons/menu.svg" alt="Close menu">
            </transition>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(menuLink,index) in menuLinks"
            :key="index"
            :href="menuLink.href"
          >
            <v-list-item-title>
              {{ menuLink.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;" />
    </v-sheet>
    <!-- <header class="container header ">
      <a href="#" class="logo-link">
        <img
          class="level-item"
          :src="page.logo.fields.file.url"
          :alt="page.logo.fields.title"
          :width="page.logo.fields.file.details.image.width"
          :height="page.logo.fields.file.details.image.height"
        >
      </a>
      <ul class="social-links level-item">
        <li v-for="socialLink in page.headerSocialLinks.fields.socialLink" :key="socialLink.id" class="social-link-item">
          <a :href="socialLink.fields.url" class="social-link">
            <img
              class="social-link__image"
              :src="socialLink.fields.icon.fields.file.url"
              :alt="socialLink.fields.icon.fields.title"
              :width="socialLink.fields.icon.fields.file.details.image.width"
              :heigth="socialLink.fields.icon.fields.file.details.image.height"
            >
          </a>
        </li>
      </ul>
      <div class="cta">
        <b-button class="btn is-small" type="button" v-text="page.headerCta.fields.title" />
      </div>
      <b-dropdown
        aria-role="list"
        position="is-bottom-left"
        append-to-body
      >
        <template #trigger="{ active }">
          <b-button
            class="menu-trigger"
            :style="{ backgroundImage:active?'~/assets/icons/menu.svg':'~/assets/icons/menu-open.svg'}"
          >
            <transition name="fade" mode="out-in">
            <img v-if="active" src="~/assets/icons/menu.svg" alt="Open menu">
            <img v-else src="~/assets/icons/menu-open.svg" alt="Close menu">
            </transition>
          </b-button>
        </template>

        <b-dropdown-item aria-role="listitem">
          Action
        </b-dropdown-item>
        <b-dropdown-item aria-role="listitem">
          Another action
        </b-dropdown-item>
        <b-dropdown-item aria-role="listitem">
          Something else
        </b-dropdown-item>
      </b-dropdown>
    </header> -->
    <main>
      <Nuxt />
    </main>
    <footer>
      <h2>Footer</h2>
    </footer>
  </v-app>
</template>

<script>
import { defineComponent, useStore, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const isMenuOpen = ref(false)

    const menuLinks = [
      {
        title: 'Home',
        href: '#'
      },
      {
        title: 'Portfolio',
        href: '#'
      },
      {
        title: 'About',
        href: '#'
      },
      {
        title: 'Contact',
        href: '#'
      }
    ]

    const store = useStore()
    const pageData = ref(store.state.pageData)
    return { page: pageData, isMenuOpen, menuLinks }
  }
})
</script>
