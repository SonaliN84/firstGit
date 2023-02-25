// console.log('person1:shows ticket')
// console.log('person2:shows ticket')

// const promiseWifeBringdTicks=new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//     resolve('ticket');
//  },3000)
// })
// const getpopcorn=promiseWifeBringdTicks.then((t)=>{
//     console.log('H:lets go in')
//     console.log('W:no i need popcorn')
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// })
// const getbutter=getpopcorn.then((t)=>{
//     console.log('H:lets go in')
//     console.log('W:no i need butter')
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })
// const getcolddrink=getbutter.then((t)=>{
//     console.log('H:lets go in')
//     console.log('W:no i need colddrink')
//     return new Promise((resolve,reject)=>resolve(`${t} colddrink`))
// })
// getcolddrink.then((t)=>console.log(`${t}`))


// console.log('person4:shows ticket')
// console.log('person5:shows ticket')
// ///////////////////////////////////////////////////////////////////////////////

// console.log('person1:shows ticket')
// console.log('person2:shows ticket')

// //Async functions always return a promise
// // const Movie= async ()={
//    const movie=async()=>{ 

   //  const promiseWifeBringdTicks = new Promise((resolve,reject)=>{
   //      setTimeout(()=>{
   //         resolve('ticket')
   //      },3000)
   //  })
    

   //  const getpopcorn=new Promise((resolve,reject)=>resolve("popcorn"))
    
//     const getbutter=  new Promise((resolve,reject)=>resolve("butter"))
    
//     const getcolddrink=new Promise((resolve,reject)=>resolve("colddrink"))
//     let ticket=await promiseWifeBringdTicks;
//     console.log('H:lets go in')
//     console.log('W:no i need popcorn')

//     let popcorn=await getpopcorn;

//     console.log('H:lets go in')
//    console.log('W:no i need butter')

//    let butter=await getbutter;
//    console.log('H:lets go in')
//     console.log('W:no i need colddrink')

//    let colddrink=await getcolddrink;

//    console.log('then gets in')
    
//    return ticket;
// }

// movie().then((t)=>console.log(`person 3:shows ${t}`))



// console.log('person4:shows ticket')
// console.log('person5:shows ticket')


////////////////////////////////////////////////////////////////////////////

// console.log('person1:shows ticket')
// console.log('person2:shows ticket')

// const movie=async()=>{ 
//    const promiseWifeBringdTicks = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          reject('ticket')
//       },3000)
//   })

//    let ticket
//    try{
//       ticket=await promiseWifeBringdTicks;
//    }catch(e){
//       ticket="sad face";
//    }

// const getpopcorn=new Promise((resolve,reject)=>resolve("popcorn"))

// const getcandy=new Promise((resolve,reject)=>resolve("candy"))

// const getcoke=new Promise((resolve,reject)=>resolve("ticket"))

// //when all of them are independent and can happen at a same time parallel then we use promise.all

// let [popcorn,candy,coke]  = await Promise.all([getcandy,getcoke,getpopcorn])

// console.log(`${popcorn} ${candy} ${coke}`)
// return ticket;
// }
// movie().then((t)=>console.log(`person 3:shows ${t}`))

// console.log('person4:shows ticket')
// console.log('person5:shows ticket')

/////////////////////////////////////////////////////////////////////////////

let posts=[];
const newpost=async() => {
function createpost(post){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       
        posts.push(post)
        resolve(post)
      },1000)
    }) 

}

function deletepost(){
   return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
       if(posts.length>0)
       {
        let p= posts.pop();
       
         resolve(`${p} post deleted`);
       }
       else{
         
         reject('ERROR')
       }

      },1000)
   })


}


   
  let create= await createpost("POST1")

  let delete1=await deletepost();



  console.log(create);
  console.log(delete1);
  


}

newpost();

