/**
 * @class ExampleComponent
 */

import React from 'react'

// import styles from './styles.css'

export type Props = {
  text: string
}

// const ExampleComponent: React.FC<Props> = (props) => {
//   const { text } = props;

//   return (
//     <div>
//       Example Component: {text}
//     </div>
//   )
// }

export default class ExampleComponent extends React.Component<Props> {
  render() {
  const {
    text
  } = this.props

  return (
      <div>
        Example Component: {text}
      </div>
    )
  }
}

// export default ExampleComponent;