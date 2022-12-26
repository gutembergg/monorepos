import { Meta, Story, StoryFn } from "@storybook/vue3";
import NewButton from "./Button.vue";

interface IProps {
  primary?: Boolean;
  label: String;
  size: String;
}

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: NewButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NewButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<new-button v-bind="args" />',
});

export const Primary: Story<IProps> = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button-Primary",
};

export const Secondary: Story<IProps> = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large: Story<IProps> = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small: Story<IProps> = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
