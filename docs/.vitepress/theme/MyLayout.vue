<script setup>
import { useData } from 'vitepress'
import DefaultTheme, {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'
import VPHomeHero from 'vitepress/dist/client/theme-default/components/VPHomeHero.vue'
import VPHomeFeatures from 'vitepress/dist/client/theme-default/components/VPHomeFeatures.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

console.log(frontmatter.layout)
</script>

<template>
  <template v-if="frontmatter.layout === 'home-doc'">
    <VPHomeHero class="VPHomeDocHero" />
    <VPHomeFeatures class="VPHomeDocFeatures" />

    <template v-if="frontmatter.members">
      <VPTeamPage class="VPHomeDocTeamPage">
        <VPTeamMembers size="small" :members="$frontmatter.members" />
      </VPTeamPage>
    </template>
  </template>

  <Layout />
</template>
