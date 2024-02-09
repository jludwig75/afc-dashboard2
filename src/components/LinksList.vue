<template>
  <VList>
    <VListItem
      v-for="link in links"
      :key="link"
    >
      <VListItemTitle>
        <a
        :href="link.link"
        >
          {{ link.name }}
        </a>
      </VListItemTitle>
    </VListItem>
  </VList>
</template>

<script>
export default {
  name: 'CanyonConditions',
  
  props: {
    links: Array,
  },
  
  data: () => ({
  }),
}
</script>