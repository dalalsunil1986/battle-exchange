import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { SearchBarWrapper, SearchBarInput } from './style'
import IconSearch from './icon-search'

function SearchBar({
  autoFocus,
  onFocus,
  onBlur,
  placeholder,
  onChange,
  onSubmit,
  site,
  open,
}) {
  const inputRef = useRef(null)

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      return onSubmit(event.target.value)
    }
  }

  const iconSearchSubmit = () => onSubmit(inputRef.current.value)

  return (
    <SearchBarWrapper site={site} open={open}>
      <SearchBarInput
        ref={inputRef}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        autoCorrect="off"
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        spellcheck="false"
        autocomplete="off"
        site={site}
      />
      <IconSearch onClick={iconSearchSubmit} />
    </SearchBarWrapper>
  )
}

SearchBar.defaultProps = {
  autoFocus: false,
  placeholder: 'Enter the site name...',
  onFocus: () => {},
  onBlur: () => {},
  onSubmit: () => {},
  open: false,
}

SearchBar.propTypes = {
  autoFocus: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  site: PropTypes.string,
  open: PropTypes.bool,
}
export default SearchBar
