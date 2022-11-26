const mouseCircle=document.querySelector('.mouse-circle')
const mouseDot=document.querySelector('.mouse-dot')

const mouseCircleFn = (x,y)=>{
    mouseCircle.style.cssText='top:${y}px;left: ${x}px'
    mouseDot.style.cssText='top:${y}px;left: ${x}px'
}



/* Animation circle */
const circles=document.querySelectorAll('.circle')
const mainImg=document.querySelector('.main-circle img')

let mX= 0
let mY=0
let z=100

const animateCircles=(e,x,y)=>{
   
    if(x < mX){
        //console.log('mouved to the left')
        circles.forEach((circle)=>{
            circle.style.left='100px'
        })
        mainImg.style.left='100px'
    }else if(x>mX){
        circles.forEach((circle)=>{
            circle.style.left='-100px'
        })
        mainImg.style.left='-100px'

    }
    if(y < mY){
       // console.log('mouved upword')
       circles.forEach((circle)=>{
        circle.style.top='100px'
    })
    mainImg.style.top='100px'
    }else if(y>mY){
            
        circles.forEach((circle)=>{
            circle.style.top='-100px'
        })
        mainImg.style.top='-100px'
    }

 mX=e.clientX
 mY=e.clientY
}

/*Fin Animation circle */

document.body.addEventListener('mousemove',(e) =>{
    // console.log(e)
    let x = e.clientX
    let y = e.clientY

    mouseCircleFn(x,y)
    animateCircles(e,x,y)
})

document.body.addEventListener('mouseleave',()=>{
    mouseCircle.style.opacity='0'
    mouseDot.style.opacity='0'
})
///////////////////////Navbar 
const menuIcon=document.querySelector('.menu-icon')
const navbar=document.querySelector('.navbar')
document.addEventListener('scroll',()=>{
    menuIcon.classList.add('show-menu-icon')
    navbar.classList.add('hide-navbar')

    if(window.scrollY===0){
      menuIcon.classList.remove('show-menu-icon')
      navbar.classList.remove('hide-navbar')
    }
})
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.remove('show-menu-icon')
    navbar.classList.remove('hide-navbar')
})
////////////////////////Fin Navbar







//Aporos de moi

const aboutMeTExt=document.querySelector('.about-me-text')
const aboutMeTextContent='Technicien supérieur en informatique passionné par le web depuis toujours, il m’est apparu logique d’orienter ma carrière dans ce domaine.Je suis un apprenant rapide motivé ce qui me permet toujours de suivre les nouvelles du monde du web et d’enrichir mes acquis :)'

Array.from(aboutMeTextContent).forEach(char=>{
    const span=document.createElement('span')
    span.textContent=char
    aboutMeTExt.appendChild(span)

    span.addEventListener('mouseenter',(e)=>{
        e.target.style.animation='aboutMeTextAnim 10s infinite'
    })
})
//Fin Aporos de moi

//Big Projet Image-
// const Projects=document.querySelectorAll('.project')
// Projects.forEach((project)=>{
//     Projects.addEventListener('mouseenter',()=>{
//     project.firstElementChild.style.top='-${project.firstElementChild.offsetHeight-project.offsetHeight}px'
// })

// })
//Fin Big Projet Image
//project
const container=document.querySelector('.container')
const projects=document.querySelectorAll('.project')
projects.forEach(project=>{
    project.addEventListener('mouseenter',()=>{
        project.firstElementChild.style.top=`-${project.firstElementChild.offsetHeight-project.offsetHeight}px`;
    })  
    project.addEventListener('mouseleave',()=>{
       project.firstElementChild.style.top="2rem";
    })    
    //big project image
    project.addEventListener('click',()=>{
        const bigImgWrapper=document.createElement('div')
        bigImgWrapper.className="peoject-img-wrapper";
        container.appendChild(bigImgWrapper);
        const bigImg=document.createElement('img')
        bigImg.className="project-img";
        bigImg.setAttribute('src','images/carnet adresse.png')
        bigImgWrapper.appendChild(bigImg)
    })

    //fin big project image
})


//fin project





//Section 4 Service
document.querySelectorAll('.service-btn').forEach
(service=>{
  service.addEventListener('click',e=>{
    e.preventDefault()

    const serviceText=service.nextElementSibling
    serviceText.classList.toggle("change");

    const rightPosition=serviceText.classList.contains
    ("change")
    //console.log(rightPosition)
     ?`calc(100% -${getComputedStyle(service.firstElementChild).width})`:0;
    service.firstElementChild.style.right=
    rightPosition
  })
})
//Fin Section 4 Service

// Section 5 Contact
const formheading=document.querySelector('.form-heading')
const formInputs=document.querySelectorAll('.contact-form-input')

formInputs.forEach(input=>{
input.addEventListener('focus',()=>{
    formheading.style.opacity="0"
    setTimeout(()=>{
         formheading.textContent=`Your ${input.placeholder}`
         formheading.style.opacity="1"
    },300)
})
})
const slideshow=document.querySelector('.slideshow')
setInterval(()=>{
   const firstIcon=slideshow.firstElementChild
   firstIcon.classList.add('faded-out')
   const thirdicon=slideshow.children[3]
   thirdicon.classList.add('light')

   thirdicon.previousElementSibling.classList.remove('light')

   setTimeout(()=>{
    slideshow.removeChild(firstIcon)
    slideshow.appendChild(firstIcon)
    setTimeout(() => {
        firstIcon.classList.remove('faded-out')
    }, 500);
    
   },500)
  
},3000)

//Fin Section 4 Contact
/////////// validation Form
const form=document.querySelector('.contact-form ')
const username=document.getElementById('name')
const email=document.getElementById('email')
const subject=document.getElementById('subject')
const message=document.getElementById('message')
const messages=document.querySelectorAll('.message')


const error=(input,message)=>{
input.nextElementSibling.classList.add("error")
input.nextElementSibling.textContent=message
}
const success=(input)=>{
    input.nextElementSibling.classList.remove('error')
}



const checkRequiredFields =(inputArr)=>{
    inputArr.forEach((input)=>{
        if(input.value.trim()===""){
           error(input,`${input.id}is required`)
        }else{
            success(input)
        }
    })
}  
const checkLength= (input,min)=>{
  if(input.value.trim().length<min){
    error(input,`${input.id} must be at least ${min} characters`)
  }else{
    success(input)
  }
}

const checkEmail=(input)=>{
   // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(email);
    const regEx = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(input.value.trim())){
        success(input)

    }else{
        error(input,"Email is not valid")
    }
    //return regEx.test(email);
}

form.addEventListener("submit",e=>{
    e.preventDefault()
checkLength(username,2)
checkLength(subject,2)
checkLength(message,10)
checkEmail(email)
checkRequiredFields([username,email,subject,message])
})
/////////// Fin validation Form