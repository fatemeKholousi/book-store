// import React, { useState } from 'react'


// function BrowseImage() {
//     // const dispatch = useDispatch()
//     const uploadImage = async (e) => {
//         const file = e.target.files[0]
//         const base64 = await convertBase64(file)
//         // await store.dispatch(productImageAdded({ base64 }))
//         return 

//         console.log(base64)
//         // dispatch(base64)
//     }
//     const convertBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//             const fileReader = new FileReader()
//             fileReader.readAsDataURL(file)

//             fileReader.onload = (() => {
//                 resolve(fileReader.result)
//             })

//             fileReader.onerror = ((error) => { reject(error) })
//         })
//     }

//     return (
//         <div>
//             <input type='file' name='image' id='file' onChange={e => uploadImage(e)} />
//             {/* <img src={baseImg} width='100px' /> */}

//         </div>
//     )
// }

// export default BrowseImage
