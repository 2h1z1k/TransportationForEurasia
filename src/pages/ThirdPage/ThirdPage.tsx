import React from 'react'
import ThirdPageContacts from "components/ThirdPageContacts/ThirdPageContacts"

type Props = {
  contactLike: {[id:number]:boolean}
  toggleLikeState:(id:number) => void
}

const ThirdPage = ({contactLike, toggleLikeState}: Props) => {
  return (
    <>
        <ThirdPageContacts contactLike={contactLike} toggleLikeState={toggleLikeState}/>
    </>
  )
}

export default ThirdPage 