import {Rating, RatingValueType, RatingWhithMemo} from './Rating';
import {useState} from 'react';

export default {
  component: Rating
}

export const EmptyRating = () => <RatingWhithMemo value={0} onClick={() => {
}}/>
export const Rating1 = () => <RatingWhithMemo value={1} onClick={() => {
}}/>
export const Rating2 = () => <RatingWhithMemo value={2} onClick={() => {
}}/>
export const Rating3 = () => <RatingWhithMemo value={3} onClick={() => {
}}/>
export const Rating4 = () => <RatingWhithMemo value={4} onClick={() => {
}}/>
export const Rating5 = () => <RatingWhithMemo value={5} onClick={() => {
}}/>

export const ChangeRating = () => {
  const [rating, setRating] = useState<RatingValueType>(5)
  return <RatingWhithMemo value={rating} onClick={setRating}/>
}