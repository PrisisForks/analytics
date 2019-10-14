import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import exampleProviderPlugin from './plugins/provider-example'


/* initialize analytics and load plugins */
const analytics = Analytics({
  debug: true,
  app: 'yolo',
  plugins: [
    exampleProviderPlugin({
      settingOne: 'xyz'
    }),
    googleAnalytics({
      trackingId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
    }),
  ]
})

// analytics.storage.setItem('wer', "hi", 'cookie')

window.Analytics = analytics

/* export analytics for usage through the app */
export default analytics
