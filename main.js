window.addEventListener('DOMContentLoaded', function() { /*ページ読み込み時にイベントを発生させる*/
    const fadeEls = document.querySelectorAll('body');
    fadeEls.forEach(function(el) { /*forEachメソッドで全ての要素に対して同じ処理をする*/
      el.classList.add('active');
    });
  });


/*画面領域に入ってきたタイミングで要素をふわっと表示*/ 
const fadeElems = document.querySelectorAll('.work-content'); 
window.addEventListener('scroll', fadeIn);

function fadeIn() {
  for (let i = 0; i < fadeElems.length; i++) {
    const elem = fadeElems[i];
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;

    if (elemTop < window.innerHeight && elemBottom > 0) {
      elem.classList.add('fade-in-active');
    } else {
      elem.classList.remove('fade-in-active');
    }
  }
}

/*1文字ずつ文字を出現*/
const spans = document.querySelectorAll('.mainvisual-content span');
spans.forEach((span, index) => {
  setTimeout(() => {
    span.classList.add('fade');
  }, 800 * index);
});
