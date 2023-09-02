



const HandleCatagory=async()=>{
  const res =await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
  const data=await res.json()
console.log(data)
displayData(data)
catagoryarray(data)
}
// -------------sort----





// creating category button
const catagoryarray=(datas)=>{
  
 
  const arrayOfData=datas.data
  

  const catgBtn=document.getElementById('catagorybutton')
  
  const ul=document.createElement('ul')
  ul.classList=`flex gap-4 px-8  md:px- lg:px-96  `
 let liHTML='';
 
  arrayOfData.forEach(element => {
  // console.log(element)
  







  
    liHTML +=`<li><a onclick="categoryId('${element.category_id}')" href='#' class="btn btn-outline">
    ${element.category}</a></li>`
 



  })
  ul.innerHTML=liHTML
  catgBtn.appendChild(ul)

  
}








// creating oncllick data____---
const categoryId=async(ctgoryId)=>{
  

  // ____________hidden add remove for error button
  const div=document.getElementById('div')
  div.classList.add('hidden')
  const data=document.getElementById('sec')
    data.classList.remove('hidden')
    
  const resctgId =await fetch(`https://openapi.programming-hero.com/api/videos/category/${ctgoryId}`)
  const datactgId=await resctgId.json()
//  console.log(datactgId.data)
//  oncategoryId(ctgoryId)
const datactgIdarray=datactgId.data;
// (datactgIdarray.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views)))



if(datactgIdarray.length>0 ){
  const divsorry=document.getElementById('sorrydib')
  divsorry.classList.add('hidden')
  const divother=document.getElementById('containerr')
  divother.classList.remove('hidden')
  const mainDIV=document.getElementById('maincontent')
    mainDIV.innerHTML='';

datactgIdarray.forEach(info=>{
  // console.log('go',info)

   
  const createdDiv=document.createElement('div')

  // console.log(info.others?.posted_date,'hi')
  const convert=(time)=>{
  
    const settime=time/60
    
  
    const times=Math.floor(settime)
    if (times<=60){
    return `${times}`+' min ago'
    }
    else if(time==1672656000){
      const hour =times/60
      const days= hour/24

      const d=Math.floor(days)

      const mon=Math.floor((d/30))
      
      const year=mon/12
      const m=Math.floor((mon%12))

    const y=Math.floor(year)
    return `   ${y} y ${m} m ago`;

    }
    else if(times>60 ){
      const hour =times/60
      const days= hour/24

      const d=Math.floor(days)
  
      const min=times%60
      const hours=Math.floor(hour)
      return`  ${hours} hrs ${min}` + 'min ago';
    }
    
    else if (time==0){
      return NaN
    }
    
    // 
    
  }
  console.log(info.others?.posted_date)
  createdDiv.innerHTML=`
  <div class="card bg-base-100 shadow-xl">
  <div >
          <figure><img class="relative w-full lg:w-96 lg:h-64" src="${info.thumbnail}" alt=thumbnail />
          
         </figure>
         <span class=" absolute font-bold -mt-6  text-right    bg-slate-800   text-white w-36">
      ${info.others?.posted_date? convert(info.others?.posted_date):''} </span>
         </div>
          <div class="card-body">
            <div class="flex gap-3">
              <img class="rounded-full w-10 h-10   "  src="${info.authors[0].profile_picture}" alt="dp">
              <div>
                <h2>${info.title.slice(0,12)}
                </h2>
              <p>
                ${info.authors[0].profile_name.slice(0,8)}
                <span>
                
                ${info.authors[0].verified ? `<img  class="inline " src="style/tik (1).png" alt="Verified">`: ''}
               </span>
       
              </p>
              <span class='text-sm'> 91K views</span>
            </div>
            </div>
            
          </div>
        </div>`;
        mainDIV.appendChild(createdDiv)
        

        
  })}

else{
  const divsorry=document.getElementById('sorrydib')
  divsorry.classList.remove('hidden')
  const divother=document.getElementById('containerr')
  divother.classList.add('hidden')
  
      
    
}}
    
        

HandleCatagory()







const showimage=(click)=>{
  const image=document.getElementById('tikimage')
  image.classList.remove('hidden')
  console.log(click)
}










// navbaar

// --------------QNA___________
function clickblog(qna){
  consbtn=document.getElementById('blogbutton')
  console.log(qna)
}
 







  // SORTED DATA

  function displayData(data){
    console.log('sort' ,data)

  }