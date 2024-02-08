    function configureButtons() {
        const isiPhone = /iPhone/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);

        if (isiPhone) {
            document.getElementById('error_message').style.display = 'none';
            var button_1 = document.getElementById('button-1');
            button_1.href = 'https://planetanya.space/Models/Curiosity_static.usdz#apple-ar-quick-look';
        } else if (isAndroid) {
            document.getElementById('error_message').style.display = 'none';
            var button_1 = document.getElementById('button-1');
            button_1.href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://planetanya.space/Models/Curiosity_static.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end';
        } else {
            document.getElementById('main_text').style.display = 'none';
            document.getElementById('dynamic_menu').style.display = 'none';
            document.getElementById('error_message').style.display = 'block';
        }
    }