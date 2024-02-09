<template>
  <VCard
    :class="card_class"
    border
  >
  <VCardTitle>
    Avalanche Forecast
  </VCardTitle>
  <VDivider/>
  <VCardText>
    <!-- <a href="https://utahavalanchecenter.org/forecast/provo"> -->
      <VImg
        :src="avalanche_rose_link"
        :class="$isMobile() ?  '' : 'mx-12'"
        :width=" $isMobile() ? '200' : '400'"
        style="cursor: pointer;"
        @click="redirectToLink('https://utahavalanchecenter.org/forecast/provo')"
      >
        Provo Area Avalanch Forecast
      </VImg>
    <!-- </a> -->
  </VCardText>
</VCard>

</template>

<script>
import axios from 'axios';

export default {
  name: 'AvalanchForecast',

  props: {
    card_class: String,
  },

  mounted() {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('https://corsproxy.io/?https://utahavalanchecenter.org/forecast/provo/json',
      {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
      .then(response => {
        let avalanche_data = response.data;
        this.avalanche_rose_link = '';
        for (const advisory of avalanche_data.advisories) {
          if (advisory.advisory.overall_danger_rose_image) {
            this.avalanche_rose_link = 'https://utahavalanchecenter.org' + advisory.advisory.overall_danger_rose_image;
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  
  data: () => ({
    links: [
      {
        name: 'Avalanche Forecast - Provo Area',
        link: 'https://utahavalanchecenter.org/forecast/provo'
      },
    ],
    avalanche_rose_link: '',
  }),

  methods: {
    redirectToLink(link) {
      window.location.href = link;
    }
  }
}
</script>