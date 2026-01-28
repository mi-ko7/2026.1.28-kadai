document.addEventListener('DOMContentLoaded', function() {
    // 必要なHTML要素を取得
    const hamburger = document.getElementById('hamburger'); 
    const closeButton = document.getElementById('close-button'); // ★ 閉じるボタン ★
    const drawerMenu = document.getElementById('drawer-menu'); 
    const body = document.body; 

    // メニューを開く関数
    function openDrawer() {
        drawerMenu.classList.add('is-active');
        closeButton.classList.add('is-active'); // ★ 閉じるボタンを表示するクラスを追加 ★
        body.classList.add('is-lock');
        hamburger.classList.add('is-active');
    }

    // メニューを閉じる関数
    function closeDrawer() {
        drawerMenu.classList.remove('is-active');
        closeButton.classList.remove('is-active'); // ★ 閉じるボタンを非表示にするクラスを削除 ★
        body.classList.remove('is-lock');
        hamburger.classList.remove('is-active');
    }

    // 1. ハンバーガーボタンがクリックされたときの処理
    hamburger.addEventListener('click', openDrawer);

    // 2. 閉じるボタンがクリックされたときの処理
    closeButton.addEventListener('click', closeDrawer);

    // 3. メニュー項目をクリックしたときも閉じる処理
    const drawerItems = drawerMenu.querySelectorAll('a[href^="#"]');
    drawerItems.forEach(item => {
        item.addEventListener('click', closeDrawer);
    });
});