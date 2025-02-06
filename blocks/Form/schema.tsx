import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const FormBlock: Block = {
    slug: 'formBlock',
    labels: {
        singular: 'Form Block',
        plural: 'Form Blocks',
    },
    graphQL: {
        singularName: 'FormBlock',
    },
    fields: [
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
        },
        {
            name: 'enableIntro',
            label: 'Enable Intro Content',
            type: 'checkbox'
        },
        {
            name: 'introContent',
            label: 'Intro Content',
            type: 'richText',
            admin: {
                condition: (_, { enableIntro }) => Boolean(enableIntro),
            },
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] })]
                },
            })
        }
    ]
}