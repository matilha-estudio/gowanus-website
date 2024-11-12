import { useEffect } from 'react';

const HubspotInquireForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '43645170',
                    formId: 'dd49c9b7-466b-4e4a-9031-76822c15af1c',
                    target: '#hubspotForm'
                });
            }
        };
        document.body.appendChild(script);
    }, []);
    return (
        <div id="hubspotForm"></div>
    );
};
export default HubspotInquireForm;