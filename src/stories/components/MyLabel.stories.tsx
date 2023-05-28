import { Meta, StoryFn} from "@storybook/react";

import { MyLabel, MyLabelProps } from '../../components/MyLabel';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        // size: { 
        //     control: {
        //         type: 'radio',
        //         options: ['normal', 'h1', 'h2', 'h3']
        //     }
        // },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secundary', 'tertiary'] // Podriamos quitar opciones si quisieramos restringir opciones
            }
        },
        fontColor: { control: 'color' }

    }
} as Meta<typeof MyLabel>// Esta notacion la podemos sacar de otros ejemplos de stories components

// Para recibir los argumentos del label mediante el args
const Template: StoryFn<typeof MyLabel> = (args: MyLabelProps) => <MyLabel {...args} />

// Creacion de Stories
export const Basic = Template.bind({});
Basic.args = {
        size: 'normal',
        allCaps: false
    }

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secundary = Template.bind({});
Secundary.args = {
    size: 'normal',
    color: 'secundary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}