<template>
  <VLayout>
    <!-- <VContainer> -->
    <VApp>
      <VAppBar
        app
        color="teal-darken-4"
      >
        <VAppBarTitle>
          <VIcon
            class="mr-3"
          >
            mdi-pine-tree
          </VIcon>
          AFC Backup Dashboard
        </VAppBarTitle>
      </VAppBar>
      <VMain>
        <CanyonConditions
          :card_class="top_card_class"
        />
        <AvalanchForecast
          :card_class="card_class"
        />
        <TrafficCameras
          :card_class="card_class"
        />
      </VMain>
    </VApp>
  <!-- </VContainer> -->
  </VLayout>
</template>

<script>
import CanyonConditions from './components/CanyonConditions.vue';
import AvalanchForecast from './components/AvalanchForecast.vue';
import TrafficCameras from './components/TrafficCameras.vue';

export default {
  name: 'App',

  components: {
    CanyonConditions,
    AvalanchForecast,
    TrafficCameras,
  },

  computed: {
    card_class() {
      return this.$isMobile() ? 'my-1 mx-0' : 'ma-2';
    },
    top_card_class() {
      return this.$isMobile() ? 'my-1 mx-0 mt-3' : 'ma-2 mt-4';
    },
  },

  data: () => ({
  }),
}
</script>
