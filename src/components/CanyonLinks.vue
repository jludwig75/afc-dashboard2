<template>
  <VCard
    :class="card_class"
  >
  <VCardTitle>
    American Fork Canyon Links
  </VCardTitle>
  <VCardText>
    <VList>
      <VListItem
        v-for="link in afc_links"
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
</VCardText>
</VCard>

</template>

<script>
export default {
  name: 'CanyonLinks',

  props: {
    card_class: String,
  },
  
  data: () => ({
    afc_links: [
    {
      name: 'Timpanogos Divide Snow Depth and Temperature (National Weather Service)',
      link: 'https://www.weather.gov/wrh/timeseries?site=TIMU1'
    },
    {
      name: 'Timpanogos Divide Snow Depth and Temperature (USDA)',
      link: 'https://wcc.sc.egov.usda.gov/reportGenerator/view/customSingleStationReport/hourly/start_of_period/820:UT:SNTL%7Cid=%22%22%7Cname/-71,0/SNWD::value,TOBS::value?fitToScreen=false&sortBy=0:-1'
    },
    {
      name: 'Avalanche Forecase - Provo Area',
      link: 'https://utahavalanchecenter.org/forecast/provo'
    },
    {
      name: 'Alpine Loop (Pine Hollow) Traffic Cameras',
      link: 'https://prod-ut.ibi511.com/cctv?start=0&length=10&filters%5B0%5D%5Bi%5D=2&filters%5B0%5D%5Bs%5D=Alpine+Loop+%2F+SR-92+&order%5Bi%5D=1&order%5Bdir%5D=asc'
    },
    {
      name: 'American Fork Canyon (Tibble Fork) Traffic Cameras',
      link: 'https://prod-ut.ibi511.com/cctv?start=0&length=10&filters%5B0%5D%5Bi%5D=2&filters%5B0%5D%5Bs%5D=American+Fork+Canyon+Rd+%2F+SR-144+&order%5Bi%5D=1&order%5Bdir%5D=asc'
    },
    ],
  }),
}
</script>