import { createClient } from 'next-sanity'
import { sanityConfig } from './sanity-config'

type Client = {
  dataset: string;
  projectId: string;
  useCdn: boolean;
  token?: string;
}

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

export const getClient = (preview: Client) => (preview ? previewClient : sanityClient)