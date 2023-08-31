const HandleCatagory=async()=>{
  const res =await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
  const data=await res.json()

catagoryarray(data)
}
// creating category button
const catagoryarray=(datas)=>{
  const arrayOfData=datas.data
  console.log(arrayOfData)
  const catgBtn=document.getElementById('catagorybutton')
  const ul=document.createElement('ul')
  ul.classList=`grid grid-cols-4 gap 2`
 let liHTML='';
  arrayOfData.forEach(element => {
  console.log(element)
  
   liHTML +=`<li><a onclick="categoryId('${element.category_id}')" href='#' class="btn btn-outline">${element.category}</a></li>`

 

  })
  ul.innerHTML=liHTML
  catgBtn.appendChild(ul)
  
}
// creating oncllick data____---
const categoryId=async(ctgoryId)=>{
  
  const resctgId =await fetch(`https://openapi.programming-hero.com/api/videos/category/${ctgoryId}`)
  const datactgId=await resctgId.json()
console.log(datactgId.data)
const datactgIdarray=datactgId.data;
datactgIdarray.forEach=(info)=>{
  console.log(info)
  const mainDIV=document.getElementById('maincontent')
}
  
}
HandleCatagory()