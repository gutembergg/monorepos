import { Meta, Story } from "@storybook/vue3";
import NewTitle from "./Title.vue";

export default {
  title: "Example/Title",
  component: NewTitle,
} as Meta;

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NewTitle },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<new-title :user="user" />',
});

export const LoggedIn: Story = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};
