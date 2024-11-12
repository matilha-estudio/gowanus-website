import { useEffect } from 'react';

const HubspotNewsLetterForm = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '43645170',
                    formId: '285ca55b-6bbb-431f-aa8a-deaf8774b840',
                    target: '#hubspotFormNewsletter'
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