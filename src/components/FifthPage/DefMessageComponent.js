import React from 'react'

function DefMessageComponent() {
  return (
    <div className='pt-10 flex flex-wrap gap-2'>
      <MessageBubble message={"je vais vous dépasser"}/>
      <MessageBubble message={"je vais démarrer"}/>
      <MessageBubble message={"je vais sortir"}/>
      <MessageBubble message={"je vais m'engager sur la route"}/>
    </div>
  )
}

function MessageBubble({message}) {
  return (
    <div className='bg-blue-400 rounded-full p-4 mb-4 w-fit'>
        <div className='text-md text-white capitalize'>
          {message}
        </div>
    </div>
  )
};
export default DefMessageComponent;