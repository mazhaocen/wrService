/**
 *
 * Created by ma on 2017/11/19.
 */
/**
 * 知道图片绝对路径 转换成 base64
 * */
getBase64Image=()=>{
  let img = new Image(),base64;
  img.src = url;  //url 图片的相对路径
  img.onload = ()=>{
    let canvas = document.createElement("canvas");
    canvas.width = api.winWidth;
    canvas.height = api.winWidth;
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    base64 = canvas.toDataURL()
  }
}
/**
 * input 中获取的图片文件转换成 base64
 * */
changeFile=(e)=>{
  let r = new FileReader(),file = e.target.files[0],base64;
  r.readAsDataURL(file);
  r.onload = (e) => {
    base64 = e.target.result;
  };
}
conmentget=()=>{
  Indicator.close();
  let msg = '';
  if(res.data.status===1){
    msg = '上传成功！';
    this.G.goBack()
  }else{
    msg = res.data.message
  }
  Toast({
    message: msg
  });
}
