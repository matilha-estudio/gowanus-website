export type BlogDetailsProps = Array<{
    id: number
    date: string
    date_gmt: string
    guid: {
        rendered: string
    }
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: {
        rendered: string
    }
    content: {
        rendered: string
        protected: boolean
    }
    excerpt: {
        rendered: string
        protected: boolean
    }
    author: number
    featured_media: number
    comment_status: string
    ping_status: string
    sticky: boolean
    template: string
    format: string
    meta: {
        _genesis_block_theme_hide_title: boolean
        footnotes: string
    }
    categories: Array<number>
    tags: Array<any>
    class_list: {
        "0": string
        "1": string
        "2": string
        "3": string
        "4": string
        "5": string
        "6": string
        "8": string
    }
    acf: {
        color: string
        type: string
        location: string
        date: string
        section_1: {
            image: number
            subtitle_or_pull_quote: string
            description: string
            subtitle_or_pull_quote_2: string
            description_2: string
        }
        section_2: {
            image: number
            image_2: number
            subtitle_or_pull_quote: string
            description: string
            subtitle_or_pull_quote_2: string
            description_2: string
        }
        section_3: {
            image: number
            subtitle_or_pull_quote: string
            description: string
        }
    }
    featured_image_src: any
    featured_image_src_square: any
    author_info: {
        display_name: string
        author_link: string
    }
    acf_medias: {
        section_1: string
        section_2_image_1: string
        section_2_image_2: string
        section_3: string
    }
    _links: {
        self: Array<{
            href: string
        }>
        collection: Array<{
            href: string
        }>
        about: Array<{
            href: string
        }>
        author: Array<{
            embeddable: boolean
            href: string
        }>
        replies: Array<{
            embeddable: boolean
            href: string
        }>
        "version-history": Array<{
            count: number
            href: string
        }>
        "wp:attachment": Array<{
            href: string
        }>
        "wp:term": Array<{
            taxonomy: string
            embeddable: boolean
            href: string
        }>
        curies: Array<{
            name: string
            href: string
            templated: boolean
        }>
    }
}>
