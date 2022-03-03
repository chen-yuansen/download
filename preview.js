// FunctionName(选择器名称,显示盒子名称) 单文件预览
export default function(inputName,boxName){
  var read = new FileReader();
   let $=(name)=>document.querySelector(name),
	 filebtn =$(inputName),
   box=$(boxName)
		filebtn.onchange = function () {
			read.readAsDataURL(this.files[0]);
		}
		read.onloadend = function(){
      let img=box.children[0]?box.children[0]:document.createElement('img')
      img.src=this.result
      img.style.width="100%"
      img.style.height="100%"
      box.appendChild(img)
			console.log('读取完成')
		}
}





