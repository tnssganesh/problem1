// Write your code here.
import './index.css'

const Images = props => {
  // FIX7: props in functional component should not be accessed with this
  const {imageUrl, id, thumbnailUrl, updateBalance} = props
  // FIX8: Variable declaration should consist of keyword const

  const onClickDenomination = () => {
    console.log('hello')
    updateBalance(id)
  }

  return (
    <li className="denomination-item">
      <button
        // FIX9: Functions in functional components should not be accessed with this
        onClick={onClickDenomination}
      >
        <img alt="iage" src={imageUrl} />
      </button>
    </li>
  )
}

export default Images
