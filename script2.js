


// sticky-sidebarを使用したメニューバーの作成
new StickySidebar('.sidebar', {
    containerSelector: '.wrapper',
    innerWrapperSelector: '.sidebar__inner',
   })

// メモページ作成イベント
    //クリックするとメモページが作成

// const addBtn = $('#btn_01');

$(".btn_01").on('click', function() {
    addNewNote();
    console.log("ボタンを押しました");
  });

function addNewNote(text = '') {

//メモを追加する場所を取得
const main = document.querySelector('main');
console.log (main,"メモ追加場所")

// div要素を作成
const note = document.createElement('div');
console.log(note);
// main.before(note);
// noteというクラスを追加
note.classList.add('note');



// メモ帳を追加
note.innerHTML = `
<div class="tools">
    <input class="placeholder ${text ? "" : "hidden"}"></input>
    <button class="edit"><i class="fas fa-edit"></i>保存</button>
    <button class="delete"><i class="fas fa-trash-alt">削除</i></button>
</div>
<textarea class="${text ? "hidden" : ""}"></textarea>
`

// メモページの削除
const deleteBtn = note.querySelector('.delete')
const textArea = note.querySelector('textarea')

// テキストエリアに引数で渡したテキストを代入
    textArea.value = text

 // 削除のクリックイベントの登録
 $(deleteBtn).on('click', function() {
    deleteNote(note)
  })


//メモを追加する場所を指定
main.insertBefore(note, main.firstChild);

// ローカルストレージへ保存
const saveBtn = note.querySelector('.edit');

$(saveBtn).on("click",function(){
    const title = $("input").val();
    const content = $("textarea").val();

localStorage.setItem(title,content);

// 保存先のボタン出現
const savedata = document.createElement('div');
console.log(savedata,"セーブしました");

savedata.innerHTML = `
<div>
  <button class="btn_02">保存したメモ</button>
</div>
`


// for(let i = 0; i < localStorage .legth; i++){
//   const key = localStorage.key(i);
//   const value = localStorage.getItem(key);

// }
const savedataBtn = document.querySelector('.btn_01');
savedataBtn.after(savedata);

});
}

// メモ帳削除
// createElementメソッドで作成した要素は、removeメソッドを持っていて削除ができる。
function deleteNote(note) {
  // ノートを削除
  note.remove()
}
