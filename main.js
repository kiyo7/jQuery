'use strict';

// $(() => {
//   const $input = $('input');
//   $input.focus();
//   $('button').click(() => {
//     $('<li>').text($input.val()).appendTo('ul');
//     $input.val('').focus();
//   });
//   $('ul').click((e) => {
//     if (e.target.nodeName !== 'LI' || !confirm('削除しますか？')) {
//       return;
//     }
//     $(e.target).fadeOut();
//   });
// });

$(() => {
  //jQueryの変数は$をつける慣習がある
  const $name = $('#name');
  const $email = $('#email');
  const $title = $('#title');
  const $message = $('#message');

  const formValue = [$name, $email, $title, $message];

  for (let i = 0; i < formValue.length; i++) {
    $(formValue[i]).change((e) => {
      $(formValue[i]).val(e.target.value);
    });
  }

  $('#submit').click(() => {
    if (
      !confirm(
        `この内容で送信しますか？\n 名前: ${$name.val()} \nメール: ${$email.val()} \n タイトル: ${$title.val()} \n  メッセージ: ${$message.val()}`
      )
    ) {
      return;
    }
    for (let i = 0; i < formValue.length; i++) {
      //要素の追加は<追加したい要素>というようにする
      $('<li>').text(`${formValue[i].val()}`).appendTo('ul');
    }
  });
});
