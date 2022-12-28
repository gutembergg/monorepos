import { Meta, Story, StoryFn } from "@storybook/vue3";
import TheTabs from "../Tabs/TheTabs.vue";

export default {
  title: "UI/Tabs",
  component: TheTabs,

  argTypes: {
    active: {
      name: "active",
      type: { name: "string", required: true },
      defaultValue: null,
      description: "New component Tabs for test",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "1" },
      },
      control: {
        type: "text",
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta<typeof TheTabs>;

const Template = (args: any) => ({
  components: { TheTabs },
  setup() {
    return { args };
  },
  template: '<TheTabs v-bind="args" />',
});

export const Default: StoryFn<typeof TheTabs> = Template.bind({});
Default.args = {
  active: "1",
};
export const Active: StoryFn<typeof TheTabs> = Template.bind({});
