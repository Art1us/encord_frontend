import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Input, InputType } from "./Input"

export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: any) => (
    <Input {...args} />
)

export const EmptyText = Template.bind({})
EmptyText.args = {
    value: "",
    placeholder: "Enter something",
}

export const EmptyTextWithLabel = Template.bind({})
EmptyTextWithLabel.args = {
    label: "Name, Surname",
    value: "",
    placeholder: "Enter something",
}

export const TextWithLabelIncorrect = Template.bind({})
TextWithLabelIncorrect.args = {
    error: "Please Enter Correct Value",
    label: "Name, Surname",
    value: "123",
    placeholder: "Enter something",
}

export const EmptyTextWithLabelRequired = Template.bind({})
EmptyTextWithLabelRequired.args = {
    label: "Name, Surname",
    isRequired: true,
    value: "",
    placeholder: "Enter something",
}

export const TextWithLabelRequired = Template.bind({})
TextWithLabelRequired.args = {
    label: "Name, Surname",
    isRequired: true,
    value: "Vadim",
    placeholder: "Enter something",
}

export const PasswordWithLabelRequired = Template.bind({})
PasswordWithLabelRequired.args = {
    type: InputType.PASSWORD,
    label: "Name, Surname",
    isRequired: true,
    value: "Vadim",
    placeholder: "Enter something",
}

export const NumberWithLabelRequired = Template.bind({})
NumberWithLabelRequired.args = {
    type: InputType.NUMBER,
    label: "Name, Surname",
    isRequired: true,
    value: 123456,
    placeholder: "Enter something",
}

export const EmailWithLabelRequired = Template.bind({})
EmailWithLabelRequired.args = {
    type: InputType.EMAIL,
    label: "Name, Surname",
    isRequired: true,
    value: "Dsadsa@gmail.com",
    placeholder: "Enter something",
}
