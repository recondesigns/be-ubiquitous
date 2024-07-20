import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ModalHeader from '../ModalHeader'
import Modal from '../../Modal'

type ModalHeaderStory = StoryObj<typeof ModalHeader>

const meta: Meta<typeof ModalHeader> = {
  title: 'UI Components/Modal/Building Blocks/ModalHeader',
  component: ModalHeader,
}

export const Demo: ModalHeaderStory = {
  render: (args) => {
    const [isModalOpen, setIsModalOpen] = React.useState(true)

    return (
      <Modal isOpen={isModalOpen}>
        <Modal.Header {...args} onClose={() => setIsModalOpen(!isModalOpen)} />
      </Modal>
    )
  },
  args: {
    title: 'Modal title',
  },
}

export const Default: ModalHeaderStory = {
  render: (args) => {
    const [isModalOpen, setIsModalOpen] = React.useState(true)

    return (
      <Modal isOpen={isModalOpen}>
        <Modal.Header {...args} onClose={() => setIsModalOpen(!isModalOpen)} />
      </Modal>
    )
  },
  args: {
    title: 'Modal title',
  },
}

export const NoCloseButton: ModalHeaderStory = {
  render: (args) => {
    return (
      <Modal isOpen>
        <Modal.Header {...args} />
      </Modal>
    )
  },
  args: {
    title: 'Modal title',
    // @ts-expect-error intentionally using null for this story
    onClose: null,
  },
}

export default meta
