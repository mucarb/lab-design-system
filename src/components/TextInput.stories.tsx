import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Digite seu endereço de e-mail" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
