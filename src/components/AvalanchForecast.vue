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
    <span
      v-for="forecast in forecasts"
          :key="forecast"
    >
      <VImg
        v-if="forecast.enabled"
        :src="forecast.link"
        :class="$isMobile() ?  '' : 'mx-12'"
        :width=" $isMobile() ? '200' : '400'"
        style="cursor: pointer;"
        @click="redirectToLink(`'https://utahavalanchecenter.org/forecast/${forecast.name}`)"
      >
        {{ forecast.display_name }} Area Avalanch Forecast
      </VImg>
    </span>
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

  data: () => ({
    forecasts: [
    {
        name: 'provo',
        display_name: 'Provo',
        link: '',
        enabled: true,
      },
      {
        name: 'salt-lake',
        display_name: 'Salt Lake',
        link: '',
        enabled: false,
      },
    ],
    avalanche_rose_link: '',
  }),

  mounted() {
    for (const forecast of this.forecasts) {
      if (forecast.enabled) {
        this.fetch_forecast(forecast);
      }
    }
  },
  
  methods: {
    redirectToLink(link) {
      window.location.href = link;
    },
    fetch_forecast(forecast) {
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get(`https://corsproxy.io/?https://utahavalanchecenter.org/forecast/${forecast.name}/json`,
        {
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
        .then(response => {
          let avalanche_data = response.data;
          forecast.link = '';
          for (const advisory of avalanche_data.advisories) {
            if (advisory.advisory.overall_danger_rose_image) {
              forecast.link = 'https://utahavalanchecenter.org' + advisory.advisory.overall_danger_rose_image;
            }
          }
        })
        .catch(error => {
          console.log(`Failed to download avalanche forecast for the Provo area: ${error}`);
        });
    }
  }
}
</script>