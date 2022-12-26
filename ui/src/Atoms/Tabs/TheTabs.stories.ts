import { Meta, Story } from "@storybook/vue3";
import TheTabs from "../Tabs/TheTabs.vue";

export default {
  title: "UI/Tabs",
  component: TheTabs,
  argTypes: {
    active: {
      name: "active",
      type: { name: "string", required: true },
      defaultValue: "Test",
      description: "New component Tabs for test",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta;

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TheTabs },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<new-button v-bind="args" />',
});

export const Primary: Story = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
