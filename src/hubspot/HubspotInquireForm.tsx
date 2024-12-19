import { useEffect } from 'react';

const HubspotInquireForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;

        script.onload = () => {
            if (window.hbspt) {
                // Captura os parâmetros UTM da URL
                const params = new URLSearchParams(window.location.search);

                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '43645170',
                    formId: 'dd49c9b7-466b-4e4a-9031-76822c15af1c',
                    target: '#hubspotForm',
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

    return <div id="hubspotForm"></div>;
};

export default HubspotInquireForm;
