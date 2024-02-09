<template>
  <VCard
    :class="card_class"
    border
  >
    <VCardTitle>
      Cameras
    </VCardTitle>
    <VDivider/>
    <VCardText>
      <VImg
        v-for="image in images"
        :key="image"
        :class="$isMobile() ?  '' : 'mx-12'"
        :src="image.link"
        :width=" $isMobile() ? '' : '400'"
        cover
      >
        {{ image.name }}
      </VImg>
    </VCardText>
  </VCard>
</template>

<script>
export default {
  name: 'TrafficCameras',

  props: {
    card_class: String,
  },
  
  data: () => ({
    images: [
      { name: 'Pine Hollow',
        link: 'https://www.udottraffic.utah.gov/1_devices/aux17727.jpeg',
      },
      { name: 'Tibble Fork',
        link: 'https://udottraffic.utah.gov/1_devices/aux17726.jpeg',
      },
    ]
  }),
}
</script>