let mainBody = document.getElementById("main__body");


function createPara(details){
  let para = document.createElement("P");
  para.style.margin = '2px'
  for(let key of Object.keys(details)){
    switch (key) {
      case 'fontSize':
        para.style.fontSize =  details[key]
        break;

        case 'color':
        para.style.color = details[key];
        break;

        case 'content' :
        para.innerText = details[key];
        break;

        case 'fontWeight':
        para.style.fontWeight = details[key];
        break

    }
  }


  return para;


}


function fill(name){
  console.log(name);
  if(name === undefined){
    document.body.style.background = "url(dyteapp/img1.jpeg) no-repeat center center fixed";
  }
  else{
    document.body.style.background = "url(dyteapp/"+name+".jpeg) no-repeat center center fixed";

  }
};

function printer(details){
  let para = createPara(details);
  mainBody.appendChild(para)
}

function createContainer(details){
  let div = document.createElement('DIV');
  div.classList.add('image-container');
  for(let key of Object.keys(details)){
    switch (key) {
      case 'id':
      div.id = 'div'+details[key];
      break;

      case 'width':
        div.style.width =  details[key]
        break;

        case 'height':
        div.style.height = details[key];
        break;

        case 'background' :
        div.style.background = details[key];
        break;
    }

    mainBody.appendChild(div);
}

}


function insertImage(details){
  let img = document.createElement('IMG');
  img.classList.add('image');
  let parentContainer ;
  for(let key of Object.keys(details)){
    switch (key) {
      case 'parentId':
      parentContainer = document.getElementById('div'+details[key]);

      break;

      case 'id':
      img.id = 'img'+ details[key];
      img.classList.add('img'+details[key]);
      break;

      case 'width':
        img.style.width =  details[key]
        break;

        case 'height':
        img.style.height = details[key];
        break;

        case 'src':
        img.src  = 'dyteapp/'+details[key]+'.jpeg';
        break;

        case 'top':
        img.style.top = details[key];
        break;

        case 'left':
        img.style.left = details[key];
        break;


    }

  }

    parentContainer.appendChild(img);

}


function addImageAnimation(details){
  let parent = document.getElementById('div'+details.parentId);
  let img = document.getElementsByClassName('img'+details.imageId)[0];
  img.classList.add('hover-animation');
}

function removeImageAnimation(details){
  let parent = document.getElementById('div'+details.parentId);
  let img = document.getElementsByClassName('img'+details.imageId)[0];
  img.classList.remove('hover-animation');
}
