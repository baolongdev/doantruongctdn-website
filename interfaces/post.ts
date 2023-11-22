import type Author from './author'

type PostType = {
  slug: string
  excerpt?: string
  title: string
  content: string
  subtitle?: string
  date?: string
  data?: []
  coverImage?: string
  logo?: string
  imageList?: []
  author?: Author
  BgColor?: string
  textColor?: string
  ogImage?: {
    url: string
  }
}

export default PostType
