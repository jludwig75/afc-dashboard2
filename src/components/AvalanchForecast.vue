<template>
  <VCard
    :class="card_class"
  >
  <VCardTitle>
    Avalanche Forecast
  </VCardTitle>
  <VCardText>
    <LinksList
      :links="links"
    />
  </VCardText>
</VCard>

</template>

<script>
import LinksList from './LinksList.vue';

export default {
  name: 'AvalanchForecast',

  components: {
    LinksList,
  },

  props: {
    card_class: String,
  },
  
  data: () => ({
    links: [
      {
        name: 'Avalanche Forecase - Provo Area',
        link: 'https://utahavalanchecenter.org/forecast/provo'
      },
    ],
  }),
}
</script>