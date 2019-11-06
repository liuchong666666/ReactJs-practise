window.onload = function() {
  let ul = document.getElementById('header_middle_ul');
  console.log(ul);
  let lis = document.querySelectorAll('#header_middle_ul>li');
  let imgs = document.querySelectorAll('#header_bottom_img>img');
  console.log(imgs);
  let middle_content = document.querySelectorAll('.middle_content');
  console.log(middle_content);
  for (let i = 0; i < lis.length; i++) {
    let li = lis[i];

    li.onclick = function() {
      //移除所有li的样式
      for (let j = 0; j < lis.length; j++) {
        lis[j].removeAttribute('class');
      }
      //给当前点击的li增加样式
      li.setAttribute('class', 'header_middle_active');
      //先所有图片不显示，然后显示当前点击对应的img
      for (let k = 0; k < imgs.length; k++) {
        imgs[k].removeAttribute('class');
      }
      imgs[i].setAttribute('class', 'header_bottom_imgActive');

      //相应的内容区域
      for (let n = 0; n < middle_content.length; n++) {
        middle_content[n].setAttribute('style', 'display:none');
      }
      middle_content[i].setAttribute('style', 'display:block');
    };
  }
};
