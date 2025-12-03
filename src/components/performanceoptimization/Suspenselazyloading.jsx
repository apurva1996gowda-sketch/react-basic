import {lazy,Suspense} from 'react'

const Delayfunc = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./Usememopractice'))
    }, 3000);
  })
})

// code will be splitted into chunks to load only what's needed.This improves initial load speed


const Suspenselazyloading = () => {
  return (
    <>
    <Suspense fallback={<p>Loading....</p>}>
        <Delayfunc></Delayfunc>

    </Suspense>
    {/* to add some fallback text during loading Suspense is used and this will be displayed till
    the component loads  */}
      
    </>
  )
}

export default Suspenselazyloading
