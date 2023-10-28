import { Meta, StoryObj } from '@storybook/react'
import Modal, { ModalProps } from './Modal'
import { Button, Input } from '../../components'

export const Default: StoryObj<typeof Modal> = {
  render: args => <Modal {...args} />,
  args: {
    children: (
      <form style={{ padding: '12px' }}>
      <h4 style={{ margin: "0px" }}>Form title</h4>
      <Input
        label="Label goes here"
        onchange={() => {}}
        placeholder="Placeholder thing"
        value=""
      />
      <Button label="Submit" />
    </form>
    )
  }
}

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ["autodocs"],
  decorators: [
    ModalStory => (
      <div style={{
        height: '400px'
      }}>
        <ModalStory />
      </div>
    )
  ]
}

export default meta