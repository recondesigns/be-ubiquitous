import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'
import { Button } from '../../components'

/**
 *  Here is a descreption for the component.
 */
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['isOpen', 'onClose', 'children'],
    },
  },
}

/**
 *  Here is a descreption for the default story.
 */
export const Default: StoryObj<typeof Modal> = {
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
          <ModalHeader
            title="Modal title"
            onClose={() => setIsModalOpen(!isModalOpen)}
          />
          <ModalContent>
            <h3 style={{ fontFamily: 'sans-serif', margin: '0px 0px 8px 0px' }}>
              Heading level four
            </h3>
            <p style={{ fontFamily: 'sans-serif', margin: '0px 0px 4px 0px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio,
            </p>
          </ModalContent>
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

/**
 *  Here is a descreption for the closeOnEsc story.
 */
export const CloseOnEsc: StoryObj<typeof Modal> = {
  ...Default,
  args: {
    closeOnEsc: true,
  },
  parameters: {
    controls: {
      exclude: ['isOpen', 'onClose', 'shouldFitContent', 'closeOutsideClick'],
    },
  },
}

/**
 *  Here is a descreption for the closeOnOutsideClick story.
 */
export const CloseOnOutsideClick: StoryObj<typeof Modal> = {
  ...Default,
  args: {
    closeOutsideClick: true,
  },
  parameters: {
    controls: {
      exclude: ['isOpen', 'onClose', 'shouldFitContent', 'closeOnEsc'],
    },
  },
}

// export const FitContent: StoryObj<typeof Modal> = {
//   render: (args) => {
//     const [isModalOpen, setIsModalOpen] = React.useState(false)

//     return (
//       <>
//         <div
//           style={{
//             padding: "0px 0px 24px 0px",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Button onClick={() => setIsModalOpen(!isModalOpen)}>
//             {!isModalOpen ? "Open modal" : "Close modal"}
//           </Button>
//         </div>
//         <Modal {...args} isOpen={isModalOpen}>
//           <ModalHeader
//             title="Modal title"
//             onClose={() => setIsModalOpen(!isModalOpen)}
//           />
//           <ModalContent style={{ width: "280px" }}>
//             <h3 style={{ fontFamily: "sans-serif", margin: "0px 0px 8px 0px" }}>
//               Heading level four
//             </h3>
//             <p style={{ fontFamily: "sans-serif", margin: "0px 0px 4px 0px" }}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
//               mollitia, molestiae quas vel sint commodi repudiandae consequuntur
//               voluptatum laborum numquam blanditiis harum quisquam eius sed odit
//               fugiat iusto fuga praesentium optio,
//             </p>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   },
//   args: {
//     shouldFitContent: true,
//   },
//   parameters: {
//     controls: {
//       exclude: ["isOpen", "onClose", "closeOnEsc", "closeOutsideClick"],
//     },
//   },
// }

/**
 *  Here is a descreption for the footer story.
 */
export const Footer: StoryObj<typeof Modal> = {
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
          <ModalHeader
            title="Modal title"
            onClose={() => setIsModalOpen(!isModalOpen)}
          />
          <ModalContent>
            <h3 style={{ fontFamily: 'sans-serif', margin: '0px 0px 8px 0px' }}>
              Heading level four
            </h3>
            <p style={{ fontFamily: 'sans-serif', margin: '0px 0px 4px 0px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio,
            </p>
          </ModalContent>
          <ModalFooter
            actions={{
              primaryAction: {
                buttonLabel: 'Close modal',
                onclick: () => setIsModalOpen(!isModalOpen),
              },
            }}
          />
        </Modal>
      </>
    )
  },
  args: {
    closeOutsideClick: true,
  },
  parameters: {
    controls: {
      exclude: ['isOpen', 'onClose', 'shouldFitContent', 'closeOnEsc'],
    },
  },
}

export default meta
