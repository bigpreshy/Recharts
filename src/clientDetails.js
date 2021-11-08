const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'uczfatap',
  dataset: 'production',
  apiVersion: '2021-03-25', // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client;