    function configureButtons() {
        const isiPhone = /iPhone/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);

        if (isiPhone) {
            document.getElementById('error_message').style.display = 'none';
            var button_1 = document.getElementById('button-1');
            button_1.href = 'https://planetanya.space/Models/ISS_stationary.usdz#apple-ar-quick-look';
            
            var button_2 = document.getElementById('button-2');
            button_2.href = 'https://planetanya.space/Models/JWST.usdz#apple-ar-quick-look';
            
            var button_3 = document.getElementById('button-3');
            button_3.href = 'https://planetanya.space/Models/Ingenuity_v3.usdz#apple-ar-quick-look';
            
            var button_4 = document.getElementById('button-4');
            button_4.href = 'https://planetanya.space/Models/Perseverance.usdz#apple-ar-quick-look';
            
            var button_5 = document.getElementById('button-5');
            button_5.href = 'https://planetanya.space/Models/space_Shuttle.usdz#apple-ar-quick-look';
            
            var button_6 = document.getElementById('button-6');
            button_6.href = 'https://planetanya.space/Models/Astronaut.usdz#apple-ar-quick-look';
        } else if (isAndroid) {
            document.getElementById('error_message').style.display = 'none';
            var button_1 = document.getElementById('button-1');
            button_1.href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://planetanya.space/Models/ISS_stationary.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end';
            
            var button_2 = document.getElementById('button-2');
            button_2.href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://planetanya.space/Models/JWST.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end';
            
            var button_3 = document.getElementById('button-3');
            button_3.href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://planetanya.space/Models/Ingenuity_v3.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end';
            
            var button_4 = document.getElementById('button-4');
            button_4.href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://planetanya.space/Models/Perseverance.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end';
            
            var button_5 = document.getElementById('button-5');
            button_5.href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://planetanya.space/Models/space_shuttle.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end';
            
            var button_6 = document.getElementById('button-6');
            button_6.href = 'intent://arvr.google.com/scene-viewer/1.0?file=https://planetanya.space/Models/Astronaut.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end';
        } else {
            document.getElementById('main_text').style.display = 'none';
            document.getElementById('dynamic_menu').style.display = 'none';
            document.getElementById('error_message').style.display = 'block';
        }
    }