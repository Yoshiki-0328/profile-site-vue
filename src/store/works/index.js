import getters from './getters.js';

export default{
    namespaced:true,
    state(){
        return{
            worksSrc: [
                {
                  src: "https://heiyoshilog.site/works/01_quiz-game/index.html",
                  title: "クイズゲーム",
                  thum:'01-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/02_acordion-menu/index.html",
                  title: "アコーディオンメニュー",
                  thum:'02-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/03_tab-menu/index.html",
                  title: "タブメニュー",
                  thum:'03-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/04_isara/index.html",
                  title: "isaraサイト模写",
                  thum:'04-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/05_calculator/index.html",
                  title: "電卓",
                  thum:'05-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/06_qr-create-app/index.html",
                  title: "QRコード生成",
                  thum:'06-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/06_qr-create-app/index.html",
                  title: "ブロック崩し",
                  thum:'07-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/08_timer/index.html",
                  title: "時計",
                  thum:'08-thum.png',
                  date:'2022/12'
                },
                {
                  src: "https://heiyoshilog.site/works/10_keyboard/keyboard_game/index.html",
                  title: "タイピングゲーム",
                  thum:'09-thum.png',
                  date:'2022/12'
                },
              ],
        }
    },
    getters
}