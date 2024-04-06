import './index.css'

const Images = props => {
  const {imageUrl, id, thumbnailUrl, updateBalance} = props

  const onClickDenomination = () => {
    console.log('hello')
    updateBalance(id)
  }

  return (
    <li className="denomination-item">
      <button onClick={onClickDenomination}>
        <img alt="thumbnailAltText" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default Images
