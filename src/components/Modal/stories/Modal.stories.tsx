import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@emotion/react'
import { Modal } from '../../Modal'
import { Button } from '../..'
import { defaultTheme } from '../../emotionTheme'

type ModalStory = StoryObj<typeof Modal>

const meta: Meta<typeof Modal> = {
  title: 'UI Components/Modal',
  component: Modal,
  parameters: {
    controls: {
      exclude: ['isOpen', 'onClose', 'children'],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Demo: ModalStory = {
  render: (args) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    return (
      <>
        <div
          style={{
            padding: '0px 0px 24px 0px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            {!isModalOpen ? 'Open modal' : 'Close modal'}
          </Button>
        </div>
        <Modal {...args} isOpen={isModalOpen} onClose={setIsModalOpen}>
          <Modal.Header
            title="Modal title"
            onClose={() => setIsModalOpen(!isModalOpen)}
          />
          <Modal.Content>
            <h3 style={{ fontFamily: 'sans-serif', margin: '0px 0px 8px 0px' }}>
              Heading level four
            </h3>
            <p style={{ fontFamily: 'sans-serif', margin: '0px 0px 4px 0px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio,
            </p>
          </Modal.Content>
        </Modal>
      </>
    )
  },
  args: {
    closeOnEsc: true,
    closeOutsideClick: true,
    shouldFitContent: false,
  },
}

export const CloseOnEsc = {
  ...Demo,
  args: {
    closeOnEsc: true,
  },
  parameters: {
    controls: {
      exclude: [
        'isOpen',
        'onClose',
        'shouldFitContent',
        'closeOutsideClick',
        'children',
      ],
    },
  },
}

export const CloseOnOutsideClick = {
  ...Demo,
  args: {
    closeOutsideClick: true,
  },
  parameters: {
    controls: {
      exclude: [
        'isOpen',
        'onClose',
        'shouldFitContent',
        'closeOnEsc',
        'children',
      ],
    },
  },
}

export default meta
