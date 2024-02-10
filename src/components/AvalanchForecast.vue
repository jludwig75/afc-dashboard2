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
        @click="redirectToLink(`https://utahavalanchecenter.org/forecast/${forecast.name}`)"
      >
        {{ forecast.display_name }} Area
      </VImg>
    </span>
  </VCardText>
</VCard>

</template>

<script>
import axios from 'axios';

function minutes_to_ms(minutes) {
  return minutes * 60 * 1000;
}

function ms_to_minutes(minutes) {
  return minutes / (60 * 1000);
}

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
        enabled: true,
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
      // Cache the forecast in browser local storage so we only load it every 15 minutes.
      // TODO: This caching can be done generically for a get request. I'll need it later for other requests.
      let now = new Date();
      let forecase_item_name = `'avalanche-forecast-${forecast.name}`;
      let forecast_json = localStorage.getItem(forecase_item_name);
      console.log(`Loaded forecast ${forecase_item_name}: ${forecast_json}`);
      let forecast_data = JSON.parse(forecast_json, (key, value) => {
        if (key === "date") {
          return new Date(value); // Convert the string back to a Date
        }
        return value; // Keep other properties unchanged
      });
      if (forecast_data) {
        console.log(`Stored forecast date is ${ms_to_minutes(now - forecast_data.date)} minutes old`)
        if (now - forecast_data.date < minutes_to_ms(15)) {
          console.log('Using stored forecast');
          forecast.link = forecast_data.link;
          return;
        }
      }
      console.log('Not using stored forecast');
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

          if (forecast.link.length > 0) {
            let forecast_data = {
              'date': now,
              'link': forecast.link
            }
            let data_json = JSON.stringify(forecast_data);
            console.log(`Storing forecast ${forecase_item_name}: ${data_json}`);
            localStorage.setItem(forecase_item_name, data_json);
          }
        })
        .catch(error => {
          console.log(`Failed to download avalanche forecast for the Provo area: ${error}`);
        });
    }
  }
}
</script>