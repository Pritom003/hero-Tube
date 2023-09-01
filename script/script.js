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
  ul.classList=`flex gap-4 px-8  md:px- lg:px-96  `
 let liHTML='';

  arrayOfData.forEach(element => {
  console.log(element)
  
  //  liHTML +=`<li><a onclick="categoryId('${element.category_id}')" href='#' class="btn btn-outline">
  //  ${element.category}</a></li>`
 

    liHTML += `<li><a onclick="${element.category === 'Drawing' ? `oNCLICK5('${element.category_id}')`
     : `categoryId('${element.category_id}')`}" href='#' class="btn btn-outline">
    ${element.category}
</a></li>`;


  })
  ul.innerHTML=liHTML
  catgBtn.appendChild(ul)
  
}
// creating oncllick data____---
const categoryId=async(ctgoryId)=>{
  console.log(ctgoryId)
  
  const resctgId =await fetch(`https://openapi.programming-hero.com/api/videos/category/${ctgoryId}`)
  const datactgId=await resctgId.json()
console.log(datactgId.data)
const datactgIdarray=datactgId.data;
const mainDIV=document.getElementById('maincontent')
mainDIV.innerHTML='';
datactgIdarray.forEach(info=>{
  console.log(info)
  const createdDiv=document.createElement('div')

  
  
  createdDiv.innerHTML=`
  <div class="card bg-base-100 shadow-xl">
          <figure><img class=" w-full lg:w-96 lg:h-64" src="${info.thumbnail}" alt=thumbnail /></figure>
          <div class="card-body">
            <div class="flex gap-3">
              <img class="rounded-full w-10 h-10   "  src="${info.authors[0].profile_picture}" alt="dp">
              <div>
                <h2>${info.title.slice(0,12)}
                </h2>
              <p>
                ${info.authors[0].profile_name.slice(0,8)}
                <span>
                
                ${info.authors[0].verified ? `<img  class="inline " src="style/tik (1).png" alt="Verified">` : ''}
               </span>
       
              </p>
              <span class='text-sm'> 91K views</span>
            </div>
            </div>
            
          </div>
        </div>`;
        mainDIV.appendChild(createdDiv)
})
        
}
  


HandleCatagory()
categoryId('01')
// ONCLICK 
const oNCLICK5=(click)=>{
  const div=document.getElementById("sorrydib")
  div.classList.remove('hidden')
  console.log(click)
}
const showimage=(click)=>{
  const image=document.getElementById('tikimage')
  image.classList.remove('hidden')
  console.log(click)
}
// navbaar

// --------------QNA___________

  document.getElementById('blogbutton').addEventListener( 'click',function (){
    const div=document.createElement('div')
  const divOne=document.createElement('div')
  divOne.innerHTML=`
  <div class="px-8">
      <h1 class="text-6xl"> Questions</h1>
      <ul class="grid gap-8 text-xs text-center">
        <li>
        <h1 class="text-xl">QUESTION-01:</h1>
        Discuss the scope of var, let, and const</li>
        <li>
        <h1 class="text-xl">QUESTION-01:</h1>
        Tell us the use cases of null and undefined</li>
        <li>
        <h1 class="text-xl">QUESTION-01:</h1>
        What do you mean by REST API?</li>
        
      </ul>
    </div>
      <div class="px-8">
      <h1 class="text-6xl">Answers</h1>
      <ul class="grid gap-8 text-xs text-center">
        <li>
        <h1 class="text-xl">Answer-01:</h1>
          var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables 
          can neither be updated nor re-declared.
        </li>
        <li> <h1 class="text-xl">Answer-02:</h1>
          Undefined means the variable has been declared, but its value has not been assigned. Null means an empty value or a blank value. The typeof() operator returns undefined for an undefined variable. The typeof() operator returns the type as an object for a variable whose
           value is assigned as null.
        </li>
        <li> <h1 class="text-xl">Answer-03:</h1>
        An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, 
          or representational state transfer architectural style.</li>
      </ul>
    </div>
  `
  const content=document.body.appendChild(divOne);
  content=''
  
  })
