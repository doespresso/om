<?php
/**
 * ВНИМАНИЕ! Данная страница сгенерирована системой управления сайтом S.Builder.
 * Не изменяйте код страницы вручную. ВСЕ изменения должны вноситься
 * через административный интерфейс системы управления сайтом S.Builder.
 * Любые внесенные Вами вручную изменения будут утеряны при следующей генерации
 * страницы.
 *
 * WARNING! This page was generated with content management system S.Builder.
 * Do not change the page code manually. All changes should be made
 * through the administrative interface of CMS S.Builder.
 * Any manual changes you made will be lost with the next generation of the page.
 **/

// Идентификатор страницы
if (!defined('SB_PAGE_ID'))
{
	define ('SB_PAGE_ID', 18);
}

// Content-Type страницы
if (!defined('SB_PAGE_CONTENT_TYPE'))
{
	define('SB_PAGE_CONTENT_TYPE', 'text/html');
}
require_once '/Users/jd/servers/LOCALHOST/omiskrans.ru/public/cms/kernel/prog/header.inc.php';
require_once '/Users/jd/servers/LOCALHOST/omiskrans.ru/public/cms/kernel/prog/demo.inc.php';
?><h2>Свяжитесь с OMIS напрямую</h2>
<div id="form-result" class=""></div>
<?php include_once SB_CMS_PL_PATH.'/pl_plugin_maker/prog/pl_plugin_maker.php';

        fPlugin_Maker_Elem_Form('-1', '1', 'a:10:{s:3:\"ids\";s:2:\"57\";s:7:\"temp_id\";s:1:\"1\";s:4:\"page\";s:45:\"http://omiscranes.ru/ajax/feedback_result.php\";s:11:\"premod_elem\";s:1:\"0\";s:11:\"rubrik_link\";s:1:\"0\";s:11:\"admin_email\";s:2:\"-1\";s:10:\"mod_emails\";s:0:\"\";s:10:\"user_email\";s:2:\"-1\";s:5:\"pm_id\";s:1:\"2\";s:28:\"registred_users_elements_add\";s:1:\"0\";}', '4');

        ?>
<div class="form-contacts">
<div class="h4">ООО "ОМИС-КРАН"</div>
<div class="row">
<div class="col-xs-12"><address>Москва, ул. Большая Очаковская 47А стр.1</address></div>
</div>
<div class="row">
<div class="col-xs-12"><time>9:00 — 19:00 / Пн-Пт</time></div>
</div>
<div class="row">
<div class="col-xs-12"></div>
</div>
<div class="row">
<div class="col-xs-12"><tel>+7 495 778-32-36</tel></div>
</div><?php if (!isset($sb_no_footer) || !$sb_no_footer) require_once SB_PROG_KERNEL_PATH.'/footer.inc.php'; ?>