import Script from "next/script";

export default function ChatBot() {
    return (
        <Script id="widget-script" strategy="afterInteractive" >
            {`
            (function() {
                const loadWidget = () => {
                const allowedExtraWidgets = [ 'booktour'];
                const config = {
                    headerColor: '#2B3B4A',
                    apartmentId: '674f94e079cce89ff98d63fa',
                    tenantId: '674e2340f30ecfbe90628f5a',
                    isTourBookingAllowed: true,
                    widgetsToShow: ['booktour'],
                    rightPosition: 0,
                    bottomPosition: 0
                };

                let baseHeight = '110px';
                const baseWidth = '110px';

                const getWidgetDimensions = (widgetsToShow) => {
                if (!widgetsToShow || widgetsToShow.length === 0) {
                    return { collapsedHeight: baseHeight, collapsedWidth: baseWidth };
                } else {
                    const collapsedHeight = \`\${110 + widgetsToShow.length * 55}px\`;
                    const collapsedWidth = '180px';
                    return { collapsedHeight, collapsedWidth };
                }
                };

                const { collapsedHeight, collapsedWidth } = getWidgetDimensions(config.widgetsToShow);

                const expandedWidth = '440px';
                const expandedHeight = '778px';
                const expandedHeightForSmallHeightScreen = '658px';
                const modalWidth = '100%';
                const modalHeight = '100%';

                const widget = document.createElement('div');
                const widgetStyle = widget.style;

                widgetStyle.display = 'none';
                widgetStyle.boxSizing = 'border-box';
                widgetStyle.width = collapsedWidth;
                widgetStyle.height = collapsedHeight;
                widgetStyle.position = 'absolute';
                widgetStyle.bottom = \`\${config.bottomPosition ?? 0}px\`;
                widgetStyle.backgroundColor = '#2B3B4A';

                if (config.leftPosition !== null && config.leftPosition !== undefined) {
                    widgetStyle.left = \`\${config.leftPosition ?? 0}px\`;
                } else {
                    widgetStyle.right = \`\${config.rightPosition ?? 0}px\`;
                }

                widgetStyle.zIndex = '999999';

                const iframe = document.createElement('iframe');
                iframe.id = 'chatbot-iframe';
                iframe.sandbox = 'allow-scripts allow-same-origin allow-forms';

                const iframeStyle = iframe.style;
                iframeStyle.boxSizing = 'border-box';
                iframeStyle.position = 'fixed';
                iframeStyle.bottom = \`\${config.bottomPosition ?? 0}px\`;

                if (config.leftPosition !== null && config.leftPosition !== undefined) {
                    iframeStyle.left = \`\${config.leftPosition ?? 0}px\`;
                } else {
                    iframeStyle.right = \`\${config.rightPosition ?? 0}px\`;
                }

                iframeStyle.width = collapsedWidth;
                iframeStyle.height = collapsedHeight;
                iframeStyle.border = '0';
                iframeStyle.margin = '0';
                iframeStyle.padding = '0';

                widget.appendChild(iframe);

                iframe.addEventListener('load', () => {
                    setTimeout(() => {
                    try {
                        iframe.contentWindow.postMessage(config, iframe.src);
                    } catch (error) {
                        console.error('Error sending message to iframe:', error);
                    }
                    widgetStyle.display = 'block';
                    }, 1000);

                    window.addEventListener('message', (event) => {
                    if (event.data === 'open') {
                        widgetStyle.width = expandedWidth;
                        widgetStyle.height = expandedHeight;
                        iframeStyle.width = expandedWidth;
                        iframeStyle.height = expandedHeight;
                    } else if (event.data === 'smallheightScreenOpen') {
                        widgetStyle.width = expandedWidth;
                        widgetStyle.height = expandedHeightForSmallHeightScreen;
                        iframeStyle.width = expandedWidth;
                        iframeStyle.height = expandedHeightForSmallHeightScreen;
                    } else if (event.data === 'close') {
                        widgetStyle.width = collapsedWidth;
                        widgetStyle.height = collapsedHeight;
                        iframeStyle.width = collapsedWidth;
                        iframeStyle.height = collapsedHeight;
                    } else if (event.data === 'modalopen' || event.data === 'mobileopen') {
                        widgetStyle.width = modalWidth;
                        widgetStyle.height = modalHeight;
                        iframeStyle.width = modalWidth;
                        iframeStyle.height = modalHeight;
                        widgetStyle.bottom = '0px';
                        iframeStyle.bottom = '0px';

                        if (config.leftPosition !== null && config.leftPosition !== undefined) {
                        iframeStyle.left = '0px';
                        widgetStyle.left = '0px';
                        } else {
                        iframeStyle.right = '0px';
                        widgetStyle.right = '0px';
                        }
                    } else if (event.data === 'mobileclose') {
                        widgetStyle.width = collapsedWidth;
                        widgetStyle.height = collapsedHeight;
                        iframeStyle.width = collapsedWidth;
                        iframeStyle.height = collapsedHeight;
                        widgetStyle.bottom = \`\${config.bottomPosition ?? 0}px\`;
                        iframeStyle.bottom = \`\${config.bottomPosition ?? 0}px\`;

                        if (config.leftPosition !== null && config.leftPosition !== undefined) {
                        iframeStyle.left = \`\${config.leftPosition ?? 0}px\`;
                        widgetStyle.left = \`\${config.leftPosition ?? 0}px\`;
                        } else {
                        iframeStyle.right = \`\${config.rightPosition ?? 0}px\`;
                        widgetStyle.right = \`\${config.rightPosition ?? 0}px\`;
                        }
                    }
                    });
                });

                const widgetUrl = 'https://prod.chatbot.getzuma.com/';
                iframe.src = widgetUrl;

                document.body.appendChild(widget);
                };

                if (document.readyState === 'complete') {
                loadWidget();
                } else {
                document.addEventListener('readystatechange', () => {
                    if (document.readyState === 'complete') {
                    loadWidget();
                    }
                });
                }
            })();
            `}
        </Script >
    )
}