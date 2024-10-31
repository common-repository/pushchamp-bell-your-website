<?php
/**
 * Plugin Name: Pushchamp New
 * Plugin URI: https://www.pushchamp.com
 * Description: This plugin adds Pushchamp bell to your wordpress website.
 * Version: 0.3
 * Author: Pushchamp
 * Author URI: https://www.pushchamp.com
 * License: GPL2
 */

// add_filter( 'the_content', 'add_subscribe_button');

// function add_subscribe_button($content) {
//     $subscribe_text = get_option('pcbell_subscribe');
//     if (!$subscribe_text){
//         $subscribe_text = 'Loved the Article? Click here to subscribe for more.';
//     }
//     if ( is_single() ){
//         return $content . '<div class="pc-subscribe-btn" onclick="pcbell.button(this);">'.$subscribe_text.'</div><p style="font-size:10px;margin-top:5px;">Powered By <a href="https://www.pushchamp.com">Pushchamp</a></p>';
//     }else{
//         return $content;
//     }
// }

add_action( 'wp_enqueue_scripts', 'add_pcbell' );

function add_pcbell() {
    $appid = get_option('pcbell_appid');
    $color = substr(get_option('pcbell_color'), 1);
    $top = get_option('pcbell_top');
    $mthd = get_option('pcbell_mthd');
    $text = rawurlencode(get_option('pcbell_text'));
    $list = get_option('pcbell_list');
    $url = '/pushchamp-bell-new/js/pc.js?pushchamp_appid='.$appid.'&pcbell_color='.$color.'&pcbell_top='.$top.'&pcbell_method='.$mthd;
    if($list=="yes"){
        $url = $url.'&pcbell_list=true';
    }
    if($mthd=="bell"){
         $url = $url.'&pcbell_text='.$text;
    }
    wp_enqueue_script( 'pcbell', plugins_url() . $url, array(), '1.0.0', true);
}

add_action( 'admin_init', 'pcbell_settings' );

function pcbell_settings() {
    register_setting( 'pcbell-settings', 'pcbell_appid' );
    register_setting( 'pcbell-settings', 'pcbell_mthd' );
    register_setting( 'pcbell-settings', 'pcbell_text' );
    register_setting( 'pcbell-settings', 'pcbell_tray' );
    register_setting( 'pcbell-settings', 'pcbell_color' );
    register_setting( 'pcbell-settings', 'pcbell_top' );
    register_setting( 'pcbell-settings', 'pcbell_subscribe' );
}

add_action('admin_menu', 'pcebll_menu');

function pcebll_menu() {
    add_menu_page('Pushchamp Settings', 'Pushchamp Settings', 'administrator', 'pcbell-settings', 'pcbell_settings_page', 'dashicons-admin-generic');
}


