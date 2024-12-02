import config from "../../../tailwind.config";

export const CustomShape = ({ cx = 240, cy = 172 }: any) => {
    return (
        <svg>
            <path
                d={`M${cx + 1.991} ${cy - 7.742}C${cx + 1.351} ${cy - 7.902} ${cx + 0.684
                    } ${cy - 8} ${cx} ${cy - 8}C${cx - 4.418} ${cy - 8} ${cx - 8} ${cy - 4.418
                    } ${cx - 8} ${cy}C${cx - 8} ${cy + 4.418} ${cx - 4.418} ${cy + 8
                    } ${cx} ${cy + 8}C${cx + 4.418} ${cy + 8} ${cx + 8} ${cy + 4.418
                    } ${cx + 8} ${cy}C${cx + 8} ${cy - 3.662} ${cx + 5.538} ${cy - 6.747
                    } ${cx + 2.178} ${cy - 7.689}L${cx + 1.991} ${cy - 7.733}V${cy - 7.742
                    }Z`}
                fill="#E8E8E8"
            />
            <path
                d={`M${cx + 2.373} ${cy - 4.48}L${cx + 0.818} ${cy - 5.396
                    }L${cx + 1.458} ${cy - 7.076}L${cx - 2.169} ${cy - 5.796
                    }L${cx - 1.253} ${cy - 3.209}L${cx + 2.373} ${cy - 4.48}Z`}
                fill={config.theme.extend.colors.red}
            />
            <path
                d={`M${cx - 3.502} ${cy + 1.911}L${cx + 2.044} ${cy - 0.045}C${cx + 1.36
                    } ${cy - 1.04} ${cx + 0.133} ${cy - 1.556} ${cx - 1.067} ${cy - 1.307
                    }L${cx - 2.578} ${cy - 5.6}C${cx - 2.658} ${cy - 5.831} ${cx - 2.916
                    } ${cy - 5.956} ${cx - 3.156} ${cy - 5.876}C${cx - 3.387} ${cy - 5.796
                    } ${cx - 3.511} ${cy - 5.538} ${cx - 3.431} ${cy - 5.298
                    }L${cx - 1.911} ${cy - 0.996}C${cx - 2.978} ${cy - 0.418} ${cx - 3.591
                    } ${cy + 0.729} ${cx - 3.502} ${cy + 1.911}Z`}
                fill={config.theme.extend.colors.navy}
            />
            <path
                d={`M${cx - 2.364} ${cy + 2.222}C${cx - 2.293} ${cy + 2.222} ${cx - 2.222
                    } ${cy + 2.213} ${cx - 2.142} ${cy + 2.213}C${cx - 1.315} ${cy + 2.213
                    } ${cx - 0.853} ${cy + 2.568} ${cx - 0.551} ${cy + 2.8}C${cx - 0.329
                    } ${cy + 2.968} ${cx - 0.275} ${cy + 3.013} ${cx - 0.053} ${cy + 3.013
                    }C${cx + 0.169} ${cy + 3.013} ${cx + 0.222} ${cy + 2.968} ${cx + 0.445
                    } ${cy + 2.8}C${cx + 0.747} ${cy + 2.568} ${cx + 1.209} ${cy + 2.213
                    } ${cx + 2.036} ${cy + 2.213}C${cx + 2.214} ${cy + 2.213} ${cx + 2.374
                    } ${cy + 2.231} ${cx + 2.525} ${cy + 2.257}C${cx + 2.622} ${cy + 1.742
                    } ${cx + 2.596} ${cy + 1.2} ${cx + 2.409} ${cy + 0.666
                    }C${cx + 2.4} ${cy + 0.631} ${cx + 2.382} ${cy + 0.595} ${cx + 2.365
                    } ${cy + 0.56}L${cx - 2.364} ${cy + 2.222}Z`}
                fill={config.theme.extend.colors.navy}
            />
            <path
                d={`M${cx + 5.804} ${cy + 3.369}C${cx + 5.715} ${cy + 3.236} ${cx + 5.573
                    } ${cy + 3.165} ${cx + 5.422} ${cy + 3.165}C${cx + 5.342} ${cy + 3.165
                    } ${cx + 5.253} ${cy + 3.191} ${cx + 5.182} ${cy + 3.236}C${cx + 5.084
                    } ${cy + 3.298} ${cx + 4.995} ${cy + 3.369} ${cx + 4.907} ${cy + 3.431
                    }C${cx + 4.667} ${cy + 3.618} ${cx + 4.507} ${cy + 3.742} ${cx + 4.133
                    } ${cy + 3.742}C${cx + 3.76} ${cy + 3.742} ${cx + 3.6} ${cy + 3.618
                    } ${cx + 3.36} ${cy + 3.431}C${cx + 3.129} ${cy + 3.254} ${cx + 2.853
                    } ${cy + 3.049} ${cx + 2.409} ${cy + 2.969}C${cx + 2.293} ${cy + 2.951
                    } ${cx + 2.178} ${cy + 2.934} ${cx + 2.044} ${cy + 2.934}C${cx + 1.369
                    } ${cy + 2.934} ${cx + 1.013} ${cy + 3.209} ${cx + 0.729} ${cy + 3.422
                    }C${cx + 0.489} ${cy + 3.609} ${cx + 0.329} ${cy + 3.734} ${cx - 0.045
                    } ${cy + 3.734}C${cx - 0.418} ${cy + 3.734} ${cx - 0.578} ${cy + 3.609
                    } ${cx - 0.818} ${cy + 3.422}C${cx - 1.102} ${cy + 3.2} ${cx - 1.458
                    } ${cy + 2.934} ${cx - 2.133} ${cy + 2.934}`}
                fill={config.theme.extend.colors.teal}
            />
            <path
                d={`M${cx + 3.235} ${cy + 5.279}C${cx + 2.96} ${cy + 5.066} ${cx + 2.613
                    } ${cy + 4.799} ${cx + 1.964} ${cy + 4.799}C${cx + 1.315} ${cy + 4.799
                    } ${cx + 0.969} ${cy + 5.066} ${cx + 0.693} ${cy + 5.27}C${cx + 0.462
                    } ${cy + 5.448} ${cx + 0.311} ${cy + 5.564} ${cx - 0.036} ${cy + 5.564
                    }C${cx - 0.382} ${cy + 5.564} ${cx - 0.533} ${cy + 5.448} ${cx - 0.765
                    } ${cy + 5.27}C${cx - 1.04} ${cy + 5.057} ${cx - 1.387} ${cy + 4.799
                    } ${cx - 2.036} ${cy + 4.799}C${cx - 2.685} ${cy + 4.799} ${cx - 3.031
                    } ${cy + 5.066} ${cx - 3.307} ${cy + 5.27}C${cx - 3.36} ${cy + 5.315
                    } ${cx - 3.422} ${cy + 5.359} ${cx - 3.485} ${cy + 5.395}C${cx - 3.689
                    } ${cy + 5.537} ${cx - 3.742} ${cy + 5.813} ${cx - 3.609} ${cy + 6.017
                    }C${cx - 3.52} ${cy + 6.15} ${cx - 3.378} ${cy + 6.213} ${cx - 3.236
                    } ${cy + 6.213}C${cx - 3.147} ${cy + 6.213} ${cx - 3.067} ${cy + 6.186
                    } ${cx - 2.987} ${cy + 6.133}C${cx - 2.907} ${cy + 6.079} ${cx - 2.836
                    } ${cy + 6.026} ${cx - 2.765} ${cy + 5.973}C${cx - 2.533} ${cy + 5.795
                    } ${cx - 2.382} ${cy + 5.679} ${cx - 2.036} ${cy + 5.679}C${cx - 1.689
                    } ${cy + 5.679} ${cx - 1.538} ${cy + 5.795} ${cx - 1.307} ${cy + 5.973
                    }C${cx - 1.031} ${cy + 6.186} ${cx - 0.685} ${cy + 6.444} ${cx - 0.036
                    } ${cy + 6.444}C${cx + 0.613} ${cy + 6.444} ${cx + 0.96} ${cy + 6.177
                    } ${cx + 1.235} ${cy + 5.973}C${cx + 1.467} ${cy + 5.795} ${cx + 1.618
                    } ${cy + 5.679} ${cx + 1.964} ${cy + 5.679}C${cx + 2.311} ${cy + 5.679
                    } ${cx + 2.462} ${cy + 5.795} ${cx + 2.693} ${cy + 5.973}C${cx + 2.764
                    } ${cy + 6.026} ${cx + 2.835} ${cy + 6.079} ${cx + 2.907} ${cy + 6.133
                    }C${cx + 2.987} ${cy + 6.186} ${cx + 3.075} ${cy + 6.213} ${cx + 3.155
                    } ${cy + 6.213}C${cx + 3.298} ${cy + 6.213} ${cx + 3.44} ${cy + 6.142
                    } ${cx + 3.529} ${cy + 6.017}C${cx + 3.671} ${cy + 5.813} ${cx + 3.618
                    } ${cy + 5.528} ${cx + 3.404} ${cy + 5.395}C${cx + 3.342} ${cy + 5.359
                    } ${cx + 3.289} ${cy + 5.315} ${cx + 3.235} ${cy + 5.27}V${cy + 5.279
                    }Z`}
                fill={config.theme.extend.colors.teal}
            />
        </svg>
    );
};