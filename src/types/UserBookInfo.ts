import type { CollectionType } from './CollectionType'
import type { Review } from './Review'

export type UserBookInfo = {
  collection: Nullable<CollectionType>
  startedReadingAt: Nullable<string>
  droppedReadingAt: Nullable<string>
  completedReadingAt: Nullable<string>
  lastProgressUpdatedAt: Nullable<string>
  progress: Nullable<number>
  countPagesRead: Nullable<number>
  review: Nullable<Review>
  favorite: boolean
}
