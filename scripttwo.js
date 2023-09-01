const HandleCatagory=async()=>{
  const res =await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
  const data=await res.json()

catagoryarray(data)
}


// creating category button
const catagoryarray=(datas)=>{
  const arrayOfData=datas.data
  
  const catgBtn=document.getElementById('catagorybutton')
  
  const ul=document.createElement('ul')
  ul.classList=`flex gap-4 px-8  md:px- lg:px-96  `
 let liHTML='';
console.log('hi')
  arrayOfData.forEach(element => {
  console.log('hi',element)
  
   liHTML +=`<li><a onclick="categoryId('${element.category_id}')" href='#' class="btn btn-outline">
    ${element.category}</a></li>`
 
    


  })
  ul.innerHTML=liHTML
  catgBtn.appendChild(ul)
  
}