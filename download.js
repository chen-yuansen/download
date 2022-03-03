//下载
export default function(download,name,scoe){
  if(arguments.length==1){
     window.open(arguments[0])
  }else{
  let type= scoe?scoe:"text/plain;charset=utf-8",
  typeName=scoe?`${name}.xls`:name
  let bold=new Blob([download],type=type)
  let element=document.createElement("a")
  element.download=typeName
  element.style.display="none"
  element.href=URL.createObjectURL(bold)
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element);
  }
}