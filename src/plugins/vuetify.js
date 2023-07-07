import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
})