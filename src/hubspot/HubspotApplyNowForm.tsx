import { useEffect } from 'react';

const HubspotApplyNowForm = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '43645170',
                    formId: '55a6b542-86dc-42ea-b212-83ddc47d48a5',
                    target: '#hubspotFormApplyNow'
                });
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div id="hubspotFormApplyNow"></div>
    );
};
export default HubspotApplyNowForm;