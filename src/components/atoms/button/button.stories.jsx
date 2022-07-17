import { Button } from ".";

export default {
    title: 'Components/Button',
    component: Button,
}

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
};