function pcbell_settings_page() {
?>
<div class="wrap">
<h2>Pushchamp Bell Details</h2>

<form method="post" action="options.php">
    <?php settings_fields( 'pcbell-settings' ); ?>
    <?php do_settings_sections( 'pcbell-settings' ); ?>
            <link href="https://d38jt33bvxoy1.cloudfront.net/static/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link href="https://d38jt33bvxoy1.cloudfront.net/static/css/bootstrap-colorpicker.css" rel="stylesheet">
            <link href="https://d38jt33bvxoy1.cloudfront.net/static/css/color-picker.css" rel="stylesheet">
            <link href="https://d38jt33bvxoy1.cloudfront.net/static/css/slider.css" rel="stylesheet">
            <style>
                .content{
                    width: 80%;
                    margin: 0 auto;
                }
                .https-info{
                    margin-top: 20px;
                    clear: both;
                    padding: 10px;
                    border: 1px solid #ccc;
                }
                .https-info li{
                    font-size: 12px;
                    margin-top: 4px;
                }
                .gnrt-box{
                    overflow: hidden;
                    border: 1px solid #aaa;
                    border-radius: 5px;
                    margin: 50px 0 50px 0;
                    padding-left: 6px;
                    padding-right: 6px;
                }
                .gnrt-box hr{
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                    margin-left: auto;
                    margin-right: auto;
                    border-style: dotted;
                    border-width: 1px;
                    color: #777;
                }
                .gnrt-box .gnrt-sngl{
                    overflow: hidden;
                    padding: 10px;
                }
                .gnrt-box .gnrt-sngl p{
                    color: #555;
                    font-style: italic;
                }
                .gnrt-box .gnrt-sngl h4{
                    
                }
                .gnrt-box .gnrt-ask{
                    padding-left: 20px;
                    overflow: hidden;
                }
                .gnrt-box .gnrt-ask .control-label{
                    padding-left: 0px;
                    font-size: 13px;
                    font-weight: normal;
                }
                .gnrt-box .gnrt-ask .clr-cod{
                    margin-bottom: 15px;
                }
                .gnrt-box .gnrt-ask .clr-cod input{
                    height: 30px;
                }
                .gnrt-box .gnrt-ask.btn-hldr{
                    margin: 0 auto;
                    width: 160px;
                    padding: 10px 0px 10px 0px;
                }
                .gnrt-box .gnrt-ask.btn-hldr a{
                    font-weight: bold;
                    font-size: 16px;
                }
                .gnrt-box .gnrt-ask.pstn-sldr .slider-track{
                    height: 7px;
                }
                .gnrt-box .gnrt-ask.pstn-sldr .slider-handle.round{
                    width: 15px;
                    height: 15px;
                }
            </style>
            <section class="content">
                <div class="bell-intro">
                    <h3 class="bell-hdr">Add Browser notification to your website</h3>
                    <p class="bell-dscr">Support browser notification on your website on all modern browsers like <b>Chrome, Safari and Firefox</b>. To send notifications on Browsers user permission is mandatory. With Pushchamp you can use different ways to ask for the permission and increase your subscriptions.

                    Once subscribed you can engage with users by sending import updates and offers from <a href="https://www.pushchamp.com/dashboard/campaign/" target="_blank">campaign section</a>. Developers can also use APIs to send notifications. <a target="_blank" href="https://www.pushchamp.com/dashboard/docs/">Checkout docs.</a> Integration requires only single line of code to be put on your page.
                </div>

                <div class="col-sm-10 col-sm-offset-1 gnrt-box part4">
                    <div class="gnrt-sngl part4">
                        <h4>Asking for user permission to send Push Notification</h4>
                        <p>Pushchamp APP ID</p>
                        <div class="gnrt-ask" style="margin:0 0 20px 0;">
                            <input type="text" placeholder="Required" name="pcbell_appid" value="<?php echo esc_attr( get_option('pcbell_appid') ); ?>" />
                        </div>
                        <p>To send web push notifications. User should allow for notifications. You can use different ways to ask for user permission for notifications using our SDK.</p>
                        <div class="gnrt-ask" style="margin-top:5px;">
                            <select id="ask_mthd" name="pcbell_mthd">
                              <option value="direct" <?php if(esc_attr( get_option('pcbell_mthd') )=='direct'){echo 'selected';} ?> >Ask on page load</option>
                              <option value="bell" <?php if(esc_attr( get_option('pcbell_mthd') )=='bell'){echo 'selected';} ?> >Use custom message</option>
                              <option value="self" <?php if(esc_attr( get_option('pcbell_mthd') )=='self'){echo 'selected';} ?> >Call using API</option>
                            </select>
                        </div>
                        <div class="gnrt-ask" id="txt_dsp" <?php if(esc_attr( get_option('pcbell_mthd') )!='bell'){echo 'style="display:none"';} ?>>
                            <div class="col-sm-9" style="padding-left: 0px; margin-top: 20px;">
                                <input style="width:600px;" placeholder="Would you like to subscribe for push notifications?" type="text" name="pcbell_text" value="<?php echo esc_attr( get_option('pcbell_text') ); ?>" />
                            </div>
                        </div>
                        <div class="gnrt-ask" id="txt_evnt" style="display:none; margin-top: 10px;">
                            <p style="font-style: normal;">Please use <b>pushchamp.startSubscription()</b> to ask for push notification permission.</p>
                        </div>
                    </div>
                    <hr/>

                    <div class="gnrt-sngl part4">
                        <h4>Notification Tray</h4>
                        <p>We also record the notifications you send. If you want the user to get back to older notifications send, you can enable this. This is quite useful when user needs to get back to an old notification.</p>
                        <div class="gnrt-ask" style="margin-top:20px;">
                            <select id="tray_need" name="pcbell_tray" >
                              <option value="yes" <?php if(esc_attr( get_option('pcbell_tray') )=='yes'){echo 'selected';} ?> >I want notification tray</option>
                              <option value="no" <?php if(esc_attr( get_option('pcbell_tray') )=='no'){echo 'selected';} ?> >I don't want notification tray</option>
                            </select>
                        </div>
                    </div>
                    <hr/>

                    <div class="gnrt-sngl part4">
                        <h4>Customise the Bell</h4>
                        <p>The bell will be visible when you enable notification tray or ask for the notification permission using custom message. You can customise the position and color of the bell. (To see how it looks, the bell will also appear on this page on the right hand side)</p>
                        <div class="gnrt-ask" style="margin-top:20px;">
                            <label for="inputEmail3" class="col-sm-3 control-label">Color</label>
                            <div class="col-sm-4">
                                <div class="input-group clr-cod" id="color_picker">
                                    <input type="text" id="clr_code" class="form-control" name="pcbell_color" value="<?php echo esc_attr( get_option('pcbell_color') ); ?>" />
                                    <span class="input-group-addon"><i></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="gnrt-ask pstn-sldr">
                            <label for="inputPassword3" class="col-sm-3 control-label">Top position (%)</label>
                            <div class="col-sm-4">
                                <input type="text" id="position_selector" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-orientation="horizontal" data-slider-selection="after" name="pcbell_top" data-slider-value="<?php echo esc_attr( get_option('pcbell_top') ); ?>" value="<?php echo esc_attr( get_option('pcbell_top') ); ?>" />
                            </div>
                        </div>
                    </div>
                </div>


                
                <div class="https-info">
                    ** This is recommended if your website is <b>HTTPS supported</b>. This is required because chrome and firefox require https to run browser notifications. If your website is not on HTTPS don't worry, we use our own https subdomain.
                    <ul class="tbl-txt">
                        <li>Create project on <a href="https://console.developers.google.com" target="_blank">console.developers.google.com</a>. Enable Google cloud messaging. Lastly create an API server key from credentials section</li>
                        <li>Download files <a href="https://www.pushchamp.com/static/SDK/service-worker.js" download>service worker</a> and <a href="https://www.pushchamp.com/static/SDK/manifest.json" download>Manifest file</a></li>
                        <li>Open manifest file and put your project NUMBER for key gcm_sender_id.</li>
                        <li>Host both files from root of your site. eg: https://www.sitename.com/service-worker.js and https://www.sitename.com/manifest.json</li>
                    </ul>
                </div>
            </section>
            <script src="https://d38jt33bvxoy1.cloudfront.net/static/js/jQuery-2.1.4.min.js"></script>
            <script src="https://d38jt33bvxoy1.cloudfront.net/static/js/bootstrap.min.js"></script>
            <script src="https://d38jt33bvxoy1.cloudfront.net/static/js/bootstrap-colorpicker.js"></script>
            <script src="https://d38jt33bvxoy1.cloudfront.net/static/js/color-picker.js"></script>
            <script src="https://d38jt33bvxoy1.cloudfront.net/static/js/bootstrap-slider.js"></script>
            <script type="text/javascript">
                $('#color_picker').colorpicker({'format': 'hex'});
                $('#position_selector').slider({'value': 30});
                $('#ask_mthd').change(function(){
                    $("#txt_dsp").hide();
                    $("#txt_evnt").hide();
                    if($(this).val()=="bell"){
                        $("#txt_dsp").show();
                    }else if($(this).val()=="self"){
                        $("#txt_evnt").show();
                    }
                });
            </script>
            <?php submit_button(); ?>

</form>
</div>
<?php

}
?>
