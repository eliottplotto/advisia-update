export type Project = {
  _id: string
  title: string
  slug: { current: string }
  coverImage: {
    asset: {
      url: string
    }
  }
}