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
        :class="$isMobile() ?  'mb-5' : 'mx-12 mb-8'"
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
      { name: 'Tibble For Mile 1.72',
        link: 'https://udottraffic.utah.gov/1_devices/aux18005.jpeg',
      },
      { name: 'Tibble For Mile 0.88',
        link: 'https://udottraffic.utah.gov/1_devices/aux17725.jpeg',
      },
      { name: 'Road Fork',
        link: 'https://udottraffic.utah.gov/1_devices/aux17728.jpeg',
      },
      { name: 'Timpanogos Cave',
        link: 'https://udottraffic.utah.gov/1_devices/aux17729.jpeg',
      },
      { name: 'Fee Booth',
        link: 'https://udottraffic.utah.gov/1_devices/aux17730.jpeg',
      },
      { name: 'Canyon Mouth',
        link: 'https://udottraffic.utah.gov/1_devices/aux18049.jpeg',
      },
    ]
  }),
}
</script>