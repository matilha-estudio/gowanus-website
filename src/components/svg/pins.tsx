import * as React from "react";

interface IPins {
    handleClick: (index: number) => void
}

const Pins: React.FC<IPins & React.SVGProps<SVGSVGElement>> = (props) => {
    const { handleClick, ...svgProps } = props;

    return (
        <svg
            width={530}
            height={465}
            viewBox="0 0 530 465"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...svgProps}
        >
            <circle cx={211} cy={149} r={15} fill="white" />
            <g clipPath="url(#clip0_1607_12683)" className="cursor-pointer" onClick={() => handleClick(5)}>
                <path
                    d="M211 161C204.373 161 199 155.627 199 149C199 142.373 204.373 137 211 137V161Z"
                    fill="#CE799F"
                />
                <path
                    d="M211 137C217.627 137 223 142.373 223 149C223 155.627 217.627 161 211 161V137Z"
                    fill="#006D5E"
                />
                <path
                    d="M206.8 151.747L203.6 147.813V151.747H202.707V146.347H204.093L206.973 149.893V146.347H207.867V151.747H206.8Z"
                    fill="#273B4C"
                />
                <path
                    d="M214.72 151.747V146.347H215.973V150.96H218.973V151.747H214.733H214.72Z"
                    fill="white"
                />
            </g>

            <circle cx={279} cy={97} r={15} fill="white" />
            <g clipPath="url(#clip1_1607_12683)" className="cursor-pointer" onClick={() => handleClick(4)}>
                <path
                    d="M279 109C272.373 109 267 103.627 267 97C267 90.3733 272.373 85 279 85V109Z"
                    fill="#006385"
                />
                <path
                    d="M279 85C285.627 85 291 90.3733 291 97C291 103.627 285.627 109 279 109V85Z"
                    fill="#FF895C"
                />
                <path
                    d="M270.76 99.7467V94.3467H273.066C274.493 94.3467 275.32 94.6533 275.933 95.2667C276.346 95.6933 276.613 96.28 276.613 96.9867C276.613 97.7467 276.306 98.3867 275.826 98.8533C275.253 99.4133 274.413 99.7333 273.306 99.7333H270.773L270.76 99.7467ZM273.146 99.0133C274.613 99.0133 275.213 98.0667 275.213 97C275.213 96.36 275.026 96.0133 274.706 95.68C274.293 95.2533 273.786 95.08 272.906 95.08H272.026V99.0133H273.16H273.146Z"
                    fill="white"
                />
                <path
                    d="M281.973 94.3599H284.867C285.987 94.3599 286.627 94.5332 287.053 94.9865C287.28 95.2399 287.413 95.5999 287.413 95.9999C287.413 96.3999 287.253 96.7865 286.973 97.0799C286.6 97.4265 286.013 97.6132 285.267 97.6132H283.213V99.7599H281.96V94.3599H281.973ZM284.84 96.8932C285.52 96.8932 286.027 96.5999 286.027 95.9999C286.027 95.2132 285.4 95.0799 284.667 95.0799H283.24V96.8799H284.853L284.84 96.8932Z"
                    fill="white"
                />
            </g>

            <circle cx={256} cy={142} r={15} fill="white" />
            <g clipPath="url(#clip2_1607_12683)" className="cursor-pointer" onClick={() => handleClick(3)}>
                <path
                    d="M256 154C249.373 154 244 148.627 244 142C244 135.373 249.373 130 256 130V154Z"
                    fill="#CB001F"
                />
                <path
                    d="M256 130C262.627 130 268 135.373 268 142C268 148.627 262.627 154 256 154V130Z"
                    fill="#00AEA3"
                />
                <path
                    d="M252.28 139.36H253.173V142.653C253.173 143.2 253.08 143.787 252.547 144.267C252.147 144.627 251.533 144.933 250.507 144.933C249.48 144.933 248.84 144.667 248.44 144.307C247.893 143.813 247.827 143.293 247.827 142.653V139.36H249.067V142.56C249.067 143.453 249.533 144.16 250.613 144.16C251.827 144.16 252.28 143.467 252.28 142.533V139.36Z"
                    fill="white"
                />
                <path
                    d="M264.147 143.84C263.573 144.36 262.827 144.933 261.373 144.933C259.52 144.933 258.04 143.773 258.04 142.08C258.04 140.387 259.52 139.173 261.4 139.173C262.747 139.173 263.52 139.693 264.12 140.267L263.507 140.84C263.053 140.373 262.4 139.92 261.467 139.92C260.387 139.92 259.52 140.787 259.52 142.093C259.52 143.4 260.44 144.213 261.48 144.213C262.52 144.213 263.093 143.733 263.533 143.293L264.147 143.853V143.84Z"
                    fill="white"
                />
            </g>

            <path
                d="M5.97465 310C9.27436 310 11.9493 307.325 11.9493 304.025C11.9493 300.726 9.27436 298.051 5.97465 298.051C2.67494 298.051 0 300.726 0 304.025C0 307.325 2.67494 310 5.97465 310Z"
                fill="#ED6D34"
            />
            <path
                d="M3.90332 306.843V301.216H8.59614V302.027H5.20688V303.569H7.39397V304.366H5.20688V306.843H3.90332Z"
                fill="white"
            />
            <path
                d="M18.9375 309.949C22.2373 309.949 24.9122 307.274 24.9122 303.975C24.9122 300.675 22.2373 298 18.9375 298C15.6378 298 12.9629 300.675 12.9629 303.975C12.9629 307.274 15.6378 309.949 18.9375 309.949Z"
                fill="#80BC56"
            />
            <path
                d="M20.6974 303.844H22.0444V305.864C21.3058 306.48 20.6033 306.987 19.1332 306.987C17.3733 306.987 15.7222 305.806 15.7222 304.054C15.7222 302.301 17.243 300.969 19.2128 300.969C20.415 300.969 21.2044 301.36 21.9648 301.975L21.3492 302.598C20.7119 302.12 20.1036 301.722 19.2056 301.722C18.0179 301.722 17.272 302.692 17.272 304.047C17.272 305.401 18.141 306.197 19.2925 306.197C19.995 306.197 20.4512 305.901 20.6974 305.647V303.829V303.844Z"
                fill="white"
            />
            <path
                d="M83.9747 100C87.2744 100 89.9493 97.3251 89.9493 94.0254C89.9493 90.7257 87.2744 88.0508 83.9747 88.0508C80.6749 88.0508 78 90.7257 78 94.0254C78 97.3251 80.6749 100 83.9747 100Z"
                fill="#ED6D34"
            />
            <path
                d="M81.9033 96.8429V91.2158H86.5961V92.0269H83.2069V93.5695H85.394V94.3661H83.2069V96.8429H81.9033Z"
                fill="white"
            />
            <path
                d="M96.9375 99.9493C100.237 99.9493 102.912 97.2744 102.912 93.9747C102.912 90.6749 100.237 88 96.9375 88C93.6378 88 90.9629 90.6749 90.9629 93.9747C90.9629 97.2744 93.6378 99.9493 96.9375 99.9493Z"
                fill="#80BC56"
            />
            <path
                d="M98.6974 93.8438H100.044V95.8643C99.3058 96.4799 98.6033 96.9869 97.1332 96.9869C95.3733 96.9869 93.7222 95.8064 93.7222 94.0538C93.7222 92.3013 95.243 90.9688 97.2128 90.9688C98.415 90.9688 99.2044 91.3598 99.9648 91.9754L99.3492 92.5982C98.7119 92.1202 98.1036 91.7219 97.2056 91.7219C96.0179 91.7219 95.272 92.6923 95.272 94.0466C95.272 95.4009 96.141 96.1975 97.2925 96.1975C97.995 96.1975 98.4512 95.9006 98.6974 95.6471V93.8293V93.8438Z"
                fill="white"
            />
            <path
                d="M91 465C94.3137 465 97 462.314 97 459C97 455.686 94.3137 453 91 453C87.6863 453 85 455.686 85 459C85 462.314 87.6863 465 91 465Z"
                fill="#ED6D34"
            />
            <path
                d="M88.2729 461.96V456.309H90.6875C92.1784 456.309 93.0439 456.629 93.6911 457.276C94.1202 457.72 94.3966 458.331 94.3966 459.08C94.3966 459.873 94.0766 460.542 93.5675 461.044C92.9639 461.625 92.0839 461.96 90.9275 461.96H88.2729ZM90.7675 461.196C92.3093 461.196 92.9275 460.207 92.9275 459.087C92.9275 458.418 92.7384 458.055 92.3966 457.698C91.9602 457.247 91.4293 457.073 90.5057 457.073H89.582V461.196H90.7675Z"
                fill="white"
            />
            <path
                d="M104.309 465C107.623 465 110.309 462.314 110.309 459C110.309 455.686 107.623 453 104.309 453C100.995 453 98.3091 455.686 98.3091 459C98.3091 462.314 100.995 465 104.309 465Z"
                fill="#F4CE47"
            />
            <path
                d="M105.902 461.865L102.542 457.742V461.865H101.596V456.214H103.051L106.069 459.931V456.214H107.014V461.865H105.894H105.902Z"
                fill="black"
            />
            <path
                d="M117.618 465C120.932 465 123.618 462.314 123.618 459C123.618 455.686 120.932 453 117.618 453C114.304 453 111.618 455.686 111.618 459C111.618 462.314 114.304 465 117.618 465Z"
                fill="#F4CE47"
            />
            <path
                d="M114.651 456.214H117.873C119.116 456.214 119.676 456.382 120.105 456.796C120.367 457.058 120.527 457.458 120.527 457.902C120.527 458.222 120.382 458.542 120.135 458.782C119.836 459.073 119.385 459.247 118.905 459.298L120.578 461.865H118.956L117.465 459.502H115.967V461.865H114.658V456.214H114.651ZM117.873 458.753C118.571 458.753 119.109 458.447 119.109 457.873C119.109 457.094 118.455 456.971 117.669 456.971H115.96V458.753H117.873Z"
                fill="black"
            />
            <path
                d="M130.92 465C134.234 465 136.92 462.314 136.92 459C136.92 455.686 134.234 453 130.92 453C127.606 453 124.92 455.686 124.92 459C124.92 462.314 127.606 465 130.92 465Z"
                fill="#F4CE47"
            />
            <path
                d="M132.338 461.865L130.898 458.047L129.422 461.865H128.709L126.68 456.214H128.062L129.363 459.931L130.687 456.214H131.552L132.92 459.931L134.178 456.214H135.174L133.058 461.865H132.352H132.338Z"
                fill="black"
            />
            <path
                d="M368 12C371.314 12 374 9.31371 374 6C374 2.68629 371.314 0 368 0C364.686 0 362 2.68629 362 6C362 9.31371 364.686 12 368 12Z"
                fill="#ED6D34"
            />
            <path
                d="M365.273 8.95999V3.30908H367.687C369.178 3.30908 370.044 3.62908 370.691 4.27635C371.12 4.71999 371.397 5.3309 371.397 6.07999C371.397 6.87272 371.077 7.54181 370.567 8.04363C369.964 8.62545 369.084 8.95999 367.927 8.95999H365.273ZM367.767 8.19635C369.309 8.19635 369.927 7.20726 369.927 6.08726C369.927 5.41817 369.738 5.05454 369.397 4.69817C368.96 4.24726 368.429 4.07272 367.506 4.07272H366.582V8.19635H367.767Z"
                fill="white"
            />
            <path
                d="M381.309 12C384.623 12 387.309 9.31371 387.309 6C387.309 2.68629 384.623 0 381.309 0C377.995 0 375.309 2.68629 375.309 6C375.309 9.31371 377.995 12 381.309 12Z"
                fill="#F4CE47"
            />
            <path
                d="M382.902 8.86526L379.542 4.74163V8.86526H378.596V3.21436H380.051L383.069 6.93072V3.21436H384.014V8.86526H382.894H382.902Z"
                fill="black"
            />
            <path
                d="M394.618 12C397.932 12 400.618 9.31371 400.618 6C400.618 2.68629 397.932 0 394.618 0C391.304 0 388.618 2.68629 388.618 6C388.618 9.31371 391.304 12 394.618 12Z"
                fill="#F4CE47"
            />
            <path
                d="M391.651 3.21436H394.873C396.116 3.21436 396.676 3.38163 397.105 3.79617C397.367 4.05799 397.527 4.45799 397.527 4.90163C397.527 5.22163 397.382 5.54163 397.135 5.78163C396.836 6.07254 396.385 6.24708 395.905 6.29799L397.578 8.86526H395.956L394.465 6.50163H392.967V8.86526H391.658V3.21436H391.651ZM394.873 5.75254C395.571 5.75254 396.109 5.44708 396.109 4.87254C396.109 4.09436 395.455 3.97072 394.669 3.97072H392.96V5.75254H394.873Z"
                fill="black"
            />
            <path
                d="M407.92 12C411.234 12 413.92 9.31371 413.92 6C413.92 2.68629 411.234 0 407.92 0C404.606 0 401.92 2.68629 401.92 6C401.92 9.31371 404.606 12 407.92 12Z"
                fill="#F4CE47"
            />
            <path
                d="M409.338 8.86526L407.898 5.04708L406.422 8.86526H405.709L403.68 3.21436H405.062L406.363 6.93072L407.687 3.21436H408.552L409.92 6.93072L411.178 3.21436H412.174L410.058 8.86526H409.352H409.338Z"
                fill="black"
            />
            <path
                d="M277 174C280.314 174 283 171.314 283 168C283 164.686 280.314 162 277 162C273.686 162 271 164.686 271 168C271 171.314 273.686 174 277 174Z"
                fill="#ED6D34"
            />
            <path
                d="M274.273 170.96V165.309H276.687C278.178 165.309 279.044 165.629 279.691 166.276C280.12 166.72 280.397 167.331 280.397 168.08C280.397 168.873 280.077 169.542 279.567 170.044C278.964 170.625 278.084 170.96 276.927 170.96H274.273ZM276.767 170.196C278.309 170.196 278.927 169.207 278.927 168.087C278.927 167.418 278.738 167.055 278.397 166.698C277.96 166.247 277.429 166.073 276.506 166.073H275.582V170.196H276.767Z"
                fill="white"
            />
            <path
                d="M290.309 174C293.623 174 296.309 171.314 296.309 168C296.309 164.686 293.623 162 290.309 162C286.995 162 284.309 164.686 284.309 168C284.309 171.314 286.995 174 290.309 174Z"
                fill="#F4CE47"
            />
            <path
                d="M291.902 170.865L288.542 166.742V170.865H287.596V165.214H289.051L292.069 168.931V165.214H293.014V170.865H291.894H291.902Z"
                fill="black"
            />
            <path
                d="M303.618 174C306.932 174 309.618 171.314 309.618 168C309.618 164.686 306.932 162 303.618 162C300.304 162 297.618 164.686 297.618 168C297.618 171.314 300.304 174 303.618 174Z"
                fill="#F4CE47"
            />
            <path
                d="M300.651 165.214H303.873C305.116 165.214 305.676 165.382 306.105 165.796C306.367 166.058 306.527 166.458 306.527 166.902C306.527 167.222 306.382 167.542 306.135 167.782C305.836 168.073 305.385 168.247 304.905 168.298L306.578 170.865H304.956L303.465 168.502H301.967V170.865H300.658V165.214H300.651ZM303.873 167.753C304.571 167.753 305.109 167.447 305.109 166.873C305.109 166.094 304.455 165.971 303.669 165.971H301.96V167.753H303.873Z"
                fill="black"
            />
            <path
                d="M316.92 174C320.234 174 322.92 171.314 322.92 168C322.92 164.686 320.234 162 316.92 162C313.606 162 310.92 164.686 310.92 168C310.92 171.314 313.606 174 316.92 174Z"
                fill="#F4CE47"
            />
            <path
                d="M318.338 170.865L316.898 167.047L315.422 170.865H314.709L312.68 165.214H314.062L315.363 168.931L316.687 165.214H317.552L318.92 168.931L320.178 165.214H321.174L319.058 170.865H318.352H318.338Z"
                fill="black"
            />
            <path
                d="M510.309 224C513.623 224 516.309 221.314 516.309 218C516.309 214.686 513.623 212 510.309 212C506.995 212 504.309 214.686 504.309 218C504.309 221.314 506.995 224 510.309 224Z"
                fill="#CB001F"
            />
            <path
                d="M511.611 217.738C512.265 217.774 513.276 218.233 513.276 219.149C513.276 220.211 512.047 220.909 510.309 220.909C508.884 220.909 508.2 220.574 507.334 220.036L507.764 219.338C508.607 219.833 509.124 220.131 510.134 220.131C511.145 220.131 511.771 219.782 511.771 219.134C511.771 218.487 511.167 218.145 510.433 218.145H509.56V217.396H510.527C511.051 217.396 511.545 217.178 511.545 216.611C511.545 216.043 510.971 215.833 510.258 215.833C509.313 215.833 508.716 216.174 508.251 216.451L507.8 215.789C508.367 215.433 509.124 215.083 510.396 215.083C511.836 215.083 512.905 215.607 512.905 216.531C512.905 217.243 512.244 217.622 511.596 217.673V217.723L511.611 217.738Z"
                fill="white"
            />
            <path
                d="M523.618 224C526.932 224 529.618 221.314 529.618 218C529.618 214.686 526.932 212 523.618 212C520.304 212 517.618 214.686 517.618 218C517.618 221.314 520.304 224 523.618 224Z"
                fill="#409147"
            />
            <path
                d="M524.106 219.542H520.746L520.404 218.894L524.135 215.294H525.407V218.749H526.542V219.542H525.407V220.713H524.098V219.542H524.106ZM524.106 218.749V216.291L521.538 218.749H524.106Z"
                fill="white"
            />
            <path
                d="M497 224C500.314 224 503 221.314 503 218C503 214.686 500.314 212 497 212C493.686 212 491 214.686 491 218C491 221.314 493.686 224 497 224Z"
                fill="#CB001F"
            />
            <path
                d="M494.331 220.807C494.207 218.866 495.204 217.957 496.855 217.687C497.866 217.52 498.397 217.302 498.397 216.735C498.397 216.218 497.844 215.949 497.124 215.949C496.222 215.949 495.604 216.298 494.906 216.778L494.382 216.197C495.117 215.593 495.96 215.193 497.167 215.193C498.375 215.193 499.691 215.702 499.691 216.786C499.691 217.869 498.687 218.357 497.051 218.604C496.077 218.742 495.458 219.091 495.349 219.782H499.611V220.815H494.331V220.807Z"
                fill="white"
            />

            <g clipPath="url(#PALMS)" className="cursor-pointer" onClick={() => handleClick(2)}>
                <path
                    d="M237.991 114.258C237.351 114.098 236.684 114 236 114C231.582 114 228 117.582 228 122C228 126.418 231.582 130 236 130C240.418 130 244 126.418 244 122C244 118.338 241.538 115.253 238.178 114.311L237.991 114.267V114.258Z"
                    fill="#E8E8E8"
                />
                <path
                    d="M238.373 117.52L236.818 116.604L237.458 114.924L233.831 116.204L234.747 118.791L238.373 117.52Z"
                    fill="#CB001F"
                />
                <path
                    d="M232.498 123.911L238.044 121.955C237.36 120.96 236.133 120.444 234.933 120.693L233.422 116.4C233.342 116.169 233.084 116.044 232.844 116.124C232.613 116.204 232.489 116.462 232.569 116.702L234.089 121.004C233.022 121.582 232.409 122.729 232.498 123.911Z"
                    fill="#304451"
                />
                <path
                    d="M233.635 124.222C233.706 124.222 233.777 124.213 233.857 124.213C234.684 124.213 235.146 124.568 235.449 124.8C235.671 124.968 235.724 125.013 235.946 125.013C236.169 125.013 236.222 124.968 236.444 124.8C236.746 124.568 237.209 124.213 238.035 124.213C238.213 124.213 238.373 124.231 238.524 124.257C238.622 123.742 238.595 123.2 238.409 122.666C238.4 122.631 238.382 122.595 238.364 122.56L233.635 124.222Z"
                    fill="#304451"
                />
                <path
                    d="M241.804 125.369C241.715 125.236 241.573 125.165 241.422 125.165C241.342 125.165 241.253 125.191 241.182 125.236C241.084 125.298 240.995 125.369 240.907 125.431C240.667 125.618 240.507 125.742 240.133 125.742C239.76 125.742 239.6 125.618 239.36 125.431C239.129 125.254 238.853 125.049 238.409 124.969C238.293 124.951 238.178 124.934 238.044 124.934C237.369 124.934 237.013 125.209 236.729 125.422C236.489 125.609 236.329 125.734 235.955 125.734C235.582 125.734 235.422 125.609 235.182 125.422C234.898 125.2 234.542 124.934 233.867 124.934C233.36 124.934 233.031 125.085 232.782 125.254C232.702 125.307 232.622 125.369 232.551 125.422C232.311 125.609 232.151 125.734 231.778 125.734C231.404 125.734 231.244 125.609 231.004 125.422C230.915 125.351 230.827 125.289 230.729 125.227C230.658 125.182 230.569 125.156 230.489 125.156C230.338 125.156 230.195 125.227 230.107 125.36C229.973 125.574 230.035 125.849 230.24 125.982C230.311 126.027 230.382 126.08 230.453 126.134C230.738 126.356 231.093 126.622 231.769 126.622C232.444 126.622 232.8 126.347 233.084 126.134C233.147 126.08 233.209 126.036 233.271 126C233.431 125.894 233.591 125.831 233.858 125.831C234.231 125.831 234.391 125.956 234.631 126.142C234.915 126.365 235.271 126.631 235.947 126.631C236.622 126.631 236.978 126.356 237.262 126.142C237.475 125.982 237.635 125.867 237.911 125.849C237.947 125.849 237.982 125.84 238.027 125.84C238.4 125.84 238.56 125.965 238.8 126.151C239.084 126.374 239.44 126.64 240.115 126.64C240.791 126.64 241.147 126.365 241.431 126.151C241.502 126.098 241.564 126.045 241.644 126C241.858 125.867 241.911 125.591 241.778 125.378L241.804 125.369Z"
                    fill="#00AEA3"
                />
                <path
                    d="M239.235 127.28C238.96 127.066 238.613 126.8 237.964 126.8C237.315 126.8 236.969 127.066 236.693 127.271C236.462 127.449 236.311 127.564 235.964 127.564C235.618 127.564 235.467 127.449 235.235 127.271C234.96 127.058 234.613 126.8 233.964 126.8C233.315 126.8 232.969 127.066 232.693 127.271C232.64 127.315 232.578 127.36 232.515 127.395C232.311 127.538 232.258 127.813 232.391 128.018C232.48 128.151 232.622 128.213 232.764 128.213C232.853 128.213 232.933 128.186 233.013 128.133C233.093 128.08 233.164 128.026 233.235 127.973C233.467 127.795 233.618 127.68 233.964 127.68C234.311 127.68 234.462 127.795 234.693 127.973C234.969 128.186 235.315 128.444 235.964 128.444C236.613 128.444 236.96 128.178 237.235 127.973C237.467 127.795 237.618 127.68 237.964 127.68C238.311 127.68 238.462 127.795 238.693 127.973C238.764 128.026 238.835 128.08 238.907 128.133C238.987 128.186 239.075 128.213 239.155 128.213C239.298 128.213 239.44 128.142 239.529 128.018C239.671 127.813 239.618 127.529 239.404 127.395C239.342 127.36 239.289 127.315 239.235 127.271V127.28Z"
                    fill="#00AEA3"
                />
            </g>

            <g clipPath="url(#PUBLICRECORDS)" className="cursor-pointer" onClick={() => handleClick(0)}>
                <path
                    d="M239.991 51.2578C239.351 51.0978 238.684 51 238 51C233.582 51 230 54.5822 230 59C230 63.4178 233.582 67 238 67C242.418 67 246 63.4178 246 59C246 55.3378 243.538 52.2533 240.178 51.3111L239.991 51.2667V51.2578Z"
                    fill="#E8E8E8"
                />
                <path
                    d="M240.373 54.5199L238.818 53.6043L239.458 51.9243L235.831 53.2043L236.747 55.791L240.373 54.5199Z"
                    fill="#CB001F"
                />
                <path
                    d="M234.498 60.911L240.044 58.9555C239.36 57.9599 238.133 57.4444 236.933 57.6933L235.422 53.3999C235.342 53.1688 235.084 53.0444 234.844 53.1244C234.613 53.2044 234.489 53.4621 234.569 53.7021L236.089 58.0044C235.022 58.5821 234.409 59.7288 234.498 60.911Z"
                    fill="#304451"
                />
                <path
                    d="M235.635 61.2218C235.706 61.2218 235.777 61.2129 235.857 61.2129C236.684 61.2129 237.146 61.5685 237.449 61.7996C237.671 61.9685 237.724 62.0129 237.946 62.0129C238.169 62.0129 238.222 61.9685 238.444 61.7996C238.746 61.5685 239.209 61.2129 240.035 61.2129C240.213 61.2129 240.373 61.2307 240.524 61.2573C240.622 60.7418 240.595 60.1996 240.409 59.6662C240.4 59.6307 240.382 59.5951 240.364 59.5596L235.635 61.2218Z"
                    fill="#304451"
                />
                <path
                    d="M243.804 62.3691C243.715 62.2358 243.573 62.1647 243.422 62.1647C243.342 62.1647 243.253 62.1914 243.182 62.2358C243.084 62.298 242.995 62.3691 242.907 62.4314C242.667 62.618 242.507 62.7425 242.133 62.7425C241.76 62.7425 241.6 62.618 241.36 62.4314C241.129 62.2536 240.853 62.0491 240.409 61.9691C240.293 61.9514 240.178 61.9336 240.044 61.9336C239.369 61.9336 239.013 62.2091 238.729 62.4225C238.489 62.6091 238.329 62.7336 237.955 62.7336C237.582 62.7336 237.422 62.6091 237.182 62.4225C236.898 62.2003 236.542 61.9336 235.867 61.9336C235.36 61.9336 235.031 62.0847 234.782 62.2536C234.702 62.3069 234.622 62.3691 234.551 62.4225C234.311 62.6091 234.151 62.7336 233.778 62.7336C233.404 62.7336 233.244 62.6091 233.004 62.4225C232.915 62.3514 232.827 62.2891 232.729 62.2269C232.658 62.1825 232.569 62.1558 232.489 62.1558C232.338 62.1558 232.195 62.2269 232.107 62.3603C231.973 62.5736 232.035 62.8491 232.24 62.9825C232.311 63.0269 232.382 63.0803 232.453 63.1336C232.738 63.3558 233.093 63.6225 233.769 63.6225C234.444 63.6225 234.8 63.3469 235.084 63.1336C235.147 63.0803 235.209 63.0358 235.271 63.0003C235.431 62.8936 235.591 62.8314 235.858 62.8314C236.231 62.8314 236.391 62.9558 236.631 63.1425C236.915 63.3647 237.271 63.6314 237.947 63.6314C238.622 63.6314 238.978 63.3558 239.262 63.1425C239.475 62.9825 239.635 62.8669 239.911 62.8491C239.947 62.8491 239.982 62.8403 240.027 62.8403C240.4 62.8403 240.56 62.9647 240.8 63.1514C241.084 63.3736 241.44 63.6403 242.115 63.6403C242.791 63.6403 243.147 63.3647 243.431 63.1514C243.502 63.098 243.564 63.0447 243.644 63.0003C243.858 62.8669 243.911 62.5914 243.778 62.378L243.804 62.3691Z"
                    fill="#00AEA3"
                />
                <path
                    d="M241.235 64.2798C240.96 64.0665 240.613 63.7998 239.964 63.7998C239.315 63.7998 238.969 64.0665 238.693 64.2709C238.462 64.4487 238.311 64.5642 237.964 64.5642C237.618 64.5642 237.467 64.4487 237.235 64.2709C236.96 64.0576 236.613 63.7998 235.964 63.7998C235.315 63.7998 234.969 64.0665 234.693 64.2709C234.64 64.3154 234.578 64.3598 234.515 64.3954C234.311 64.5376 234.258 64.8131 234.391 65.0176C234.48 65.1509 234.622 65.2131 234.764 65.2131C234.853 65.2131 234.933 65.1865 235.013 65.1331C235.093 65.0798 235.164 65.0265 235.235 64.9731C235.467 64.7954 235.618 64.6798 235.964 64.6798C236.311 64.6798 236.462 64.7954 236.693 64.9731C236.969 65.1865 237.315 65.4442 237.964 65.4442C238.613 65.4442 238.96 65.1776 239.235 64.9731C239.467 64.7954 239.618 64.6798 239.964 64.6798C240.311 64.6798 240.462 64.7954 240.693 64.9731C240.764 65.0265 240.835 65.0798 240.907 65.1331C240.987 65.1865 241.075 65.2131 241.155 65.2131C241.298 65.2131 241.44 65.142 241.529 65.0176C241.671 64.8131 241.618 64.5287 241.404 64.3954C241.342 64.3598 241.289 64.3154 241.235 64.2709V64.2798Z"
                    fill="#00AEA3"
                />
            </g>

            <g clipPath="url(#CLARO)" className="cursor-pointer" onClick={() => handleClick(1)}>
                <path
                    d="M241.991 164.258C241.351 164.098 240.684 164 240 164C235.582 164 232 167.582 232 172C232 176.418 235.582 180 240 180C244.418 180 248 176.418 248 172C248 168.338 245.538 165.253 242.178 164.311L241.991 164.267V164.258Z"
                    fill="#E8E8E8"
                />
                <path
                    d="M242.373 167.52L240.818 166.604L241.458 164.924L237.831 166.204L238.747 168.791L242.373 167.52Z"
                    fill="#CB001F"
                />
                <path
                    d="M236.498 173.911L242.044 171.955C241.36 170.96 240.133 170.444 238.933 170.693L237.422 166.4C237.342 166.169 237.084 166.044 236.844 166.124C236.613 166.204 236.489 166.462 236.569 166.702L238.089 171.004C237.022 171.582 236.409 172.729 236.498 173.911Z"
                    fill="#304451"
                />
                <path
                    d="M237.636 174.222C237.707 174.222 237.778 174.213 237.858 174.213C238.685 174.213 239.147 174.568 239.449 174.8C239.671 174.968 239.725 175.013 239.947 175.013C240.169 175.013 240.222 174.968 240.445 174.8C240.747 174.568 241.209 174.213 242.036 174.213C242.214 174.213 242.374 174.231 242.525 174.257C242.622 173.742 242.596 173.2 242.409 172.666C242.4 172.631 242.382 172.595 242.365 172.56L237.636 174.222Z"
                    fill="#304451"
                />
                <path
                    d="M245.804 175.369C245.715 175.236 245.573 175.165 245.422 175.165C245.342 175.165 245.253 175.191 245.182 175.236C245.084 175.298 244.995 175.369 244.907 175.431C244.667 175.618 244.507 175.742 244.133 175.742C243.76 175.742 243.6 175.618 243.36 175.431C243.129 175.254 242.853 175.049 242.409 174.969C242.293 174.951 242.178 174.934 242.044 174.934C241.369 174.934 241.013 175.209 240.729 175.422C240.489 175.609 240.329 175.734 239.955 175.734C239.582 175.734 239.422 175.609 239.182 175.422C238.898 175.2 238.542 174.934 237.867 174.934C237.36 174.934 237.031 175.085 236.782 175.254C236.702 175.307 236.622 175.369 236.551 175.422C236.311 175.609 236.151 175.734 235.778 175.734C235.404 175.734 235.244 175.609 235.004 175.422C234.915 175.351 234.827 175.289 234.729 175.227C234.658 175.182 234.569 175.156 234.489 175.156C234.338 175.156 234.195 175.227 234.107 175.36C233.973 175.574 234.035 175.849 234.24 175.982C234.311 176.027 234.382 176.08 234.453 176.134C234.738 176.356 235.093 176.622 235.769 176.622C236.444 176.622 236.8 176.347 237.084 176.134C237.147 176.08 237.209 176.036 237.271 176C237.431 175.894 237.591 175.831 237.858 175.831C238.231 175.831 238.391 175.956 238.631 176.142C238.915 176.365 239.271 176.631 239.947 176.631C240.622 176.631 240.978 176.356 241.262 176.142C241.475 175.982 241.635 175.867 241.911 175.849C241.947 175.849 241.982 175.84 242.027 175.84C242.4 175.84 242.56 175.965 242.8 176.151C243.084 176.374 243.44 176.64 244.115 176.64C244.791 176.64 245.147 176.365 245.431 176.151C245.502 176.098 245.564 176.045 245.644 176C245.858 175.867 245.911 175.591 245.778 175.378L245.804 175.369Z"
                    fill="#00AEA3"
                />
                <path
                    d="M243.235 177.279C242.96 177.066 242.613 176.799 241.964 176.799C241.315 176.799 240.969 177.066 240.693 177.27C240.462 177.448 240.311 177.564 239.964 177.564C239.618 177.564 239.467 177.448 239.235 177.27C238.96 177.057 238.613 176.799 237.964 176.799C237.315 176.799 236.969 177.066 236.693 177.27C236.64 177.315 236.578 177.359 236.515 177.395C236.311 177.537 236.258 177.813 236.391 178.017C236.48 178.15 236.622 178.213 236.764 178.213C236.853 178.213 236.933 178.186 237.013 178.133C237.093 178.079 237.164 178.026 237.235 177.973C237.467 177.795 237.618 177.679 237.964 177.679C238.311 177.679 238.462 177.795 238.693 177.973C238.969 178.186 239.315 178.444 239.964 178.444C240.613 178.444 240.96 178.177 241.235 177.973C241.467 177.795 241.618 177.679 241.964 177.679C242.311 177.679 242.462 177.795 242.693 177.973C242.764 178.026 242.835 178.079 242.907 178.133C242.987 178.186 243.075 178.213 243.155 178.213C243.298 178.213 243.44 178.142 243.529 178.017C243.671 177.813 243.618 177.528 243.404 177.395C243.342 177.359 243.289 177.315 243.235 177.27V177.279Z"
                    fill="#00AEA3"
                />
            </g>
            <defs>
                <clipPath id="clip0_1607_12683" >
                    <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(199 137)"
                    />
                </clipPath>

                <clipPath id="clip1_1607_12683">
                    <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(267 85)"
                    />
                </clipPath>

                <clipPath id="clip2_1607_12683">
                    <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(244 130)"
                    />
                </clipPath>

                <clipPath id="CLARO">
                    <circle cx="240" cy="172" r="50" />
                </clipPath>

                <clipPath id="PUBLICRECORDS">
                    <rect x="230" y="51" width="16" height="16" />
                </clipPath>

                <clipPath id="PALMS">
                    <path d="M237.991 114.258C237.351 114.098 236.684 114 236 114C231.582 114 228 117.582 228 122C228 126.418 231.582 130 236 130C240.418 130 244 126.418 244 122C244 118.338 241.538 115.253 238.178 114.311L237.991 114.267V114.258Z" />
                </clipPath>
            </defs>
        </svg>
    )
};
export default Pins;
