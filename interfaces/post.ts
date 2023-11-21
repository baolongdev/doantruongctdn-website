import type Author from './author'

type PostType = {
  slug: string
  excerpt?: string
  title: string
  content: string
  date?: string
  coverImage?: string
  author?: Author
  BgColor?: string
  ogImage?: {
    url: string
  }
}

export default PostType
