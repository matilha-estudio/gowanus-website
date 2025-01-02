import { useEffect } from 'react';

const HubspotNewsLetterForm = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;
        script.onload = () => {
            // Captura os parâmetros UTM da URL
            const params = new URLSearchParams(window.location.search);

            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '43645170',
                    formId: '285ca55b-6bbb-431f-aa8a-deaf8774b840',
                    target: '#hubspotFormNewsletter',
                    onFormReady: function (form: any) {
                        form.querySelector('input[name="utm_source"]')?.setAttribute('value', params.get('utm_source') || '');
                        form.querySelector('input[name="utm_medium"]')?.setAttribute('value', params.get('utm_medium') || '');
                        form.querySelector('input[name="utm_campaign"]')?.setAttribute('value', params.get('utm_campaign') || '');
                        form.querySelector('input[name="utm_content"]')?.setAttribute('value', params.get('utm_content') || '');
                        form.querySelector('input[name="utm_term"]')?.setAttribute('value', params.get('utm_term') || '');
                    },
                });
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div id="hubspotFormNewsletter"></div>
    );
};
export default HubspotNewsLetterForm;