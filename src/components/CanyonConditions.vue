<template>
  <VCard
    :class="card_class"
  >
  <VCardTitle>
    American Fork Canyon Conditions
  </VCardTitle>
  <VDivider/>
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
  name: 'CanyonConditions',
  
  components: {
    LinksList,
  },

  props: {
    card_class: String,
  },
  
  data: () => ({
    links: [
      {
        name: 'Timpanogos Divide Snow Depth and Temperature (National Weather Service)',
        link: 'https://www.weather.gov/wrh/timeseries?site=TIMU1'
      },
      {
        name: 'Timpanogos Divide Snow Depth and Temperature (USDA)',
        link: 'https://wcc.sc.egov.usda.gov/reportGenerator/view/customSingleStationReport/hourly/start_of_period/820:UT:SNTL%7Cid=%22%22%7Cname/-71,0/SNWD::value,TOBS::value?fitToScreen=false&sortBy=0:-1'
      },
    ],
  }),
}
</script>