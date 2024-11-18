import React from 'react'
import PropTypes from 'prop-types'

export default function ModeSwitcher(props) {
  return (
    <> 
      <div>
        <div className="form-check form-switch d-flex justify-content-end mode-switcher-top">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault" 
            onClick={props.toggleMode}
          />
          <label className={`form-check-label mx-3 ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">
            {props.mode} mode
          </label>
        </div>
      </div>
    </>
  )
}

ModeSwitcher.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};
