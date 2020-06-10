// ==UserScript==
// @name           Автоинъекция чита
// @description    Вызов observe при загрузке страницы
// @author         Ivan Kozlovsky <ikozlovskiy24@gmail.com> (http://github.com/yukkerike)
// @namespace      https://yukkerike.github.io/tb_cheats_landing/
// @version        0.0.2
// @icon           https://yukkerike.github.io/tb_cheats_landing/favicon.ico
// @include        *games.itsrealgames.com/squirrels/squirrels_web.html*
// @include        *squirrels2.itsrealgames.com/release/*.html*
// @grant          none
// ==/UserScript==

var s=document.createElement('script');s.src='https://yukkerike.github.io/tb_cheats_landing/script.js';document.head.appendChild(s);function ws(){window.observe?observe():setTimeout(function(){ws();},100);};ws();
