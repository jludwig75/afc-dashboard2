<template>
  <VLayout>
    <VApp>
      <VAppBar
        app
        color="primary"
      >
        <VAppBarTitle>
          AFC Backup Dashboard
        </VAppBarTitle>
      </VAppBar>
      <VMain>
        <VCard>
          <VCardTitle>
            American Fork Canyon Links
          </VCardTitle>
          <VCardText>
            <VList>
              <VListItem>
                <VListItemTitle>
                  <a href="https://www.weather.gov/wrh/timeseries?site=TIMU1">Timpanogos Divide Snow Depth and Temperature (National Weather Service)</a>
                </VListItemTitle>
                <VListItemTitle>
                  <a href="https://snoflo.org/report/snow/utah/timpanogos-divide/">Timpanogos Divide Snow Depth and Temperature (SNOFLO)</a>
                </VListItemTitle>
                <VListItemTitle>
                  <a href="https://utahavalanchecenter.org/forecast/provo">Avalanche Forecase - Provo Area</a>
                </VListItemTitle>
                <VListItemTitle>
                  <a href="https://staging.udottraffic.utah.gov/">UDOT Traffic Cameras</a>
                </VListItemTitle>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VMain>
    </VApp>
  </VLayout>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
