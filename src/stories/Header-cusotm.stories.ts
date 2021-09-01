import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {HeaderComponent} from "../app/module/header/header.component";
import {CoreModule} from "../@core/core/core.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

export default {
  title: 'Header',
  component: HeaderComponent,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {type: 'radio'}
    },
    propertyA: {
      options: ['Item one', 'Item two', 'Item Three']
    }
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CoreModule, MatIconModule, FormsModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => (
  {
    props: args,
  });

export const ColorDark = Template.bind({})
ColorDark.args = {
  background: 'dark',
  color: 'dark'
}

export const ColorLight = Template.bind({})
ColorLight.args = {
  background: "light",
  color: "light"

}

export const ColorTransparent = Template.bind({})
ColorTransparent.args = {
  background: 'transparent',
  color: 'transparent'

}

